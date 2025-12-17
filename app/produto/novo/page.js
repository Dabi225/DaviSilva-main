import { produto } from "../../../database/tabelas/associação";
import {redirect} from 'next/navigation';
import "../../css/tables.css"

async function removeProduto(formData){
    'use server';
    const id = formData.get('id');
    const Prod = await produto.findByPk(id);
    await Prod.destroy();
    redirect('/produto/novo');
}

async function Produtos(){
    const  Produtos = await produto.findAll();
    console.log(Produtos);
    return(
        <>
            <h1>Produtos</h1>
            <a href='/produto/criar'>+ Colocar novo produto</a><br />
            <a href='/Categoria/novo'> Verificar categorias </a>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>ID_CATEGORIA</th>
                        <th>PRECO_UN</th>
                        <th>NO ESTOQUE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Produtos.map(function(prod){
                            return (
                                <tr key={prod.id_produto}>
                                    <td>{prod.id_produto}</td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.id_categoria}</td>
                                    <td>{prod.preco_un}</td>
                                    <td>{prod.estoque}</td>
                                    <td>
                                        <form action={'/produto/edita/'}>
                                            <input type='hidden' name='id' defaultValue={prod.id_produto}/>
                                            <button>Editar</button>     
                                        </form>
                                        <form action={removeProduto}>
                                            <input type='hidden' name='id' defaultValue={prod.id_produto}/><br />
                                            <button>&#10006;</button>
                                        </form>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Produtos;