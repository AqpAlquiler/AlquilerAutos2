package com.alquiler.demo.repositories;

import com.alquiler.demo.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Integer> {

    // 🔹 Buscar reservas por estado (ej: "Pendiente", "Confirmada", "Cancelada")
    List<Reserva> findByEstado(String estado);

    // 🔹 Buscar reservas realizadas en una fecha específica
    List<Reserva> findByFecha_reserva(LocalDate fechaReserva);

    // 🔹 Buscar reservas dentro de un rango de fechas (por ejemplo, para reportes)
    List<Reserva> findByFecha_inicioBetween(LocalDate inicio, LocalDate fin);

    // 🔹 Buscar reservas por cliente
    List<Reserva> findByCliente_Id_cliente(Integer idCliente);

    // 🔹 Buscar reservas por vehículo
    List<Reserva> findByVehiculo_Id_vehiculo(Integer idVehiculo);

    // 🔹 Buscar reservas activas en una fecha (reservas que cubren una fecha dada)
    List<Reserva> findByFecha_inicioBeforeAndFecha_finAfter(LocalDate fechaInicio, LocalDate fechaFin);
}
