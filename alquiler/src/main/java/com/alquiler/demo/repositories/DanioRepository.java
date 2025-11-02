package com.alquiler.demo.repositories;

import com.alquiler.demo.entities.Danio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface DanioRepository extends JpaRepository<Danio, Integer> {

    // 🔹 Buscar daños registrados entre dos fechas
    List<Danio> findByFecha_registroBetween(LocalDate inicio, LocalDate fin);

    // 🔹 Buscar daños registrados por un empleado específico
    List<Danio> findByEmpleado_Id_empleado(Integer id_empleado);

    // 🔹 Buscar daños asociados a un alquiler específico
    List<Danio> findByAlquiler_Id_alquiler(Integer id_alquiler);

    // 🔹 Buscar daños cuyo costo estimado sea mayor a un valor dado
    List<Danio> findByCosto_estimadoGreaterThan(BigDecimal costoMinimo);

    // 🔹 Buscar daños cuyo costo estimado esté entre dos valores
    List<Danio> findByCosto_estimadoBetween(BigDecimal min, BigDecimal max);
}
