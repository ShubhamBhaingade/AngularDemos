import { Component } from '@angular/core';
import { AccBasicDTO } from 'src/app/dto/acc-basic-dto';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {

  allAccounts:AccBasicDTO[]=[];

  adminService:AdminService;

  constructor(adminService:AdminService){
    this.adminService=adminService;
    this.adminService.getAllAccount().subscribe(
      (data)=>{
        this.allAccounts=data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getData(){
    this.adminService.getAllAccount().subscribe(
      (data)=>{
        this.allAccounts=data;
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
