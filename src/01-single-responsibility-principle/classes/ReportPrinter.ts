import { BodyReport } from "./Report";

export class ReportPrinter{

    constructor(private report:BodyReport){}

    printReport() {
        console.log(`Imprimiendo reporte: Titulo: ${this.report.title}, Contenido: ${this.report.content}`);
    }
}

