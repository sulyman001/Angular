import { Category } from "./category"

export interface SubCategory {
    id?: number,
    name?: string,
    orderNum?: number,
    status?: string,
    minimum?: number,
    terms?: string,
    rate?: number,
    category?: Category
}