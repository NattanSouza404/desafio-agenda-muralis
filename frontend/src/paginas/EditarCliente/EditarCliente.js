import { Box, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormGroup, Grid, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { atualizarCliente, removerCliente } from "../../api";

export default function EditarCliente() {

    const location = useLocation();
    const { linha } = location.state;

    const [cliente, setCliente] = useState(linha);

    const adicionarNovoContato = () => {
        setCliente({
            ...cliente,
            contatos:
                [...cliente.contatos, {
                    tipoContato: "TELEFONE", valor: "2", observacao: ""
                }]
        });

    };

    const [contatoToUpdate, setContatoToUpdate] = useState({
        id: -1, tipoContato: "TELEFONE", valor: "2", observacao: ""
    });

    const atualizarContatoToUpdate = (evento) => {
        const { name, value } = evento.target;
        setContatoToUpdate({ ...contatoToUpdate, [name]: value });
    }

    const [clienteToAtualizar, setClienteToAtualizar] = useState({
        nome: cliente.nome,
        cpf: cliente.cpf,
        dataNascimento: cliente.dataNascimento,
        endereco: cliente.endereco,
    });

    const [openModalEditarCliente, setOpenModalEditarCliente] = useState(false);
    const abrirModalEditarCliente = () => setOpenModalEditarCliente(true);
    const fecharModalEditarCliente = () => setOpenModalEditarCliente(false);

    const [openModalEditarContato, setOpenModalEditarContato] = useState(false);
    const abrirModalEditarContato = (contato) => {
        setContatoToUpdate({
            id: contato.id,
            tipoContato: contato.tipoTelefone,
            valor: contato.valor,
            observacao: contato.observacao
        });  

        setOpenModalEditarContato(true)
    };
    const fecharModalEditarContato = () => setOpenModalEditarContato(false);

    const atualizarCampoClienteAtualizado = (evento) => {
        const { name, value } = evento.target;
        setClienteToAtualizar({ ...clienteToAtualizar, [name]: value });
    };

    async function enviarFormulario() {
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

    async function enviarFormularioContato(){ 
        const contatosParaAtualizar = cliente.contatos.filter(c => c.id !== contatoToUpdate.id);
        
        const contatoParaAtualizar = {
            id: contatoToUpdate.id,
            tipoContato: contatoToUpdate.tipoContato,
            valor: contatoToUpdate.valor,
            observacao: contatoToUpdate.observacao
        };

        contatosParaAtualizar.push(contatoParaAtualizar);
        
        const updatedCliente = {
            ...cliente,
            contatos: contatosParaAtualizar
        };

        const clienteAtualizado = await atualizarCliente(updatedCliente, "Deseja mesmo atualizar esse contato?");
        if (clienteAtualizado) {
            setCliente(updatedCliente);
        }
    }

    return (
        <Box className='editar-cliente'>
            <Grid container spacing={8}>
                <Grid size={6}>
                    <Card>
                        <CardHeader title={cliente.nome} />
                        <CardContent>
                            <Stack direction={"column"} textAlign={"initial"} marginLeft={8}>
                                <Typography variant="p">CPF: {cliente.cpf}</Typography>
                                <Typography variant="p">Data de Nascimento: {cliente.dataNascimento}</Typography>
                                <Typography variant="p">Endereço: {cliente.endereco}</Typography>
                            </Stack>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => abrirModalEditarCliente()}>Editar cliente</Button>
                            <Button onClick={() => removerCliente(cliente)}>Remover cliente</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid size={6}>
                    <Stack spacing={2}>
                        {
                            cliente.contatos.map((contato, index) => (
                                <Card key={index}>
                                    <CardContent>
                                        <Typography variant="p">{contato.tipoContato}: {contato.valor}</Typography>
                                        <Typography variant="p">Obs.: {contato.observacao}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => abrirModalEditarContato(contato)}>Editar contato</Button>
                                        <Button onClick={() => removerContato(contato)}>Remover contato</Button>
                                    </CardActions>
                                </Card>
                            ))}
                        <Button onClick={adicionarNovoContato}>Adicionar novo contato</Button>
                    </Stack>
                </Grid>
            </Grid>

            <Modal
                open={openModalEditarContato}
                onClose={fecharModalEditarContato}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    position: "fixed", width: "100%", height: "100%", justifyContent: "center", alignContent: "center", justifyItems: "center"
                }}
            >
                <Card sx={{ backgroundColor: "white", padding: "16px" }}>
                    <CardHeader title="Editar Cliente" />
                    <CardContent>
                        <FormControl>
                            <Stack spacing={4}>
                                <InputLabel>Tipo do Contato</InputLabel>
                                <Select
                                    name="tipoContato"
                                    onChange={(e) => atualizarContatoToUpdate(e)}
                                    value={contatoToUpdate.tipoContato}
                                    required
                                >
                                    <MenuItem value="TELEFONE">Telefone</MenuItem>
                                    <MenuItem value="EMAIL">E-mail</MenuItem>
                                </Select>

                                <TextField
                                    type="text"
                                    label="Contato"
                                    value={contatoToUpdate.valor}
                                    name="valor"
                                    required
                                    onChange={(e) => atualizarContatoToUpdate(e)}
                                />

                                <TextField type="text" name="observacao"
                                    label="Observação"
                                    value={contatoToUpdate.observacao}
                                    onChange={(e) => atualizarContatoToUpdate(e)}
                                />
                            </Stack>
                        </FormControl>
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => enviarFormularioContato()}>Atualizar</Button>
                    </CardActions>

                </Card>
            </Modal>

            <Modal
                open={openModalEditarCliente}
                onClose={fecharModalEditarCliente}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    position: "fixed", width: "100%", height: "100%", justifyContent: "center", alignContent: "center", justifyItems: "center"
                }}
            >
                <Card sx={{ backgroundColor: "white", padding: "16px" }}>
                    <CardHeader title="Editar Cliente" />
                    <CardContent>
                        <FormGroup>
                            <Stack spacing={4}>
                                <TextField type="text" name="nome"
                                    label="Nome"
                                    value={clienteToAtualizar.nome}
                                    onChange={(e) => atualizarCampoClienteAtualizado(e)}
                                />

                                <TextField type="text" name="cpf"
                                    label="CPF"
                                    value={clienteToAtualizar.cpf}
                                    onChange={(e) => atualizarCampoClienteAtualizado(e)}
                                />

                                <TextField
                                    type="date"
                                    name="dataNascimento"
                                    label="Data de Nascimento"
                                    value={clienteToAtualizar.dataNascimento}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                    onChange={(e) => atualizarCampoClienteAtualizado(e)}
                                />

                                <TextField type="text" name="endereco"
                                    label="Endereço"
                                    value={clienteToAtualizar.endereco}
                                    onChange={(e) => atualizarCampoClienteAtualizado(e)}
                                />
                            </Stack>
                        </FormGroup>
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => enviarFormulario()}>Atualizar</Button>
                    </CardActions>

                </Card>
            </Modal>
        </Box>
    );
}