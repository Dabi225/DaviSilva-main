import { DataTypes } from "sequelize";
import mysql from '../mysql';

const Pagamentos = mysql.define('pagamento',{
    id_pagamento:  { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    id_compra: DataTypes.INTEGER,
    status: DataTypes.STRING,
    parcelas: DataTypes.INTEGER,
    valor_total : DataTypes.FLOAT
});

mysql.sync();   
export {Pagamentos, mysql};