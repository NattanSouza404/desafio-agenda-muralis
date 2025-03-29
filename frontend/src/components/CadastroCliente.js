export default function CadastroCliente() {
    return (
        <div className='CadastroCliente'>

            <p>Novo cliente</p>

            <form>
                <h3>Cliente</h3>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome"/>

                <label htmlFor="cpf">CPF</label>
                <input type="number" name="cpf"/>
                
                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input type="date" name="dataNascimento"/>

                <label htmlFor="endereco">Endereço</label>
                <input type="text" name="endereco"/>
            </form>

            <h3>Contato</h3>
            <form>
                <label htmlFor="tipoContato">Tipo do contato (OBRIGATORIO)</label>
                <select name="tipoContato">
                    <option value="TELEFONE">Telefone</option>
                    <option value="EMAIL">E-mail</option>
                </select>

                <label htmlFor="valor">Contato (OBRIGATORIO)</label>
                <input type="text" name ="valor"/>

                <label htmlFor="observacao">Observação</label>
                <input type="text" name ="observacao"/>

                <button>Remover</button>
            </form>

            <h3>Contato</h3>
            <form>
                <label>Tipo do contato</label>
                <select name="tipoContato">
                    <option value="TELEFONE">Telefone (OBRIGATORIO)</option>
                    <option value="EMAIL">E-mail</option>
                </select>

                <label htmlFor="valor">Contato (OBRIGATORIO)</label>
                <input type="text" name ="valor"/>

                <label htmlFor="observacao">Observação</label>
                <input type="text" name ="observacao"/>

                <button>Remover</button>
            </form>

            <button>Adicionar novo contato</button>
        </div>
    );
}