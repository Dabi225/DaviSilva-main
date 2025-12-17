import {Cliente} from "../../../database/tabelas/associação";
import {redirect} from "next/navigation";
import "../../css/cadastro.css";


async function editaCliente(formData){
    "use server";
    const id = formData.get("id");
    const nome = formData.get("nome");
    const email = formData.get("email");
    const telefone = formData.get("telefone");

    const cliente = await Cliente.findByPk(id);
    cliente.nome = nome;
    cliente.email = email;
    cliente.telefone = telefone;

    await cliente.save();
    redirect("/Cliente/usuario");
}

async function TelaEditaCliente({ searchParams }){
    const {id} = await searchParams;
    const cliente = await Cliente.findByPk(id);

    return(
        <>
        <form action={editaCliente}>
            <input type="hidden" name="id" defaultValue={cliente.id_cliente} />
            <label htmlFor="nome">Nome</label><br />
            <input type="text" name="nome" defaultValue={cliente.nome} /><br />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" defaultValue={cliente.email} /><br />
            <label htmlFor="telefone">Telefone</label>
            <input type="text" name="telefone" defaultValue={cliente.telefone} /><br />
            <button> Salvar</button>
            </form>
            </>
    );
}

export default TelaEditaCliente;