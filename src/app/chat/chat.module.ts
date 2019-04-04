import { CommonsModule } from './../commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  }
];

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
