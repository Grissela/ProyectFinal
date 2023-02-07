import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          
      if (localStorage.getItem('admin')){
        alert('Eres administador')
      return true;
    }
    else{
      alert('You don´t permissions')
      this.router.navigate(['/login']);
      return false
  
    }
  }
  token():boolean{ 
    if(this.auth.statusUser()){
      return true
    }else{
      return false
    }
   
  }
  
}
