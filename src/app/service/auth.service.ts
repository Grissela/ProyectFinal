import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Users } from '../interface/users';
// Esto se importa para tener el estado de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth, private aut:AngularFireAuth) { }

  // registerUser(email:string, password:string){
  //   return createUserWithEmailAndPassword(this.auth, email, password);
  // }

  // login(email:string, password:string){
  //   return signInWithEmailAndPassword(this.auth, email, password);
  // }

  // salir(){
  //   return signOut(this.auth);
  // }

  // Para registrar por medio del autentificador de firebase
  registerUser(user:Users){
    return createUserWithEmailAndPassword(this.auth, user.Correo, user.Password);
  }

  statusUser(){
    return this.aut.authState
    
  }

  isLogin({ Correo, Password }: any) {
    return signInWithEmailAndPassword(this.auth, Correo, Password)
    //
  }

  logout(){
    return signOut(this.auth)
  }


}
