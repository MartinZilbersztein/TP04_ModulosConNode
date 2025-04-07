const dinero = require('currency-codes');
const retornarMoneda = (nombrePais)=> dinero.country(nombrePais)[0].currency //El módulo siempre devuelve un array de objetos, por lo que llamamos al índice sub-0 de este, y mostramos su valor 
module.exports = {retornarMoneda}
