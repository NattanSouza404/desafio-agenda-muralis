import { Button, Card, CardActions, CardContent, CardHeader, FormGroup, Modal, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function ModalEditarCliente(
    { cliente, abrirModal, fecharModal, enviarFormulario }
) {

    const [clienteToAtualizar, setClienteToAtualizar] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        endereco: "",
    });

    useEffect(() => {
        if (cliente) {
            setClienteToAtualizar({
                nome: cliente.nome,
                cpf: cliente.cpf,
                dataNascimento: cliente.dataNascimento,
                endereco: cliente.endereco,
            });
        }
    }, [cliente]);

    const atualizarCampoClienteAtualizado = (evento) => {
        const { name, value } = evento.target;
        setClienteToAtualizar({ ...clienteToAtualizar, [name]: value });
    };

    return (
        <Modal
            open={abrirModal}
            onClose={fecharModal}
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
                    <Button onClick={() => enviarFormulario(clienteToAtualizar)}>Atualizar</Button>
                </CardActions>

            </Card>
        </Modal>
    );
}