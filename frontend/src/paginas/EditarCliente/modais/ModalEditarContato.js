import { Button, Card, CardActions, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Modal, Select, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function ModalEditarContato(
    { abrirModal, fecharModal, enviarFormularioContato, contatoToUpdate }
) {

    const [contato, setContato] = useState(contatoToUpdate);

    useEffect(() => {
        if (contatoToUpdate) {
            setContato(contatoToUpdate);
        }
    }, [contatoToUpdate]);

    const atualizarContato = (evento) => {
        const { name, value } = evento.target;
        setContato({ ...contato, [name]: value });
    }

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
                <CardHeader title="Editar Contato" />
                <CardContent>
                    <FormControl>
                        <Stack spacing={4}>
                            <InputLabel>Tipo do Contato</InputLabel>
                            <Select
                                name="tipoContato"
                                onChange={(e) => atualizarContato(e)}
                                value={contato.tipoContato}
                                required
                            >
                                <MenuItem value="TELEFONE">Telefone</MenuItem>
                                <MenuItem value="EMAIL">E-mail</MenuItem>
                            </Select>

                            <TextField
                                type="text"
                                label="Contato"
                                value={contato.valor}
                                name="valor"
                                required
                                onChange={(e) => atualizarContato(e)}
                            />

                            <TextField type="text" name="observacao"
                                label="Observação"
                                value={contato.observacao}
                                onChange={(e) => atualizarContato(e)}
                            />
                        </Stack>
                    </FormControl>
                </CardContent>

                <CardActions>
                    <Button onClick={() => enviarFormularioContato(contato)}>Atualizar</Button>
                </CardActions>

            </Card>
        </Modal>
    )
}