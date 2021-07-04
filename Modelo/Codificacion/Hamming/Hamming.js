const Nodo = require('./Nodo.js');
// import Nodo from './Nodo.js';
class Hamming{

	constructor(){
		this.listaDatos =[];
		this.tabla = [];
		this.filaEncode = [];
		this.resultado = []; //Est es una cadena.
		this.nivel = 0;
	}

	encode = (text) => { // Inicio de codificacion
		var size  = text.length; //Obteniendo el tamaño del binario.

		var i = 0;
		while(i<size){
			this.listaDatos.push(text.charAt(i)); // Se descompone la variable y se guarda.
			i++;
		}
		console.log("DATO-> "+this.listaDatos)
		
		i = 0;
		var tempSize = 1;
		this.tabla.push({id:"Datos:", dato:null, Nivel:parseInt(this.nivel)});
		this.resultado.push({id:"Resultado:", dato:null, Nivel:parseInt(this.nivel)});
		while(i<size){	
			if(this.potencia(i+1)==(i+1)){
				this.tabla.push({id:"p"+String(i+1), dato:null, Nivel:parseInt(this.nivel)});
				this.resultado.push({id:"p"+String(i+1), dato:null, Nivel:parseInt(this.nivel)});
				size++;	
			}else{
				this.tabla.push({id:"d"+String(tempSize), dato:this.listaDatos[tempSize-1], Nivel:parseInt(this.nivel)});
				this.resultado.push({id:"d"+String(tempSize), dato:this.listaDatos[tempSize-1], Nivel:parseInt(this.nivel)});
				tempSize++;
			}
			i++;
		}		
		this.nivel ++;

		console.log(this.tabla) // MUESTRA LA TABLA
		// console.log(size)		   // SIZE DE LA TABA

		var sizeFila = 0;
		// ----------------------------------------------
		// INICIA LA CODIFICACION DE FILAS DE p1, p2, etc.
		// ----------------------------------------------
		this.tabla.forEach(element => { 
			if(element.id.charAt(0)=="p"){
				let aux = this.llenarTabla(size, element.id.charAt(1), this.nivel);
				console.log(element.id+"->"+aux)
				this.update(element.id, aux, this.nivel)
				this.nivel++;
			} 
		});
		console.log(this.filaEncode)

		var tempResultado;
		i = 0;
		while(i<this.resultado.length){
			var j = 0;
			while(j<this.filaEncode.length){
				if(this.resultado[i].id == this.filaEncode[j].id && this.filaEncode[j].dato != null){
					this.resultado[i].dato = this.filaEncode[j].dato 
					// tempResultado = this.filaEncode[j].dato
				}
				j++;
			}
			i++;
		}

		// console.log("RESULTADO: " + this.resultado)


		console.log(this.tabla)
		console.log(this.filaEncode)
		console.log(this.resultado) 


	}

	llenarTabla = (size, saltos, nivel) =>{
		var i = 1;
		var valor = null;
		var estado = true;
		var moverse = 0;
		console.log("Cantidad: "+size+" Move: "+saltos+" Nivel: "+nivel)
		while(i<=size){
			let temp = this.search(i);
			if(saltos<=i){
				if(moverse<saltos && estado == true){
					
					if(temp.id.charAt(0)=="p"){
						this.filaEncode.push({id:temp.id, dato:null, Nivel:parseInt(nivel)});
					}else{
						if(valor == null){
							valor = temp.dato;
						}else{
							// ----------------------------------------------
							// SE COMPARA EL VALOR CON EL ID EN LA TABLA XOR.
							// ----------------------------------------------
							if(temp.dato == 1 && valor == 1){ valor = 0; }
							else if(temp.dato == 1 && valor == 0){ valor = 1; }
							else if(temp.dato == 0 && valor == 1){ valor = 1; }
							else if(temp.dato == 0 && valor == 0){ valor = 0;  }
						}
						this.filaEncode.push({id:temp.id, dato:temp.dato, Nivel:parseInt(nivel)});
					}
					moverse++;
					if(moverse==saltos){
						estado=false
					}
				}else{
					moverse--;
					if(moverse==0){
						estado=true;	
					}else{
						estado=false;
					}
					this.filaEncode.push({id:temp.id, dato:null, Nivel:parseInt(nivel)});
				}	
			}else{
				this.filaEncode.push({id:temp.id, dato:null, Nivel:parseInt(nivel)});
			}
			i++;
		}
		return valor;
	}


	search = (posicion) =>{
		var i = 0;
		var aux = null;
		while(i<this.tabla.length){
			aux = this.tabla[i]
			if(posicion==i){
				return aux
			}		
			i++;
		}
		return false
	}

	update = (id, cambio, nivel) => {
		var i = 0;
		var aux = null;
		while(i<this.filaEncode.length){
			if(this.filaEncode[i].id==id && this.filaEncode[i].Nivel == nivel){
				this.filaEncode[i].dato=String(cambio);
			}		
			i++;
		}
		return false

	}

	potencia = (size) => {
		var i = 0 ;
		while(i<size){
			if(2**i == size){
				return 2**i
			}
			i++;
		}
		return null
	}



}
// export default Hamming;
module.exports = Hamming;