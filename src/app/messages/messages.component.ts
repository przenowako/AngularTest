import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { interval, take, Observable, Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  subject$: ReplaySubject<string> = new ReplaySubject<string>(4);
  zm: string = '';
  constructor(public messageService: MessageService) {

  }

  ngOnInit(): void {
   this.subject$.subscribe(value => this.zm = value);
   for(let i = 1; i < 10; i++){
    setTimeout(() => {
      this.subject$.next('' + i);}, i * 1000);
   }
  }
}
