import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  @Input() quote:Quotes;
  @Output() isNotWanted= new EventEmitter<boolean>();

  deleteQuote(NotWanted:boolean){
    this.isNotWanted.emit(NotWanted);
  }
  // upVote(index:number){
  //   let newIndex=index-1;
  //   this.quote.upvotes+=1;
  //   index=newIndex;
    
  // }


  constructor() { }

  ngOnInit() {
  }

}
