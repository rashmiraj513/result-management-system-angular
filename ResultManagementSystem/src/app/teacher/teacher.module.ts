import { HttpClientModule } from '@angular/common/http';
import { TeacherRoutingModule } from './teacher-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecordComponent } from './add-record/add-record.component';
import { EditResultComponent } from './edit-result/edit-result.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddRecordComponent,
    EditResultComponent,
    LoginComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TeacherModule { }