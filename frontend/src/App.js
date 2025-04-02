import { Box, Container } from '@mui/material';
import './App.css';
import CadastroCliente from './paginas/CadastroCliente/CadastroCliente';
import EditarCliente from './paginas/EditarCliente/EditarCliente';
import Footer from './componentes/Footer';
import GerenciarClientes from './paginas/GerenciarClientes/GerenciarClientes';
import Navbar from './componentes/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container className="App">
        <Navbar/>
        <Box sx={{padding: 8}}>
          <Routes>
            <Route path="/" element={<GerenciarClientes />} />
            <Route path="/cadastrarCliente" element={<CadastroCliente />} />
            <Route path="/editarCliente/:id" element={<EditarCliente />} />
          </Routes>
        </Box>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
