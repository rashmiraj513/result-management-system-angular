import { EditResultComponent } from './edit-result/edit-result.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'teacher/login', component: LoginComponent },
  { path: 'teacher/results', component: ResultsComponent },
  { path: 'teacher/add-record', component: AddRecordComponent },
  { path: 'teacher/edit-record', component: EditResultComponent }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TeacherRoutingModule { }