import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddaccountComponent } from './account/addaccount/addaccount.component';
import { ViewAccountComponent } from './account/view-account/view-account.component';import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account/account.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'



const allLinks: Routes = [
  { path: 'admin', component: AdminComponent },
  {path:'account',component:AccountComponent},
  { path: 'addAccount', component: AddaccountComponent },
  {path:'view',component:ViewAccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddaccountComponent,
    ViewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
