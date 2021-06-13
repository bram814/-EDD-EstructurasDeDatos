// ----------------------------------------------------------- LISTA SIMPLE -----------------------------------------------------------
// console.log("Lista Simple")
// const ListaSimple = require('./Modelo/Lineales/ListaSimple/ListaSimple.js');
// var listaS = new ListaSimple();

// listaS.insertar(1);
// listaS.insertar(2);
// listaS.insertar(3);
// listaS.insertar(4);
// listaS.insertar(5);
// listaS.insertar(6);
// listaS.mostrar();

// console.log("---------------------------")
// console.log("UPDATE")
// listaS.update(2,22);
// listaS.update(6,66);
// listaS.mostrar()

// console.log("---------------------------")
// console.log("SEARCH")
// listaS.search(2);
// listaS.search(22);
// console.log("INSERTAR -> INICIO Y FIN")
// listaS.insertar_inicio(1000)
// listaS.insertar_ultimo(2000)
// listaS.mostrar()
// console.log("---------------------------")
// console.log("ELIMINANDO")
// listaS.eliminar(1);
// listaS.eliminar(2);
// listaS.eliminar(3);
// listaS.eliminar(4);
// listaS.eliminar(5);
// listaS.eliminar(6);
// listaS.eliminar(22);
// listaS.eliminar(66);
// listaS.eliminar(66);
// listaS.mostrar();
// console.log("---")
// try {   
//     if (listaS.get_vacia() == true){
//         console.log("vacia")
//     }else{
//         console.log(listaS.get_cabeza().get_dato())
//         console.log(listaS.get_ultimo().get_dato())
//     }
// } catch (error) {
//     console.log(error)
    
// }



// ----------------------------------------------------------- LISTA DOBLE -----------------------------------------------------------
console.log("Lista Doble")
const ListaDoble = require('./Modelo/Lineales/ListaDoble/ListaDoble');
var listaS = new ListaDoble();

listaS.insertar(1);
listaS.insertar(2);
listaS.insertar(3);
listaS.insertar(4);
listaS.insertar(5);
listaS.insertar(6);
listaS.print()
// console.log("SEARCH")
// listaS.search(7)
// listaS.search(6)
console.log("ELIMINAR")
listaS.eliminar(3)
listaS.print()
console.log("comprobacion")
// if(listaS.vacia()== false){
//     console.log(listaS.get_primero().get_siguiente())
//     console.log(listaS.get_primero().get_anterior())
//     console.log(listaS.get_ultimo().get_anterior())
//     console.log(listaS.get_ultimo().get_siguiente())
// }

// ----------------------------- LISTA CIRCULAR -----------------------------
// console.log("Lista Circular")
// const ListaCircular = require('./Modelo/Lineales/ListaCircular/ListaCircular');
// var listaS = new ListaCircular();

// listaS.insertar(1);
// listaS.insertar(2);
// listaS.insertar(3);
// listaS.insertar(4);
// listaS.insertar(5);
// listaS.insertar(6);
// listaS.print()






