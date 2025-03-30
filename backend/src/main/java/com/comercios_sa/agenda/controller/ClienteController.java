package com.comercios_sa.agenda.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
import org.springframework.web.bind.annotation.RestController;

import com.comercios_sa.agenda.model.Cliente;
import com.comercios_sa.agenda.service.ClienteService;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    
    @Autowired
    private ClienteService service; 

    @GetMapping("/listall")
    public ResponseEntity<List<Cliente>> getAllClientes(){
        return ResponseEntity.ok(service.getAllClientes());
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Optional<Cliente>> getCliente(@PathVariable Integer id){
        
        Optional<Cliente> cliente = service.getCliente(id);

        if (cliente.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok(cliente);

    }
    
    @PostMapping("/add")
    public ResponseEntity<?> addCliente(@RequestBody Cliente cliente){
        try {
            Cliente clienteToAdd = service.addCliente(cliente);
            return new ResponseEntity<>(clienteToAdd, HttpStatus.CREATED);
        }
        catch (Exception e) {
            return retornarRespostaErro(e);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCliente(@RequestBody Cliente cliente){
        try {
            Cliente clienteAtualizado = service.updateCliente(cliente);

            if (clienteAtualizado != null) {
                return ResponseEntity.ok(clienteAtualizado);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        }
        catch (Exception e) {
            return retornarRespostaErro(e);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Integer id){
        service.deleteCliente(id);
        return ResponseEntity.noContent().build();
    }

    private ResponseEntity<?> retornarRespostaErro(Exception e) {
        Map<String, String> response = new HashMap<>();
        response.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}