import { Cliente } from "../../../database/tabelas/associação";
import { redirect } from "next/navigation";

async function removeCliente(formData){
    'use server';
    const id = formData.get('id');
    const cli = await Cliente.findByPk(id);
    await cli.destroy();
    redirect('/cliente/usuario');
}
async function Clientes(){
    const cli = await Cliente.findAll();
    console.log(cli);
    return(
        <>
            <h1>Clientes</h1>
            <a href='/Cliente/novo'>+ Criar um novo cliente</a><br />
            <a href='/endereco/novo'>Entrar em endereço</a>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>DATA_NASCIMENTO</th>
                        <th>EMAIL</th>
                        <th>TELEFONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cli.map(function(cli){
                            return (
                                <tr key={cli.id_cliente}>
                                    <td>{cli.id_cliente}</td>
                                    <td>{cli.nome}</td>
                                    <td>{cli.cpf}</td>
                                    <td>{new Date(cli.data_nascimento).toLocaleDateString()}</td>
                                    <td>{cli.email}</td>
                                    <td>{cli.telefone}</td>
                                    <td>
                                    <form action={'/Cliente/edita/'}>
                                            <input type='hidden' name='id' defaultValue={cli.id_cliente}/>
                                            <button>Editar</button>     
                                        </form>
                                        <form action={removeCliente}>
                                            <input type='hidden' name='id' defaultValue={cli.id_cliente}/><br />
                                            <button>&#10006;</button>
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

export default Clientes;