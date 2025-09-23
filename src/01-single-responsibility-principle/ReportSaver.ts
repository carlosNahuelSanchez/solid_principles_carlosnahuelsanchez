import { BodyReport } from "./Report";

export class ReportSaver {

    constructor(public report: BodyReport) {}

    saveToFile() {
        console.log(`Guardando el siguiente reporte ${this.report.title}`)
    }
}