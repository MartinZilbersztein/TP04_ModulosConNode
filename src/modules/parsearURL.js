/*let objeto;
const parsearUrl = (link) =>{
    objeto = new URL(link);
    try{        
        objeto = {
            host: objeto.protocol + '//' + objeto.host,
            pathname: objeto.pathname,
            protocolo: objeto.protocol
        }
        return objeto;
    }
    catch (error){
        console.log(error);
    }
}
module.exports = {parsearUrl};
 const URL = require("url").URL;*/


const url = require('url');
const parsearURL = (urlString) => {
    try {
        const urlObj = new URL(urlString);
        const resultado ={
            host: urlObj.protocol + '//' + urlObj.host,
            pathname: urlObj.pathname,
            parametros: {}
        };
        for (const [clave, valor] of urlObj.searchParams.entries()) {
            resultado.parametros[clave] = valor;
        }
        return resultado;
    } catch (error) {
        return error;
    }
}
module.exports = {parsearURL};