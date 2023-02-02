import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth:Auth) { }

  enviodata(username:string, password:string){
    // console.log('registrado')
     return createUserWithEmailAndPassword(this.auth, username, password )
     
  }
}
