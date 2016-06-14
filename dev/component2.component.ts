import {Component} from '@angular/core';
import {LoggingService} from './service/logging.service';
import {CalculatorService} from './service/calculator.service';

@Component({
  selector: 'component-2',
  template: `
  <div class="col-md-6 col-md-offset-3">
    <h1>Second Component</h1>
  </div>
    <div class="col-md-6 col-md-offset-4">
      <h1 class="calc">Calculator Service</h1>
      <p class="calc">Add or Multiply These Two Numbers:</p>
    </div>
    <div class="col-md-1 col-md-offset-5">
      <input type="text" class="form-control" #num1>
      <input type="text" class="form-control" #num2>
      <button class="btn btn-default" id="calc" (click)="onMultiply(num1.value, num2.value)"> * </button>
      <button class="btn btn-default" id="calc" (click)="onAdd(num1.value, num2.value)"> + </button>
      <br>
      <p>Result: {{result}}</p>
    </div>
  `,
  providers: [LoggingService, CalculatorService]

})

export class Component2Component {
  result: string;
  constructor(private _loggingService: LoggingService, private _calculatorService: CalculatorService) {}

  onLog(message: string) {
    this._loggingService.log(message);
  }
  onMultiply(num1:  number, num2: number) {
    this.result = ''+this._calculatorService.multiply(+num1, +num2);
  }
  onAdd(num1:  number, num2: number) {
    this.result = ''+this._calculatorService.add(+num1, +num2);
  }

}
