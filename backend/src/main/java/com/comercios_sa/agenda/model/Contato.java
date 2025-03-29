package com.comercios_sa.agenda.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/***
 * Classe que representa os contatos que cada cliente pode ter.
 */

@Entity
@Getter
@Setter
@Table(name = "contato")
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contato_seq")
    @SequenceGenerator(name = "contato_seq", sequenceName = "contato_seq", allocationSize = 1)
    @Column(name = "ctt_id")
    private int id;

    @Column(name = "ctt_tipo", nullable = false)
    private TipoContato tipo;

    @Column(name = "ctt_valor", nullable = false)
    private String valor;

    @Column(name = "ctt_observacao")
    private String observacao;

    @ManyToOne
    @JoinColumn(name = "ctt_cli_id", nullable = false)
    private Cliente cliente;

}
