package com.comercios_sa.agenda.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.comercios_sa.agenda.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    
    @Query(
        value = "SELECT * FROM cliente WHERE " +
            "(:nome IS NULL OR LOWER(cli_nome) LIKE LOWER('%' || :nome || '%')) AND " +
            "(:cpf IS NULL OR LOWER(cli_cpf) LIKE LOWER('%' || :cpf || '%'))",
        nativeQuery = true
    )
    List<Cliente> filtrarPorNomeECPF(@Param("nome") String nome, @Param("cpf") String cpf);

}
