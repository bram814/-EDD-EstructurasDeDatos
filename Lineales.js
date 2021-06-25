// ----------------------------------------------------------- LISTA SIMPLE -----------------------------------------------------------
console.log("\t\t\tLista Simple")
const ListaSimple = require('./Modelo/Lineales/ListaSimple/ListaSimple.js');
var listaSimple = new ListaSimple();

listaSimple.insertar(1);
listaSimple.insertar(2);
listaSimple.insertar(3);
listaSimple.insertar(4);
listaSimple.insertar(5);
listaSimple.insertar(6);
listaSimple.mostrar();

console.log("---------------------------")
console.log("UPDATE")
listaSimple.update(2,22);
listaSimple.update(6,66);
listaSimple.mostrar()

console.log("---------------------------")
console.log("SEARCH")
listaSimple.search(2);
listaSimple.search(22);
console.log("INSERTAR -> INICIO Y FIN")
listaSimple.insertar_inicio(1000)
listaSimple.insertar_ultimo(2000)
listaSimple.mostrar()
console.log("---------------------------")
console.log("ELIMINANDO")
listaSimple.eliminar(1);
listaSimple.eliminar(2);
listaSimple.eliminar(3);
listaSimple.eliminar(4);
listaSimple.eliminar(5);
listaSimple.eliminar(6);
listaSimple.eliminar(22);
listaSimple.eliminar(66);
listaSimple.eliminar(66);
listaSimple.mostrar();
console.log("---")

// ----------------------------------------------------------- LISTA DOBLE -----------------------------------------------------------
console.log("\t\t\tLista Doble")
const ListaDoble = require('./Modelo/Lineales/ListaDoble/ListaDoble');
var listaDoble = new ListaDoble();

listaDoble.insertar(1);
listaDoble.insertar(2);
listaDoble.insertar(3);
listaDoble.insertar(4);
listaDoble.insertar(5);
listaDoble.insertar(6);
listaDoble.print()
console.log("SEARCH")
listaDoble.search(7)
listaDoble.search(6)
console.log("ELIMINAR")
listaDoble.eliminar(3)
listaDoble.print()
console.log("comprobacion")
if(listaDoble.vacia()== false){
    console.log(listaDoble.get_primero().get_siguiente())
    console.log(listaDoble.get_primero().get_anterior())
    console.log(listaDoble.get_ultimo().get_anterior())
    console.log(listaDoble.get_ultimo().get_siguiente())
}
console.log("INSERTAR -> INICIO Y FIN")
listaDoble.insertar_inicio(1000)
listaDoble.insertar_ultimo(2000)
listaDoble.print()

// ----------------------------------------------------------- LISTA CIRCULAR SIMPLE -----------------------------------------------------------
console.log("\t\t\tLista Circular Simple")
const ListaCircular = require('./Modelo/Lineales/ListaCircular/ListaCircular');
var listaCircularSimple = new ListaCircular();

listaCircularSimple.insertar(1);
listaCircularSimple.insertar(2);
listaCircularSimple.insertar(3);
listaCircularSimple.insertar(4);
listaCircularSimple.insertar(5);
listaCircularSimple.insertar(6);
listaCircularSimple.print()
console.log("ELIMINAR")
listaCircularSimple.eliminar(4)
listaCircularSimple.eliminar(4)
listaCircularSimple.eliminar(5)
listaCircularSimple.print()
console.log("INSERTAR -> INICIO Y FIN")
listaCircularSimple.insertar_inicio(1000)
listaCircularSimple.insertar_ultimo(2000)
listaCircularSimple.print()
console.log("Buscar")
listaCircularSimple.search(1000)
listaCircularSimple.search(200)
console.log("Actualizar")
listaCircularSimple.print()
listaCircularSimple.update(1000,200)
listaCircularSimple.print()

// ----------------------------------------------------------- LISTA CIRCULAR DOBLE -----------------------------------------------------------
console.log("\t\t\tLista Circular Doble")
const ListaCircularDoble = require('./Modelo/Lineales/ListaCircularDoble/ListaCircularDoble.js');
var listaCircularDoble = new ListaCircularDoble();

listaCircularDoble.insertar(1);
listaCircularDoble.insertar(2);
listaCircularDoble.insertar(3);
listaCircularDoble.insertar(4);
listaCircularDoble.insertar(5);
listaCircularDoble.insertar(6);
listaCircularDoble.print()
console.log("ELIMINAR")
listaCircularDoble.eliminar(4)
listaCircularDoble.eliminar(5)
listaCircularDoble.print()
console.log("INSERTAR -> INICIO Y FIN")
listaCircularDoble.insertar_inicio(1000)
listaCircularDoble.insertar_ultimo(2000)
listaCircularDoble.print()
console.log("Buscar")
listaCircularDoble.search(1000)
listaCircularDoble.search(200)
console.log("Actualizar")
listaCircularDoble.print()
listaCircularDoble.update(1000,200)
listaCircularDoble.print()

// ----------------------------------------------------------- PILA -----------------------------------------------------------
console.log("\t\t\tPila")
const Pila = require('./Modelo/Lineales/Pila/Pila');
var listaPila = new Pila();
listaPila.push(1)
listaPila.push(2)
listaPila.push(3)
listaPila.push(4)
listaPila.push(5)
listaPila.push(6)
listaPila.print()
console.log("Eliminando -> POP")
listaPila.pop()
listaPila.print()
console.log("UPDATE")
listaPila.update(10,2000)
listaPila.print()
listaPila.update(1,1000)
listaPila.print()
console.log("SEARCH")
listaPila.search(1)
listaPila.search(1000)


// ----------------------------------------------------------- Cola -----------------------------------------------------------
console.log("\t\t\tCola")
const Cola = require('./Modelo/Lineales/Cola/Cola.js');
var listaCola = new Cola();
listaCola.encolar(1)
listaCola.encolar(2)
listaCola.encolar(3)
listaCola.encolar(4)
listaCola.encolar(5)
listaCola.encolar(6)
listaCola.print()
console.log("Eliminando -> desencolar")
listaCola.desencolar()
listaCola.print()
console.log("UPDATE")
listaCola.update(3,2000)
listaCola.print()
listaCola.update(2,1000)
listaCola.print()
console.log("SEARCH")
listaCola.search(1)
listaCola.search(1000)

