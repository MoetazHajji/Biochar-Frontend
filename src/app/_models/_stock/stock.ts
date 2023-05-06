import { Type_product } from "./Type_product";

export class Stock{
    id?:number;
    nbProduct?:number;
    unit?:string;
    total_quantity?:number;
    storage?:number;
    free_storage?:number;
    used_storage?:number;
    date?:Date;
    location?:string;
    type_product?:Type_product
    
}