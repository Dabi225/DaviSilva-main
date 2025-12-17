import { categoria } from "../../../database/tabelas/associação.js";
import { redirect } from "next/navigation";

function TelaNovoCat(){
    return (
        <>
            <form action={insereCat}>
                <label htmlFor='nome'>Nome da categoria</label>
                <input type='text' name='nome'></input>

                <button>Cadastrar</button>
            </form>
        </>
    );
}

async function insereCat(formData){
    'use server';
    const dados = {
        categoria: formData.get('nome')
    };
    await categoria.create(dados);
    redirect('/Categoria/novo');
}

export default TelaNovoCat;