import { TeacherService } from './../../Service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.scss']
})
export class EditResultComponent implements OnInit {

  editResultForm = new FormGroup({
    _id: new FormControl,
    rollNo: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required)
  });

  result: any = null;

  constructor(private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
    if(!this.teacherService.loggedInUser) {
      this.router.navigate(['/teacher/login']);
    }
    this.result = this.teacherService.resultToEdit;
    this.editResultForm.setValue( {
      _id: this.result._id,
      rollNo: this.result.rollNo,
      name: this.result.name,
      dob: this.result.dob,
      score: this.result.score
    });
  }

  editResult() {
    let editResultValue = this.editResultForm.value;
    this.teacherService.editResult(editResultValue).subscribe((res) => {
      var temp = res.toString();
      if(temp) {
        alert('Result Updated Successfully!');
        this.editResultForm.reset();
        this.teacherService.resultToEdit = null;
        this.router.navigate(['/teacher/results']);
      } else {
        alert('Something went wrong!');
      }
    })
  }
}