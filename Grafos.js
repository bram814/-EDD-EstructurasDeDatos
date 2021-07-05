// lista = []
// lista.push({dato:"Hola", arista:{p:1,d:2}})
// console.log(lista)

const Anchura = require('./Modelo/RecorridoGrafo/Anchura.js');
var anchura = new Anchura();
anchura.insertar("D","B",1);
anchura.insertar("D","C",2);
anchura.insertar("B","H",4);
anchura.insertar("H","D",3);
anchura.insertar("C","R",5);
anchura.insertar("R","H",6);
anchura.insertar("H","A",7);
anchura.insertar("H","T",8);
anchura.insertar("T",null,null);
anchura.insertar("A",null,null);
// -----------------------------------
// Muestra como se componene el grafo.
// -----------------------------------
// console.log(anchura.listaVertice[0].vertice)
// console.log(anchura.listaVertice[0].arista)
// console.log("dato")
// console.log(anchura.listaVertice[0].arista.dato)
// console.log(anchura.listaVertice[0].arista.adyacente[0].dato)
// console.log("-----------------------------")
// console.log(anchura.listaVertice.length)
// console.log(anchura.listaVertice)
// --------------------------------------
// Muestra los apuntadores de cada grafo.
// --------------------------------------
console.log(anchura.print())
console.log("---------------------------------------------")
console.log(anchura.anchura())