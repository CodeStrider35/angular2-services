System.register(['@angular/core', './service/logging.service', './service/calculator.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logging_service_1, calculator_service_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component2Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n  <div class=\"col-md-6 col-md-offset-3\">\n    <h1>Second Component</h1>\n  </div>\n    <div class=\"col-md-6 col-md-offset-4\">\n      <h1 class=\"calc\">Calculator Service</h1>\n      <p class=\"calc\">Add or Multiply These Two Numbers:</p>\n    </div>\n    <div class=\"col-md-1 col-md-offset-5\">\n      <input type=\"text\" class=\"form-control\" #num1>\n      <input type=\"text\" class=\"form-control\" #num2>\n      <button class=\"btn btn-default\" id=\"calc\" (click)=\"onMultiply(num1.value, num2.value)\"> * </button>\n      <button class=\"btn btn-default\" id=\"calc\" (click)=\"onAdd(num1.value, num2.value)\"> + </button>\n      <br>\n      <p>Result: {{result}}</p>\n    </div>\n  ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUVFLDZCQUFvQixlQUErQixFQUFVLGtCQUFxQztvQkFBOUUsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7Z0JBQUcsQ0FBQztnQkFFdEcsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUNELHdDQUFVLEdBQVYsVUFBVyxJQUFhLEVBQUUsSUFBWTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELG1DQUFLLEdBQUwsVUFBTSxJQUFhLEVBQUUsSUFBWTtvQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQW5DSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsK3JCQWdCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixDQUFDO3FCQUUvQyxDQUFDOzt1Q0FBQTtnQkFnQkYsMEJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHFEQWNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gJy4vc2VydmljZS9sb2dnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvY2FsY3VsYXRvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LTInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1wiPlxyXG4gICAgPGgxPlNlY29uZCBDb21wb25lbnQ8L2gxPlxyXG4gIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtNFwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJjYWxjXCI+Q2FsY3VsYXRvciBTZXJ2aWNlPC9oMT5cclxuICAgICAgPHAgY2xhc3M9XCJjYWxjXCI+QWRkIG9yIE11bHRpcGx5IFRoZXNlIFR3byBOdW1iZXJzOjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xIGNvbC1tZC1vZmZzZXQtNVwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICNudW0xPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICNudW0yPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJjYWxjXCIgKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj4gKiA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGlkPVwiY2FsY1wiIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPiArIDwvYnV0dG9uPlxyXG4gICAgICA8YnI+XHJcbiAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlXVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50IHtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSkge31cclxuXHJcbiAgb25Mb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XHJcbiAgfVxyXG4gIG9uTXVsdGlwbHkobnVtMTogIG51bWJlciwgbnVtMjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCArbnVtMik7XHJcbiAgfVxyXG4gIG9uQWRkKG51bTE6ICBudW1iZXIsIG51bTI6IG51bWJlcikge1xyXG4gICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5hZGQoK251bTEsICtudW0yKTtcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
