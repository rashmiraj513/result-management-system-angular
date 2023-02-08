import { Router } from '@angular/router';
import { TeacherService } from './../../Service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialogue',
  templateUrl: './logout-dialogue.component.html',
  styleUrls: ['./logout-dialogue.component.scss']
})
export class LogoutDialogueComponent implements OnInit {

  constructor(public dialogueRef: MatDialogRef<LogoutDialogueComponent>, private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
  }

  actionFunction() {
    this.teacherService.logOut();
    this.closeModal();
    this.router.navigate(['']);
  }

  closeModal() {
    this.dialogueRef.close();
  }
}
