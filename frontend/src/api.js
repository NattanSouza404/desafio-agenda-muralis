export async function consultarTodos(){
    try {
        const response = await fetch("http://localhost:8080/cliente/listall");
        return await response.json();
    } catch (error) {
        console.error('Erro buscando dados:', error);
    }
  }

export async function filtrarClientes(nome, cpf){
    try {
        const response = await fetch("http://localhost:8080/cliente/filter?nome="+nome+"&cpf="+cpf);
        return await response.json();
    } catch (error) {
        console.error('Erro buscando dados:', error);
    }
}

export async function consultarById(id){
  try {
      const response = await fetch("http://localhost:8080/cliente/list/"+id);
      return await response.json();
  } catch (error) {
      console.error('Erro buscando dados:', error);
  }
}

export async function cadastrarCliente(cliente){

    try {
        const confirmacaoUsuario = true; 
        //confirm("Deseja mesmo cadastrar?");

        if (confirmacaoUsuario){
        
            const url = "http://localhost:8080/cliente/add";

            const option = {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(cliente)
            }

            const result = await fetch(url, option);

            if (result.status === 201) {
                alert('Cadastrado com sucesso');
            }
            else {
                const resposta = await result.json();
                alert("Erro ao cadastrar: "+resposta.error);
            }
        }
        
    }
    catch (error){
        console.error('Erro ao cadastrar:', error);
    }
}

export async function atualizarCliente(cliente){
    
    try {
        const confirmacaoUsuario = true;

        if (confirmacaoUsuario){
            const url = "/cliente/update";

            const option = {
                method: 'PUT',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(cliente)
            }

            const result = await fetch(url, option);

            if (result.status === 200) {
                alert('Atualizado com sucesso!');
            }
            else {
                const resposta = await result.json();
                alert("Erro ao atualizar: "+resposta.error);
            }
        }
    } catch (error){
        console.error('Erro ao atualizar:', error);
    }
    
}

export async function removerCliente(id){
    
    try {

        const confirmacaoUsuario = true;

        if (confirmacaoUsuario){
            const url = 'http://localhost:8080/cliente/delete/'+id;

            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 204) {
                alert('Deletado com sucesso');
            }
            else {
                const resposta = await response.json();
                alert("Erro ao deletar: "+resposta.error);
            }

        }
    } catch (error){
        console.error('Erro ao deletar:', error);
    }
    
}