class ListaCabeceraFilas {
    
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    insertar = (nodoNuevo) => {
        if(this.vacia()==true){
            this.setPrimero(nodoNuevo);
            this.setUltimo(nodoNuevo);
        }else{
            if(nodoNuevo.getY() < this.getPrimero().getY()){ // Agregar Incicio
                this.insertarInicio(nodoNuevo);
            }else if (nodoNuevo.getY() > this.getUltimo().getY()){ //Agregar al final
                this.insertarFinal(nodoNuevo);
            }else{ // Agregar en medio
                this.insertarMedio(nodoNuevo);
            }
        }
    }

    insertarInicio = (nodoNuevo) => {
        this.getPrimero().setAnterior(nodoNuevo);
        nodoNuevo.setSiguiente(this.getPrimero());
        this.setPrimero(nodoNuevo);
    }

    insertarMedio = (nodoNuevo) => {
        let tmp1 = null;
        let tmp2 = null;
        tmp1 = this.getPrimero();
        while(tmp1.getY() < nodoNuevo.getY()){
            tmp1 = tmp1.getSiguiente();
        }

        tmp2 = tmp1.getAnterior();
        tmp2.setSiguiente(nodoNuevo);
        nodoNuevo.setSiguiente(tmp1);
        nodoNuevo.setAnterior(tmp2);
        tmp1.setAnterior(nodoNuevo);
    }

    insertarFinal = (nodoNuevo) => {
        this.getUltimo().setSiguiente(nodoNuevo);
        nodoNuevo.setAnterior(this.getUltimo());
        this.setUltimo(nodoNuevo);
    }

    print = () => {
        if(this.vacia() == false) {
            let tmp = this.getPrimero();
            while (tmp != null) {
                console.log(" Cabecera Y: " + tmp.getY());
                tmp = tmp.getSiguiente();
            }
        }else{
            console.log("Empty");
        }
    }

    busqueda = (y) => {
        if(this.vacia() == false){
            let tmp = this.getPrimero();
            while(tmp != null){
                if(tmp.getY() == y){
                    return tmp;
                }
                tmp = tmp.getSiguiente();
            }
        }
        return null;
    }


    vacia = () => {
        if (this.getPrimero() == null){
            return true;
        }else{
            return false;
        }
    }


    getPrimero = () => { return this.primero; }
    setPrimero = (primero) => { this.primero = primero; }
    getUltimo = () => { return this.ultimo; }
    setUltimo = (ultimo) => { this.ultimo = ultimo; }

}


// export default ListaCabeceraFilas;
module.exports = ListaCabeceraFilas;
