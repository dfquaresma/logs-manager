import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Log } from './log';
import { LogService } from './log.service';

@Component({
  selector: 'log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log.component.css']
})
export class LogListComponent implements OnInit {

  logs: Log[];

  constructor(
    private postService: LogService,
    private router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getLogs());
  }

  getLogs() {
    this.postService.getLogs() 
      .subscribe(logs => this.logs = logs);
  }

  goToShow(log: Log): void {
    let logLink = ['/logs', log.id];
    this.router.navigate(logLink);
  }

}
