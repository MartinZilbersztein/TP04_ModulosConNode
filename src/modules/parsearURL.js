let objeto;
const parsearUrl = (link) =>{
    objeto = new URL(link);
    try{        
        objeto = {
            host: objeto.protocol + '//' + objeto.host,
            pathname: objeto.pathname,
            parametros:{}
        }
        return objeto;
    }
    catch (error){
        console.log(error);
    }
}
module.exports = {parsearUrl};