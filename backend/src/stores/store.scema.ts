import { Document, Schema } from 'mongoose';

export class Rating extends Document {
    user: string;
    rating: number;
    comment: string;
    time: Date;
}

export class Store extends Document {
    name: string;
    address: string;
    telephone: string;
    photo: string; 
    keywords: string[];
    ratings: Rating[];
}

export const StoreSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    telephone: { type: String },
    photo: { type: String, required: true },
    keywords: { type: [String] },
    ratings: {
        type: [{
            user: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
            time: { type: Date, required: true, default: Date.now },
        }]
    },
});