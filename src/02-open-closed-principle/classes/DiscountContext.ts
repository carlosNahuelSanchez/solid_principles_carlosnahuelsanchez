import { IDiscount } from "../interfaces/IDiscount";

export class DiscountContext {

    constructor(private discount:IDiscount) {}

    applyDiscount(){
        return this.discount.getDiscount()
    }
}