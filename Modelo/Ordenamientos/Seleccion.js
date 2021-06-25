class Seleccion{

	constructor(){
		this.array = []
	}

	insertar = (dato) => {
		this.array.push(dato)
	}


	ordenamiento_seleccion = () => {
		
	for(var i = 0; i < this.array.length - 1; i++){
           
           var min = i;

           for (var j = i + 1; j < this.array.length; j++){             

                   if (this.array[j] < this.array[min]){
                        min = j;	                       // min se va a quedar en la posicion mas pequeña.
                   }
           }
           
           if (i != min) {     
                   
                   var aux = this.array[i];
                   this.array[i] = this.array[min];
                   this.array[min] = aux;
           }

           
       }

   }


}

// export default OrSeleccion;

module.exports = Seleccion;



