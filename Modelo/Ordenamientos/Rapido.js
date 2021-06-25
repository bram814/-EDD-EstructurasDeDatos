class Rapido{

	constructor(){
		this.array = []
	}

	insertar = (dato) => {
		this.array.push(dato)
	}

	quicksort = (primero, ultimo) => {
	    				
	    var i = primero;	// Se define i como el primer indice.
	    var j = ultimo;		// Se define j como el segundo indice.
	 
	    var pivote = this.array[parseInt((i+j)/2)];		// Obtenemos el pivote de la mitad del arreglo.
	 	
		
	    while (i < j){		 // Iteramos hasta que i no sea menor que j.
	        
	        while (this.array[i] < pivote){		// Iteramos mientras que el valor de this.array[i] sea menor que pivote.
	            i++;						    // Incrementamos el índice.
	        }
	        
	        while (this.array[j] > pivote){		// Iteramos mientras que el valor de this.array[j] sea mayor que pivote.
	            
	            j--;							// Decrementamos el índice.
	        }
	        
	        if (i <= j){	  // Si i es menor o igual que j significa que los índices se han cruzado.
	            
	            var temp = this.array[j]; 			// Creamos una variable temporal para guardar el valor de this.array[j].
	            this.array[j] = this.array[i]; 		// Intercambiamos los valores de this.array[j] y this.array[i].
	            this.array[i] = temp;				// Se asigna el temporal a this.arra[i].
	            
	            i++;								// Incrementamos y Decrementamos i y j respectivamente.
	            j--;
	        }
	    }

	    
	    if (primero < j){							// Si primero es menor que j mantenemos la recursividad.
	    	this.quicksort(primero, j);
	    }
	   
	    if (ultimo > i){							 // Si ultimo es mayor que i mantenemos la recursividad.
	    	this.quicksort(i, ultimo);
	    }

    }
	 
}

// export default Rapido;
module.exports = Rapido;