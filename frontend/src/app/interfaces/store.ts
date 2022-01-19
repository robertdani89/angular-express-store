export interface Store {
    _id: string,
    name: string;
    address: string;
    telephone: string;
    photo: string;
    keywords: string[];
    ratings: Rating[];
}

export interface Rating {
    user: string;
    rating: number;
    comment: string;
    time?: Date;
}