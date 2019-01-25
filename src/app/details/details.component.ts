import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  quotes=[
    new Quotes("Blue", "Blue",0,0),
    new Quotes("Red", "Red",0,0),
    new Quotes("Orange", "Orange",0,0),
    new Quotes("Green", "Green",0,0),
    new Quotes("Yellow", "Yellow",0,0),

  ]

  constructor() { }

  ngOnInit() {
  }

}
