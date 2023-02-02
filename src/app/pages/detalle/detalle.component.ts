import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { FrutasService } from 'src/app/service/frutas.service';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  nombre=""
  data:any[]=[]
  id = "";
  list!:any
  cantidad!:number;
  constructor(private service:FrutasService, private route:ActivatedRoute,private router:Router, private car:CarService){}
 
  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    // this.mostrarpokemons()
    this.service.getFrutas().subscribe(res=>{
      this.data = res
    })

    // this.guardar('pera',5,10)
  }

 enviar(){
 
 }

 guardar({Nombre, Cantidad, Costo}:any){
   this.list = {
    Nombre:Nombre,
    Cantidad:Cantidad,
    Costo:Costo
    
  }
  console.log(this.list)
  this.car.addCar(this.list)
  this.router.navigate(['/pedidos'])
  
  
  
 }
 
    

}
