export async function consultarTodos(){
    try {
        const response = await fetch("http://localhost:8080/cliente/listall");
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
