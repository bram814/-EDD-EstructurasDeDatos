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

// const Feistel = require('./Modelo/Codificacion/Feistel/Feistel.js');
// var feistel = new Feistel();

// -----------------------
// CONVERTIDOR DE BINARIO
// -----------------------
// console.log(feistel.toBinario(1))
// console.log(feistel.toBinario("101010"))
// console.log(feistel.toBinario(12))
// console.log(feistel.toBinario(300.89))
// console.log(feistel.toASCII("H"))

// console.log('==============================================');
// feistel.encode("CF","00110001",4)
// feistel.encode("CFPR","00110001",4)
// console.log('==============================================');
// console.log(feistel.tabla);



const LZW = require('./Modelo/Codificacion/LZW/LZW.js');
var lzw = new LZW();


// ------------------------------------
// 		    METODO UNO DE LZW
// ------------------------------------
// let cadena = "PABLO PAPA DE PABLITO"
// var variable = lzw.lzw_encode(cadena)
// console.log(variable)
// var dencode = lzw.lzw_decode("")
// console.log(dencode)


// ------------------------------------
// 		    METODO DOS DE LZW
// // ------------------------------------
let cadena = "PABLO PAPA DE PABLITO"
let decode = lzw.encode(cadena,100)
console.log(decode)
console.log(lzw.decode(decode,100))




