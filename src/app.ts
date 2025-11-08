import { srpExample } from './01-single-responsibility-principle';
import { ocpExample } from './02-open-closed-principle';
import { lspExample } from './03-liskov-substitution-principle';
import { ispExample } from './04-interface-segregation-principle';
import { dipExample } from './05-dependency-inversion-principle';

const principle = process.argv[2];

const runAll = () => {
    console.log('--- Principio de Responsabilidad Única ---');
    srpExample();
    console.log('\n--- Principio de Abierto/Cerrado ---');
    ocpExample();
    console.log('\n--- Principio de Sustitución de Liskov ---');
    lspExample();
    console.log('\n--- Principio de Segregación de Interfaces ---');
    ispExample();
    console.log('\n--- Principio de Inversión de Dependencias ---');
    dipExample();
}

if (!principle) {
    runAll();
} else {
    switch (principle) {
        case 'srp':
            console.log('--- Principio de Responsabilidad Única ---');
            srpExample();
            break;
        case 'ocp':
            console.log('--- Principio de Abierto/Cerrado ---');
            ocpExample();
            break;
        case 'lsp':
            console.log('--- Principio de Sustitución de Liskov ---');
            lspExample();
            break;
        case 'isp':
            console.log('--- Principio de Segregación de Interfaces ---');
            ispExample();
            break;
        case 'dip':
            console.log('--- Principio de Inversión de Dependencias ---');
            dipExample();
            break;
        default:
            console.log('Principio inválido. Ejecutando todos los principios.');
            runAll();
            break;
    }
}