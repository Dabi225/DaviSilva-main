import { Pagamentos } from "../../../database/tabelas/associação";
import { redirect } from "next/navigation";
import '../../css/tables.css';

async function Cancelamento(formData){
    'use server'
    const id = formData.get('id');
    const pag = await Pagamentos.findByPk(id);
    await pag.destroy();
    redirect('/pag/novo');
}

async function Pagamento(){
    const pag = await Pagamentos.findAll();
    console.log(pag);
    return(
        <>
            <h1>Pagamento</h1>
            <a href='/pag/criar'>+ Nova Forma Pagamento</a><br />
            <a href='/ItemCompra/novo'> Verificar itens</a>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID DA COMPRA</th>
                        <th>STATUS</th>
                        <th>PARCELAS</th>
                        <th>VALOR_TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pag.map(function(pag){
                            return (
                                <tr key={pag.id_pagamento}>
                                    <td>{pag.id_pagamento}</td>
                                    <td>{pag.id_compra}</td>
                                    <td>{pag.status}</td>
                                    <td>{pag.parcelas}</td>
                                    <td>{pag.valor_total}</td>
                                    <td>
                                        <form action={'/pag/edita'}>
                                            <input type='hidden' name='id' defaultValue={pag.id_pagamento}/>
                                            <button>Editar</button>
                                        </form>
                                        <form action={Cancelamento}>
                                            <input type="hidden" name='id' defaultValue={pag.id_pagamento}/>
                                            <button>Cancelar</button>
                                        </form>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <a href='/compras/novo'>Voltar</a>
        </>
    )
}

export default Pagamento;