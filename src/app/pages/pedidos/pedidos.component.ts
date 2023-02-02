import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/service/frutas.service';
import { Frutas } from 'src/app/interface/frutas';
import { CarService } from 'src/app/service/car.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  data:any[]=[]

  frutas!:Frutas[];
  suma=0
  constructor( private route:Router, public service:FrutasService, public car:CarService){}
  ngOnInit(): void {
    this.mostrar()
  }

  mostrar(){
    this.car.getCar().subscribe (res=>{
     this.data = res
     for(let result of this.data){
      const suma=result.Cantidad*result.Costo
      this.suma +=suma
     }
    }) 
   }


}
