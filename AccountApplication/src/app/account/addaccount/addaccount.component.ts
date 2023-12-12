import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDTO } from 'src/app/dto/account-dto';
import { AdminService } from 'src/app/service/admin.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'


@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent {

  adminService:AdminService;
  router:Router;

  constructor(adminService:AdminService,router:Router){

    this.adminService=adminService;
    this.router=router;

  }

  dto:AccountDTO=new AccountDTO(
    5600,
    'Pune',
    11,
    'Saving',
    '12sw');

    doSubmit(){
      console.log(this.dto);
      this.adminService.accountRegistration(this.dto).subscribe(
        (data)=>{
          alert('Account saved'+data.loc);
          if(data.mobilePin!=0){
            this.dto=new AccountDTO(0,'',0,'','');
          }
          this.router.navigate(['addAccount']);
        },
        (err)=>{
          console.log('Error'+err);
          
        }
      )
    }

}
