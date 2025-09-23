import { IDiscount } from "../interfaces/IDiscount";

export class RegularDiscount implements IDiscount{

    type: string;

    constructor(){
        this.type = "Regular"
    }
    
    getDiscount() {
        console.log(`Siendo el tipo ${this.type}, se le aplicara un descuento del %10`)
    }
}