import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FrutasService } from 'src/app/service/frutas.service';
import { UsersService } from 'src/app/service/users.service';/*SERVICIO DE USUARIOS*/ 
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public register !: FormGroup
  data:any[]=[]

  constructor(private readonly Build:FormBuilder, private route:Router, public service:UsersService,  private authUser:AuthService){}

  ngOnInit(): void {
     this.register=this.initForm();
    // this.mostrar()
    // this.agregar()
  }

  // inicializar
  initForm():FormGroup{
    return this.Build.group({
      Nombres:['',[Validators.required]],
      Apellidos:['',[Validators.required]],
      NombreUsuario:['',[Validators.required]],
      Correo:['',[Validators.required]],
      Password:['',[Validators.required]],
      Rol:['',[Validators.required]],
    })
    
  }
  // agregar al servicio usuario
  async agregar(){
    // console.log(this.register.value)
    // console.log(this.register.value.Correo, this.register.value.Password)

    // if(this.register.valid){
    //   Swal.fire({
    //     title: 'Agregado',
    //     text: 'Estas registrado',
    //     imageUrl: 'https://www.cyberdefendersprogram.com/assets/undraw-svgs/undraw_Security_on_s9ym.svg',
    //     imageWidth: 400,
    //     imageHeight: 200,
    //     imageAlt: 'Custom image',
    //   })
    //   this.service.addUsers(this.register.value)/*para registrar en la tabla usuarios*/ 
    //   this.auth.enviodata(this.register.value.Correo, this.register.value.Password)/*para autentificar*/ 
    //   this.route.navigate(['/login'])
    // }else {
    //   Swal.fire({
    //     icon: 'warning',
    //     title: '',
    //     text: 'Los campos no deben estar vacios!'
    //   })
    // }
    
    console.log("Datos del registro: ",this.register.value)
    // para registrar al usuario y obtener su uid para que se haga un nuevo registro
    const res = await this.authUser.registerUser(this.register.value)
    if(res){ 
      console.log("Exito a Registrar usuario");
      const path = 'users'
      const id = String(res.user?.uid)
      console.log("UID ->", res.user?.uid);
      this.service.addUSer(this.register.value, path, id)
      this.route.navigate(['/login'])
    }
    console.log("Uid del usuario: ",res.user.uid)

  }
}
