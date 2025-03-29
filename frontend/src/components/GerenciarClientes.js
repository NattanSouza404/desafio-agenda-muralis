import { consultarTodos } from '../api';

export default function GerenciarClientes() {

    return (
        <div className='GerenciarClientes'>
            <p>Agenda</p>

            <label>Nome</label>
            <input></input>

            <label>CPF</label>
            <input type='number'></input>

            <button onClick={() => consultarTodos()}>Pesquisar</button>

            <table id="resultados">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Operações</th>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>
                            <button>Editar</button>
                            <button>Remover</button>
                        </td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>
                            <button>Editar</button>
                            <button>Remover</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}