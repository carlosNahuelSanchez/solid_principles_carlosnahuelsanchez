import { Penguin } from "./classes/Penguin";
import { Sparrow } from "./classes/Sparrow";

export const lspExample = () => {
    const sparrow = new Sparrow();
    sparrow.eat();
    sparrow.fly();

    const penguin = new Penguin();
    penguin.eat();
};
