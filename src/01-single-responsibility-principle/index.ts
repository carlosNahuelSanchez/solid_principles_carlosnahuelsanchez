import { ReportPrinter } from "./ReportPrinter";
import { ReportSaver } from "./ReportSaver";
import { BodyReport } from "./Report";

const report = new BodyReport("Reporte Titulo", "Reporte Descripcion")

const printedReport = new ReportPrinter(report)
printedReport.printReport()

const savedReport = new ReportSaver(report)
savedReport.saveToFile()