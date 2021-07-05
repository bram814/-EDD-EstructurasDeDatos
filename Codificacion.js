// -------
// HAMMING
// -------
// const Hamming = require('./Modelo/Codificacion/Hamming/Hamming.js');
// var hamming = new Hamming();
// hamming.encode("0110101");
// hamming.encode("0110");

// -------
// FEISTEL
// -------

const Feistel = require('./Modelo/Codificacion/Feistel/Feistel.js');
var feistel = new Feistel();

// -----------------------
// CONVERTIDOR DE BINARIO
// -----------------------
console.log(feistel.toBinario(1))
console.log(feistel.toBinario("101010"))
console.log(feistel.toBinario(12))
console.log(feistel.toBinario(300.89))
console.log(feistel.toASCII("H"))

console.log('==============================================');
feistel.encode("CF","00110001",4)
// feistel.encode("CFPR","00110001",4)
console.log('==============================================');
// console.log(feistel.tabla);





