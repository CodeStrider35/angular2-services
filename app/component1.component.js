System.register(['@angular/core', './service/logging.service', './service/calculator.service', './service/data.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
    var Component1Component;
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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component1Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component1Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n    <div class=\"col-md-6 col-md-offset-3\">\n    <h1>First Component</h1>\n    <input type=\"text\" class=\"form-control\" #message>\n    <button class=\"btn btn-default\" (click)=\"onLog(message.value)\">Send</button>\n    </div>\n    <div class=\"col-md-6 col-md-offset-4\">\n      <h1 class=\"calc\">Calculator Service</h1>\n      <p class=\"calc\">Add or Multiply These Two Numbers:</p>\n    </div>\n    <div class=\"col-md-1 col-md-offset-5\">\n      <input type=\"text\" class=\"form-control\" #num1>\n      <input type=\"text\" class=\"form-control\" #num2>\n      <button class=\"btn btn-default\" id=\"calc\" (click)=\"onMultiply(num1.value, num2.value)\"> * </button>\n      <button class=\"btn btn-default\" id=\"calc\" (click)=\"onAdd(num1.value, num2.value)\"> + </button>\n      <br>\n      <p>Result: {{result}}</p>\n    </div>\n    <div class=\"col-md-6 col-md-offset-3\">\n      <h1>Data Service</h1>\n      <button class=\"btn btn-default\" (click)=\"onGetData()\">Data</button>\n      <p>Data: {{data}}</p>\n      <input type=\"text\" class=\"form-control\" #newData>\n      <button class=\"btn btn-default\" (click)=\"onInsert(newData.value)\">New Data</button>\n    </div>\n  ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUNBO2dCQUVFLDZCQUFvQixlQUErQixFQUMvQixrQkFBcUMsRUFDckMsWUFBeUI7b0JBRnpCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFDL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFDckMsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUNELHdDQUFVLEdBQVYsVUFBVyxJQUFhLEVBQUUsSUFBWTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELG1DQUFLLEdBQUwsVUFBTSxJQUFhLEVBQUUsSUFBWTtvQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUNELHVDQUFTLEdBQVQ7b0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNsRCxDQUFDO2dCQUNELHNDQUFRLEdBQVIsVUFBUyxLQUFhO29CQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFwREg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLGtyQ0F5QlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxzQ0FBaUIsRUFBRSwwQkFBVyxDQUFDO3FCQUU1RCxDQUFDOzt1Q0FBQTtnQkF3QkYsMEJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELHFEQXNCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvbG9nZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYWxjdWxhdG9yU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL2NhbGN1bGF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtMScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIj5cclxuICAgIDxoMT5GaXJzdCBDb21wb25lbnQ8L2gxPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjbWVzc2FnZT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWx1ZSlcIj5TZW5kPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTRcIj5cclxuICAgICAgPGgxIGNsYXNzPVwiY2FsY1wiPkNhbGN1bGF0b3IgU2VydmljZTwvaDE+XHJcbiAgICAgIDxwIGNsYXNzPVwiY2FsY1wiPkFkZCBvciBNdWx0aXBseSBUaGVzZSBUd28gTnVtYmVyczo8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMSBjb2wtbWQtb2Zmc2V0LTVcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjbnVtMT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjbnVtMj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGlkPVwiY2FsY1wiIChjbGljayk9XCJvbk11bHRpcGx5KG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+ICogPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBpZD1cImNhbGNcIiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj4gKyA8L2J1dHRvbj5cclxuICAgICAgPGJyPlxyXG4gICAgICA8cD5SZXN1bHQ6IHt7cmVzdWx0fX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIj5cclxuICAgICAgPGgxPkRhdGEgU2VydmljZTwvaDE+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25HZXREYXRhKClcIj5EYXRhPC9idXR0b24+XHJcbiAgICAgIDxwPkRhdGE6IHt7ZGF0YX19PC9wPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICNuZXdEYXRhPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uSW5zZXJ0KG5ld0RhdGEudmFsdWUpXCI+TmV3IERhdGE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlLCBEYXRhU2VydmljZV1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCB7XHJcbiAgcmVzdWx0OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XHJcblxyXG4gIG9uTG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xyXG4gIH1cclxuICBvbk11bHRpcGx5KG51bTE6ICBudW1iZXIsIG51bTI6IG51bWJlcikge1xyXG4gICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwgK251bTIpO1xyXG4gIH1cclxuICBvbkFkZChudW0xOiAgbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcclxuICAgIHRoaXMucmVzdWx0ID0gJycrdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UuYWRkKCtudW0xLCArbnVtMik7XHJcbiAgfVxyXG4gIG9uR2V0RGF0YSgpIHtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldFJhbmRvbVN0cmluZygpO1xyXG4gIH1cclxuICBvbkluc2VydCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kYXRhU2VydmljZS5pbnNlcnQodmFsdWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
