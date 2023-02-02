import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/service/frutas.service';
import { UsersService } from 'src/app/service/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  public login !: FormGroup
  data:any[]=[]
  user:string="AD"
  pas:string="12345"
  token="true";
  username!:string;
  password!:string;

  constructor(private readonly Build:FormBuilder, private route:Router, public service:UsersService){}

  ngOnInit(): void {
     this.login=this.initForm();
    // this.mostrar()
  }

  initForm():FormGroup{
    return this.Build.group({
      Nombre:['',[Validators.required]],
      Apellidos:['',[Validators.required]],
      Correo:['',[Validators.required]],
      Password:['',[Validators.required]],
    })
    
  }

  validacion(){
    // localStorage.setItem('user','AD');
    // localStorage.setItem('pas','12345')

    // this.new_user = localStorage.getItem('user');
    // this.new_pass = localStorage.getItem('pas');

    if(this.user == this.username && this.pas==this.password){
      localStorage.setItem('logeado',this.token);
      this.route.navigate(['login']);
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos correctos',
        showConfirmButton: false,
        timer: 1500
      })
      
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Datos Incorrectos',
      text: 'Ingresa las credenciales correctas',
      footer: '<a href="">¿Porqué me sale este error?</a>'
    })
  }
}
  agregar(){
    if(this.login.valid){
      this.service.addUsers(this.login.value)
      Swal.fire({
        title: 'Agregado',
        text: 'Estas registrado',
        imageUrl: 'https://www.cyberdefendersprogram.com/assets/undraw-svgs/undraw_Security_on_s9ym.svg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.route.navigate(['login'])
    }else {
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos no deben estar vacios!'
      })
    }
  }
}

