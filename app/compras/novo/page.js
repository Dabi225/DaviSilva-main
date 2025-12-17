import {compras } from '../../../database/tabelas/associação'
import { redirect } from 'next/navigation';

async function CancelarCom(formData){
    "use server";
    const id = formData.get('id');
    const Com = await compras.findByPk(id);
    await Com.destroy();
    redirect('/compras/novo');
}

async function Compras(){
    const Com = await compras.findAll();
    console.log(Com);
    return(
        <>
            <h1>Compras</h1>
            <a href="/pag/novo">Forma de Pagamento</a><br />
            <a href='/compras/criar'>+ Nova Compra</a>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID DO CLIENTE</th>
                        <th>DATA DA COMPRA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Com.map(function(Com){
                            return(
                                <tr key={Com.id_compra}>
                                    <td>{Com.id_compra}</td>
                                    <td>{Com.id_cliente}</td>
                                    <td>{new Date(Com.data_compras).toLocaleDateString()}</td>
                                    <form action={CancelarCom}>
                                        <input type= 'hidden' name='id' defaultValue={Com.id_compra}/>
                                        <button>Cancelar Compra</button>
                                    </form>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Compras;