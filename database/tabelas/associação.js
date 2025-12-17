import {endereco} from "./tab_endereco.js";
import {Cliente} from "./tab_cliente.js";
import {categoria} from "./tab_categoria.js";
import {produto} from "./tab_produto.js";
import {compras} from "./tab_compra.js";
import {ItemCompra} from "./tab_ItemCompra.js";
import {Pagamentos} from "./tab_pagamento.js";

endereco.hasMany(Cliente, { foreignKey: "id_endereco" });
Cliente.belongsTo(endereco, { foreignKey: "id_endereco" });

categoria.hasMany(produto, { foreignKey: "id_categoria" });
produto.belongsTo(categoria, { foreignKey: "id_categoria" });

Cliente.hasMany(compras, { foreignKey: "id_cliente" });
compras.belongsTo(Cliente, { foreignKey: "id_cliente" });

compras.belongsToMany(produto, { through: ItemCompra, foreignKey: "id_compra" });
produto.belongsToMany(compras, { through: ItemCompra, foreignKey: "id_produto" });

compras.hasMany(ItemCompra, { foreignKey: "id_compra" });
ItemCompra.belongsTo(compras, { foreignKey: "id_compra" });

produto.hasMany(ItemCompra, { foreignKey: "id_produto" });
ItemCompra.belongsTo(produto, { foreignKey: "id_produto" });

compras.hasOne(Pagamentos, { foreignKey: "id_compra" });
Pagamentos.belongsTo(compras, { foreignKey: "id_compra" });

export {
  endereco,Cliente,categoria,produto,compras,ItemCompra,Pagamentos};