const fs = require('fs');

const dataReadme = fs.readFileSync('./fundamentosNodeJs/leerArchivos/README.md', 'utf-8');
console.log(dataReadme);

const newData = dataReadme.replace(/React/ig, 'Angular');
fs.writeFileSync('./fundamentosNodeJs/leerArchivos/README-ANGULAR.md', newData);

const dataReadmeAngular = fs.readFileSync('./fundamentosNodeJs/leerArchivos/README-ANGULAR.md', 'utf-8')
console.log(dataReadmeAngular);
