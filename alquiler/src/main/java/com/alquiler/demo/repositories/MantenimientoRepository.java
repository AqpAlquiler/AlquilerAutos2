package com.alquiler.demo.repositories;

import com.alquiler.demo.entities.Mantenimiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface MantenimientoRepository extends JpaRepository<Mantenimiento, Integer> {

    // 🔹 Buscar mantenimientos realizados entre dos fechas
    List<Mantenimiento> findByFecha_mantenimientoBetween(LocalDate inicio, LocalDate fin);

    // 🔹 Buscar mantenimientos por tipo exacto (ej: "Preventivo", "Correctivo")
    List<Mantenimiento> findByTipo(String tipo);

    // 🔹 Buscar mantenimientos realizados por un empleado específico
    List<Mantenimiento> findByEmpleado_Id_empleado(Integer id_empleado);

    // 🔹 Buscar mantenimientos asociados a un vehículo específico
    List<Mantenimiento> findByVehiculo_Id_vehiculo(Integer id_vehiculo);

    // 🔹 Buscar mantenimientos con costo mayor a cierto valor
    List<Mantenimiento> findByCostoGreaterThan(BigDecimal costoMinimo);

    // 🔹 Buscar mantenimientos dentro de un rango de costos
    List<Mantenimiento> findByCostoBetween(BigDecimal costoMinimo, BigDecimal costoMaximo);
}
