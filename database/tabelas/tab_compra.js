import { DataTypes } from "sequelize";
import mysql from "../mysql.js"

const compras = mysql.define('compra',{
    id_compra:  { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id_cliente: DataTypes.INTEGER,
    data_compras: DataTypes.DATE 
})

mysql.sync();
export {compras, mysql};