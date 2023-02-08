import { ResultService } from './../../Service/result.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultForm = new FormGroup ({
    rollNo: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required)
  });

  result: any;

  resultAvailable: boolean = false;

  constructor(private router: Router, private resultService: ResultService) { }

  ngOnInit(): void {
  }

  goBack() : void {
    this.resultForm.reset();
    if(this.resultAvailable) this.resultAvailable = false;
    else this.router.navigate(['']);
  }

  getResult() {
    this.resultAvailable = false;
    this.resultService.getStudentResult(this.resultForm.value).subscribe((res) => {
      if(res != null) {
        this.result = res;
        console.log('Detalis Found', res);
        this.resultAvailable = true;
      } else {
        this.resultAvailable = false;
        alert('No Details Found! Check Your Roll No. and Date of Birth!');
      }
    })
  }
}