class Insercion{

	constructor(){
		this.array = []
	}

	insertar = (dato) => {
		this.array.push(dato)
	}


	ordenamiento_insercion = () =>{

		var size = this.array.length, temp, aux;
   		
		for ( var i = 0; i < this.array.length; i++ ) {   
			aux = this.array[i];

			for ( temp = i - 1; temp >= 0 && this.array[temp] > aux; temp-- ){ 	
				this.array[ temp + 1 ] = this.array[temp];
			}

		this.array[ temp + 1 ] = aux;
		}
	}

}


module.exports = Insercion;