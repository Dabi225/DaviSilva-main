import {Pagamentos} from '../../../database/tabelas/tab_pagamento';
import {redirect} from 'next/navigation';
import "../../css/tables.css";

function TelaNovoPagamento() {
    return (
      <>
      <form action={inserePagamento}>
        <label htmlFor='idcom'>Id do pagamento</label><br />
        <input type='text' name='idcom'/> <br />
  
        <label htmlFor="status">Status</label><br />
        <input type= 'text' name='status' /> <br />
  
        <label htmlFor='parcelas'>Parcelas</label><br />
        <input type='number' name='parcelas' /><br />

        <label htmlFor='valor-total'>Valor Total</label><br />
        <input type='number' name='valor-total' /><br />
  
        <button>Cadastrar</button>
        </form>
        
        </>
    );
}

async function inserePagamento(formData){
    'use server';
    const dados = {
        id_compra: formData.get('idcom'),
        status: formData.get('status'),
        parcelas: formData.get('parcelas'),
        valor_total: formData.get('valor-total')
    };
     await Pagamentos.create(dados);
    redirect('/pag/novo');
}

export default TelaNovoPagamento;