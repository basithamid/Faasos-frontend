(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _set_prediction_set_prediction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-prediction/set-prediction.component */ "./src/app/set-prediction/set-prediction.component.ts");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.component */ "./src/app/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_dbService_database_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/dbService/database.service */ "./src/app/services/dbService/database.service.ts");
/* harmony import */ var _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display-table/display-table.component */ "./src/app/display-table/display-table.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"],
                _set_prediction_set_prediction_component__WEBPACK_IMPORTED_MODULE_5__["SetPredictionComponent"],
                _navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_10__["DisplayTableComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"] },
                    { path: 'predict', component: _set_prediction_set_prediction_component__WEBPACK_IMPORTED_MODULE_5__["SetPredictionComponent"] },
                    { path: 'display', component: _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_10__["DisplayTableComponent"] },
                    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
                    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
                ])
            ],
            providers: [_services_dbService_database_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-table/display-table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/display-table/display-table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/display-table/display-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/display-table/display-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\">\n  </div>\n  <div class=\"col-md-6\">\n    <legend>Report</legend>\n    <table id=\"export_table\" class=\"table table-striped table-bordered\">\n      <tbody>\n        <tr>\n          <th>Name</th>\n          <th>Quantity</th>\n          <th>Created till now</th>\n          <th>Predicted</th>\n          <th>Status</th>\n        </tr>\n        <tr *ngFor=\"let order of orders\">\n          <td>{{ order.name }}</td>\n          <td>{{ order.quantity }}</td>\n          <td>{{ order.createdTillNow }}</td>\n          <td>{{ order.predicted }}</td>\n          <td>\n            <button class=\"btn btn-primary\" \n            (click)=\"updateOrder(order)\">DONE\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <button class=\"btn btn-warning\"(click)=\"generateReport()\">Download Report</button>      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/display-table/display-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/display-table/display-table.component.ts ***!
  \**********************************************************/
/*! exports provided: DisplayTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayTableComponent", function() { return DisplayTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dbService_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dbService/database.service */ "./src/app/services/dbService/database.service.ts");
/* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-csv/Angular2-csv */ "./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayTableComponent = /** @class */ (function () {
    function DisplayTableComponent(_dbService) {
        this._dbService = _dbService;
        this.orders = [];
    }
    DisplayTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dbService.getOrdersData()
            .subscribe(function (res) { return _this.orders = res.message.data; }, function (error) { return console.log(error); });
    };
    DisplayTableComponent.prototype.updateOrder = function (order) {
        var _this = this;
        this._dbService.updateOrder(order)
            .subscribe(function (res) { return _this.orders = res.message.data; }, function (error) { return console.log(error); });
        this._dbService.getOrdersData()
            .subscribe(function (res) {
            _this.orders = res.message.data;
            console.log('orders: ', _this.orders);
        }, function (error) { return console.log(error); });
    };
    DisplayTableComponent.prototype.generateReport = function () {
        new angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_2__["Angular2Csv"](this.orders, 'My Report');
    };
    DisplayTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./display-table.component.html */ "./src/app/display-table/display-table.component.html"),
            styles: [__webpack_require__(/*! ./display-table.component.css */ "./src/app/display-table/display-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dbService_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], DisplayTableComponent);
    return DisplayTableComponent;
}());



/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Dalviroo Kitchens</h1>"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar.component.css":
/*!**************************************!*\
  !*** ./src/app/navbar.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\r\n    left: 0%;\r\n}"

/***/ }),

/***/ "./src/app/navbar.component.html":
/*!***************************************!*\
  !*** ./src/app/navbar.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a href=\"#\" class=\"navbar-brand\">Dalviroo</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a [routerLink]=\"['/home']\">Home</a></li>\r\n                    <li><a [routerLink]=\"['/order']\" routerLinkActive=\"active\">Order</a></li>\r\n                    <li><a [routerLink]=\"['/predict']\" routerLinkActive=\"active\">Predict</a></li>\r\n                    <li><a [routerLink]=\"['/display']\" routerLinkActive=\"active\">Display Report</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/navbar.component.ts":
/*!*************************************!*\
  !*** ./src/app/navbar.component.ts ***!
  \*************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\">\n    <legend>Add Order</legend>\n    <form #orderForm=\"ngForm\" [formGroup]=\"order\" (ngSubmit)=\"submitOrder(orderForm.value); orderForm.reset()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name:</label>\n        <select name=\"dishes\" class=\"form-control\" (change)=\"selectChange($event)\">\n          <option value=\"\" selected=\"selected\" disabled>Please select dish</option>\n          <option *ngFor=\"let dish of dishes\" [value]=\"dish.name\">{{ dish.name }}</option>\n        </select>  \n      </div>\n      <div class=\"form-group\">\n        <label for=\"quantity\">Quantity:</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"quantity\" required>\n      </div>\n      <div class=\"form\">\n        <button [disabled]= !orderForm.valid class=\"btn btn-success\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_dbService_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dbService/database.service */ "./src/app/services/dbService/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = /** @class */ (function () {
    function OrderComponent(_dbService) {
        this._dbService = _dbService;
        this.dishes = [];
        this.order = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dish: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dbService.getDishNames()
            .subscribe(function (response) { return _this.dishes = response.message.data; }, function (error) { return console.log(error); });
    };
    OrderComponent.prototype.selectChange = function (event) {
        this.order.patchValue({
            dish: event.target.value
        });
    };
    OrderComponent.prototype.submitOrder = function (orderForm) {
        var _this = this;
        this._dbService.placeOrder(orderForm)
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_dbService_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/services/dbService/database.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/dbService/database.service.ts ***!
  \********************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseService = /** @class */ (function () {
    function DatabaseService(_http) {
        this._http = _http;
        this._url = 'http://localhost:8000';
        this.dishes = ['a', 'b', 'c'];
    }
    DatabaseService.prototype.getDishNames = function () {
        return this._http.get(this._url + '/getDishes');
    };
    DatabaseService.prototype.getOrdersData = function () {
        return this._http.get(this._url + '/getOrders');
    };
    DatabaseService.prototype.placeOrder = function (orderForm) {
        console.log('order in service:', orderForm);
        return this._http.post(this._url + '/placeOrder', orderForm);
    };
    DatabaseService.prototype.predictOrders = function (predictionForm) {
        console.log('prediction in service:', predictionForm);
        return this._http.post(this._url + '/predict', predictionForm);
    };
    DatabaseService.prototype.updateOrder = function (order) {
        return this._http.post(this._url + '/updateOrder', order);
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/set-prediction/set-prediction.component.css":
/*!*************************************************************!*\
  !*** ./src/app/set-prediction/set-prediction.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/set-prediction/set-prediction.component.html":
/*!**************************************************************!*\
  !*** ./src/app/set-prediction/set-prediction.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\">\n    <legend>Predict Quantities</legend>\n    <form #predictForm=\"ngForm\" [formGroup]=\"orderPrediction\" (ngSubmit)=\"makePrediction(predictForm.value); predictForm.reset()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name:</label>\n        <select name=\"dishes\" class=\"form-control\" (change)=\"selectChange($event)\">\n          <option value=\"\" selected=\"selected\" disabled>Please select dish</option>\n          <option *ngFor=\"let dish of dishes\" [value]=\"dish.name\">{{ dish.name }}</option>\n        </select>  \n      </div>\n      <div class=\"form-group\">\n        <label for=\"quantity\">Quantity:</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"quantity\" required>\n      </div>\n      <div class=\"form\">\n        <button [disabled]= !predictForm.valid class=\"btn btn-success\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/set-prediction/set-prediction.component.ts":
/*!************************************************************!*\
  !*** ./src/app/set-prediction/set-prediction.component.ts ***!
  \************************************************************/
/*! exports provided: SetPredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPredictionComponent", function() { return SetPredictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dbService_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dbService/database.service */ "./src/app/services/dbService/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetPredictionComponent = /** @class */ (function () {
    function SetPredictionComponent(_dbService) {
        this._dbService = _dbService;
        this.dishes = [];
        this.orderPrediction = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dish: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    SetPredictionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dbService.getDishNames()
            .subscribe(function (data) { return _this.dishes = data.message.data; }, function (error) { return console.log(error); });
    };
    SetPredictionComponent.prototype.selectChange = function (event) {
        this.orderPrediction.patchValue({
            dish: event.target.value
        });
    };
    SetPredictionComponent.prototype.makePrediction = function (predictionForm) {
        var _this = this;
        this._dbService.predictOrders(predictionForm)
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log('error:', error); });
    };
    SetPredictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./set-prediction.component.html */ "./src/app/set-prediction/set-prediction.component.html"),
            styles: [__webpack_require__(/*! ./set-prediction.component.css */ "./src/app/set-prediction/set-prediction.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_dbService_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], SetPredictionComponent);
    return SetPredictionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Faasos_asgn\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map