package com.alquiler.demo.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.alquiler.demo.entities.Vehiculo;
import com.alquiler.demo.services.VehiculoService;


@RestController
public class VehiculoController {
	
	private final VehiculoService vehiculoService;
	
	public VehiculoController(VehiculoService vehiculoService) {
		this.vehiculoService = vehiculoService;
	}

	@PostMapping("/crear")
	public Vehiculo save(@RequestBody Vehiculo vehiculo) {
		return vehiculoService.save(vehiculo);
	}

    @GetMapping("/vehiculo_listar")
    public String listarVehiculos() {
        return "admin/vehiculo_listar";
    }

    @GetMapping("/vehiculos_form")
    public String agregarVehiculo() {
        return "admin/vehiculo_form";
    }

    @GetMapping("/vehiculo_detalle")
    public String editarVehiculo() {
        return "admin/vehiculo_detalle";
    }

    @GetMapping("/vehiculos_mantenimiento")
    public String mantenimientoVehiculo() {
        return "admin/vehiculo_mantenimiento";
    }
}