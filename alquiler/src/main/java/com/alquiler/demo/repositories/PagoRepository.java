package com.alquiler.demo.repositories;

import com.alquiler.demo.entities.Pago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface PagoRepository extends JpaRepository<Pago, Integer> {

    // 🔹 Buscar pagos realizados entre dos fechas
    List<Pago> findByFecha_pagoBetween(LocalDate inicio, LocalDate fin);

    // 🔹 Buscar pagos por método de pago (ej: "Efectivo", "Tarjeta", "Transferencia")
    List<Pago> findByMetodo_pago(String metodoPago);

    // 🔹 Buscar pagos por tipo de comprobante (ej: "Boleta", "Factura")
    List<Pago> findByTipo_comprobante(String tipoComprobante);

    // 🔹 Buscar pagos de un alquiler específico
    List<Pago> findByAlquiler_Id_alquiler(Integer idAlquiler);

    // 🔹 Buscar pagos mayores a un monto específico
    List<Pago> findByMontoGreaterThan(BigDecimal montoMinimo);

    // 🔹 Buscar pagos dentro de un rango de montos
    List<Pago> findByMontoBetween(BigDecimal montoMinimo, BigDecimal montoMaximo);
}
