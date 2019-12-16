import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './dashboard/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
//  optionList =[
// {
//   type:"plastic",
//   technique:"impression3D"
// },{
//   type:"plexiglass",
//   technique:"impression3D"
// },{
//   type:"lou7",
//   technique:"fraisage"
// }
// ]


// public  methode(Type:"impression3D") : Array<Object>{
//   let typesArray : Array<string>=[];
// this.optionList.forEach(type => {
//   if(Type === type.type){
//     typesArray.push(type.technique)
//   }
// });
// return typesArray
// }

 }
