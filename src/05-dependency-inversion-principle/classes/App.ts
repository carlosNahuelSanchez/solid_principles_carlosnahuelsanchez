export class App {
    private database: IDatabase;

    constructor(database: IDatabase) {
        this.database = database;
    }

    connectDataBase(): void {
        this.database.connect();
    }
}
