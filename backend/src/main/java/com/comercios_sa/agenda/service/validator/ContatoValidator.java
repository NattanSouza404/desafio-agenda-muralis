package com.comercios_sa.agenda.service.validator;

import java.util.List;

import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.stereotype.Component;

import com.comercios_sa.agenda.model.Contato;
import com.comercios_sa.agenda.model.TipoContato;

@Component
public class ContatoValidator {

    public void validarContatos(List<Contato> contatos){
        for (Contato contato : contatos) {
            validarContato(contato);
        }
    }

    public void validarContato(Contato contato){
        validarTelefone(contato);
        validarEmail(contato);
    }

    public void validarTelefone(Contato contato){
        if (!contato.getTipoContato().equals(TipoContato.TELEFONE)){
            return;
        }

        if (!contato.getValor().matches("\\d+")){
            throw new IllegalArgumentException("Número de telefone só pode conter números!");
        }
    }

    public void validarEmail(Contato contato) {
        if (!contato.getTipoContato().equals(TipoContato.EMAIL)) {
            return;
        }

        boolean emailValido = EmailValidator.getInstance().isValid(contato.getValor()); 
        if (emailValido) {
            throw new IllegalArgumentException("Email é inválido!");
        }

    }

}
