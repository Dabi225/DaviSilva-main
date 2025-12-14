import {Cliente} from '../../../database/tabelas/tab_cliente.js';
import {redirect} from 'next/navigation';
import "../../css/tables.css";

function TelaNovoCliente() {
    return (
      <>
      <form action={insereCliente}>
        <label htmlFor='nome'>Nome</label><br />
        <input type='text' name='nome'/> <br />
  
        <label htmlFor="cpf">CPF</label><br />
        <input type= 'text' name='cpf' /> <br />
  
        <label htmlFor='data_nascimento'>Data de Nascimento</label><br />
        <input type='date' name='data_nascimento' /><br />

        <label htmlFor='email'>Email</label><br />
        <input type='email' name='email' /><br />

        <label htmlFor='telefone'>Telefone</label><br />
        <input type='text' name='telefone' /><br />
  
        <button>Continuar</button>
        </form>
        
        </>
    );
}

async function insereCliente(formData){
    'use server';
    const dados = {
        nome: formData.get('nome'),
        cpf: formData.get('cpf'),
        data_nascimento: formData.get('data_nascimento'),
        email: formData.get('email'),
        telefone: formData.get('telefone')
    };
    await Cliente.create(dados);
    redirect('../../endereco/criar');
}

export default TelaNovoCliente;