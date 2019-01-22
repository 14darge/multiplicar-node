//requireds

//const fs = require("fs"); //paquete nativo
//const fs = require('express'); paquetes no nativos
//const fs = require('./fs'); paquetes creados por nosotros

//const multiplicar = require("./multiplicar/multiplicar");
//usando destructuracion
const argv = require("./config/yargs").argv;
const colors = require("colors/safe");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;

  case "crear": 
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
      .catch(e => console.log(e));
    break;

  default:
    console.log("Comando no reconocido");
}

//Tomar el parametro desde el script
//let base = '5';
//Tomar el parametro desde consola
//process es una funcion nativa de node
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];
/*

crearArchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))
  .catch(e => console.log(e));

/*
let data = "";

for (let i = 1; i <= 10; i++) {
  data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/
