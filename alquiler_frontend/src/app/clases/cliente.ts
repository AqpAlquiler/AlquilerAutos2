export class Cliente {

  constructor(
    public idCliente: number,
    public nombre: string,
    public apellido: string,
    public dni: string,
    public correo: string,
    public telefono: string,
    public direccion: string,
    public fechaNacimiento: Date
  ) {}

}
