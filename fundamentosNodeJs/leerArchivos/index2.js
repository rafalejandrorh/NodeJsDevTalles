const fs = require('fs');

const content = fs.readFileSync('./fundamentosNodeJs/leerArchivos/README.md', 'utf-8');
console.log(content);

const wordCount = content.split(' ');
console.log('Palabras: ', wordCount.length);

const regexpReact = /React/ig;

// Forma #1 (Desarrollada por mi)
let reactWordCount = 0;
for (let index = 0; index < wordCount.length; index++) {
    const element = wordCount[index];
    
    if(regexpReact.test(element)) {
        reactWordCount++;
    }
}
console.log('Palabras React #1: ', reactWordCount);


// Forma #2 (Alternativas)
const reactWordCount2 = wordCount.filter((word) => word.toLowerCase() === 'react').length;
console.log('Palabras React #2: ', reactWordCount2);

const reactWordCount3 = wordCount.filter((word) => word.toLowerCase().includes('react')).length;
console.log('Palabras React #3: ', reactWordCount3);


// Forma #3 (Ideal)
const reactWordCount4 = content.match(regexpReact ?? []).length;
console.log('Palabras React #4: ', reactWordCount4);
