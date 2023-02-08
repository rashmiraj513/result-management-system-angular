import { TeacherService } from './../../Service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})

export class AddRecordComponent implements OnInit {

  addResultForm= new FormGroup({
    rollNo: new FormControl('',Validators.required),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
    if(!this.teacherService.loggedInUser) {
      this.router.navigate(['/teacher/login']);
    }
  }

  addResult() {
    let resultData = this.addResultForm.value;
    this.teacherService.addResult(resultData).subscribe((res) => {
      if(res) {
        this.teacherService.loggedInUser = res;
        alert('Result Added Successfully!');
        this.addResultForm.reset();
        this.router.navigate(['/teacher/results']);
      } else {
        alert('Something went wrong!');
      }
    })
  }
}