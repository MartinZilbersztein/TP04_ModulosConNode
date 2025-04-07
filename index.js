/*const ej1 = require('./src/modules/ej01.js');

console.log(ej1.concatenar("hola", "chay"))*/

/*const ej2 = require('./src/modules/matematica.js');
console.log(ej2.sumar(1,2));
console.log(ej2.restar(1,2));
console.log(ej2.multiplicar(1,2));
console.log(ej2.dividir(1,2));
console.log(ej2.sumar(ej2.pi,2));*/

/*const ej3 = require('./src/modules/alumno.js');
const objeto1 = new ej3.Alumno("Juancito", 22558841);
console.log(objeto1.nombre + " " + objeto1.dni);
const objeto2 = new ej3.Alumno("Pepe", 878668);
console.log(objeto2.nombre + " " + objeto2.dni);*/

/*const ej4 = require('./src/modules/copiar.js');
ej4.copiar("./archivo.txt", "./hola.txt");*/

const ej5 = require('./src/modules/parsearURL.js');
/*let objeto = ej5.stringIsAValidUrl('https://s.sjk');
for (const element in objeto){
    console.log(element + " " + objeto[element]);
}*/

const urlEjemplo = 'sasa';
const objeto = ej5.parsearURL(urlEjemplo);
console.log(objeto);

/*u
const ej7 = require('./src/modules/retornarmoneda.js');
console.log(ej7.retornarMoneda('Argentina'));*/