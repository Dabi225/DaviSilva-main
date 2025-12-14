import { DataTypes } from "sequelize";
import mysql from "../mysql.js"

const ItemCompra = mysql.define('ItemCompra',{
    id_itemcompra:  { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id_compra: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    preco_un: DataTypes.DECIMAL
});

mysql.sync();
export{ItemCompra, mysql};