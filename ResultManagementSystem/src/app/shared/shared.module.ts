import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoutDialogueComponent } from './logout-dialogue/logout-dialogue.component';

@NgModule({
  declarations: [
    LogoutDialogueComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }