import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Prediction } from './prediction';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PredictionService {

  private baseUrl = 'http://127.0.0.1:5000/predict';

  constructor(private http: Http) { }

  makePrediction(title: string): Promise<Prediction> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('text', title);
    console.log(`${this.baseUrl}?text=${encodeURI(title)}`);
    return this.http.get(`${this.baseUrl}?text=${title}`)
      .toPromise()
      .then(response => response.json() as Prediction);
  }
}
