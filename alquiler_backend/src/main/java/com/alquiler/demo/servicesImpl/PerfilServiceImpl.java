package com.alquiler.demo.servicesImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alquiler.demo.entities.Cliente;
import com.alquiler.demo.entities.Pago;
import com.alquiler.demo.entities.Reserva;
import com.alquiler.demo.repositories.ClienteRepository;
import com.alquiler.demo.repositories.PagoRepository;
import com.alquiler.demo.repositories.ReservaRepository;
import com.alquiler.demo.services.PerfilService;

@Service
public class PerfilServiceImpl implements PerfilService {
	
	private final ClienteRepository clienteRepository;
    private final ReservaRepository reservaRepository;
    private final PagoRepository pagoRepository;

    public PerfilServiceImpl(ClienteRepository clienteRepository,
                             ReservaRepository reservaRepository,
                             PagoRepository pagoRepository) {
        this.clienteRepository = clienteRepository;
        this.reservaRepository = reservaRepository;
        this.pagoRepository = pagoRepository;
    }

    @Override
    public Cliente obtenerClientePorId(Integer id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @Override
    public List<Reserva> obtenerReservasPorCliente(Integer idCliente) {
        return reservaRepository.findByClienteIdCliente(idCliente);
    }

    @Override
    public List<Pago> obtenerPagosPorCliente(Integer idCliente) {
        return pagoRepository.findByClienteIdCliente(idCliente);
    }	

}
