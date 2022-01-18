import { Document, Schema } from 'mongoose';

export class Rating extends Document {
    user: string;
    rating: number;
    comment: string;
}

export class Store extends Document {
    name: string;
    address: string;
    telephone: string;
    keywords: string[];
    ratings: Rating[];
}

export const StoreSchema = new Schema({
    name: { type: String },
    address: { type: String },
    telephone: { type: String },
    keywords: { type: [String] },
    ratings: { type: [Object] },
});