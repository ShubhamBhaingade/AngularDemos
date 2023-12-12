import { Component } from '@angular/core';
import { BookManagement } from '../models/book-management';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  


  newBookTitle:string="";
  newBookAuthor:string="";
  booklibrary:BookManagement[]=[];

  ngOnInit(): void {
    let showBook=localStorage.getItem("bookdetails");
    this.booklibrary=showBook?JSON.parse(showBook):[];
  }


  addBook(){

    if(this.newBookTitle.trim() && this.newBookAuthor.trim()){
      let nbooklibrary={
        id:1,
        title:this.newBookTitle,
        author:this.newBookAuthor
      }
      this.booklibrary.push(nbooklibrary);
      localStorage.setItem("bookdetails",JSON.stringify(this.booklibrary));
      
      this.newBookTitle="";
      this.newBookAuthor="";
      
    }

  }

  deleteEntry(index:number){

    this.booklibrary.splice(index,1);
    localStorage.setItem("bookdetails",JSON.stringify(this.booklibrary));
  }

}
