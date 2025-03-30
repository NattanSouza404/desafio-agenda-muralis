package com.comercios_sa.agenda.service;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.comercios_sa.agenda.model.Cliente;

import lombok.NonNull;

@Component
public class ClienteValidator {

    public void validar(@NonNull Cliente cliente) {
        validarSeVazio(cliente.getNome());
        validarDataNascimento(cliente.getDataNascimento());
    }

    private void validarSeVazio(String string) {
        if (string == null || string.isBlank()){
            throw new IllegalArgumentException("Nome não pode ser vazio!");
        }
    }

    private void validarDataNascimento(LocalDate dataNascimento) {
        if (dataNascimento == null){
            return;
        }

        LocalDate dataMinima = LocalDate.of(1900, 1, 1);
        LocalDate dataMaxima = LocalDate.now();

        if (dataNascimento.isBefore(dataMinima) || dataNascimento.isAfter(dataMaxima)){
            throw new IllegalArgumentException("Data inválida!");
        }
    }

}
