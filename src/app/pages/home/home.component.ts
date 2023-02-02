import { Component, OnInit } from '@angular/core';
import { FrutasService } from 'src/app/service/frutas.service';
import { Frutas } from 'src/app/interface/frutas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  array!:any[]
  nombre=""
  frutas!:Frutas[];
  id=""

 
  constructor(private route:ActivatedRoute,private service:FrutasService, private router:Router){}
  // private images=[
  //   {src:'assets/img/28.png'},
  //   {src:'assets/img/53.png'},
  //   {src:'assets/img/43.png'}
  // ];
  // private currentImage: any;

  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.service.getFrutas().subscribe(Frutas =>{
      this.frutas = Frutas.slice(0, 4)
      // this.array = Frutas.slice(0, 4);
      console.log(this.frutas)
      // const r= Math.floor(Math.random() * (this.frutas.length - 1)) + 0;
      // return this.frutas[r];
      // for(let x of r)
      // console.log(r)
    })
    


  }

  
  // mostrarFrutas(){
  //   let frutasInfo;

  //   for(let i=1; i<4; i++){
  //     this.service.getFrutas(String(i)).subscribe(
  //       res =>{
  //      frutasInfo={
  //       id:i,
  //       Nombre:res.Nombre,
  //       Descripcion:res.Descripcion;
  //       Costo:number;
  //       Oferta:number;
  //       Imagen:string;

  //      }
  //     })
  //   }
  // }
  goToDetalle(nombre:string){
    this.router.navigate(['/detalle', nombre]);
  }

  

}
