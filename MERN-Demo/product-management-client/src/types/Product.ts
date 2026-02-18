import type { Category } from "./Category"

export interface Product {
    _id: string
    name: string
    brand: string
    price: number
    category: Category
    createdAt: string
    updatedAt: string
}

// creates a new type using everything from Product EXCEPT id, createdAt, and updatedAt
export type CreateProductRequest = Omit<
    Product, 
    '_id' | 'createdAt' | 'updatedAt'
>