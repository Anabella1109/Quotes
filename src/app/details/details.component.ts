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


  constructor() { }

  ngOnInit() {
  }

}
