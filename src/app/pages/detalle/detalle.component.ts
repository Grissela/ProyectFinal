import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrutasService } from 'src/app/service/frutas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  nombre=""
  data:any[]=[]
  id = "";
  constructor(private service:FrutasService, private route:ActivatedRoute,private router:Router){}
 
  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    // this.mostrarpokemons()
    this.service.getFrutas().subscribe(res=>{
      this.data = res
    })
  }

  // mostrarpokemons(){
  //   let pokemon;

  //   for(let i = 1; i < 150; i++){

  //     this.service.getFrutas().subscribe(
  //       res => {
  //         pokemon = {
  //           id: i,
  //           Imagen: res.Imagen,
  //           Nombre: res.Nombre,
  //           orden: res.order
  //         }
  //         this.data.push(pokemon)
  //         console.log(res);
  //       },
  //       err => {
  //       }
  //     )
  //   }
  // }
}
