import { categoria } from '../../../database/tabelas/associação.js';
import { redirect } from 'next/navigation';
import '../../css/tables.css';

async function removeCat(formData){
    'use server';
    const id = formData.get('id');
    const cat =  await categoria.findByPk(id);
    await cat.destroy();
    redirect('/Categoria/novo');
}

async function Categoria(){
    const cat = await categoria.findAll();
    console.log(cat);
    return(
        <>
            <h1>Categorias</h1>
            <a href='/Categoria/criar'>+ Colocar nova categoria</a>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME DA CATEGORIA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cat.map(function(cat){
                            return(
                                <tr key={cat.id_categoria}>
                                    <td>{cat.id_categoria}</td>
                                    <td>{cat.categoria}</td>
                                    <td>
                                        <form action={removeCat}>
                                            <input type= 'hidden' name='id' defaultValue={cat.id_categoria}/>
                                            <button>Remover</button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Categoria;