import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Users} from '../interface/users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore:Firestore) { }
  
  getUsers(path:string):Observable<Users[]>{
    const refUsers = collection(this.firestore, 'users');
    console.log(refUsers)
    return collectionData(refUsers , {idField:'id'}) as Observable<Users[]>

  }

  delete(){
    localStorage.removeItem('admin')
  }
  // addUsers(user:Users){
  //   const refUsers=collection(this.firestore, 'users')
  //   return addDoc(refUsers, user)
  // }

  // Para agregar un nuevo usuario 
  addUSer(user: any, path: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, path, id)
    return setDoc(docRef, user)
  }

}
