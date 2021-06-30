
const MatrizDispersa = require('./Modelo/EstructurasCompuestas/MatrizDispersa/MatrizOrtogonal.js');
var matrizDispersa = new MatrizDispersa();


for(var x=1;x<4;x++){
	for(var y=1;y<4;y++){
		let dato = String(x)+String(y)+"Dato"
		matrizDispersa.insertar(x,y,dato)
	}
}
console.log("MOSTRAR TODA LA MATRIZ")
matrizDispersa.print()

console.log("Verificando que se actualicen los nodos")
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDato()) // 1,1
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getDato()) // 1,2
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getAbajo().getDato()) // 2,2
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getAbajo().getDerecha().getDato()) // 2,3
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getAbajo().getIzquierda().getDato()) // 2,2
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getAbajo().getDerecha().getAbajo().getDato())	//3,3

console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getAbajo().getDerecha().getAbajo().getIzquierda().getDato()) // 3,2
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getAbajo().getDerecha().getAbajo().getIzquierda().getArriba().getDato()) // 2,2
console.log(matrizDispersa.getFila().getPrimero().getFila().getPrimero().getDerecha().getAbajo().getDerecha().getAbajo().getIzquierda().getArriba().getArriba().getDato()) //1,2

console.log("\t\tSEARCH")
matrizDispersa.search("23Dato")
console.log("\t\tUPDATE")
matrizDispersa.update("23Dato","cambio")
matrizDispersa.search("23Dato")
matrizDispersa.search("cambio")