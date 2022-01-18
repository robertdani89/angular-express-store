import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from 'src/stores/store.scema';
import { storeSeed } from './store.seed';

@Injectable()
export class SeedService {
    constructor(@InjectModel('Stores') private storeModel: Model<Store>) { }


    onModuleInit() {
        this.seedAll();
    }

    async seedAll(removeAll = false) {
        if (removeAll) {
            await this.storeModel.collection.drop();
        }

        this.seedStores(storeSeed);
    }


    private async seedStores(seedData: any[]) {
        const docs = await this.storeModel.countDocuments();
        if (docs == 0) {
            for (let i = 0; i < seedData.length; i++) {
                await this.storeModel.create(seedData[i]);
            }
        }
    }
}
