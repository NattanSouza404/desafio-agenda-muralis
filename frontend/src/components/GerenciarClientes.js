import { useState, useEffect } from 'react';
import { consultarTodos, filtrarClientes, removerCliente } from '../api';

export default function GerenciarClientes() {

    const [linhas, setLinhas] = useState(
        []
    );

    useEffect(() => {
        const obterDados = async () => {
            const data = await consultarTodos();
            setLinhas(data);
        };

        obterDados();
    }, []); 

    const removerLinha = async (indice) => {
        // TODO: Tem certeza que quer deletar??

        if (true){
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
        <div className='GerenciarClientes'>
            <p>Agenda</p>

            <label>Nome</label>
            <input name="nome" value={campoNome}
                onChange={(e) => atualizarCampoNome(e)}
            />

            <label>CPF</label>
            <input type='number'
                value={campoCpf}
                onChange={(e) => atualizarCampoCpf(e)}
            />

            <button onClick={() => atualizarTabela()}>Pesquisar</button>

            <table id="resultados">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas.map((linha, indice) => (
                        <tr key={indice}>
                            <td>{linha.nome}</td>
                            <td>{linha.cpf}</td>
                            <td>
                                <button>Editar</button>
                                <button onClick={() => removerLinha(indice)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
