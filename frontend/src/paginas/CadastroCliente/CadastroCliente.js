import { useState } from "react";
import { cadastrarCliente } from "../../api/api.js";
import { Box, Button, Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

export default function CadastroCliente() {

    const [cliente, setCliente] = useState(
        {
            nome: "",
            cpf: "",
            dataNascimento: "2000-01-01",
            endereco: "",
        }
    );

    const atualizarCampo = (evento) => {
        const { name, value } = evento.target;
        setCliente({ ...cliente, [name]: value });
    };

    const [contatos, setContatos] = useState([
        { tipoContato: "TELEFONE", valor: "", observacao: "" }
    ]);

    const adicionarNovoContato = () => {
        setContatos([...contatos,
            {
                tipoContato: "TELEFONE", valor: "", observacao: "" 
            }
        ]);
    };

    const atualizarContato = (index, evento) => {
        const { name, value } = evento.target;
        setContatos(contatos.map((contato, i) =>
            i === index
                ? { ...contato, [name]: value }
                : contato
        ));
    };

    const removerContato = (contato) => {
        setContatos(contatos.filter(c => c !== contato));
    }

    const enviarFormulario = () => {
        cliente.contatos = contatos;
        cadastrarCliente(cliente);
    };

    return (
        <Box className='CadastroCliente' alignItems={"center"} >
            <Button onClick={() => enviarFormulario()}>
                <SaveIcon/>Salvar
            </Button>
            <Grid container spacing={4}>

                <Grid size={6} justifyContent={"center"}>
                    <Typography variant="h6">Cliente</Typography>

                    <Card spacing={4}>
                        <CardContent>
                            <Stack spacing={4}>
                                <TextField type="text" name="nome" value={cliente.nome}
                                    label="Nome"
                                    onChange={(e) => atualizarCampo(e)}
                                    required
                                />

                                <TextField type="text" name="cpf" value={cliente.cpf}
                                    label="CPF"
                                    onChange={(e) => atualizarCampo(e)}
                                    required
                                    helperText="Formato xxx.xxx.xxx-xx"
                                />

                                <TextField
                                    type="date"
                                    name="dataNascimento"
                                    label="Data de Nascimento"
                                    value={cliente.dataNascimento}
                                    onChange={(e) => atualizarCampo(e)}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />

                                <TextField type="text" name="endereco"
                                    label="Endereço"
                                    onChange={(e) => atualizarCampo(e)}
                                />
                            </Stack>
                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={6}>
                    <Typography variant="h6">Contatos</Typography>

                    <Stack spacing={2}>
                        {
                            contatos.map((contato, index) => (
                                <Card key={index}>
                                    <CardContent>
                                        <FormControl component={"form"} key={index}>
                                            <InputLabel>Tipo do Contato</InputLabel>
                                            <Select
                                                name="tipoContato"
                                                onChange={(e) => atualizarContato(index, e)}
                                                label="Tipo do Contato"
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
                                                onChange={(e) => atualizarContato(index, e)}
                                            />

                                            <TextField type="text" name="observacao"
                                                label="Observação"
                                                onChange={(e) => atualizarContato(index, e)}
                                            />

                                        </FormControl>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => removerContato(contato)}>
                                            <DeleteIcon/>Remover
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        <Button onClick={() => adicionarNovoContato()}>
                            <AddIcon/>Novo contato
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}