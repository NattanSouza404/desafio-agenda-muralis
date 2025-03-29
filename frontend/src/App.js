import './App.css';
import GerenciarClientes from './components/GerenciarClientes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <GerenciarClientes/>
    </div>
  );
}

export default App;
