import { Sequelize, Model, DataTypes } from 'sequelize'
import sequelize from '../config/database.js';
const Admin = sequelize.define('admin', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    unique:true,
    allowNull: flase
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: flase
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
});

export default Admin;