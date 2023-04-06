import { Type_product } from "./Type_product";

export class Product{
    id?:number;
    product_name?:string;
    price?:number;
    size_product?:number;
    reference?:string;
    quantity?:number;
    count_order?:number;
    description?:string;
    image?:string;
    autoFillQuantity?:number;
    autoFillThreshold?:number;
    type_product?:Type_product;

}