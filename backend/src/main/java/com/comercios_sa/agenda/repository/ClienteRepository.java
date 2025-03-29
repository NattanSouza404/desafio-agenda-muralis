package com.comercios_sa.agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.comercios_sa.agenda.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
