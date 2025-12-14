import {endereco} from "../../../database/tabelas/tab_endereco";
import {redirect} from "next/navigation";

async function editaEndereco(formData){
    "use server";
    const id = formData.get("id");
    const rua = formData.get("rua");
    const cidade = formData.get("cidade");
    const bairro = formData.get("bairro");
    const estado = formData.get("estado");

    const Endereco = await endereco.findByPk(id);
    Endereco.rua = rua;
    Endereco.cidade = cidade;
    Endereco.bairro = bairro;
    Endereco.estado = estado;

    await Endereco.save();
    redirect("/endereco/novo");
}

async function TelaEditaEndereco({ searchParams }){
    const {id} = await searchParams;
    const Endereco = await endereco.findByPk(id);

    return(
        <>
        <form action={editaEndereco}>
            <input type="hidden" name="id" defaultValue={Endereco.id} />
            <label htmlFor="rua">Rua</label><br />
            <input type="text" name="rua" defaultValue={Endereco.rua} /><br />
            <label htmlFor="Cidade">Cidade</label>
            <input type="text" name="Cidade" defaultValue={Endereco.Cidade} /><br />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" name="bairro" defaultValue={Endereco.bairro} /><br />
            <label htmlFor="Estado">Estado</label>
            <input type="text" name="Estado" defaultValue={Endereco.estado} /><br />

            <button> Salvar</button>
            </form>
            </>
    );
}

export default TelaEditaEndereco;