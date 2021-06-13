const Nodo = require('./Nodo.js')
class ListaCircular{

    constructor(){
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }


    insertar(dato){
        let nodo_nuevo = new Nodo(dato);
        if (this.vacia() == true){
            this.set_primero(nodo_nuevo);
            this.set_ultimo(nodo_nuevo);
            this.get_primero().set_siguiente(this.get_ultimo());
            this.get_ultimo().set_siguiente(this.get_primero());
        }else{

            this.get_ultimo().set_siguiente(nodo_nuevo);
            nodo_nuevo.set_siguiente(this.get_primero());
            this.set_ultimo(nodo_nuevo);

        }
        this.size ++;

    }

    print(){
        var i = 0;
        let nodo_actual = this.get_primero();
        while(i<this.size){
            console.log(nodo_actual.get_dato());
            nodo_actual = nodo_actual.get_siguiente();
            i++;
        }

        console.log("Salio del While");
        console.log(nodo_actual.get_dato());
        console.log(nodo_actual.get_siguiente().get_dato());
        console.log("ultimo");
        console.log(this.get_ultimo().get_dato());
        console.log(this.get_ultimo().get_siguiente().get_dato());
    }

    vacia(){
        if (this.get_primero() == null){
            return true;
        }else{
            return false;
        }
    }

    get_primero(){ return this.primero; }
    set_primero(primero){ this.primero = primero; }
    
    get_ultimo(){ return this.ultimo; }
    set_ultimo(ultimo){ this.ultimo = ultimo; }

}

module.exports = ListaCircular;