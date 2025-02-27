import fs from 'fs';

const separators: string = '===================';
const five: number = 5;
const title: string = `    Tabla del ${five}`;
const outputFile: string = `./outputs/tabla-${five}.txt`;
var outputMessage: string = '';
var headerMessage : string = `
    ${separators}
    ${title}
    ${separators}
\n`;

function multiplicate() {
    for (let index = 1; index < 11; index++) {
        outputMessage += `${five} X ${index} = ${five * index}\n`;
    }

    outputMessage = headerMessage + outputMessage;
    console.log(outputMessage);
    fs.writeFileSync(outputFile, outputMessage);
} 

multiplicate();