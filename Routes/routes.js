import { Router } from 'express';
import { getProductos, getProductosId , postProductos, putProductos, deleteProductos,
    getUsuarios, getUsuariosId , postUsuarios, putUsuarios, deleteUsuarios,
    getPedidos, getPedidosId , postPedidos, putPedidos, deletePedidos,
    getDetallesP, getDetallesId, postDetallesP, putDetallesP, deleteDetallesP,} from '../Controllers/controller.js';

const router = Router();

// Ruta de la página principal (Ejemplo)
router.get('/', (req, res) => {
    res.send("GET Pagina Principal Express");
});

// Rutas relacionadas con Productos
router.get('/productos', getProductos);
router.get('/productos/:idProducto', getProductosId);
router.post('/productos', postProductos);
router.put('/productos/:idProducto', putProductos);
router.delete('/productos/:idProducto', deleteProductos);

// Rutas relacionadas con Usuarios
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:idUsuario', getUsuariosId);
router.post('/usuarios', postUsuarios);
router.put('/usuarios/:idUsuario',putUsuarios);
router.delete('/usuarios/:idUsuario',deleteUsuarios);

// Rutas relacionadas con Pedidos
router.get('/pedidos', getPedidos);
router.get('/pedidos/:idPedido', getPedidosId);
router.post('/pedidos', postPedidos);
router.put('/pedidos/:idPedido',putPedidos);
router.delete('/pedidos/:idPedido',deletePedidos);

// Rutas relacionadas con Detalles de Pedido
router.get('/detallesP', getDetallesP);
router.get('/detallesP/:idDetalles', getDetallesId);
router.post('/detallesP', postDetallesP);
router.put('/detallesP/:idDetalles',putDetallesP);
router.delete('/detallesP/:idDetalles',deleteDetallesP);

export default router;