
const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite = 10) => {
    if (!Number(base)) {
        reject(`Base: ${base} no es un número.`);
        return;
    }

    if (!Number(limite)) {
        reject(`Limite: ${limite} no es un número.`);
        return;
    }

    console.log('===================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('===================='.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.yellow);
    
    }
}

let crearArchivo = async (base, limite = 10) => {

    return new Promise ((resolve, reject) => {

        if (!Number(base)) {
            reject(`Base: ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`Limite: ${limite} no es un número.`);
            return;
        }
    
        let data = '';
        
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        
        }
        
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`)
        });



    })    
}    

module.exports = {
    crearArchivo,
    listarArchivo
}