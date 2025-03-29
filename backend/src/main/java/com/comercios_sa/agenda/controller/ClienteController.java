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
        
        Optional<Cliente> a = service.getCliente(id);

        if (a.isEmpty()){
            return new ResponseEntity<>(a, HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(a);

    }
    
    @PostMapping("/add")
    public ResponseEntity<Cliente> addCliente(@RequestBody Cliente cliente){
        Cliente a = service.addCliente(cliente);
        return new ResponseEntity<Cliente>(a, HttpStatus.ACCEPTED);
    }

    @PutMapping("/update")
    public void updateCliente(@RequestBody Cliente cliente){
        service.updateCliente(cliente);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCliente(@PathVariable Integer id){
        service.deleteCliente(id);
    }
}
