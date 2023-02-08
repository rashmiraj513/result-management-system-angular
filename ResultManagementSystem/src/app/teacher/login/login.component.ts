import { TeacherService } from './../../Service/teacher.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private teacherService: TeacherService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    let loginData = this.loginForm.value;
    this.teacherService.getTeacher(loginData).subscribe((res) => {
      // var temp = res.toString();
      if(res) {
        this.teacherService.loggedInUser = res;
        alert('Login Successful!');
        this.router.navigate(['/teacher/results']);
      } else {
        alert('Invalid Email / Password!');
      }
    })
  }
}