// import Nodo from './ListaCabeceraFilas.js';
const ListaCabeceraFilas = require('./ListaCabeceraFilas.js')
// import Nodo from './ListaCabeceraColumnas.js';
const ListaCabeceraColumnas = require('./ListaCabeceraColumnas.js')
// import Nodo from './NodoCabeceraFila.js';
const NodoCabeceraFila = require('./NodoCabeceraFila.js')
// import Nodo from './NodoCabeceraColumna.js';
const NodoCabeceraColumna = require('./NodoCabeceraColumna.js')
// import Nodo from './NodoOrtogonal.js';
const NodoOrtogonal = require('./NodoOrtogonal.js')

class MatrizOrtogonal {

    constructor() {
        this.filas = new ListaCabeceraFilas();
        this.columnas = new ListaCabeceraColumnas();
    }

    insertar = (x, y, dato) =>{
        
        var nodoNuevo = new NodoOrtogonal(x, y, dato);
        if(this.getColumna().busqueda(x) == null){ // VERIFICA QUE EXISTA LA CABECERA COLUMNAS.
            this.getColumna().insertar(new NodoCabeceraColumna(x));
        }
        if(this.getFila().busqueda(y) == null){ // VERIFICA QUE EXISTA LA CABECERA FILAS.
            this.getFila().insertar(new NodoCabeceraFila(y));
        }

        this.getColumna().busqueda(x).getColumna().insertar(nodoNuevo);
        this.getFila().busqueda(y).getFila().insertar(nodoNuevo);

    }


    print = () => {

        var nodo_cabecera = this.getFila().getPrimero();
        var nodo_actual = null;
        if(nodo_cabecera != null){
            do{
                console.log(nodo_cabecera.getY());
                nodo_actual = nodo_cabecera.getFila().getPrimero();
                if(nodo_actual != null){
                    do{
                        console.log("dato: " + nodo_actual.getDato() + " posicion (x,y): " + nodo_actual.getX()  +  "," + nodo_actual.getY());
                        nodo_actual = nodo_actual.getDerecha();
                    }while(nodo_actual != null);   
                }   
                nodo_cabecera = nodo_cabecera.getSiguiente();
            }while(nodo_cabecera != null);
        }
            

        console.log("-")
        nodo_cabecera = this.getColumna().getPrimero();
        nodo_actual = null;
        if(nodo_cabecera != null){
             do{
                console.log(nodo_cabecera.getX());
                let nodo_actual = nodo_cabecera.getColumna().getPrimero();
                if(nodo_actual != null){
                     do{
                        console.log("dato: " + nodo_actual.getDato() + " posicion (x,y): " + nodo_actual.getX()  +  "," + nodo_actual.getY());
                        nodo_actual = nodo_actual.getAbajo();
                    }while(nodo_actual != null);   
                }
                nodo_cabecera = nodo_cabecera.getSiguiente();
            }while(nodo_cabecera != null);
        }
           
    }


    search = (x, y, dato) => {

        var nodo_cabecera = this.getFila().getPrimero();
        var nodo_actual = null;
        if (nodo_cabecera != null){
            do{
               
                nodo_actual = nodo_cabecera.getFila().getPrimero();
                if (nodo_actual != null){
                    do{
                    if (nodo_actual.getDato() == dato && nodo_actual.getX() == x && nodo_actual.getY() == y){
                        console.log("dato: " + nodo_actual.getDato() + " posicion (x,y): " + nodo_actual.getX()  +  "," + nodo_actual.getY());
                        return nodo_actual    
                    }
                    nodo_actual = nodo_actual.getDerecha();
                }while(nodo_actual != null);   
                }
                
                
                nodo_cabecera = nodo_cabecera.getSiguiente();
                
            }while(nodo_cabecera != null);
        }
        console.log("Data not Found")
        return null
    }


    update = (x, y, dato, cambio) => {


        var nodo_cabecera = this.getFila().getPrimero();
        var nodo_actual = null;
        if(nodo_cabecera != null){
            do{
                nodo_actual = nodo_cabecera.getFila().getPrimero();
                if (nodo_actual != null){
                    do{
                        if (nodo_actual.getDato() == dato && nodo_actual.getX() == x && nodo_actual.getY() == y){
                            nodo_actual.setDato(cambio)
                            console.log("UPDATE -> dato: " + nodo_actual.getDato() + " posicion (x,y): " + nodo_actual.getX()  +  "," + nodo_actual.getY());
                            return nodo_actual    
                        }
                        nodo_actual = nodo_actual.getDerecha();
                    }while(nodo_actual != null);   
                }
                nodo_cabecera = nodo_cabecera.getSiguiente();
                
            }while(nodo_cabecera != null);
        }
        console.log("Data not Found")
        return null


    }

    delete = (x, y, dato) => {

        if(this.search(x, y, dato) != null){
            this.getColumna().busqueda(x).getColumna().delete(y)
            this.getFila().busqueda(y).getFila().delete(x);
        }
        if(this.getColumna().busqueda(x).getColumna().getPrimero() == null){ 
            this.getColumna().delete(x); 
        }
        if (this.getFila().busqueda(y).getFila().getPrimero()==null){ 
            this.getFila().delete(y); 
        }
    }

    getColumna = () =>{ return this.columnas; }
    setColumna = (columna) => { this.columnas = columna; }
    getFila = () =>{ return this.filas; }
    setFila = (fila) => { this.filas = fila; }

}

// export default MatrizOrtogonal;
module.exports = MatrizOrtogonal;
