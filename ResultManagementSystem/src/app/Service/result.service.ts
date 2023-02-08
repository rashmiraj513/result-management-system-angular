import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getStudentResult(data: any) {
    return this.http.post(this.url + '/getStudentResult', data);
  }
}