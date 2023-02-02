import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/service/frutas.service';
import { Frutas } from 'src/app/interface/frutas';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-tableproductos',
  templateUrl: './tableproductos.component.html',
  styleUrls: ['./tableproductos.component.css']
})
export class TableproductosComponent implements OnInit{
  data:any[]=[]

  costoTotal!:number;
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

   enviar(){
    this.route.navigate(['nuevoprod'])
   }

   eliminar(fruta:Frutas){
    Swal.fire({
      title: 'Desea eliminar producto',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has Eliminado producto exitosamente',
          'success'
        )
        this.service.deleteFrutas(fruta)
        this.route.navigate(['tableprod'])
      }
    })
   }
}
