class Vertice{

    constructor(dato){
        this.dato = dato;
        this.adyacente = []; //Son los que van a apuntar
    }

    getDalor = () => { return this.dato; }
    setDato = (dato) => { this.dato = dato; }
    getAdyacente = () => { return this.adyacente; }
    setAdyacente = (adyacente) => { this.adyacente = adyacente; }
}

// export default Vertice;
module.exports = Vertice;