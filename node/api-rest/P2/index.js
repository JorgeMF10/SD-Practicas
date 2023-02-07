'use strict'
const port = process.env.PORT || 3000;

const { application } = require('express');
const express = require('express');

const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

app.get('/api/product', (req, res) => {

    res.status(200);
    res.send({ productos: [] });

});

app.get('/api/product/:productID', (req, res) =>{

    const productID = req.params.productID; 
    res.status(200); 
    res.send({product: productID});

});

app.post('/api/product', (req, res) => {

    const queProducto = req.body; 
    console.log(queProducto); 
    
    res.status(200); 
    res.send({
        mensaje: 'Producto Creado', 
        producto: queProducto
    });

});

app.put('/api/product/:productID', (req, res) => {
    const queProducto = req.body; 
    const productID = req.params.productID;

    res.status(200);
    res.send({
        mensaje: `Producto Modificado  ${productID}`, 
        producto: queProducto
    });

});

app.delete('/api/product/:productID', (req, res) => {

    const productID = req.params.productID;

    res.status(200); 
    res.send({ mensaje: `Producto eliminado: ${productID}`});

});


app.listen(port, () => {

    console.log(`API REST ejecutándose en http://localhost:${port}/hola/:unNombre`);

});