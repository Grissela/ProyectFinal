import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Frutas} from '../interface/frutas'

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  constructor(private firestore:Firestore) { }
  
  getFrutas():Observable<Frutas[]>{
    const refFrutas = collection(this.firestore, 'frutas');
    console.log(refFrutas )
    return collectionData(refFrutas , {idField:'id'}) as Observable<Frutas[]>

  }

  addFrutas(fruta:Frutas[]){
    const refFrutas=collection(this.firestore, 'frutas')
    return addDoc(refFrutas, fruta)
  }
  
  deleteFrutas(fruta:Frutas){
    const refFrutas = doc(this.firestore, 'frutas/'+fruta.id)
    return deleteDoc(refFrutas)
  }


}
