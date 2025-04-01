import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function EditarCliente() {

    const location = useLocation();
    const { linha } = location.state;

    const [cliente, setCliente] = useState(linha);
    const [contatos, setContatos] = useState(linha.contatos);

    return (
        <Box className='editar-cliente'>

            <p>Informações Cliente</p>
            <Box>
                <Typography variant="p">Nome: {cliente.nome}</Typography>
                <Typography variant="p">CPF: {cliente.cpf}</Typography>
                <Typography variant="p">Data de Nascimento: {cliente.dataNascimento}</Typography>
                <Typography variant="p">Endereço: {cliente.endereco}</Typography>
                <Button>Editar cliente</Button>
            </Box>

            <Typography variant="p">Informações contatos</Typography>
            <Box style={{border: "solid 3px"}}>
                <Typography variant="p">{contatos.at(0).tipoContato}: {contatos.at(0).valor}</Typography>
                <Typography variant="p">Obs.: {contatos.at(0).observacao}</Typography>
                <Button>Editar contato</Button>
                <Button>Remover contato</Button>
            </Box>
            <Box style={{border: "solid 3px"}}>
                <Typography variant="p">{contatos.at(0).tipoContato}: {contatos.at(0).valor}</Typography>
                <Typography variant="p">Obs.: {contatos.at(0).observacao}</Typography>
                <Button>Editar contato</Button>
                <Button>Remover contato</Button>
            </Box>

            <Button>Adicionar novo contato</Button>
            <Button>Remover cliente</Button>

        </Box>
    );
}