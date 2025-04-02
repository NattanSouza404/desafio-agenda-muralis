function estourarErro(msg, error) {
    console.error(msg, error);
    alert(msg, error);
}

export async function consultarTodos() {
    try {
        const response = await fetch("http://localhost:8080/cliente/listall");
        return await response.json();
    } catch (error) {
        estourarErro("Erro na consulta: ", error);
    }
}

export async function filtrarClientes(nome, cpf) {
    try {
        const response = await fetch("http://localhost:8080/cliente/filter?nome=" + nome + "&cpf=" + cpf);
        return await response.json();
    } catch (error) {
        estourarErro("Erro na consulta: ", error);
    }
}

export async function consultarById(id) {
    try {
        const response = await fetch("http://localhost:8080/cliente/list/" + id);
        return await response.json();
    } catch (error) {
        estourarErro("Erro ao consultar: ", error);
    }
}

export async function cadastrarCliente(cliente) {

    try {

        if (!window.confirm("Deseja mesmo cadastrar esse cliente?")) {
            return false;
        }

        const url = "http://localhost:8080/cliente/add";

        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        }

        const result = await fetch(url, option);

        if (result.status === 201) {
            alert('Cadastrado com sucesso');
            return true;
        }

        const resposta = await result.json();
        throw new Error(resposta.error);

    }
    catch (error) {
        estourarErro("Erro no cadastro: ", error);
        return false;
    }
}

export async function atualizarCliente(cliente, msg) {

    try {
        if (!window.confirm(msg)) {
            return false;
        }

        const url = "http://localhost:8080/cliente/update";

        const option = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        }

        const result = await fetch(url, option);

        if (result.status === 200) {
            alert('Atualizado com sucesso!');
            return true;
        }

        const resposta = await result.json();
        throw new Error(resposta.error);

    } catch (error) {
        estourarErro("Erro ao atualizar: ", error);
        return false;
    }

}

export async function removerCliente(id) {

    try {
        if (!window.confirm("Deseja deletar esse cliente e seus contatos?")) {
            return false;
        }
        const url = 'http://localhost:8080/cliente/delete/' + id;

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 204) {
            alert('Deletado com sucesso');
            return true;
        }

        const resposta = await response.json();
        alert("Erro ao deletar: " + resposta.error);

    } catch (error) {
        estourarErro("Erro ao deleter: ", error);
        return false;
    }

}