import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  //{path: 'messages', component: MessagesComponent},
  {path: '', component: LogInComponent},
  {path: '/register', component: RegisterComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
