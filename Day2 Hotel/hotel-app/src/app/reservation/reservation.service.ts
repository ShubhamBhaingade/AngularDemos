import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 
  private reservations:Reservation[]=[];

  private apiUrl="http://localhost:3001";

  constructor(private http:HttpClient){
  
  }

  // constructor(){
  //   let savedReservation=localStorage.getItem('reservations');
  //   savedReservation?JSON.parse(savedReservation):[];
  // }

  getReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+"/reservation");
  }

  getReservation(id:string):Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl+"/reservation/"+id)
  }

  addResevertion(reservation:Reservation):void{
    reservation.id=Date.now().toString();
    this.reservations.push(reservation);
    // localStorage.setItem('reservations',JSON.stringify(this.reservations)); coommenting out this bcoz we will use mockoon now
    
  }

  deleteReservation(id:string):Observable< void>{

    return this.http.delete<void>(this.apiUrl+"/reservation/"+id);


    // let index=this.reservations.findIndex(res=>res.id===id);
    // this.reservations.splice(index);
    // localStorage.setItem('reservations',JSON.stringify(this.reservations));
  }

  updateReservation(id:string,updatedReservation:Reservation):void{
    let index=this.reservations.findIndex(res=>res.id===id);
    this.reservations[index]=updatedReservation;
    // localStorage.setItem('reservations',JSON.stringify(this.reservations));
  }
}
