import {Pagamentos} from '../../../database/tabelas/associação';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";


async function editaPagamento(formData){
    'use server'
    const id= formData.get('id_pagamento');
    const idcom= formData.get('id_compra');
    const status= formData.get('status');
    const parcelas= formData.get('parcelas');
    const valor_total= formData.get('valor-total');

    const pag = await Pagamentos.findByPk(id);

    pag.id_compra=idcom;
    pag.status=status;
    pag.parcelas=parcelas;
    pag.valor_total=valor_total;

    await pag.save();

    redirect('/pag/novo');
}

async function TelaEditaPagamento({searchParams}) {
    const { id }= await searchParams;
    const pag = await Pagamentos.findByPk(id);
    return (
      <>
      <form action={editaPagamento}>
        <input type='hidden' name='id' defaultValue={pag.id_pagemento}/>

        <label htmlFor='idcom'>Id do pagamento</label><br />
        <input type='text' name='idcom' defaultValue={pag.idcom}/> <br />
  
        <label htmlFor="status">Status</label><br />
        <input type= 'text' name='status' defaultValue={pag.status} /> <br />
  
        <label htmlFor='parcelas'>Parcelas</label><br />
        <input type='number' name='parcelas' defaultValue={pag.parcelas}/><br />

        <label htmlFor='valor-total'>Valor Total</label><br />
        <input type='number' name='valor-total' defaultValue={pag.valor_total}/><br />
  
        <button>Salvar</button>
        </form>
        
        </>
    );
}

export default TelaEditaPagamento;