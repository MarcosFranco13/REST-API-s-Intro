const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const Clientes = require('../models/Clientes');

const productosController = require('../controllers/productosController');

const pedidosController = require('../controllers/pedidosController');

module.exports = function(){
    
    //Agrega nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente);

    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //Muestra un cliente en especifico(ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);
    
    //Actualizar Cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    //Eliminar Cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

    //***Productos*/
    //Nuevos productos
    router.post('/productos', 
        productosController.subirArchivo,
        productosController.nuevoProducto);

    //Muestra todos los productos
    router.get('/productos', productosController.mostrarProductos);

    //Muestra un producto en especifico por su ID
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    //Actualiza Productos
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto
    );
    
    //Eliminar Productos
    router.delete('/productos/:idProducto', productosController.eliminarProducto);

    //***PEDIDOS */
    router.post('/pedidos', pedidosController.nuevoPedido);

    //mostrar todos los pedidos
    router.get('/pedidos', pedidosController.mostrarPedidos);

    //mostrar un pedido por su ID
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

    //actualizar pedidos por su ID
    router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

    //Eliminar un pedido
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);

    return router;
}

