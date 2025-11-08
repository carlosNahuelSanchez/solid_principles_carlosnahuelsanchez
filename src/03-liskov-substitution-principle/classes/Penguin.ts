import { IBird } from '../interfaces/IBird';

export class Penguin implements IBird {

    public eat():void {
        console.log("El pinguino come")
    }

}