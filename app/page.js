import "./css/home.css"

function Home() {
    console.log("home");
    return (
      <div className="div-main">
        <h1 style={{color:'blue', textAlign:'center'}}>Lojas de Celulares e acessorios (Adm)</h1>
        <p style={style}>Carregador e muito mais</p>
      </div>
    );
  }
  
  const style = {
    border: 'o.5px solid blue',
    padding: '10px' 
  }
  export default Home;