//Busca el module de express en nuestros modulos y lo guarda en esta variable
const express = require('express');

const app = express();
const port = 8080;
const chalk = require('chalk'); //Pinta colores en la consola

// R U T A S
app.get('/', (req, res) => {
    res.send('Estoy respondiendo algo');
})


//Cualquiera de los dos siguientes es lo mismo, solo que se esta guardando en app
//Solo que se guarda en app todas las veces, de lo contrario solo se gusrda cada vez
// app.listen()
// express().listen

//Escuchar peticiones en un puerto
//recibe dos funciones, el puerto y la funcion que escuchara
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}...`);
    console.log(chalk.magenta(`http://localhost:${port}`));
})
