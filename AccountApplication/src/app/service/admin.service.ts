import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDTO } from '../dto/account-dto';
import { Observable } from 'rxjs';
import { AccBasicDTO } from '../dto/acc-basic-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private api:HttpClient) { }
  contextPath='http://localhost:4545/';
  addAccountEndPoint=this.contextPath+'cg/register/account';
  getAccountEndPoint=this.contextPath+'cg/getall';

  accountRegistration(dto:AccountDTO):Observable<AccountDTO>{

    console.log("Inside service"+dto.balance+"   =  "+this.addAccountEndPoint);
    
    let result=this.api.post<AccountDTO>(`${this.addAccountEndPoint}`,dto);
    return result;
    
  }

  getAllAccount():Observable<AccBasicDTO[]>{
    let result=this.api.get<AccBasicDTO[]>(`${this.getAccountEndPoint}`);
    return result;
  }
}
