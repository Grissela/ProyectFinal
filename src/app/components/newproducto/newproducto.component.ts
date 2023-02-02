import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/service/frutas.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-newproducto',
  templateUrl: './newproducto.component.html',
  styleUrls: ['./newproducto.component.css']
})
export class NewproductoComponent  implements OnInit{

  public AddProductos !: FormGroup
  data:any[]=[]

  constructor(private readonly Build:FormBuilder, private route:Router, public service:FrutasService){}

  ngOnInit(): void {
     this.AddProductos=this.initForm();
    // this.mostrar()
  }

  initForm():FormGroup{
    return this.Build.group({
      Nombre:['',[Validators.required]],
      Descripcion:['',[Validators.required]],
      Costo:['',[Validators.required]],
      Oferta:['',[Validators.required]],
      Imagen:['',[Validators.required]],
    })
    
  }
  agregar(){
    if(this.AddProductos.valid){
      this.service.addFrutas(this.AddProductos.value)
      Swal.fire({
        title: 'Agregado',
        text: 'Estas registrado',
        imageUrl: 'https://www.cyberdefendersprogram.com/assets/undraw-svgs/undraw_Security_on_s9ym.svg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.route.navigate(['tableprod'])
    }else {
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos no deben estar vacios!'
      })
    }
  }
}
