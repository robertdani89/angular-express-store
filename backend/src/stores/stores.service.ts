import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { StoreDto } from './store.dto';
import { Store } from './store.scema';

@Injectable()
export class StoresService {
    constructor(@InjectModel('Stores') private shiftModel: Model<Store>) { }

    async findAll(
        filter = {} as FilterQuery<any>,
        projection = {} as any,
        options = {} as QueryOptions,
    ): Promise<Store[]> {
        try {
            return await this.shiftModel.find(filter, projection, options);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findOne(filter = {} as FilterQuery<any>): Promise<Store> {
        try {
            return await this.shiftModel.findOne(filter);
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateOne(record: Store, dto: StoreDto): Promise<Store> {
        try {
            record.set(dto);
            return await record.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async remove(record: Store): Promise<Store> {
        try {
            return await record.remove();
        } catch (error) {
            throw new Error(error);
        }
    }

}
