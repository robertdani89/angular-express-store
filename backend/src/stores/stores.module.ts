import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from './store.scema';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Stores', schema: StoreSchema }])],
    controllers: [StoresController],
    providers: [StoresService],
})
export class StoresModule { }
