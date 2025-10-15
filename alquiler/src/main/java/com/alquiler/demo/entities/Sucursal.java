package com.alquiler.demo.entities;
import jakarta.persistence.*;
import java.util.List;
@Entity
@Table(name = "Sucursal")
public class Sucursal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_sucursal;
    private String nombre;
    private String direccion;
    private String ciudad;
    private String telefono;
    @OneToMany(mappedBy = "sucursal")
    private List<Empleado> empleados;
    @OneToMany(mappedBy = "sucursal")
    private List<Vehiculo> vehiculos;
    // Getters y setters
}
