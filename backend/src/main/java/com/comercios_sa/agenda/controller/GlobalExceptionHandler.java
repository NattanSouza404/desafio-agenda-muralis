package com.comercios_sa.agenda.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
   
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationException(MethodArgumentNotValidException e) {

        StringBuilder msg = new StringBuilder();
        for (FieldError error : e.getBindingResult().getFieldErrors()) {
            msg.append(error.getDefaultMessage()).append("\n");
        }

        Map<String, String> response = new HashMap<>();
        response.put("error", msg.toString());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<?> handleValidationException(DataIntegrityViolationException e) {

        Throwable rootCause = e.getRootCause();
        String msg = "";
        if (rootCause != null) {
            msg += rootCause.getMessage();
        }

        Map<String, String> response = new HashMap<>();
        response.put("error", msg);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleValidationException(Exception e) {
        Map<String, String> response = new HashMap<>();
        response.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

}