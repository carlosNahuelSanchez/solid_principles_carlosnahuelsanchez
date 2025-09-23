import { IDiscount } from "../interfaces/IDiscount";

export class VipDiscount implements IDiscount{

    type: string;

    constructor(){
        this.type = "VIP"
    }
    
    getDiscount() {
        console.log(`Siendo el tipo ${this.type}, se le aplicara un descuento del %20`)
    }
}