import { TeacherService } from './../../Service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: any;

  constructor(private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
    if(!this.teacherService.loggedInUser) {
      this.router.navigate(['/teacher/login']);
    }
    this.getAllRecords();
  }

  getAllRecords() {
    this.teacherService.getResults().subscribe((res) => {
      // var temp = res.toString();
      if(res) {
        this.results = res;
      } else {
        this.results = res;
        alert('No Results Found!');
      }
    })
  }

  deleteRecord(result: any) {
    let text = 'Do you want to delete the result?';
    if(confirm(text) == true) {
      this.teacherService.deleteResult(result).subscribe((res) => {
        if(res) {
          alert('Deleted Successfully!');
          this.getAllRecords();
          this.router.navigate(['/teacher/results']);
        } else alert('Something went wrong!');
      })
    }
  }

  editRecord(result: any) {
    this.teacherService.resultToEdit = result;
    this.router.navigate(['/teacher/edit-record']);
  }
}