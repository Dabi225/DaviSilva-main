import {endereco} from '../../../database/tabelas/associação';
import {redirect} from 'next/navigation';
import "../../css/tables.css";

function TelaNovoEndereco() {
    return (
      <>
      <form action={insereEndereco}>
        <label htmlFor='rua'>Rua</label><br />
        <input type='text' name='rua'/> <br />
  
        <label htmlFor="Cidade">Cidade</label><br />
        <input type= 'text' name='Cidade' /> <br />
  
        <label htmlFor='bairro'>Bairro</label><br />
        <input type='text' name='bairro' /><br />

        <label htmlFor='Estado'>Estado</label><br />
        <input type='text' name='Estado' /><br />
  
        <button>Cadastrar</button>
        </form>
        
        </>
    );
}

async function insereEndereco(formData){
    'use server';
    const dados = {
        rua: formData.get('rua'),
        Cidade: formData.get('Cidade'),
        bairro: formData.get('bairro'),
        Estado: formData.get('Estado')
    };
     await endereco.create(dados);
    redirect('../../Cliente/usuario');
}

export default TelaNovoEndereco;