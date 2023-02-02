import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Users} from '../interface/users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore:Firestore) { }
  
  getUsers():Observable<Users[]>{
    const refUsers = collection(this.firestore, 'users');
    console.log(refUsers)
    return collectionData(refUsers , {idField:'id'}) as Observable<Users[]>

  }

  addUsers(user:Users[]){
    const refUsers=collection(this.firestore, 'users')
    return addDoc(refUsers, user)
  }
}
