export default function EditarCliente() {

    /**
     *      TODO: useState
     * 
     *      const [cliente, setCliente] = useState({
     *          nome: null,
     *          cpf: null,
     *          dataNascimento: null,
     *          endereco: null
     *      });
     * 
     *      const atualizarNome = () => {
     *          setCliente((cliente) => ({ ...cliente, nome: "Jane Doe" }));
     *      };
     */

    const cliente = {
        nome: "Maurício",
        cpf: "11122233344",
        dataNascimento: (2, 3, 2),
        endereco: "Rua dos Palmares"
    }

    const contatos = [
        {
            tipoContato: "TELEFONE",
            valor: "987654321",
            observacao: "Só está disponível depois das 20:00"
        }
    ]

    return (
        <div className='editar-cliente'>

            <p>Informações Cliente</p>
            <div>
                <p>Nome: {cliente.nome}</p>
                <p>CPF: {cliente.cpf}</p>
                <p>Data de Nascimento: {cliente.dataNascimento}</p>
                <p>Endereço: {cliente.endereco}</p>
                <button>Editar cliente</button>
            </div>

            <p>Informações contatos</p>
            <div style={{border: "solid 3px"}}>
                <p>{contatos.at(0).tipoContato}: {contatos.at(0).valor}</p>
                <p>Obs.: {contatos.at(0).observacao}</p>
                <button>Editar contato</button>
                <button>Remover contato</button>
            </div>
            <div style={{border: "solid 3px"}}>
                <p>{contatos.at(0).tipoContato}: {contatos.at(0).valor}</p>
                <p>Obs.: {contatos.at(0).observacao}</p>
                <button>Editar contato</button>
                <button>Remover contato</button>
            </div>

            <button>Adicionar novo contato</button>
            <button>Remover cliente</button>

        </div>
    );
}