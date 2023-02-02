import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    const token = sessionStorage.getItem("Token");
    if (token){
    
      return true;
    }
    else{
      alert('You don´t permissions')
      this.router.navigate(['/login']);
      return false
  
    }
  }
  token():boolean{  
    return false
  }
  
}
