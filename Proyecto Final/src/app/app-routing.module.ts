import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UAuthComponent } from './components/uauth/uauth.component';


const routes: Routes = [
  {path:'', component:UAuthComponent},
  {path: 'mainpage', component: MainpageComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
