import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  public loggedInUser: any = null;
  public resultToEdit: any = null;
  
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTeacher(loginData: any) {
    return this.http.post(this.url + '/getTeacher', loginData);
  }

  getResults() {
    return this.http.get(this.url + '/getResults');
  }

  addResult(result: any) {
    return this.http.post(this.url + '/addResult', result);
  }

  deleteResult(result: any) {
    return this.http.post(this.url + '/deleteResult', result);
  }

  getResultById(result: any) {
    return this.http.post(this.url + '/getResultById', result);
  }

  editResult(result: any) {
    console.log(result);
    return this.http.post(this.url + '/updateResult', result);
  }

  logOut() {
    this.loggedInUser = null;
  }
}