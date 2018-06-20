import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { AboutComponent } from './about/about.component';
import { TripComponent } from './trip/trip.component';
import { StrongmanComponent } from './strongman/strongman.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { StrongmanDetailComponent } from './strongman-detail/strongman-detail.component';
import { StrongmanAddComponent } from './strongman-add/strongman-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailComponent,
    AboutComponent,
    TripComponent,
    StrongmanComponent,
    NewsDetailComponent,
    StrongmanDetailComponent,
    StrongmanAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
