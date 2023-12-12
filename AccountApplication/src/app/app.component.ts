import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AccountApplication';

  router:Router;
  role:string='';
  isLogin:boolean=false;
  userName:string='';

  constructor(router:Router){

    this.router=router;
  }

  

  doLogin(userName:string,password:string){

    if(userName=='a' && password=='a'){

      this.router.navigate(['admin']);
      this.role='admin';
      this.isLogin=true;

    }
    else if(userName=='u' && password=='u'){
      this.router.navigate(['account']);
      this.role='user';
      this.isLogin=true;
    }

    if(this.isLogin == true)
    {
      this.userName = userName;
      localStorage.setItem("username",userName);
      localStorage.setItem("loginStatus",true+'');
      
    }

  }
}
