export class Vehiculo {

  constructor(
    public id: number,
    public placa: string,
    public marca: string,
    public modelo: string,
    public anio: number,
    public color: string,
    public asientos: number,
    public precioDia: number,
    public tipoVehiculo: string,
    public kilometraje: number,
    public sucursal: any,
    public disponible: boolean,
    public imagen: string,
    public combustible: string,
    public transmision: string,
    public estado: string
  ) {}

}
