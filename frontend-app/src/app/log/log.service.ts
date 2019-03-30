import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Log } from './log';

@Injectable()
export class LogService {
  headers: Headers;
  options: RequestOptions;

  private logsUrl = 'https://api-log.herokuapp.com/logs';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getLogs(): Observable<Log[]> {
    return this.http.get(this.logsUrl)
      .map((response: Response) => <Log[]>response.json())
  } 

  getLog(id: number) {
    return this.http.get(this.logsUrl + "/" + id + '.json');
  }

  createLog(log: Log): Observable<Log> {
    return this.http.post(this.logsUrl, JSON.stringify(log),
      this.options).map((res: Response) => res.json());
  }
  
  deleteLog(id: number): Observable<Log> {
    const url = `${this.logsUrl}/${id}`;
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateLog(log: Log): Observable<Log> {
      const url = `${this.logsUrl}/${log.id}`;
      return this.http.put(url, JSON.stringify(log),
      this.options).map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occured ', error); 
      return Promise.reject(error.message || error);
  }

}