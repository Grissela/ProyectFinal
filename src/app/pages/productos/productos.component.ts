import { Component, OnInit } from '@angular/core';
import { FrutasService } from 'src/app/service/frutas.service';
import { Frutas } from 'src/app/interface/frutas';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  nombre=""
  frutas!:Frutas[];
  id=""
  constructor(private route:ActivatedRoute,private service:FrutasService, private router:Router){}
  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.service.getFrutas().subscribe(Frutas =>{
      this.frutas = Frutas
    })
  }
  goToDetalle(nombre:string){
    this.router.navigate(['/detalle', nombre]);
  }

}
