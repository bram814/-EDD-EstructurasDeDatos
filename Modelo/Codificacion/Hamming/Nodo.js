class Nodo{

	constructor(){
		this.pariedad = null;
		this.dato = null;

	}

	getPariedad = () => { return this.pariedad; }
	setPariedad = (pariedad) => { this.pariedad = pariedad; }
	getDato = () => { return this.dato; }
	setDato = () => { this.dato = dato; }
}

// export default Nodo;
module.exports = Nodo;