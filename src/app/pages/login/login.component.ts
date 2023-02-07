import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { AuthService } from 'src/app/service/auth.service';
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

  usuario!:Users[]
  constructor(private readonly Build:FormBuilder, private route:Router, public service:UsersService, private auth:AuthService){}

  ngOnInit(): void {
     this.login=this.initForm();
    // this.mostrar()
  }

  initForm():FormGroup{
    return this.Build.group({
      Correo:['',[Validators.required]],
      Password:['',[Validators.required]],
    })
  }


  validacion(){
   
    this.auth.isLogin(this.login.value)
    this.route.navigate([''])
    alert('Sesion correcta')
    // this.service.getUsers().subscribe(res=>{
    //   this.usuario = res

      
    //   for(let x of this.usuario){
    //     console.log(x.Rol)

    //     x.Rol=Number(x.Rol)
    //     switch(x.Rol){
    //       case 0:
    //         console.log("Admin")
    //         // this.auth.login(this.login.value.Correo, this.login.value.Password)
    //         this.route.navigate(['/tableprod'])
    //         break;
    //       case 1:
    //         console.log("User")
    //         // this.auth.login(this.login.value.Correo, this.login.value.Password)
    //         this.route.navigate(['/'])
    //     }
        // if(x.Rol == 1){
          
        //   this.auth.login(this.login.value.Correo, this.login.value.Password)
        //     // localStorage.setItem('logeado', 'true')
        //     this.route.navigate(['/'])
          
        // }else if(x.Rol == 0){
        //   this.route.navigate(['/tableprod'])
        //   this.auth.login(this.login.value.Correo, this.login.value.Password)
        //     // localStorage.setItem('logeado', 'true')
            
          
        // }
    //   }
    // })
}
  
}

