import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Citar';
  quotes=[
    new Quotes("Blue", "Blue",0,0),
    new Quotes("Red", "Red",0,0),
    new Quotes("Orange", "Orange",0,0),
    new Quotes("Green", "Green",0,0),
    new Quotes("Yellow", "Yellow",0,0),

  ]
}
