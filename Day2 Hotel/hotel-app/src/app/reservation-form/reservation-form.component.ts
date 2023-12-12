import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  

  reservationForm:FormGroup=new FormGroup({});

  
  constructor(private formBuilder:FormBuilder,
    private reservationService:ReservationService,
    private router:Router,
    private activatedRoute:ActivatedRoute){

     

  }

  ngOnInit(): void {
    this.reservationForm=this.formBuilder.group({
      checkInDate:["",Validators.required],
      checkOutDate:["",Validators.required],
      guestName:["",[Validators.required,Validators.min(2),Validators.max(8)]],
      email:["",[Validators.required,Validators.email]],
      roomNumber:["",[Validators.required,Validators.min(1),Validators.max(100)]]
    })
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.reservationService.getReservation(id).subscribe(reservation=>{
        if(reservation){
          this.reservationForm.patchValue(reservation);//it will patch the value to the form
        }
      });//get reservation from id
      
    }
  }



  onSubmit(){
    
    if(this.reservationForm.valid){

      let reservation=this.reservationForm.value;

    let id=this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
    //update
      this.reservationService.updateReservation(id,reservation);
    }
    else{
      //addNew
      this.reservationService.addResevertion(reservation);//gather all the value from the form like chcekInDate,CheckOutDate we dont need to do it manually
    }
    this.router.navigate(['/list']);
    
  }
}

}
