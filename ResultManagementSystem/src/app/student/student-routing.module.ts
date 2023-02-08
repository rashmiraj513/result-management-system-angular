import { ResultComponent } from './result/result.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'student/login', component: LoginComponent },
  { path: 'student/result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }