import { IDiscount } from "../interfaces/IDiscount";

export class StudentDiscount implements IDiscount{

    type: string;

    constructor(){
        this.type = "Student"
    }
    
    getDiscount() {
        console.log(`Siendo el tipo ${this.type}, se le aplicara un descuento del %15`)
    }
}