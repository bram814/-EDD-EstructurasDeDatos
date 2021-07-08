class LZW {

    constructor(){
        this.kw = [];
        this.tokens = [];
        this.tk_id = 0;
    }

    encode = (cadena , key) => {

        this.kw = [] ;
        var dato = (cadena + "").split(""); // k Se convierte en la cadena..
        this.tokens = []
        this.tk_id = 0;
        var i = 0;
        var ascii = key;
        while(i<dato.length){
            if(this.search(dato[i]) == false){
                this.tokens.push({id:String(dato[i]), token:parseInt(this.tk_id)});
                this.tk_id ++;
            }
            i++;
        }
        var salida = [];
        var k = dato[0]; 
        var w = k;   // p
        

        for(var i=1;i<dato.length;i++){
            k = dato[i]
            if(this.searchDic(String(w)+String(k))==false){ // AP
                salida.push(w.length > 1 ? this.kw[w] : w.charCodeAt(0));
                this.tokens.push({id:String(w)+String(k), token:parseInt(this.tk_id)})
                this.kw[String(w)+String(k)] = ascii
                this.kw.push({id:String(w)+String(k), token:this.tk_id, salida:ascii})
                this.tk_id++;
                w = k;
                ascii++;
            }else{

                w += k
            }

        }
        salida.push(w.length > 1 ? this.kw[w] : w.charCodeAt(0));
        
        for (var i=0; i<salida.length; i++) {
            salida[i] = String.fromCharCode(salida[i]);
            
        }
       
        return salida.join("")


    }

    decode(texto, key) {
        var diccionario = {};
        var dato = (texto + "").split("");
        var temp = dato[0];
        var regresoFrase = temp;
        var salida = [temp];
        var ascii = key;
        var palabbra;
        for (var i=1; i<dato.length; i++) {
            var aux = dato[i].charCodeAt(0);
            if (aux < key) {
                palabbra = dato[i];
            }
            else {
               palabbra = diccionario[aux] ? diccionario[aux] : (regresoFrase + temp);
            }
            salida.push(palabbra);
            temp = palabbra.charAt(0);
            diccionario[ascii] = regresoFrase + temp;
            ascii++;
            regresoFrase = palabbra;
        }
        return salida.join("");
    }





    search = (dato) => {
        var i = 0;
        while(i<this.tokens.length){
            if(this.tokens[i].id == dato){
                return true
            }
            i++;
        }
        return false
    }

    searchDic = (dato) => {
    for(var i=0;i<this.kw.length;i++){
        if(this.kw[i].id == dato){
            return true;
        }
    }
    return false;
    }
}
// export default LZW;
module.exports = LZW;

