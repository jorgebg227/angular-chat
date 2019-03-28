import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages = [];
  messages$ = new Subject();

  constructor(private http: HttpClient) { }

  getUsers() {
    return [
      { name: 'jnroji'},
      { name: 'minko'},
      { name: 'misco'}
    ];
  }

  getHttpUsers() {
    return this.http.get('https://randomuser.me/api?results=5');
  }

  addMessage(message) {
    this.messages = [ message ];
    this.messages$.next(message);
  }
}
