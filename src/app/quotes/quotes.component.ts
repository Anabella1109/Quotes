import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quotes("Blue", "Blue",0,"0"),
    new Quotes("Red", "Red",0,"0"),
    new Quotes("Orange", "Orange",0,"0"),
    new Quotes("Green", "Green",0,"0"),
    new Quotes("Yellow", "Yellow",0,"0")

  ];
  toggleDeets(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails;
  }
  deleteQuote(isNotWanted,index){
    if (isNotWanted){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}

  constructor() { }

  ngOnInit() {
  }

}

