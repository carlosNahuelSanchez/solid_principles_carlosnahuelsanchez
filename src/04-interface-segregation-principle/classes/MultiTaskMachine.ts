import { FaxMachine } from "./FaxMachine";
import { PrinterMachine } from "./PrinterMachine";
import { ScannerMachine } from "./ScannerMachine";

export class MultiTaskMachine implements FaxMachine, PrinterMachine, ScannerMachine {
    fax(): void {
        console.log("Enviando por fax el documento desde la máquina multitarea...");
    }

    print(): void {
        console.log("Imprimiendo el documento desde la máquina multitarea...");
    }

    scan(): void {
        console.log("Escaneando el documento desde la máquina multitarea...");
    }
}