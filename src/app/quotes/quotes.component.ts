import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes=[
    new Quotes("Blue", "Blue",0,0,"Meh",new Date(2018,11,13)),
    new Quotes("Red", "Red",0,0,"0",new Date(2018,11,13)),
    new Quotes("Orange", "Orange",0,0,"0",new Date(2018,11,13)),
    new Quotes("Green", "Green",0,0,"0",new Date(2018,11,13)),
    new Quotes("Yellow", "Yellow",0,0,"0",new Date(2018,11,13))

  ];
  toggleDeets(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails;
  }
  deleteQuote(isNotWanted,index){
    if (isNotWanted){
        let toDelete=confirm(`Are you sure you want to delete " ${this.quotes[index].quote} "`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}
  
public numOfQuotes=5;
addNewQuote(quote){
  this.quotes.push(quote)
  this.numOfQuotes++;
}
upVote(index:number){
  this.quotes[index].upvotes+=1;
  let quotee=this.quotes[index];
  let newIndex=index-1;
  if(this.quotes[index].upvotes>Math.max(this.quotes[newIndex].upvotes,this.quotes[0].upvotes)){
   this.quotes[index]=this.quotes[index-1];
   this.quotes[index-1]=quotee;
  }
  
}
downVote(index:number){
  this.quotes[index].downvotes+=1;
  // let quotee=this.quotes[index];
  

}
  constructor() { }

  ngOnInit() {
  }

}

