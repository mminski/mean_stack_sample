import { Injectable } from '@angular/core';
import { HttpModule, Response, Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BgbService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getParagraphs(): Observable<any> {
    return this.http.get('http://localhost:3000/api/bgb').map((res: Response)  => res.json());
  }

}

