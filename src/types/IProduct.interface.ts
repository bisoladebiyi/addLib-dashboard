export interface IProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
    rating: {
        rate: number;
    };
};