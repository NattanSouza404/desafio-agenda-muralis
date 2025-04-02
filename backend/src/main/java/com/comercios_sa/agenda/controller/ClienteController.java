package com.comercios_sa.agenda.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.comercios_sa.agenda.model.Cliente;
import com.comercios_sa.agenda.service.ClienteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    
    @Autowired
    private ClienteService service; 

    @GetMapping("/listall")
    public ResponseEntity<List<Cliente>> consultarTodos(){
        return ResponseEntity.ok(service.consultarTodosClientes());
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Optional<Cliente>> consultarClienteById(@PathVariable Integer id){
        
        Optional<Cliente> cliente = service.consultarClienteById(id);

        if (cliente.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok(cliente);

    }

    @GetMapping("/filter")
    public ResponseEntity<List<Cliente>> filtrarClientesBy(
        @RequestParam(required = false) String nome,
        @RequestParam(required = false) String cpf
    ){
        
        List<Cliente> clientes = service.filtrarClientesBy(nome, cpf);

        if (clientes.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok(clientes);
    }
    
    @PostMapping("/add")
    public ResponseEntity<?> adicionarCliente(@RequestBody @Valid Cliente cliente){
        Cliente clienteToAdd = service.adicionarCliente(cliente);
        return new ResponseEntity<>(clienteToAdd, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<?> atualizarCliente(@RequestBody @Valid Cliente cliente){
        Cliente clienteAtualizado = service.atualizarCliente(cliente);

        if (clienteAtualizado != null) {
            return ResponseEntity.ok(clienteAtualizado);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletarCliente(@PathVariable Integer id){
        service.deletarCliente(id);
        return ResponseEntity.noContent().build();
    }
}