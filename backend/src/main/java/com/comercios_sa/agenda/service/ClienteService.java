package com.comercios_sa.agenda.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comercios_sa.agenda.model.Cliente;
import com.comercios_sa.agenda.model.Contato;
import com.comercios_sa.agenda.repository.ClienteRepository;
import com.comercios_sa.agenda.service.validator.ContatoValidator;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;
    
    @Autowired
    private ContatoValidator contatoValidator;

    public List<Cliente> getAllClientes(){
        return repository.findAll();
    }

    public Optional<Cliente> getCliente(int id){
        return repository.findById(id);
    }

    public List<Cliente> getClientesByFiltro(String nome, String cpf){
        return repository.filtrarPorNomeECPF(nome, cpf);
    }

    public Cliente addCliente(Cliente cliente) throws Exception{
        contatoValidator.validarContatos(cliente.getContatos());

        for (Contato c : cliente.getContatos()) {
            c.setCliente(cliente);
        }

        return repository.save(cliente);
    }

    public Cliente updateCliente(Cliente cliente) throws Exception {
        contatoValidator.validarContatos(cliente.getContatos());

        for (Contato c : cliente.getContatos()) {
            c.setCliente(cliente);
        }
        
        return repository.save(cliente);
    }

    public void deleteCliente(int id){
        repository.deleteById(id);
    }

}
