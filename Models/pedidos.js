import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';
import { Usuario } from "../Models/usuarios.js";

const Pedido = sequelize.define('Pedido', {
  idPedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Confirmado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  Total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
},
{
    timestamps:false,
});


// Relación entre Pedidos y Usuarios
Pedido.belongsTo(Usuario, { foreignKey: 'Usuario_ID' });

export { Pedido }