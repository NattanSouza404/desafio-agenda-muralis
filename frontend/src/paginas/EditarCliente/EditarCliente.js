import { Box, Button, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { atualizarCliente, removerCliente } from "../../api/api";
import CartaoCliente from "./cartoes/CartaoCliente";
import CartaoContato from "./cartoes/CartaoContato";
import ModalEditarCliente from "./modais/ModalEditarCliente";
import ModalEditarContato from "./modais/ModalEditarContato";
import ModalAdicionarContato from "./modais/ModalAdicionarContato";

export default function EditarCliente() {

    const location = useLocation();
    const { linha } = location.state;

    const [cliente, setCliente] = useState(linha);

    const [contatoToUpdate, setContatoToUpdate] = useState(
        {
            id: 0, tipoContato: "TELEFONE", valor: "2", observacao: ""
        }
    );

    const [openModalEditarCliente, setOpenModalEditarCliente] = useState(false);
    const abrirModalEditarCliente = () => setOpenModalEditarCliente(true);
    const fecharModalEditarCliente = () => setOpenModalEditarCliente(false);

    const [openModalEditarContato, setOpenModalEditarContato] = useState(false);
    const fecharModalEditarContato = () => setOpenModalEditarContato(false);
    const abrirModalEditarContato = (contato) => {
        setContatoToUpdate(contato);
        setOpenModalEditarContato(true);
    };

    const [openModalAdicionarContato, setOpenModalAdicionarContato] = useState(false);
    const fecharModalAdicionarContato = () => setOpenModalAdicionarContato(false);
    const abrirModalAdicionarContato = () => setOpenModalAdicionarContato(true);

    async function removerContato(contato) {
        const updatedCliente = {
            ...cliente,
            contatos: cliente.contatos.filter(c => c.id !== contato.id),
        };

        const clienteAtualizado = await atualizarCliente(updatedCliente, "Deseja mesmo deletar esse contato?");
        if (clienteAtualizado) {
            setCliente(updatedCliente);
        }
    }

    async function enviarFormularioContato(contatoToUpdate) {
        const contatosParaAtualizar = cliente.contatos.filter(c => c.id !== contatoToUpdate.id);
        contatosParaAtualizar.push(contatoToUpdate);

        const updatedCliente = {
            ...cliente,
            contatos: contatosParaAtualizar
        };

        const clienteAtualizado = await atualizarCliente(updatedCliente, "Deseja mesmo atualizar esse contato?");
        if (clienteAtualizado) {
            setCliente(updatedCliente);
        }
    }

    async function enviarFormulario(clienteToAtualizar) {
        const updatedCliente = {
            ...cliente,
            nome: clienteToAtualizar.nome,
            cpf: clienteToAtualizar.cpf,
            dataNascimento: clienteToAtualizar.dataNascimento,
            endereco: clienteToAtualizar.endereco,
        };

        const clienteAtualizado = await atualizarCliente(updatedCliente, "Deseja mesmo atualizar esse cliente?");

        if (clienteAtualizado) {
            setCliente(updatedCliente);
        }

    };

    async function enviarFormularioAdicionarContato(contatoToAdd) {
        const updatedCliente = {
            ...cliente,
            contatos: [...cliente.contatos, contatoToAdd]
        };

        const clienteAtualizado = await atualizarCliente(updatedCliente, "Deseja mesmo adicionar esse contato?");
        if (clienteAtualizado) {
            setCliente(updatedCliente);
        }
    }

    return (
        <Box className='editar-cliente'>
            <Grid container spacing={8}>
                <Grid size={6}>
                    <CartaoCliente
                        cliente={cliente}
                        abrirModalEditarCliente={abrirModalEditarCliente}
                        removerCliente={removerCliente}
                    />
                </Grid>

                <Grid size={6}>
                    <Stack spacing={2}>
                        {
                            cliente.contatos.map((contato, index) => (
                                <CartaoContato
                                    key={index}
                                    contato={contato}
                                    abrirModalEditarContato={() => abrirModalEditarContato(contato)}
                                    removerContato={removerContato}
                                />
                            ))}
                        <Button onClick={abrirModalAdicionarContato}>Adicionar novo contato</Button>
                    </Stack>
                </Grid>
            </Grid>

            <ModalEditarCliente
                cliente={cliente}
                fecharModalEditarCliente={fecharModalEditarCliente}
                enviarFormulario={enviarFormulario}
                openModalEditarCliente={openModalEditarCliente}
            />

            <ModalAdicionarContato
                openModalAdicionarContato={openModalAdicionarContato}
                fecharModalAdicionarContato={fecharModalAdicionarContato}
                enviarFormularioAdicionarContato={enviarFormularioAdicionarContato}
            />

            <ModalEditarContato
                contatoToUpdate={contatoToUpdate}
                openModalEditarContato={openModalEditarContato}
                fecharModalEditarContato={fecharModalEditarContato}
                enviarFormularioContato={enviarFormularioContato}  
            />
        </Box>
    );
}