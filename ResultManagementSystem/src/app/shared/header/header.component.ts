import { LogoutDialogueComponent } from './../logout-dialogue/logout-dialogue.component';
import { TeacherService } from './../../Service/teacher.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public teacherService: TeacherService, public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogOutModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "350px";
    const modalDialog = this.matDialog.open(LogoutDialogueComponent, dialogConfig);
  }

  logOut() {
    this.openLogOutModal();
  }
}
