import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/service/frutas.service';
import { Frutas } from 'src/app/interface/frutas';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  data:any[]=[]

  frutas!:Frutas[];
  constructor( private route:Router, public service:FrutasService){}
  ngOnInit(): void {
    this.mostrar()
  }

  mostrar(){
    this.service.getFrutas().subscribe (res=>{
     this.data = res
    }) 
   }
}
