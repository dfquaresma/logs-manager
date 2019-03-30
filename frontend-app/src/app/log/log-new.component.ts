import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Log } from './log';
import { LogService } from './log.service';

@Component({
    selector: 'log-new',
    templateUrl: 'log-new.component.html',
    styleUrls: ['log.component.css']
}) 
export class LogNewComponent {
    log = new Log;
    submitted: boolean = false; // check if the forms is submitted

    constructor(private logService: LogService) {}

    createLog(log: Log) {
        this.submitted = true;
        this.logService.createLog(log)
          .subscribe(data => { return true },
            error => {
              console.log("Error creating post");
              return Observable.throw(error);
        });
    }
}