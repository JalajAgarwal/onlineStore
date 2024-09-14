import { ProductCategory } from "./productCategory";

export interface ProductConfig {
    type: ProductCategory,
    retailPrice: number,
    currentPrice: number,
    quatityAvailable: number,
    minOrderQuantity?: number,
    description: string,
    title: string,
}