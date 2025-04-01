import { useState, useEffect } from 'react';
import { consultarTodos, filtrarClientes, removerCliente } from '../api';
import { Box, Button, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function GerenciarClientes() {

    const [linhas, setLinhas] = useState(
        []
    );

    useEffect(() => {
        const obterDados = async () => {
            // TODO: se der vazio faz nada
            const data = await consultarTodos();
            setLinhas(data);
        };

        obterDados();
    }, []);

    const removerLinha = async (indice) => {
        // TODO: Tem certeza que quer deletar??

        if (true) {
            await removerCliente(linhas[indice].id);

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
        setLinhas(clientesFiltrados);
    }

    return (
        <Box className='GerenciarClientes'>
            <Typography component="h1" variant='h4'>Agenda</Typography>

            <Stack direction="row" spacing={6} padding={4}>

                <TextField name="nome"
                    label="Nome"
                    value={campoNome}
                    fullWidth
                    onChange={(e) => atualizarCampoNome(e)}
                />
            
                <TextField type='number'
                    label="CPF"
                    fullWidth
                    value={campoCpf}
                    onChange={(e) => atualizarCampoCpf(e)}
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
                                    <Button>Editar</Button>
                                </Link>

                                <Button onClick={() => removerLinha(indice)}>Remover</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}
