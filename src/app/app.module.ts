import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailsComponent } from './details/details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TimeCountPipe } from './time-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    DetailsComponent,
    UserFormComponent,
    TimeCountPipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
