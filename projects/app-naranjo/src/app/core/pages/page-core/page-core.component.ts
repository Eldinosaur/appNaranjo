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
    this.group = new FormGroup({
      cedula: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      celular: new FormControl(),
      date: new FormControl(),
      deliverdate: new FormControl(),
      motivo: new FormControl(),
    })
  }

  ngOnInit(): void {


  }



  save(){
     const record = this.group.value
     let core = {...record}
     this.coreService.addCore(core).subscribe(()=>{})
     location.reload()

  }

  loadCore() {
    this.coreService.loadCore().subscribe(data => {

      this.recordsCore = data
console.log(data)
    }, error => {
      console.log(error)
    })
  }
}
