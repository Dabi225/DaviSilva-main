import {produto} from '../../../database/tabelas/associação';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";

function TelaNovoProduto() {
    return (
      <>
      <form action={insereProduto}>
        <label htmlFor='nome'>Nome</label><br />
        <input type='text' name='nome'/> <br />
  
        <label htmlFor="preco_un">Preco a Unidade</label><br />
        <input type= 'number' name='preco_un' /> <br />
  
        <label htmlFor='estoque'>Quantos no estoque</label><br />
        <input type='number' name='estoque' /><br />

        <label htmlFor='id_categoria'>Id da categoria</label><br />
        <input type='number' name='id_categoria' /><br />
  
        <button>Cadastrar</button>
        </form>
        
        </>
    );
}

async function insereProduto(formData){
    'use server';
    const dados = {
        nome: formData.get('nome'),
        preco_un: formData.get('preco_un'),
        estoque: formData.get('estoque'),
        id_categoria: formData.get('id_categoria')
    };
     await produto.create(dados);
    redirect('/produto/novo');
}

export default TelaNovoProduto;