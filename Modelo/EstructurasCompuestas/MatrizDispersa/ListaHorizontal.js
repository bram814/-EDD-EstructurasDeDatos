class ListaHorizontal {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    insertar = (nodoNuevo) => {
        if(this.vacia()==true){
            this.setPrimero(nodoNuevo);
            this.setUltimo(nodoNuevo);
        }else{
            if(nodoNuevo.getX() < this.getPrimero().getX()){ // Agregar inicio
                this.insertarInicio(nodoNuevo);
            }else if (nodoNuevo.getX() > this.getUltimo().getX()){ // Agregar final
                this.insertarFinal(nodoNuevo);
            }else{  // Agregar medio
                this.insertarMedio(nodoNuevo);
            }
        }
    }


    insertarInicio = (nodoNuevo) => {
        this.getPrimero().setIzquierda(nodoNuevo);
        nodoNuevo.setDerecha(this.getPrimero());
        this.setPrimero(nodoNuevo);
    }

    insertarMedio = (nodoNuevo) => {
        let tmp1 = null;
        let tmp2 = null;
        tmp1 = this.getPrimero();
        while(tmp1.getX() < nodoNuevo.getX()){
            tmp1 = tmp1.getDerecha();
        }

        tmp2 = tmp1.getIzquierda();
        tmp2.setDerecha(nodoNuevo);
        nodoNuevo.setDerecha(tmp1);
        nodoNuevo.setIzquierda(tmp2);
        tmp1.setIzquierda(nodoNuevo);
    }

    insertarFinal = (nodoNuevo) => {
        this.getUltimo().setDerecha(nodoNuevo);
        nodoNuevo.setIzquierda(this.getUltimo());
        this.setUltimo(nodoNuevo);
    }

    print = () => {         
        if(this.vacia()==false) {
            let tmp = this.getPrimero();
            while (tmp != null) {
                console.log("dato: " + tmp.getDato() + " posicion (x,y): " + tmp.getX()  +  "," + tmp.getY());
                tmp = tmp.getDerecha();
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

// export default ListaHorizontal;
module.exports = ListaHorizontal;
