import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailsComponent } from './details/details.component';
import { UpvoteDirective } from './upvote.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    DetailsComponent,
    UpvoteDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
