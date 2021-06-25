// import Nodo from './Nodo.js'
const Nodo = require('./Nodo.js');

class ListaCircularDoble{

	constructor(){
		this.primero = null;
        this.ultimo = null;
        this.size = 0;
	}

	insertar = (valor) =>{
		let nodo_nuevo = new Nodo(valor);
        if (this.vacia() == true){
		    this.set_primero(nodo_nuevo);
            this.set_ultimo(nodo_nuevo);
            this.get_primero().set_siguiente(this.get_ultimo());
            this.get_ultimo().set_siguiente(this.get_primero());
        }else{
            this.get_ultimo().set_siguiente(nodo_nuevo);
            nodo_nuevo.set_anterior(this.get_ultimo());
            nodo_nuevo.set_siguiente(this.get_primero());
            this.set_ultimo(nodo_nuevo);
        }
        this.size ++;
	}

	insertar_ultimo = (valor) => {
		let nodo_nuevo = new Nodo(valor);
        if (this.vacia() == true){
		    this.set_primero(nodo_nuevo);
            this.set_ultimo(nodo_nuevo);
            this.get_primero().set_siguiente(this.get_ultimo());
            this.get_ultimo().set_siguiente(this.get_primero());
        }else{
            this.get_ultimo().set_siguiente(nodo_nuevo);
            nodo_nuevo.set_anterior(this.get_ultimo());
            nodo_nuevo.set_siguiente(this.get_primero());
            this.set_ultimo(nodo_nuevo);
        }
        this.size ++;
	}

	insertar_inicio = (valor) => {
		let nodo_nuevo = new Nodo(valor);

        if (this.vacia() == true){
		    this.set_primero(nodo_nuevo);
            this.set_ultimo(nodo_nuevo);
            this.get_primero().set_siguiente(this.get_ultimo());
            this.get_ultimo().set_siguiente(this.get_primero());
        }else{
        	nodo_nuevo.set_siguiente(this.get_primero());
        	nodo_nuevo.set_anterior(this.get_ultimo());
        	this.get_ultimo().set_siguiente(nodo_nuevo)
        	this.get_primero().set_anterior(nodo_nuevo)
        	this.set_primero(nodo_nuevo)
        }
        this.size ++;
	}

	eliminar = (dato) =>{
		if (this.vacia() == false){
            if (this.get_primero().get_dato() == dato){ //Eliminando al primero
                if (this.get_primero().get_siguiente() != this.get_primero()){                   
                    let aux = this.get_primero().get_siguiente()
                    this.get_primero().get_siguiente().set_anterior(this.get_ultimo())
                    this.get_ultimo().set_siguiente(aux)
                    this.get_primero().set_siguiente(null)
                    this.get_primero().set_anterior(null)
                    this.set_primero(aux)
                    this.size --;
                    return console.log("Delete!");
                }else{
                    this.set_primero(null)
                    this.set_ultimo(null)
                    this.size --;

                    return console.log("Delete!");
                }

            }else if (this.get_ultimo().get_dato() == dato){  //Eliminando al ultimo

                if (this.get_ultimo().get_anterior() != this.get_ultimo()){

                    let aux = this.get_ultimo().get_anterior()
                    this.get_ultimo().get_anterior().set_siguiente(this.get_primero())
                    this.get_primero().set_anterior(aux)
                    this.get_ultimo().set_anterior(null)
                    this.get_ultimo().set_siguiente(null)
                    this.set_ultimo(aux);
                    this.size --;
                    return console.log("Delete!");
                }else{
                    this.set_primero(null)
                    this.set_ultimo(null)
                    this.size --;
                    return console.log("Delete!");
                }


            }else{ //Eliminando En Medio
                let nodo_actual = this.get_primero().get_siguiente();
                let anterior = this.get_primero();
                do {

                    if (nodo_actual.get_dato() == dato){
                        
                        let siguiente = nodo_actual.get_siguiente()

                        nodo_actual.set_siguiente(null)
                        nodo_actual.set_anterior(null)
                        anterior.set_siguiente(siguiente)
                        siguiente.set_anterior(anterior)
                        this.size --;
                        return console.log("Delete!");
                     
                    }
                    nodo_actual = nodo_actual.get_siguiente();
                    anterior = anterior.get_siguiente();

                } while (nodo_actual != null);
            }

        }else{ return console.log("Empty!"); }

        return console.log("Data not found!");
	}
    
    print = () => {
        var i = 0;
        let nodo_actual = this.get_primero();
        while(i<this.size){
            console.log(nodo_actual.get_dato());
            nodo_actual = nodo_actual.get_siguiente();
            i++;
        }
    }

    update = (dato, cambio) => {
        let nodo_actual = this.get_primero();
        if (this.vacia() == false){
            let i = 0;
            while(i<this.size){
                if (nodo_actual.get_dato() == dato){
                    nodo_actual.set_dato(cambio);
                    return console.log("Data Update! " + dato + " = " + cambio);
                }
                nodo_actual = nodo_actual.get_siguiente()
                i++;
            }
        }else{ return console.log("Empty!"); }

        return console.log("Data not found!");
    }

    search = (dato) => {
        let nodo_actual = this.get_primero()
        if (this.vacia() == false){
            let i = 0;
            while(i<this.size){
                if (nodo_actual.get_dato() == dato){
                    console.log("Data found! " + nodo_actual.get_dato());
                    return i 
                }
                nodo_actual = nodo_actual.get_siguiente();
                i++;
            }
        }else{ 
            return -1;
        }
        return -1;
    }

    set_primero = (primero) => { this.primero=primero; }
    get_primero = () => { return this.primero; }

    set_ultimo = (ultimo) => { this.ultimo=ultimo; }
    get_ultimo = () => { return this.ultimo; }

    vacia = () => {
        if(this.get_primero() == null){
            return true;
        }else{
            return false;
        }
    }

}

// export default ListaCircularDoble;
module.exports = ListaCircularDoble;