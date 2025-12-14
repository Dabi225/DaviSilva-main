import {ItemCompra} from '../../../database/tabelas/tab_ItemCompra'
import {redirect} from 'next/navigation';

function TelaNovoICom(){
    return (
        <>
            <form action={insereICom}>
                <label htmlFor="id_compra">ID da Compra</label>
                <input type="number" name="id_compra"/> <br />

                <label htmlFor="id_produto">ID do Produto</label>
                <input type="number" name="id_produto" /> <br />

                <label htmlFor="quantidade">Quantidade</label>
                <input type="number" name="quantidade"/><br />

                <label htmlFor="preco_un">Preco da Unidade</label>
                <input type="number" name="preco_un"/><br />

                <button>Cadastrar</button>
            </form>
        </>
    );
}

async function insereICom(formData){
    'use server';
    const dados = {
        id_compra: formData.get('id_compra'),
        id_produto: formData.get('id_produto'),
        quantidade: formData.get('quantidade'),
        preco_un: formData.get('preco_un')
    };
    await ItemCompra.create(dados);
    redirect('/ItemCompra/novo');
}

export default TelaNovoICom;