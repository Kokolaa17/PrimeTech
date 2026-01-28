import { Product } from "./product";

export interface Products {
    total: number,
    limit: number,
    page: number,
    skip: number,
    products: Product[]
}
