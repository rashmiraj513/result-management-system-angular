import { ResultService } from './../../Service/result.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    if(this.resultAvailable) this.resultAvailable = false;
    else this.router.navigate(['']);
  }

  getResult() {
    this.resultService.getStudentResult(this.resultForm.value).subscribe((res) => {
      if(res) {
        this.result = res;
        console.log('Details Found', res);
        this.resultAvailable = true;
      } else {
        this.resultAvailable = false;
        alert("No Result Found! Check Your Roll Number and Date of Birth");
      }
    })
  }
}
