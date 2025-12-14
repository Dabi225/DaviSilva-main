import { DataTypes } from "sequelize";
import mysql from "../mysql";

const categoria = mysql.define('categoria',{
    id_categoria: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    categoria: DataTypes.TEXT
}, {timestamps: false});

mysql.sync();
export{categoria,mysql};