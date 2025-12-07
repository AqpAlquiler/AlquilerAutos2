package com.alquiler.demo.services;

import com.alquiler.demo.entities.Cliente;
import java.util.List;
import java.util.Optional;

public interface ClienteService {
    List<Cliente> findAll();
    Cliente obtenerPorId(Integer id);

}
