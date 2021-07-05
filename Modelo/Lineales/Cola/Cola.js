// import Nodo from './Nodo.js';
const Nodo = require('./Nodo.js')

class EstructuraCola{

	Constructor(){
		this.primero= null;
		this.ultimo=null;
	}


	
	encolar = (valor) => {
		let nodo = new Nodo(valor);

		if(this.get_vacia()==true){
			this.set_primero(nodo);
			this.set_ultimo(nodo);

		}else{
			this.get_ultimo().set_siguiente(nodo);
			this.set_ultimo(nodo);
		}
	}

	desencolar = () => {
		let nodo = this.primero;
		let seguir = true;
		this.set_primero(this.get_primero().get_siguiente());
		return console.log("Delete!");
	}
	
	search = (dato) =>{
		let nodo = this.get_primero();
		let i=0;
		if(this.get_vacia() == false){
			do{
				if(nodo.get_valor() == dato){

                    console.log("Data found!! " + nodo.get_valor());
					return i;
				}
				i++;
				nodo = nodo.get_siguiente();
			}while(nodo != null);
		}else{
			return false;
		}
        return false;
	}

	update = (dato, cambio) =>{
        let nodo_actual = this.get_primero();
        if (this.get_vacia() == false){
            do{
                if (nodo_actual.get_valor() == dato){
                    nodo_actual.set_valor(cambio);
        			return console.log("Data Update! " + dato + " = " + cambio );
                }
                nodo_actual = nodo_actual.get_siguiente()
            }while(nodo_actual != null);
        }else{
			return console.log("Empty!");
		}

        return console.log("Data not found!");

    }
	print = () => {
		let nodo = this.get_primero();
		if(this.get_vacia() == false){
			do{
				console.log(nodo.get_valor());
				nodo=nodo.get_siguiente();
			}while(nodo!=null)
		}else{
			return console.log("Empty!");
		}
	}

	get_vacia = () => {
		if(this.get_primero()==null){
			return true;
		}else{
			return false;
		}
	}

	get_primero = () => {return this.primero; }
	set_primero = (primero) => {this.primero = primero; }
	
	get_ultimo = () => {return this.ultimo; }
	set_ultimo = (ultimo) => {this.ultimo = ultimo; }

}

// export default EstructuraCola;
module.exports = EstructuraCola;