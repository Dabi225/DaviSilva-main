import { produto } from "../../../database/tabelas/associação";
import { redirect } from "next/navigation";
import "../../css/cadastro.css";


async function editaProduto(formData) {
  "use server";
  const id = formData.get("id_produto");
  const nome = formData.get("nome");
  const preco_un = formData.get("preco_un");
  const estoque = formData.get("estoque");
  const id_categoria = formData.get("id_categoria");

  const Produto = await produto.findByPk(id);

  Produto.nome = nome;
  Produto.preco_un = preco_un;
  Produto.estoque = estoque;
  Produto.id_categoria = id_categoria;

  await Produto.save();

  redirect("/produto/novo");
}

async function TelaEditaProduto({ searchParams }) {
  //console.log("sP: ", await searchParams);
  const { id } = searchParams;
  const Produto = await produto.findByPk(id);

  if (!Produto) {
    return <p>Produto não encontrado para o ID {id}.</p>;
  }
  return (
    <>
      <form action={editaProduto}>
        <input type="hidden" name="id" defaultValue={Produto.id_produto} />
        <label htmlFor="nome">Nome</label>
        <br />
        <input type="text" name="nome" defaultValue={Produto.nome} /> <br />
        <label htmlFor="preco_un">Preco a Unidade</label>
        <br />
        <input type="number" name="preco_un" defaultValue={Produto.preco_un}/>
        <br />
        <label htmlFor="estoque">Quantos no estoque</label>
        <br />
        <input type="number" name="estoque" defaultValue={Produto.estoque} />
        <br />
        <label htmlFor="id_categoria">Id da categoria</label>
        <br />
        <input type="number" name="id_categoria" defaultValue={Produto.id_categoria}
        />
        <br />
        <button>Salvar</button>
      </form>
    </>
  );
}

export default TelaEditaProduto;
