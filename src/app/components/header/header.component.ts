import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  constructor(private router:Router, private service:UsersService){}
  ngOnInit(): void {
    
  }

  

  logout(){
    localStorage.removeItem('logeado')
    this.router.navigate(['/login'])
  }
}
