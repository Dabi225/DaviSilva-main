import {Pagamentos} from '../../../database/tabelas/tab_pagamento';
import {redirect} from 'next/navigation';

async function editaPagamento(formData){
    'use server'
    const id= formData.get('id');
    const idcom= formData.get('idcom');
    const status= formData.get('status');
    const parcelas= formData.get('parcelas');
    const valor_total= formData.get('valor-total');

    const pag = await Pagamentos.findByPk(id);

    pag.idcom=idcom;
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
        <input type='hidden' name='id' defaultValue={pag.id}/>

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