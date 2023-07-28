import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

const Producto = sequelize.define('Producto', {
  idProducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Cantidad_Disponible: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Imagen: {
    type: DataTypes.STRING,
  },
},
{
    timestamps:false,
});

export { Producto }