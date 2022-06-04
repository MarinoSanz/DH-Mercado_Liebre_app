const express = require("express");

const app = express();

app.get('/home', (req, res) => {
    res.send('Servidor Corriendo');
})

app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000')
})
