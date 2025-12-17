import "../app/css/menu.css";

function Menu(){
    return (
        <>
        <nav>
            <div>
                <h1>Produtos e mais</h1>
            </div>
            <div>
                <ul>
            <a href="/"> Home </a>
            <a href="/Cliente/usuario"> Cliente </a>
            <a href="/produto/novo"> Produtos </a>
            <a href="/compras/novo"> Carrinho </a>
                </ul>
            </div>
            </nav>
        </>
    );
}

export default Menu