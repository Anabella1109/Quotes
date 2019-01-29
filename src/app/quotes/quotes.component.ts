import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes=[
    new Quotes("Don't cry because it's over, smile because it happened.", "Dr. Seus",0,0,"Anny Bella",new Date(2018,11,13)),
    new Quotes("Be yourself; everyone else is already takens", "Oscar Wilde",0,0,"D~babes",new Date(2018,11,13)),
    new Quotes("So many books, so little time.", "Frank Zappa",0,0,"Sallo Sal",new Date(2018,11,13)),
    new Quotes("A room without books is like a body without a soul.", " Marcus Tullius Cicero",0,0,"Anny Bella",new Date(2018,11,13)),
    new Quotes("You only live once, but if you do it right, once is enough.", "Mae West",0,0,"Sallo Sal",new Date(2018,11,13)),
    new Quotes("In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost",0,0,"Sallo Sal",new Date(2018,11,13)),
    new Quotes("Friendship ... is born at the moment when one man says to another :What! You too? I thought that no one but myself . . .", " C.S. Lewis, The Four Loves",0,0,"Sallo Sal",new Date(2018,11,18))


  ];
  @Output() isHighest= new EventEmitter<boolean>();
    
  
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

