import { Category } from "./category";
import { Price } from "./price";

export interface Product {
    id: string;
    title: string;
    description: string;
    issueDate: string; 
    thumbnail: string;
    stock: number;
    rating: number;
    brand: string;
    warranty: number;
    images: string[];

    price: Price;
    category: Category;
}
