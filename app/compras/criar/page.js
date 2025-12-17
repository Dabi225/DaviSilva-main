import {compras } from "../../../database/tabelas/associação";
import {redirect} from "next/navigation";
import "../../css/cadastro.css";


function TelaNovoCom(){
    return (
        <>
            <form action={insereCom}>
                <label htmlFor='id_cliente'>Id do Cliente</label>
                <input type='text' name='id_cliente' />
                
                <label htmlFor='Datacom'>Data da Compra</label>
                <input type='date' name="Datacom" />

                <button>Comprar</button>
            </form>
        </>
    );
}

async function insereCom(formData){
    'use server';
    const dados = {
        id_cliente: formData.get('id_cliente'),
        data_compras: formData.get('Datacom')
    };
    await compras.create(dados);
    redirect('/compras/novo');;
}

export default TelaNovoCom;