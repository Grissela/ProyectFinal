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


  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.service.getFrutas().subscribe(Frutas =>{
      this.frutas = Frutas.slice(0, 4)
      console.log(this.frutas)
    })

  }
  
  goToDetalle(nombre:string){
    this.router.navigate(['/detalle', nombre]);
  }

  

}
