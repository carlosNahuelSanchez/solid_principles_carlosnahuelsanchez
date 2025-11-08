import { App } from "./classes/App";
import { SQLDatabase } from "./classes/SQLDatabase";

export const dipExample = () => {
    const app = new App(new SQLDatabase());
    app.connectDataBase();
};