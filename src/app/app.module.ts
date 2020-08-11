import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyDataComponent } from './daily-data/daily-data.component';
import { DistanceComponent } from './distance/distance.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import {SociopoolService} from './sociopool.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DailyDataComponent,
    DistanceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent, pathMatch:'full'},
      {path:'dailyData',component:DailyDataComponent},
      {path:'distance',component:DistanceComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**', component:HomeComponent},
       ])
  ],
  providers: [SociopoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
