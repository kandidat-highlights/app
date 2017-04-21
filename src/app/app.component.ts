import { Component } from '@angular/core';
import { PredictionService } from './prediction.service';
import { Prediction } from './prediction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  prediction: Prediction;
  constructor(private predictionService: PredictionService) {}

  submit(): void {
    // Perform prediction here
    this.predictionService
      .makePrediction(this.title)
      .then(response => this.setPrediction(response));
    this.title = '';
  }

  setPrediction(prediction): void {
    this.prediction = prediction;
    // TODO: UPDATE VIEW
  }
}
