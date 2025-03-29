import logo from './logo.svg';
import './App.css';

async function consultarById(id){
  try {
      const response = await fetch("http://localhost:8080/cliente/list/"+id);
      const objeto = await response.json();

      document.getElementById('a').textContent = objeto.id;
      document.getElementById('b').textContent = objeto.nome;
  } catch (error) {
      console.error('Erro buscando dados:', error);
      document.getElementById("resultados").textContent = "Erro carregando dados.";
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={() => consultarById(1)}>AAAA</button>
        
        <table id="resultados">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Nome</th>
            </tr>
            <tr>
              <td id="a"></td>
              <td id="b"></td>
            </tr>
          </tbody>
        </table>
        
      </header>
    </div>
  );
}

export default App;
