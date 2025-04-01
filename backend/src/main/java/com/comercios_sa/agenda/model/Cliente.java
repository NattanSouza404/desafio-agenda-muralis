package com.comercios_sa.agenda.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cliente_seq")
    @SequenceGenerator(name = "cliente_seq", sequenceName = "cliente_seq", allocationSize = 1)
    @Column(name = "cli_id")
    private int id;

    @Column(name = "cli_nome", nullable = false)
    @NotBlank(message = "Nome não pode ser vazio!")
    private String nome;

    @Column(name = "cli_cpf", nullable = false, unique = true)
    @NotBlank(message = "CPF não pode ser vazio!")
    @Pattern(regexp = "\\d+", message = "CPF só pode conter números!")
    private String cpf;

    @Column(name = "cli_data_nascimento")
    @PastOrPresent(message = "Data de nascimento inválida!")
    private LocalDate dataNascimento;

    @Column(name = "cli_endereco")
    private String endereco;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    private List<Contato> contatos;

}
