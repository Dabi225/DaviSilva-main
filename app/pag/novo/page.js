import { Pagamentos } from "../../../database/tabelas/tab_pagamento.js";
import { redirect } from "next/navigation";

async function Cancelamento(formData){
    'use server'
    const id = FormData.get('id');
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
            <a href='/pag/criar'>+ Colocar Novo Pagamento</a><br />
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
                                <tr key={pag.id}>
                                    <td>{pag.id}</td>
                                    <td>{pag.id_compra}</td>
                                    <td>{pag.status}</td>
                                    <td>{pag.parcelas}</td>
                                    <td>{pag.valor_total}</td>
                                    <td>
                                        <form action={'/pag/edita'}>
                                            <input type='hidden' name='id' defaultValue={pag.id}/>
                                            <button>Editar</button>
                                        </form>
                                        <form action={Cancelamento}>
                                            <input type="hidden" name='id' defaultValue={pag.id}/>
                                            <button>Cancelar</button>
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

export default Pagamento;