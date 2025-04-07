const fs = require('fs');
const copiar = (archivo, nombreNuevo) =>{
fs.rename(archivo, nombreNuevo, (err)=>{
    if (err) throw err;
    console.log("Renombrado");
});
}
module.exports = {copiar}