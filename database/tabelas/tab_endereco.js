import { DataTypes } from "sequelize";
import mysql from '../mysql';

const endereco = mysql.define('endereco', {
    id_endereco:  { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rua: DataTypes.STRING,
    bairro: DataTypes.STRING,
    Cidade: DataTypes.STRING,
    Estado:DataTypes.STRING
});

mysql.sync();
export{endereco, mysql};
