package com.alquiler.demo.repositories;

import com.alquiler.demo.entities.Contrato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ContratoRepository extends JpaRepository<Contrato, Integer> {

    // 🔹 Buscar contratos por rango de fechas de firma
    List<Contrato> findByFecha_firmaBetween(LocalDate inicio, LocalDate fin);

    // 🔹 Buscar contratos firmados antes de cierta fecha
    List<Contrato> findByFecha_firmaBefore(LocalDate fecha);

    // 🔹 Buscar contrato asociado a una reserva específica
    Optional<Contrato> findByReserva_Id_reserva(Integer id_reserva);

    // 🔹 Buscar todos los contratos firmados por un empleado
    List<Contrato> findByEmpleado_Id_empleado(Integer id_empleado);
}
