import { PrinterMachine } from "./classes/PrinterMachine";
import { ScannerMachine } from "./classes/ScannerMachine";
import { FaxMachine } from "./classes/FaxMachine";
import { MultiTaskMachine } from "./classes/MultiTaskMachine";

export const ispExample = () => {
    const printer = new PrinterMachine();
    printer.print();

    const scanner = new ScannerMachine();
    scanner.scan();

    const fax = new FaxMachine();
    fax.fax();

    const multiTaskMachine = new MultiTaskMachine();
    multiTaskMachine.fax();
    multiTaskMachine.print();
    multiTaskMachine.scan();
};