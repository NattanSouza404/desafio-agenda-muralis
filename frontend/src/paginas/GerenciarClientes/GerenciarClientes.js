import { useState, useEffect } from 'react';
import { consultarTodos, filtrarClientes, removerCliente } from '../../api/api';
import { Box, Button, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function GerenciarClientes() {

    const [linhas, setLinhas] = useState(
        []
    );

    useEffect(() => {
        const obterDados = async () => {
            const data = await consultarTodos();

            if (data !== undefined){
                setLinhas(data);    
            }
            
        };

        obterDados();
    }, []);

    const removerLinha = async (indice) => {
        const clienteDeletado = await removerCliente(linhas[indice].id);
        if (clienteDeletado) {
            const linhasAtualizadas = linhas.filter((_, i) => i !== indice);
            setLinhas(linhasAtualizadas);
        }
    };

    const [campoNome, setCampoNome] = useState("");

    const atualizarCampoNome = (e) => {
        setCampoNome(e.target.value);
    };

    const [campoCpf, setCampoCpf] = useState("");

    const atualizarCampoCpf = (e) => {
        setCampoCpf(e.target.value);
    };

    const atualizarTabela = async () => {
        const clientesFiltrados = await filtrarClientes(campoNome, campoCpf);
        
        if (clientesFiltrados === undefined){
            setLinhas([]);
            return;
        }

        setLinhas(clientesFiltrados);
    }

    return (
        <Box className='GerenciarClientes'>
            
            <Typography variant='h6'>Agenda</Typography>

            <Stack direction="row" spacing={6} padding={4}>

                <TextField name="nome"
                    label="Nome"
                    value={campoNome}
                    fullWidth
                    onChange={(e) => atualizarCampoNome(e)}
                />
            
                <TextField
                    label="CPF"
                    fullWidth
                    value={campoCpf}
                    onChange={(e) => atualizarCampoCpf(e)}
                    helperText="Formato xxx.xxx.xxx-xx"
                />

                <Button onClick={() => atualizarTabela()} fullWidth>
                    <SearchIcon/>Pesquisar
                </Button>

            </Stack>

            <Table id="resultados">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>CPF</TableCell>
                        <TableCell>Operações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {linhas.map((linha, indice) => (
                        <TableRow key={indice}>
                            <TableCell>{linha.nome}</TableCell>
                            <TableCell>{linha.cpf}</TableCell>
                            <TableCell>

                                <Link to={`/editarCliente/${linha.id}`} state={{ linha }}>
                                    <Button>
                                        <EditIcon/>Editar
                                    </Button>
                                </Link>

                                <Button onClick={() => removerLinha(indice)}>
                                    <DeleteIcon/>Remover
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}
