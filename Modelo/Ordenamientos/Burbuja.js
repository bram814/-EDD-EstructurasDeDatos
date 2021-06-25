class Burbuja{

    constructor(){
        this.array = [];
    }

    insertar = (dato) =>{
        this.array.push(dato)
    }

    ordenamiento_burbuja = () => {

        for (var i = (this.array.length - 1); i >= 0; i--) {
            for (var j = 0; j < i; j++) {

                if(this.array[j]> this.array[j+1]){

                    var temp = this.array[j];
                    this.array[j] = this.array[j+1]
                    this.array[j+1] = temp;

                }
            }
        }
    }
    
}   

// export default OrBurbuja;
module.exports = Burbuja;