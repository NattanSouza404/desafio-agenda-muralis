import { useState } from "react";
import { cadastrarCliente } from "../api.js";

export default function CadastroCliente() {

    const [cliente, setCliente] = useState(
        {
            nome: "",
            cpf: "",
            dataNascimento: "",
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

            <p>Novo cliente</p>
            <p>{cliente.nome}</p>
            <form>
                <h3>Cliente</h3>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" value={cliente.nome}
                    onChange={(e) => atualizarCampo(e)}
                />

                <label htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" value={cliente.cpf}
                    onChange={(e) => atualizarCampo(e)}
                />

                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input type="date" name="dataNascimento"
                    onChange={(e) => atualizarCampo(e)}
                />

                <label htmlFor="endereco">Endereço</label>
                <input type="text" name="endereco"
                    onChange={(e) => atualizarCampo(e)}
                />
            </form>

            <h3>Contato</h3>

            {
                contatos.map((contato, index) => (
                    <form key={index}>
                        <label htmlFor="tipoContato">Tipo do contato (OBRIGATORIO)</label>
                        <select name="tipoContato" 
                            onChange={(e) => atualizarContato(index, e)}
                        >
                            <option value="TELEFONE">Telefone</option>
                            <option value="EMAIL">E-mail</option>
                        </select>

                        <label htmlFor="valor">Contato (OBRIGATORIO)</label>
                        <div key={index}>
                            <input
                                type="text"
                                value={contato.valor}
                                name="valor"
                                onChange={(e) => atualizarContato(index, e)}
                            />
                        </div>

                        <label htmlFor="observacao">Observação</label>
                        <input type="text" name="observacao"
                            onChange={(e) => atualizarContato(index, e)}
                        />

                        <p>{contato.tipoContato}: {contato.valor} ({contato.observacao})</p>
                        <button onClick={() => removerContato(contato)}>Remover</button>
                    </form>
                ))
            }

            <button onClick={() => adicionarNovoContato()}>Adicionar novo contato</button>

            <button onClick={() => enviarFormulario()}>Salvar</button>
        </div>
    );
}