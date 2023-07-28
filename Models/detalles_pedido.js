import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

const Detalles_Pedido = sequelize.define('Detalles_Pedido', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
},
{
    timestamps:false,
});

// Establecer la relación con Pedidos y Productos
Detalles_Pedido.belongsTo(Pedido, { foreignKey: 'Pedido_ID' });
Detalles_Pedido.belongsTo(Producto, { foreignKey: 'Producto_ID' });

export { Detalles_Pedido }