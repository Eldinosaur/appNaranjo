export class Core{
  _id?: string
  cedula:string
  nombre:string
  apellido:string
  celular:string
  date:Date
  deliverdate:Date
  motivo:string

  constructor(cedula:string,
    nombre:string,
    apellido:string,
    celular:string,
    date:Date,
    deliverdate:Date,
    motivo:string){
    this.cedula=cedula
    this.nombre=nombre
    this.apellido=apellido
    this.celular=celular
    this.date=date
    this.deliverdate=deliverdate
    this.motivo=motivo
  }
}
