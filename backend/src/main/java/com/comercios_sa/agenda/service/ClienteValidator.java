package com.comercios_sa.agenda.service;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.comercios_sa.agenda.model.Cliente;
import com.comercios_sa.agenda.model.Contato;

@Component
public class ClienteValidator {

    public void validar(Cliente cliente) throws Exception{
       
        if (cliente.getNome().isBlank() || cliente.getNome().isEmpty()){
            throw new Exception("Nome não pode ser vazio!");
        }

        if (cliente.getDataNascimento() != null && cliente.getDataNascimento().isAfter(LocalDate.now())){
            throw new Exception("Data inválida!");
        }

        for (Contato contato : cliente.getContatos()) {
            validar(contato);
        }
    }

    private void validar(Contato contato) {
        
    }

}
