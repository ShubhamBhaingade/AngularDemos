import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

 

  newAppointmentTitle:string="";
  newAppointmentDate:Date=new Date();
  appointment:Appointment[]=[];
  isAvailiable:boolean=true;
  text:string='Show AppointMent';

  ngOnInit(): void { 

    let saveAppointments=localStorage.getItem("appointments");
    this.appointment=saveAppointments?JSON.parse(saveAppointments):[];

  }

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment={
        id:1,
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate
      }
      this.appointment.push(newAppointment);
      console.log(this.appointment);

      localStorage.setItem("appointments",JSON.stringify(this.appointment));
      
      this.newAppointmentTitle="";
      this.newAppointmentDate=new Date();
    }
  }

  showAppointment(){

    if(this.isAvailiable!=true){
      this.isAvailiable=true;
      this.text='Hide AppointMent';
    }
    else if(this.isAvailiable==true){
      this.isAvailiable=false;
      this.text="Show AppointMent";
    }

  }

  deleteAppointment(index:number){

    this.appointment.splice(index,1);

    localStorage.setItem("appointments",JSON.stringify(this.appointment));


  }

}
