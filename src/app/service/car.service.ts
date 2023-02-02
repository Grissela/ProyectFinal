import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Car } from '../interface/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private firestore:Firestore) { }
  getCar():Observable<Car[]>{
    const refCar = collection(this.firestore, 'carrito');
    console.log(refCar )
    return collectionData(refCar , {idField:'id'}) as Observable<Car[]>

  }

  addCar(car:Car){
    const refCar=collection(this.firestore, 'carrito')
    return addDoc(refCar, car)
  }
}
