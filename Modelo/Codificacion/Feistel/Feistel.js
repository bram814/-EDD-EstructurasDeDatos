class Feistel{

	constructor(){
		this.tabla = [] // Esta tabla nos servira para graficar en vis.
		this.binario = []
		this.key = null;
		this.nivel = 1;
		this.ciclo = null;
	}


	encode = (texto, key, ciclo) => { // ciclo indica cuantas veces hara el shift
		this.key = key;
		this.ciclo = ciclo
		var size = texto.length
		var i = 0;
		// -------------------
		// Convertir a Binario
		// -------------------
		while(i<size){
			if(typeof(parseInt(texto.charAt(i))) == "number" && 0<=parseInt(texto.charAt(i))){
				var binario = this.toBinario(parseInt(texto.charAt(i)))
				
				if( String(binario).length < 8){
					let concatenar = ''
					let temp = 8 - String(binario).length
					var j = 0;
					while(j<temp){
						concatenar += "0"
						j++;
					}
					this.binario.push(String(concatenar) + binario) 
				}else{
					this.binario.push(binario)
				}
				
			}else if(typeof(texto.charAt(i)) == "string"){
				var binario = this.toASCII(String(texto.charAt(i)))
				
				if(binario.length < 8){
					let concatenar = ''
					let temp = 8 - binario.length
					var j = 0;
					while(j<temp){
						concatenar += "0"
						j++;
					}
					this.binario.push(String(concatenar) + binario) 
				}else{
					this.binario.push(binario)
				}
			}
			i++;
		}

		console.log(this.binario)
		i = 0;
		while(i<this.binario.length){
			if(this.binario[i+1]!=null){
				let temp = this.key;
				this.shift(this.binario[i],this.binario[i+1], 1)
				this.key = temp
				i++;
			}
			i++;
		}
		
			

	}

	shift = (left,right, n) => {
		if(n<=this.ciclo){
			console.log("W"+String(n-1) + " L: " + left + " R: " + right)
			// this.tabla.push({dato:"W"+String(n-1), nivel:this.nivel})
			// this.tabla.push({dato:left, nivel:this.nivel})
			// this.tabla.push({dato:right, nivel:this.nivel})
			// this.nivel++;

			var concatenar  = '';
			var i = 0;
			console.log("\t\t  " + this.key + "  K" + String(n-1))
			// this.tabla.push({dato:"K"+String(n-1), nivel:this.nivel})
			// this.tabla.push({dato:this.key, nivel:this.nivel})
			// this.nivel ++;

			while(i<8){

				let r = right.charAt(i)
				let k = this.key.charAt(i)
				let value = 0;
				
				if(r == 1 && k == 1) value = 0;
				if(r == 1 && k == 0) value = 1;
				if(r == 0 && k == 1) value = 1;
				if(r == 0 && k == 0) value = 0;
				
				concatenar += String(value)
				i++;
			}

			console.log("\t\t  " + concatenar + "  F" + String(n-1))
			console.log("\t\t  " + left + "  L" + String(n-1))

			// this.tabla.push({dato:"F"+String(n-1), nivel:this.nivel})
			// this.tabla.push({dato:concatenar, nivel:this.nivel})
			// this.nivel++;
			// this.tabla.push({dato:"L"+String(n-1), nivel:this.nivel})
			// this.tabla.push({dato:left, nivel:this.nivel})
			// this.nivel++;
			
			this.shiftCircular()
			var temp = '';
			var i = 0;
			
			while(i<8){

				let c = concatenar.charAt(i)
				let l = left.charAt(i)
				let value = 0;
				
				if(c == 1 && l == 1) value = 0;
				if(c == 1 && l == 0) value = 1;
				if(c == 0 && l == 1) value = 1;
				if(c == 0 && l == 0) value = 0;
				
				temp += String(value)
				i++;
			}
			
			// ------------------------------
			//  right = left && right = temp
			// ------------------------------
			
			this.shift(right,temp,n+1)

		}else{

			console.log("FIN: "+ "L: " + left + "R: " + right)
			// this.tabla.push({dato:"W"+String(n-1), nivel:this.nivel})
			// this.tabla.push({dato:left, nivel:this.nivel})
			// this.tabla.push({dato:right, nivel:this.nivel})
		}

	}

	shiftCircular = () => {
		var concatenar = ''
		var i = 0;
		while(i<8){
			if(i!=0){
				let temp = this.key.charAt(i);
				concatenar += String(temp);	
			}
			i++;
		}
		concatenar += String(this.key.charAt(0));
		this.key = String(concatenar);
	}




	toBinario = (entero) =>{
		let binario = [];
		while(entero>1){
			binario.push(entero % 2)
			entero = Math.floor(entero/2)
		}
		binario.push(entero)
		return parseInt(binario.reverse().join(''))
	} 


	toASCII = (cadena) => {
		let size = cadena.length;
		let i = 0;
		let concatenar = ""
		while(i<size){
			let binario = cadena.charCodeAt(i)
			concatenar = concatenar + String(this.toBinario(binario))
			i++;	
		}
	return concatenar
	}

	
}
// export default Feistel;
module.exports = Feistel;