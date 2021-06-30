class ListaVertical {
    
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    insertar = (nodoNuevo) => {
        if(this.vacia()==true){
            this.setPrimero(nodoNuevo);
            this.setUltimo(nodoNuevo);

        }else{

            if(nodoNuevo.getY() < this.getPrimero().getY()){ // Agrega al Inicio
                this.insertarInicio(nodoNuevo);
            }else if (nodoNuevo.getY() > this.getUltimo().getY()){ // Agrega en Final
                this.insertarFinal(nodoNuevo);
            }else{  // Agrega en Medio
                this.insertarMedio(nodoNuevo);
            }
        }
    }

    
    insertarInicio = (nodoNuevo) => {
        this.getPrimero().setArriba(nodoNuevo)
        nodoNuevo.setAbajo(this.getPrimero());
        this.setPrimero(nodoNuevo)
    }

    insertarMedio = (nodoNuevo) => {

        let tmp1 = null;
        let tmp2 = null;
        tmp1 = this.getPrimero();
        while(tmp1.getY() < nodoNuevo.getY()){
            tmp1 = tmp1.getAbajo();
        }

        tmp2 = tmp1.getArriba();
        tmp2.setAbajo(nodoNuevo);
        nodoNuevo.setAbajo(tmp1);
        nodoNuevo.setArriba(tmp2);
        tmp1.setArriba(nodoNuevo);
    }

    insertarFinal = (nodoNuevo) => {

        this.getUltimo().setAbajo(nodoNuevo);
        nodoNuevo.setArriba(this.getUltimo());
        this.setUltimo(nodoNuevo);
    }

    print = () => {
        if(this.vacia()==false) {
            let tmp = this.getPrimero();
            while (tmp != null) {
                console.log("dato: " + tmp.getDato() + " posicion (x,y): " + tmp.getX()  +  "," + tmp.getY());
                tmp = tmp.getAbajo();
            }
        }else{
            console.log("Empty");
        }
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


// export default ListaVertical;
module.exports = ListaVertical;