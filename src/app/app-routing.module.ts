import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full',

  // },
  // { path: 'stepper', component: StepperComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
