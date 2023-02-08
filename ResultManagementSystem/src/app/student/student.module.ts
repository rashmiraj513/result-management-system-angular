import { StudentRoutingModule } from './student-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }