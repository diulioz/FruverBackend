import { Producto } from "../Models/productos.js";
import { Usuario } from "../Models/usuarios.js";
import { Pedido } from "../Models/pedidos.js";
import { Detalles_Pedido } from "../Models/detalles_pedido.js";

const getProductos = async (req,res) =>{
    try {
        const productos=await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const getProductosId = async (req,res) => {
    const {idProducto} = req.params;
    try {
        const producto = await Producto.findByPk(idProducto);
        res.status(200).json([producto]);
    } catch (error) {
    res.status(400).json({ mensaje: error });
    }
}

const postProductos = async (req, res) => {
    const { Nombre, Descripcion, Precio, Cantidad_Disponible, Imagen, Categoria } = req.body;
    try {
        const newProducto = await Producto.create({
            Nombre,
            Descripcion,
            Precio,
            Cantidad_Disponible,
            Imagen,
            Categoria,
        });
        res.status(200).json(newProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

const putProductos = async (req, res) => {
    const { idProducto } = req.params;
    const { Nombre, Descripcion, Precio, Cantidad_Disponible, Imagen, Categoria } = req.body;
    try {
        const oldProducto = await Producto.findByPk(idProducto);

        if (!oldProducto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        oldProducto.Nombre = Nombre;
        oldProducto.Descripcion = Descripcion;
        oldProducto.Precio = Precio;
        oldProducto.Cantidad_Disponible = Cantidad_Disponible;
        oldProducto.Imagen = Imagen;
        oldProducto.Categoria = Categoria;

        const modProducto = await oldProducto.save();
        res.status(200).json(modProducto);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });

    }
}

const deleteProductos = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const respuesta = await Producto.destroy({
            where: {
                idProducto: idProducto,
            }
        });
        res.status(200).json({ mensaje: `Registro con id ${idProducto} Eliminado ` });
    } catch (error) {
        res.status(400).json({ mensaje: `Registro No Eliminado ${error}` });
    }
}

const getUsuarios = async (req,res) =>{
    try {
        const usuarios=await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const getUsuariosId = async (req,res) => {
    const {idUsuario} = req.params;
    try {
        const usuario = await Usuario.findByPk(idUsuario);
        res.status(200).json([usuario]);
    } catch (error) {
    res.status(400).json({ mensaje: error });
    }
}

const postUsuarios = async (req, res) => {
    const { idUsuario, Nombre, Email, Contrasena, Rol, Direccion, Ciudad, Telefono } = req.body;
    try {
        const newUsuario = await Usuario.create({
            idUsuario,
            Nombre,
            Email,
            Contrasena,
            Rol,
            Direccion,
            Ciudad,
            Telefono,
        });
        res.status(200).json(newUsuario);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

const putUsuarios = async (req, res) => {
    const { idUsuario } = req.params;
    const { Nombre, Email, Contrasena, Rol, Direccion, Ciudad, Telefono } = req.body;
    try {
        const oldUsuario = await Usuario.findByPk(idUsuario);

        if (!oldUsuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        oldUsuario.Nombre = Nombre;
        oldUsuario.Email = Email;
        oldUsuario.Contrasena = Contrasena;
        oldUsuario.Rol = Rol;
        oldUsuario.Direccion = Direccion;
        oldUsuario.Ciudad = Ciudad;
        oldUsuario.Telefono = Telefono;

        const modUsuario = await oldUsuario.save();
        res.status(200).json(modUsuario);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });

    }
}

const deleteUsuarios = async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const respuesta = await Usuario.destroy({
            where: {
                idUsuario: idUsuario,
            }
        });
        res.status(200).json({ mensaje: `Registro con id ${idUsuario} Eliminado ` });
    } catch (error) {
        res.status(400).json({ mensaje: `Registro No Eliminado ${error}` });
    }
}

const getPedidos = async (req,res) =>{
    try {
        const pedidos=await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const getPedidosId = async (req,res) => {
    const {idPedido} = req.params;
    try {
        const pedido = await Pedido.findByPk(idPedido);
        res.status(200).json([pedido]);
    } catch (error) {
    res.status(400).json({ mensaje: error });
    }
}

const postPedidos= async (req, res) => {
    const { Usuario_ID, Fecha, Confirmado, Total } = req.body;
    try {
        const newPedido = await Pedido.create({
            Usuario_ID,
            Fecha,
            Confirmado,
            Total,
        });
        res.status(200).json(newPedido);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

const putPedidos = async (req, res) => {
    const { idPedido } = req.params;
    const { Usuario_ID, Fecha, Confirmado, Total } = req.body;
    try {
        const oldPedido = await Pedido.findByPk(idPedido);

        if (!oldPedido) {
            return res.status(404).json({ mensaje: "Pedido no encontrado" });
        }

        oldPedido.Usuario_ID = Usuario_ID;
        oldPedido.Fecha = Fecha;
        oldPedido.Confirmado = Confirmado;
        oldPedido.Total = Total;

        const modPedido = await oldPedido.save();
        res.status(200).json(modPedido);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });

    }
}

const deletePedidos = async (req, res) => {
    try {
        const { idPedido } = req.params;
        const respuesta = await Pedido.destroy({
            where: {
                idPedido: idPedido,
            }
        });
        res.status(200).json({ mensaje: `Registro con id ${idPedido} Eliminado ` });
    } catch (error) {
        res.status(400).json({ mensaje: `Registro No Eliminado ${error}` });
    }
}

const getDetallesP = async (req,res) =>{
    try {
        const detallesP=await Detalles_Pedido.findAll();
        res.status(200).json(detallesP);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const getDetallesId = async (req,res) => {
    const {idDetalles} = req.params;
    try {
        const detalles = await Detalles_Pedido.findByPk(idDetalles);
        res.status(200).json([detalles]);
    } catch (error) {
    res.status(400).json({ mensaje: error });
    }
}

const postDetallesP = async (req, res) => {
    const { Pedido_ID, Producto_ID, Cantidad, Subtotal } = req.body;
    try {
        const newDetalle = await Detalles_Pedido.create({
            Pedido_ID,
            Producto_ID,
            Cantidad,
            Subtotal,
        });
        res.status(200).json(newDetalle);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

const putDetallesP = async (req, res) => {
    const { idDetalles } = req.params;
    const { Pedido_ID, Producto_ID, Cantidad, Subtotal } = req.body;
    try {
        const oldDetalles = await Detalles_Pedido.findByPk(idDetalles);

        if (!oldDetalles) {
            return res.status(404).json({ mensaje: "Detalles de Pedido no encontrado" });
        }

        oldDetalles.Pedido_ID = Pedido_ID;
        oldDetalles.Producto_ID = Producto_ID;
        oldDetalles.Cantidad = Cantidad;
        oldDetalles.Subtotal = Subtotal;

        const modDetalles = await oldDetalles.save();
        res.status(200).json(modDetalles);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });

    }
}

const deleteDetallesP = async (req, res) => {
    try {
        const { idDetalles } = req.params;
        const respuesta = await Detalles_Pedido.destroy({
            where: {
                idDetalles: idDetalles,
            }
        });
        res.status(200).json({ mensaje: `Registro con id ${idDetalles} Eliminado ` });
    } catch (error) {
        res.status(400).json({ mensaje: `Registro No Eliminado ${error}` });
    }
}


export {getProductos, getProductosId, postProductos, putProductos, deleteProductos, 
    getUsuarios, getUsuariosId, postUsuarios, putUsuarios, deleteUsuarios, 
    getPedidos, getPedidosId , postPedidos, putPedidos, deletePedidos,
    getDetallesP, getDetallesId, postDetallesP, putDetallesP, deleteDetallesP
}