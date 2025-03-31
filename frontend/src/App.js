import './App.css';
import CadastroCliente from './components/CadastroCliente';
import EditarCliente from './components/EditarCliente';
import Footer from './components/Footer';
import GerenciarClientes from './components/GerenciarClientes';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<GerenciarClientes />} />
            <Route path="/cadastrarCliente" element={<CadastroCliente />} />
            <Route path="/editarCliente" element={<EditarCliente />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
