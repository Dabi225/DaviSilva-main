import {ItemCompra} from '../../../database/tabelas/tab_ItemCompra';
import {redirect} from 'next/navigation';

async function Remover(formData){
    'use server'
    const id = formData.get('id');
    const ICom = await ItemCompra.findByPk(id);
    await ICom.destroy();
    redirect('/ItemCompra/novo');
}
async function itemcompra(){
    const ICom = await ItemCompra.findAll();
    console.log(ICom);
    return(
        <>
            <h1>Items da Compra</h1>
            <a href='/ItemCompra/criar'>+ Colocar mais Produtos</a>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID_COMPRA</th>
                        <th>ID_PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>PRECO_UN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ICom.map(function(ICom){
                            return(
                                <tr key={ICom.id_itemcompra}>
                                    <td>{ICom.id_itemcompra}</td>
                                    <td>{ICom.id_compra}</td>
                                    <td>{ICom.id_produto}</td>
                                    <td>{ICom.quantidade}</td>
                                    <td>{ICom.preco_un}</td>
                                    <td>
                                        <form action={'/ItemCompra/editar'}>
                                        <input  type='hidden' name='id' defaultValue={ICom.id_itemcompra}/>
                                        <button>Editar</button>
                                        </form>
                                        <form action={Remover}>
                                            <input type="hidden" name="id" defaultValue={ICom.id_itemcompra}/>
                                            <button>Retirar</button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default itemcompra;