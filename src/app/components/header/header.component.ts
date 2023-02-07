import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  login: boolean = false
  rol: string='3'
  nombre!: string
  array!:Users[]
  token=true;
  
  constructor(private router:Router, private service:UsersService, private auth:AuthService){

    this.auth.statusUser().subscribe(res => {
      if (res) {
        console.log("Estado ->",res);
        console.log('esta logeado');
        console.log('UID->', res.uid);
        this.login = true
        this.getUSerData(res.uid)
      } else {
        console.log('No esta logeado');
        Swal.fire({
          icon: 'info',
          text: 'No esta logeado!',
          showConfirmButton: false,
          timer: 1500
        })
        this.login = false
      }
    })
  }


  ngOnInit(): void {
    
  }

  getUSerData(uid: string) {
    const path = 'users'
    const id = uid
    this.service.getUsers(path).subscribe(res => {
      console.log('info ->', res)
      this.array = res
      console.log("array ->",this.array);
      
      if (this.array) {
        console.log(this.array);
        
        for (let u of this.array) {
         if(u.id == id){
          
             this.rol = String(u.Rol)
             this.nombre = u.Nombres
             console.log("name ->", this.nombre);
            //  console.log("id ->", u.id); 
             console.log("rol ->", u.Rol); 
             if(this.rol == '0'){
              localStorage.setItem('admin', 'true')
             }
         }
         
        }
      }
    })
  }
  // logout(){
  //   this.auth.salir()
  //   localStorage.removeItem('logeado')
  //   this.router.navigate([''])
  // }

  logout() {
    this.auth.logout()
    this.service.delete()
    this.router.navigate([''])
    
    // Swal.fire({
    //   title: 'Desea cerrar sesion',
    //   icon: 'info',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, Log Out!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Exitoso!',
    //       'Has cerrado sesion correctamente',
    //       'success'
    //     )
      
    //     // this.auth.salir()
    //     // console.log(this.auth.salir());
    //     this.router.navigate([''])
    //   }
    // })

  }
}
