import { ItemCompra } from "../../../database/tabelas/tab_ItemCompra";
import { redirect } from "next/navigation";

async function editaItens(formData){
    'use server'
    const id  = formData.get('id');
    const id_compra = formData.get('id_compra');
    const quantidade = formData.get('quantidade');
    const preco_un = formData.get('preco_un');

    const Itens = await ItemCompra.findByPk(id);

    Itens.id_compra=id_compra;
    Itens.quantidade=quantidade;
    Itens.preco_un=preco_un;

    await Itens.save();

    redirect('/ItemCompra/novo');
}

async function TelaEditaItens({searchParams}){
    const {id}= await searchParams;
    const Itens = await ItemCompra.findByPk(id);
    return(
        <>
            <form action={editaItens}>
                <input type='hidden' name='id' defaultValue={Itens.id}/>

                <label htmlFor="id_compra">ID da Compra</label>
                <input type="number" name="id_compra" defaultValue={Itens.id_compra}/> <br />

                <label htmlFor="id_produto">ID do Produto</label>
                <input type="number" name="id_produto" defaultValue={Itens.id_produto}/> <br />

                <label htmlFor="quantidade">Quantidade</label>
                <input type="number" name="quantidade" defaultValue={Itens.quantidade}/><br />

                <label htmlFor="preco_un">Preco da Unidade</label>
                <input type="number" name="preco_un" defaultValue={Itens.preco_un}/><br />

                <button>Salvar</button>
            </form>
        </>
    );
}

export default TelaEditaItens;