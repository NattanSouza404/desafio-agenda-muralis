import { useState } from "react";
import { cadastrarCliente } from "../api.js";
import { Button, FormGroup, MenuItem, Select, TextField, Typography } from "@mui/material";

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
        <div className='CadastroCliente'>

            <Typography variant="p">{cliente.nome}</Typography>
            <FormGroup>
                <Typography variant="p">Cliente</Typography>

                <TextField type="text" name="nome" value={cliente.nome}
                    label="Nome"
                    onChange={(e) => atualizarCampo(e)}
                />

                <TextField type="text" name="cpf" value={cliente.cpf}
                    label="CPF"
                    onChange={(e) => atualizarCampo(e)}
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
            </FormGroup>

            <Typography variant="h3">Contato</Typography>

            {
                contatos.map((contato, index) => (
                    <FormGroup key={index}>
                        <Select name="tipoContato" 
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
                            onChange={(e) => atualizarContato(index, e)}
                        />

                        <TextField type="text" name="observacao"
                            label="Observação"
                            onChange={(e) => atualizarContato(index, e)}
                        />

                        <Button onClick={() => removerContato(contato)}>Remover</Button>
                    </FormGroup>
                ))
            }

            <Button onClick={() => adicionarNovoContato()}>Adicionar novo contato</Button>

            <Button onClick={() => enviarFormulario()}>Salvar</Button>
        </div>
    );
}