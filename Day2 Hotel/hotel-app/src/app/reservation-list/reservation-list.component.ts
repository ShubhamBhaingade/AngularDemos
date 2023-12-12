import { Component ,OnInit} from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {


  reservations:Reservation[]=[];//Array we need of reservation type;
  isVisible:boolean=true;
  text:string='Showing  Reservation';

  constructor(private reservationservice:ReservationService){//creating the instances of the service

  }
  ngOnInit(): void {
  this.reservationservice.getReservations().subscribe(reservations=>{
    this.reservations=reservations;
  });//method we have obtained from service
  }

  // doToggle(){

  //   if(this.isVisible){
  //     this.isVisible=false;
  //     this.text='Hide Reservations';
  //   }
  //   else if(!this.isVisible){
  //     this.isVisible=true;
  //     this.text='Show Reservations';
  //   }

  // }

  showRes(){

    if(this.isVisible!=true){
      this.isVisible=true;
      this.text="Showing Reservation";
    }
    else if(this.isVisible==true){
      this.isVisible=false;
      this.text="Showing Reservation";
    }

  }

  delete(id:string){
    this.reservationservice.deleteReservation(id).subscribe(()=>{
      console.log("Id is deleted");
      
    });
  }



}
