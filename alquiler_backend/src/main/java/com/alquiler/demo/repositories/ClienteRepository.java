package com.alquiler.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alquiler.demo.entities.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    
}