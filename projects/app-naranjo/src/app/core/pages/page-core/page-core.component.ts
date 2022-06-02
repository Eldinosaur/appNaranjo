import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'an-page-core',
  templateUrl: './page-core.component.html',
  styleUrls: ['./page-core.component.css']
})
export class PageCoreComponent implements OnInit {
  group!:FormGroup
  data: any;

  metaDataColumns: MetaDataColumn[] = [
    {field:"cedula", title:"Cedula"},
    {field:"nombre", title:"Nombre"},
    {field:"apellido", title:"Apellido"},
    {field:"celular", title:"Celular"},
    {field:"date", title:"Fecha Recibido"},
    {field:"deliverdate", title:"Fecha Entrega"},
    {field:"motivo", title:"Motivo"},
  ]
  recordsCore:any[]=[]
  dataCore:any[]=[]

  constructor(
    private coreService:CoreService
  ) {
    this.loadCore()
  }

  ngOnInit(): void {

  }



  save(){
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      cedula: new FormControl(this.data.cedula, Validators.required),
      nombre: new FormControl(this.data.nombre, Validators.required),
      apellido: new FormControl(this.data.apellido, Validators.required),
      celular: new FormControl(this.data.celular, Validators.required),
      date: new FormControl(this.data.date, Validators.required),
      deliverdate: new FormControl(this.data.deliverdate, Validators.required),
      motivo: new FormControl(this.data.motivo, Validators.required),
    })
  }

  loadCore() {
    this.coreService.loadCore().subscribe(data => {
      this.recordsCore = data
    }, error => {
      console.log(error)
    })
  }
}
