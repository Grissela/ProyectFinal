import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  enviodata(email:string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email:string, password:string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  salir(){
    return signOut(this.auth);
  }
}