import { IReport } from "./IReport";

export class BodyReport implements IReport {

    title: string
    content: string;

    constructor(title:string, content:string) { 
        this.title = title
        this.content = content
    }
}