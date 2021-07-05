// import Vertice from './Vertice.js';
const Vertice = require('./Vertice.js')

class Anchura{

	constructor(){
		this.listaVertice = [];
		this.dirigido = true; // Si es falso es un grafo no dirigido
		this.nivel = 0;
		this.estado = false;
	}


	insertar(dato, arista, distancia){ //la arista es a la que se dirige.

		let nodo_nuevo = new Vertice(dato);
		let temp = this.search(dato);
		if(temp==null){
			nodo_nuevo.adyacente.push({dato:arista, recorrido:distancia});
			this.getListaVertice().push({vertice:dato, arista:nodo_nuevo, nivel:this.nivel, visitado:this.estado});
			this.nivel++;
		}else{
			
			var i = 0;
			while(i<temp.arista.adyacente.length){
				if(temp.arista.adyacente[i].dato==arista){
					temp.arista.adyacente[i].recorrido = distancia; 
				}else{
					temp.arista.adyacente.push({dato:arista, recorrido:distancia})
				}
				i++;
			}
		}
	}

	print = () => {
		var i = 0;
		while(i<this.listaVertice.length){
			let datoVertice = this.listaVertice[i].vertice;
			var j = 0;
			while(j<this.listaVertice[i].arista.adyacente.length){
				let datoArista = this.listaVertice[i].arista.adyacente[j].dato
				let recorrido = this.listaVertice[i].arista.adyacente[j].recorrido
				if(datoArista == null){
					console.log(datoVertice + "->" +"Final")
				}else{
					console.log(datoVertice + "->" + datoArista + " Recorrido: " + recorrido + " Nivel: " +this.listaVertice[i].nivel + " " +this.listaVertice[i].visitado)
				}
				j++;
			}

			i++
		}
	}

	anchura = () => {
		var i = 0;
		while(i<this.listaVertice.length){
			let datoVertice = this.listaVertice[i].vertice;
			var j = 0;
			while(j<this.listaVertice[i].arista.adyacente.length){
				let datoArista = this.listaVertice[i].arista.adyacente[j].dato
				let recorrido = this.listaVertice[i].arista.adyacente[j].recorrido
				let aux = this.search(datoArista);
				// console.log(aux.visitado)
				if(aux!=null){
					if(aux.visitado==false && aux!=null){
					if(datoArista == null){
						console.log(datoVertice + "->" +"Final")
					}else{
						console.log(datoVertice + "->" + datoArista + " Recorrido: " + recorrido + " Nivel: " +this.listaVertice[i].nivel)
					}
				}
				}
				
					
				j++;
			}
			this.listaVertice[i].visitado = true

			i++
		}
	}





	search = (dato) => {
		var i = 0;
		while(i<this.listaVertice.length){
			if(this.listaVertice[i].vertice == dato){
				return this.listaVertice[i]

			}
			i++;
		}
		return null
	}

	getListaVertice = () => { return this.listaVertice; }
	setListaVertice = (lista) => { this.listaVertice = lista; }
	getDirigido = () => { return this.dirigido; }
	setDirigido = (estado) => { this.dirigido = estado; }
	getNivel = () => { return this.nivel; }
	setNivel = (nivel) => { this.nivel = nivel; }

}

// export default Anchura;
module.exports = Anchura;