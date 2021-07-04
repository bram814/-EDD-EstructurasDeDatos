// ----------------------------------------------------------- METODO DE BURBUJA -----------------------------------------------------------
console.log("\t\t\t"+"METODO BURBUJA")
const Burbuja = require('./Modelo/Ordenamientos/Burbuja');
var orBurbuja = new Burbuja();
var datoBurbuja = [5,8,2,6,9,3,1,4,0,7];

var i = 0;
while(i < datoBurbuja.length){
	orBurbuja.insertar(datoBurbuja[i]);
 	i++;
}

i = 0;

while(i<orBurbuja.array.length){
 	console.log(orBurbuja.array[i])
 	i ++;
}

console.log('ORDENAMIENTO BURBUJA');
orBurbuja.ordenamiento_burbuja();
i = 0;
while(i<orBurbuja.array.length){
    console.log(orBurbuja.array[i])
    i ++;
}

// ----------------------------------------------------------- METODO DE INSERCION -----------------------------------------------------------
console.log("\t\t\t"+"METODO INSERCION")
const Insercion = require('./Modelo/Ordenamientos/Insercion.js');
var orinsercion = new Insercion();
var datoInsercion = [5,8,2,6,9,3,1,4,0,7];

var i = 0;
while(i < datoInsercion.length){
    orinsercion.insertar(datoInsercion[i]);
    i++;
}

i = 0;
while(i<orinsercion.array.length){
    console.log(orinsercion.array[i])
    i ++;
}

console.log('ORDENAMIENTO INSERCION');
orinsercion.ordenamiento_insercion();
i = 0;
while(i<orinsercion.array.length){
    console.log(orinsercion.array[i])
    i ++;
}

// ----------------------------------------------------------- METODO DE SELECCION -----------------------------------------------------------                               
console.log("\t\t\t"+"METODO SELECCION")
const Seleccion = require('./Modelo/Ordenamientos/Seleccion.js');
var orSeleccion = new Seleccion();
var datoSeleccion = [5,8,2,6,9,3,1,4,0,7];

var i = 0;
while(i < datoSeleccion.length){
    orSeleccion.insertar(datoSeleccion[i]);
    i++;
}

i = 0;
while(i<orSeleccion.array.length){
    console.log(orSeleccion.array[i])
    i ++;
}


console.log('ORDENAMIENTO SELECCION');
orSeleccion.ordenamiento_seleccion();
i = 0;
while(i<orSeleccion.array.length){
    console.log(orSeleccion.array[i])
    i ++;
}

// ----------------------------------------------------------- METODO RAPIDO -----------------------------------------------------------                                
console.log("\t\t\t"+"METODO RAPIDO")
const Rapido = require('./Modelo/Ordenamientos/Rapido.js');
var orRapido = new Rapido();
// var datoRapido = [5,8,2,6,9,3,1,4,0,7];
var datoRapido = [17, 10, 12, 7, 11];

var i = 0;
while(i < datoRapido.length){
    orRapido.insertar(datoRapido[i]);
    i++;
}

i = 0;
while(i<orRapido.array.length){
    console.log(orRapido.array[i])
    i ++;
}

console.log('ORDENAMIENTO RAPIDO');
orRapido.quicksort(0,orRapido.array.length - 1);
i = 0;
while(i<orRapido.array.length){
    console.log(orRapido.array[i])
    i ++;
}