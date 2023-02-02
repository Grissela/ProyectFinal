import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  constructor(private router:Router, private service:UsersService, private auth:AuthService){}
  ngOnInit(): void {
    
  }

  // logout(){
  //   this.auth.salir()
  //   localStorage.removeItem('logeado')
  //   this.router.navigate([''])
  // }

  logout() {
    localStorage.removeItem('logeado')
    Swal.fire({
      title: 'Desea cerrar sesion',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log Out!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has cerrado sesion correctamente',
          'success'
        )
      
        this.auth.salir()
        console.log(this.auth.salir());
        this.router.navigate([''])
      }
    })

  }
}
