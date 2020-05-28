import {ICategory} from "./category"

export interface IProduct{
    _id: string;
    img: string;
    name: string;
    description: string;
    price:number;
    category: ICategory[];
}