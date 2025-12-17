import { endereco } from "../../../database/tabelas/associação";
import { redirect } from "next/navigation"
import '../../css/tables.css';

async function removeEndereco(formData){
    'use server';
    const id = formData.get('id');
    const end = await endereco.findByPk(id);
    await end.destroy();
    redirect('/endereco/novo');
}

async function Endereco(){
    const end = await endereco.findAll();
    console.log(end);
    return(
        <>
            <h1>Endereco</h1>

            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>RUA</th>
                        <th>BAIRRO</th>
                        <th>CIDADE</th>
                        <th>ESTADO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        end.map(function(end){
                            return (
                                <tr key={end.id_endereco}>
                                    <td>{end.id_endereco}</td>
                                    <td>{end.rua}</td>
                                    <td>{end.bairro}</td>
                                    <td>{end.Cidade}</td>
                                    <td>{end.Estado}</td>
                                    <td>
                                        <form action={'/endereco/edita/'}>
                                            <input type='hidden' name='id' defaultValue={end.id_endereco}/>
                                            <button>Editar</button>
                                        </form>
                                        <form action={removeEndereco}>
                                            <input type='hidden' name='id' defaultValue={end.id_endereco}/><br />
                                            <button>&#10006;</button>
                                        </form>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <a href='../../Cliente/usuario'>Voltar</a>
        </>
    )
}

export default Endereco;