package com.alquiler.demo.repositories;

import com.alquiler.demo.entities.Vehiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculoRepository extends JpaRepository<Vehiculo, Long> {

    // Ejemplo de consulta personalizada:
    Vehiculo findByPlaca(String placa);
    boolean existsByPlaca(String placa);
}
