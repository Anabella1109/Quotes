import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  newQuote=new Quotes("","",0,0,"")
  @Output() addQuote=new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote=new Quotes("","",0,0,"")
  }

  constructor() { }

  ngOnInit() {
  }

}
