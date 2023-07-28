import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

const Usuario = sequelize.define('Usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
	allowNull: false,
    primaryKey: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Rol: {
    type: DataTypes.ENUM('Cliente', 'Administrador'),
    allowNull: false,
  },
  Direccion: {
    type: DataTypes.STRING,
  },
  Ciudad: {
    type: DataTypes.STRING,
  },
  Telefono: {
    type: DataTypes.STRING,
  },
},
{
    timestamps:false,
});

export { Usuario }