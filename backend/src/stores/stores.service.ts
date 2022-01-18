import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { BadRequestError, MongooseError } from 'src/common/errors';
import { RatingDto, StoreDto } from './store.dto';
import { Rating, Store } from './store.scema';

@Injectable()
export class StoresService {
    constructor(@InjectModel('Stores') private storeModel: Model<Store>) { }

    async findAll(
        filter = {} as FilterQuery<any>,
        projection = {} as any,
        options = {} as QueryOptions,
    ): Promise<Store[]> {
        try {
            return await this.storeModel.find(filter, projection, options);
        } catch (error) {
            throw new MongooseError(error);
        }
    }

    async findOne(filter = {} as FilterQuery<any>): Promise<Store> {
        try {
            return await this.storeModel.findOne(filter);
        } catch (error) {
            throw new MongooseError(error);
        }
    }

    async create(dto: StoreDto): Promise<Store> {
        try {
            return await this.storeModel.create(dto);
        } catch (error) {
            throw new MongooseError(error);
        }
    }

    async updateOne(record: Store, dto: StoreDto): Promise<Store> {
        try {
            record.set(dto);
            return await record.save();
        } catch (error) {
            throw new MongooseError(error);
        }
    }

    async remove(record: Store): Promise<Store> {
        try {
            return await record.remove();
        } catch (error) {
            throw new MongooseError(error);
        }
    }

    async createComment(id: string, dto: RatingDto): Promise<Store> {
        const record = await this.findOne({ _id: id });
        if (!record) throw new BadRequestError();
        try {
            record.ratings.push(dto as Rating)
            return await record.save()
        } catch (error) {
            throw new MongooseError(error);
        }
    }
}
