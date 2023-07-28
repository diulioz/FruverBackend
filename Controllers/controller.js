import { Producto } from "../Models/productos.js";

//Cuando hago esto puedo modificar las rutas
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
    const { Nombre, Descripcion, Precio, Cantidad_Disponible, Imagen } = req.body;
    try {
        const newProducto = await Producto.create({
            Nombre,
            Descripcion,
            Precio,
            Cantidad_Disponible,
            Imagen,
        });
        res.status(200).json(newProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
}

const putProductos = async (req, res) => {
    const { idProducto } = req.params;
    const { Nombre, Descripcion, Precio, Cantidad_Disponible, Imagen } = req.body;
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



export {getProductos, getProductosId, postProductos, putProductos, deleteProductos}