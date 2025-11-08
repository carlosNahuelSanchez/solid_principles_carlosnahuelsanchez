import type { IFlyingBird } from "../interfaces/IFlyingBird";

export class Sparrow implements IFlyingBird {

    public eat():void {
        console.log("El gorrion come")
    }

    public fly(): void {
        console.log("El gorrion vuela")
    }
    
}