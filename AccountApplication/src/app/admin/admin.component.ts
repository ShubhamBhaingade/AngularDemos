import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDTO } from '../dto/account-dto';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  dto:AccountDTO = new AccountDTO(0,'',0,'','');

  
  

}
