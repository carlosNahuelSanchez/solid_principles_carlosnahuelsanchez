import { ReportPrinter } from "./classes/ReportPrinter";
import { ReportSaver } from "./classes/ReportSaver";
import { BodyReport } from "./classes/Report";

const report = new BodyReport("Reporte Titulo", "Reporte Descripcion")

const printedReport = new ReportPrinter(report)
printedReport.printReport()

const savedReport = new ReportSaver(report)
savedReport.saveToFile()