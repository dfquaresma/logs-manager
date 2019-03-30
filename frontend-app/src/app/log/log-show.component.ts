import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Log } from './log';
import { LogService } from './log.service';

@Component({
    selector: 'log-show',
    templateUrl: 'log-show.component.html',
    styleUrls: ['log.component.css']
})
export class LogShowComponent implements OnInit {
    
    id: number;
    routeId: any;
    errorMessage: any;
    returnUrl: string;
    editBtnClicked: boolean = false;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private logService: LogService
    ) {}
    
    @Input() log: Log;

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/logs';
        this.routeId = this.route.params.subscribe(
          params => {
            this.id = +params['id'];
          }
        )
        let logRequest = this.route.params
            .flatMap((params: Params) => 
              this.logService.getLog(+params['id']));
        logRequest.subscribe(response => this.log = response.json());    
      }
    
    update(log: Log) {
    this.editBtnClicked = true;
    this.logService.updateLog(log)
        .subscribe(data => {
        return true
        }, error => {
        console.log('Error editing Post');
        return Observable.throw(error);
        })
    }

    delete(log: Log) {
    this.logService.deleteLog(this.log.id)
        .subscribe(data => { 
        this.router.navigate([this.returnUrl]);
        }, 
        error => this.errorMessage = error);
    }

    onUpdateClicked() {
    this.router.navigate([this.returnUrl]);
    this.editBtnClicked = false;
    //window.location.reload();
    }
    

}