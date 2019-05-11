(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts"
	],
	"app/auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/add-sales/add-sales.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-sales/add-sales.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Sale</h3>\n      <section class=\"section\">\n        <form action=\"#\">\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Company Name</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"company_name\" [(ngModel)]=\"company_name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contact Name</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"contact_name\" [(ngModel)]=\"contact_name\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contact Phone</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"contact_phone\" [(ngModel)]=\"contact_phone\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contact Email</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"contact_email\" [(ngModel)]=\"contact_email\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Weight</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"weight\" [(ngModel)]=\"weight\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Dangerous Good?</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"dangerous\" value=\"Yes\" [(ngModel)]=\"dangerous\">\n                    Yes\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"dangerous\" value=\"No\" [(ngModel)]=\"dangerous\">\n                    No\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Description</label>\n                <div class=\"control\">\n                  <textarea class=\"textarea\" name=\"description\" [(ngModel)]=\"description\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Special Instructions</label>\n                <div class=\"control\">\n                  <textarea class=\"textarea\" name=\"instructions\" [(ngModel)]=\"instructions\"></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Origin Airport</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"origin_airport\" name=\"origin_airport\">\n                      <option *ngFor=\"let airport of airports\" [value]=\"airport.icao\">{{airport.icao}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Destination Airport</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"destination_airport\" name=\"destination_airport\">\n                      <option *ngFor=\"let airport of airports\" [value]=\"airport.icao\">{{airport.icao}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Departure</label>\n                <div class=\"control\">\n                    <ng2-flatpickr [config]=\"exampleOptions\" [(ngModel)]=\"departure\" name=\"departure\">\n                    </ng2-flatpickr>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n                <div class=\"field\">\n                    <label class=\"label\">Reference ID</label>\n                    <div class=\"control\">\n                  <input type=\"text\" class=\"input\" name=\"reference_id\" [(ngModel)]=\"reference_id\">\n                    </div>\n                  </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Estimated Cost</label>\n                <div class=\"control\">\n                  <input type=\"text\" class=\"input\" name=\"estimated_cost\" [(ngModel)]=\"estimated_cost\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Price Charged</label>\n                <div class=\"control\">\n                  <input type=\"text\" class=\"input\" name=\"price_charged\" [(ngModel)]=\"price_charged\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"field is-grouped\">\n            <div class=\"control\">\n              <button class=\"button is-link\" (click)=\"addSale()\">Submit</button>\n            </div>\n            <div class=\"control\">\n              <button class=\"button is-text\" type=\"reset\">Reset</button>\n            </div>\n          </div>\n        </form>\n      </section>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/add-sales/add-sales.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-sales/add-sales.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1zYWxlcy9hZGQtc2FsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/add-sales/add-sales.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-sales/add-sales.component.ts ***!
  \********************************************************/
/*! exports provided: AddSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSalesComponent", function() { return AddSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddSalesComponent = /** @class */ (function () {
    function AddSalesComponent(adminService, renderer, document) {
        this.adminService = adminService;
        this.renderer = renderer;
        this.document = document;
        this.exampleOptions = {
            enableTime: true,
            mode: "single"
        };
    }
    AddSalesComponent.prototype.ngOnInit = function () {
        this.getAirports();
        this.doRun = true;
    };
    AddSalesComponent.prototype.ngAfterViewInit = function () {
        // addClass hack until ng2-flatpickr takes my PR
        this.renderer.addClass(this.document.getElementsByClassName('ng2-flatpickr-input flatpickr-input')[0], 'input');
    };
    AddSalesComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    AddSalesComponent.prototype.addSale = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addSale(this.company_name, this.contact_name, this.contact_email, this.contact_phone, this.weight, this.dangerous, this.instructions, this.description, this.origin_airport, this.destination_airport, Date.parse(this.departure) / 1000, this.reference_id, this.estimated_cost, this.price_charged)
                .subscribe(function (data) {
                console.log('Aircraft Added ', data);
                // this.getAircrafts();
                jquery__WEBPACK_IMPORTED_MODULE_2__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    AddSalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sales',
            template: __webpack_require__(/*! ./add-sales.component.html */ "./src/app/admin/add-sales/add-sales.component.html"),
            styles: [__webpack_require__(/*! ./add-sales.component.scss */ "./src/app/admin/add-sales/add-sales.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], Object])
    ], AddSalesComponent);
    return AddSalesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/admin/admin-user-guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aircrafts/aircrafts.component */ "./src/app/admin/aircrafts/aircrafts.component.ts");
/* harmony import */ var _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aircraft/aircraft.component */ "./src/app/admin/aircraft/aircraft.component.ts");
/* harmony import */ var _crews_crews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crews/crews.component */ "./src/app/admin/crews/crews.component.ts");
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crew/crew.component */ "./src/app/admin/crew/crew.component.ts");
/* harmony import */ var _movements_movements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movements/movements.component */ "./src/app/admin/movements/movements.component.ts");
/* harmony import */ var _movement_movement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movement/movement.component */ "./src/app/admin/movement/movement.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/admin/sales/sales.component.ts");
/* harmony import */ var _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-sales/add-sales.component */ "./src/app/admin/add-sales/add-sales.component.ts");
/* harmony import */ var _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-flight/new-flight.component */ "./src/app/admin/new-flight/new-flight.component.ts");
/* harmony import */ var _airports_airports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./airports/airports.component */ "./src/app/admin/airports/airports.component.ts");
/* harmony import */ var _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-airport/new-airport.component */ "./src/app/admin/new-airport/new-airport.component.ts");
/* harmony import */ var _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./handlers/handlers.component */ "./src/app/admin/handlers/handlers.component.ts");
/* harmony import */ var _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new-handler/new-handler.component */ "./src/app/admin/new-handler/new-handler.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _airport_airport_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./airport/airport.component */ "./src/app/admin/airport/airport.component.ts");
/* harmony import */ var _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-airport/edit-airport.component */ "./src/app/admin/edit-airport/edit-airport.component.ts");
/* harmony import */ var _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-sales/edit-sales.component */ "./src/app/admin/edit-sales/edit-sales.component.ts");
/* harmony import */ var _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./new-aircraft/new-aircraft.component */ "./src/app/admin/new-aircraft/new-aircraft.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [{
        path: 'admin',
        canActivate: [_admin_user_guard__WEBPACK_IMPORTED_MODULE_3__["OnlyAdminUsersGuard"]],
        children: [{
                path: '',
                component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            },
            {
                path: 'aircrafts',
                component: _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_5__["AircraftsComponent"]
            },
            {
                path: 'aircraft/:id',
                component: _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_6__["AircraftComponent"]
            },
            {
                path: 'airports/:pageNo',
                component: _airports_airports_component__WEBPACK_IMPORTED_MODULE_14__["AirportsComponent"]
            },
            {
                path: 'new-airport',
                component: _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_15__["NewAirportComponent"]
            },
            {
                path: 'edit-airport/:id',
                component: _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_20__["EditAirportComponent"]
            },
            {
                path: 'edit-sales/:id',
                component: _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_21__["EditSalesComponent"]
            },
            {
                path: 'handlers',
                component: _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_16__["HandlersComponent"]
            },
            {
                path: 'new-handler/:id',
                component: _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_17__["NewHandlerComponent"]
            },
            {
                path: 'new-aircraft',
                component: _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_22__["NewAircraftComponent"]
            },
            {
                path: 'crews',
                component: _crews_crews_component__WEBPACK_IMPORTED_MODULE_7__["CrewsComponent"]
            },
            {
                path: 'crew/:id',
                component: _crew_crew_component__WEBPACK_IMPORTED_MODULE_8__["CrewComponent"]
            },
            {
                path: 'movements',
                component: _movements_movements_component__WEBPACK_IMPORTED_MODULE_9__["MovementsComponent"]
            },
            {
                path: 'movement/:id',
                component: _movement_movement_component__WEBPACK_IMPORTED_MODULE_10__["MovementComponent"]
            },
            {
                path: 'sales',
                component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__["SalesComponent"]
            },
            {
                path: 'add-sales',
                component: _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_12__["AddSalesComponent"]
            },
            {
                path: 'new-flight/:id',
                component: _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_13__["NewFlightComponent"]
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"]
            },
            {
                path: 'airport/:id',
                component: _airport_airport_component__WEBPACK_IMPORTED_MODULE_19__["AirportComponent"]
            }]
    }];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-user-guard.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/admin-user-guard.ts ***!
  \*******************************************/
/*! exports provided: OnlyAdminUsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyAdminUsersGuard", function() { return OnlyAdminUsersGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnlyAdminUsersGuard = /** @class */ (function () {
    function OnlyAdminUsersGuard(authService) {
        this.authService = authService;
    }
    OnlyAdminUsersGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn())
            return true;
        return false;
    };
    OnlyAdminUsersGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], OnlyAdminUsersGuard);
    return OnlyAdminUsersGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/admin/admin-user-guard.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/admin/header/header.component.ts");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-openlayers */ "./node_modules/ngx-openlayers/dist/index.js");
/* harmony import */ var ngx_openlayers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_openlayers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/admin/side-nav/side-nav.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/admin/chat/chat.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aircrafts/aircrafts.component */ "./src/app/admin/aircrafts/aircrafts.component.ts");
/* harmony import */ var _airports_airports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./airports/airports.component */ "./src/app/admin/airports/airports.component.ts");
/* harmony import */ var _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aircraft/aircraft.component */ "./src/app/admin/aircraft/aircraft.component.ts");
/* harmony import */ var _crews_crews_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./crews/crews.component */ "./src/app/admin/crews/crews.component.ts");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/esm5/ng2-flatpickr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./crew/crew.component */ "./src/app/admin/crew/crew.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _movements_movements_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./movements/movements.component */ "./src/app/admin/movements/movements.component.ts");
/* harmony import */ var _movement_movement_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./movement/movement.component */ "./src/app/admin/movement/movement.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/admin/sales/sales.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./add-sales/add-sales.component */ "./src/app/admin/add-sales/add-sales.component.ts");
/* harmony import */ var _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./new-flight/new-flight.component */ "./src/app/admin/new-flight/new-flight.component.ts");
/* harmony import */ var _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./new-airport/new-airport.component */ "./src/app/admin/new-airport/new-airport.component.ts");
/* harmony import */ var _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./handlers/handlers.component */ "./src/app/admin/handlers/handlers.component.ts");
/* harmony import */ var _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./new-handler/new-handler.component */ "./src/app/admin/new-handler/new-handler.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _airport_airport_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./airport/airport.component */ "./src/app/admin/airport/airport.component.ts");
/* harmony import */ var _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./edit-airport/edit-airport.component */ "./src/app/admin/edit-airport/edit-airport.component.ts");
/* harmony import */ var _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./edit-sales/edit-sales.component */ "./src/app/admin/edit-sales/edit-sales.component.ts");
/* harmony import */ var _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./new-aircraft/new-aircraft.component */ "./src/app/admin/new-aircraft/new-aircraft.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__["SideNavComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _aircrafts_aircrafts_component__WEBPACK_IMPORTED_MODULE_10__["AircraftsComponent"],
                _airports_airports_component__WEBPACK_IMPORTED_MODULE_11__["AirportsComponent"],
                _aircraft_aircraft_component__WEBPACK_IMPORTED_MODULE_12__["AircraftComponent"],
                _crews_crews_component__WEBPACK_IMPORTED_MODULE_13__["CrewsComponent"],
                _crew_crew_component__WEBPACK_IMPORTED_MODULE_21__["CrewComponent"],
                _movements_movements_component__WEBPACK_IMPORTED_MODULE_24__["MovementsComponent"],
                _movement_movement_component__WEBPACK_IMPORTED_MODULE_25__["MovementComponent"],
                _sales_sales_component__WEBPACK_IMPORTED_MODULE_28__["SalesComponent"],
                _add_sales_add_sales_component__WEBPACK_IMPORTED_MODULE_30__["AddSalesComponent"],
                _new_flight_new_flight_component__WEBPACK_IMPORTED_MODULE_31__["NewFlightComponent"],
                _new_airport_new_airport_component__WEBPACK_IMPORTED_MODULE_32__["NewAirportComponent"],
                _handlers_handlers_component__WEBPACK_IMPORTED_MODULE_33__["HandlersComponent"],
                _new_handler_new_handler_component__WEBPACK_IMPORTED_MODULE_34__["NewHandlerComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_35__["SettingsComponent"],
                _airport_airport_component__WEBPACK_IMPORTED_MODULE_36__["AirportComponent"],
                _edit_airport_edit_airport_component__WEBPACK_IMPORTED_MODULE_37__["EditAirportComponent"],
                _edit_sales_edit_sales_component__WEBPACK_IMPORTED_MODULE_38__["EditSalesComponent"],
                _new_aircraft_new_aircraft_component__WEBPACK_IMPORTED_MODULE_39__["NewAircraftComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__["FileUploadModule"],
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_14__["Ng2FlatpickrModule"],
                ngx_openlayers__WEBPACK_IMPORTED_MODULE_6__["AngularOpenlayersModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_27__["FlatpickrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__["adapterFactory"]
                })
            ],
            providers: [
                _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__["OnlyAdminUsersGuard"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminService = /** @class */ (function () {
    function AdminService(http, db) {
        this.http = http;
        this.db = db;
        this.basePath = '/uploads';
    }
    AdminService.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
            uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // in progress
                var snap = snapshot;
                progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            }, function (error) {
                // fail
                console.log(error);
            }, function () {
                // success
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    fileUpload.url = downloadURL;
                    fileUpload.name = fileUpload.file.name;
                    observer.next({ data: downloadURL });
                    observer.complete();
                    // this.saveFileData(fileUpload);
                });
            });
        });
    };
    AdminService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    AdminService.prototype.addFlight = function (reference_id, ops_crew, pic_crew, fo_crew, ops_crew_name, pic_crew_name, fo_crew_name, aircraft, departure_airport, arrival_airport, departure_time, handler, dangerous, type, pax, cargo, liveLeg, positionFrom, positionTo) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/flight', {
                reference_id: reference_id,
                ops_crew: ops_crew,
                pic_crew: pic_crew,
                fo_crew: fo_crew,
                ops_crew_name: ops_crew_name,
                pic_crew_name: pic_crew_name,
                fo_crew_name: fo_crew_name,
                aircraft: aircraft,
                departure_airport: departure_airport,
                arrival_airport: arrival_airport,
                departure_time: departure_time,
                handler: handler,
                dangerous: dangerous,
                type: type,
                pax: pax,
                cargo: cargo,
                liveLeg: liveLeg,
                positionFrom: positionFrom,
                positionTo: positionTo
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addMboard = function (route_id, message, usergroup) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/mboard', {
                route_id: route_id,
                message: message,
                usergroup: usergroup
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateCrew = function (id, unavailableFrom, unavailableTo) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/crew/update/' + id, {
                unavailableFrom: unavailableFrom,
                unavailableTo: unavailableTo
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateCrewData = function (id, name, img_url, occupation, p_email, s_email, p_phone, s_phone) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/crew/updateCrew/' + id, {
                img_url: img_url,
                name: name,
                occupation: occupation,
                p_email: p_email,
                s_email: s_email,
                p_phone: p_phone,
                s_phone: s_phone
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.sendMail = function (email, subject, message) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/mail/send-mail', {
                email: email,
                subject: subject,
                message: message
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateTemplate = function (id, subject, message) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/mail/update/' + id, {
                subject: subject,
                message: message
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addRoute = function (reference_id, route, ops_crew, pic_crew, fo_crew, ops_crew_name, pic_crew_name, fo_crew_name, aircraft, departure_airport, arrival_airport, handler, dangerous, paxCargo, pax, cargo, type, arrivaltime, departuretime, fuel, distance, fplan) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/route', {
                reference_id: reference_id,
                route: route,
                ops_crew: ops_crew,
                pic_crew: pic_crew,
                fo_crew: fo_crew,
                ops_crew_name: ops_crew_name,
                pic_crew_name: pic_crew_name,
                fo_crew_name: fo_crew_name,
                aircraft: aircraft,
                departure_airport: departure_airport,
                arrival_airport: arrival_airport,
                handler: handler,
                dangerous: dangerous,
                paxCargo: paxCargo,
                pax: pax,
                cargo: cargo,
                type: type,
                arrivaltime: arrivaltime,
                departuretime: departuretime,
                fuel: fuel,
                distance: distance,
                fplan: fplan
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addCrew = function (name, img_url, occupation, unavailableFrom, unavailableTo, p_email, s_email, p_phone, s_phone, licence, expiry, user_id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/crew', {
                name: name,
                img_url: img_url,
                occupation: occupation,
                unavailableFrom: unavailableFrom,
                unavailableTo: unavailableTo,
                p_email: p_email,
                s_email: s_email,
                p_phone: p_phone,
                s_phone: s_phone,
                licence: licence,
                expiry: expiry,
                user_id: user_id
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addSale = function (company_name, contact_name, contact_email, contact_phone, weight, dangerous, description, instructions, origin_airport, destination_airport, departure, reference_id, estimated_cost, price_charged) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/sale', {
                company_name: company_name,
                contact_name: contact_name,
                contact_email: contact_email,
                contact_phone: contact_phone,
                weight: weight,
                dangerous: dangerous,
                description: description,
                instructions: instructions,
                origin_airport: origin_airport,
                destination_airport: destination_airport,
                departure: departure,
                reference_id: reference_id,
                estimated_cost: estimated_cost,
                price_charged: price_charged,
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateSale = function (id, company_name, contact_name, contact_email, contact_phone, weight, dangerous, description, instructions, origin_airport, destination_airport, departure, reference_id, estimated_cost, price_charged) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/sale/update/' + id, {
                company_name: company_name,
                contact_name: contact_name,
                contact_email: contact_email,
                contact_phone: contact_phone,
                weight: weight,
                dangerous: dangerous,
                description: description,
                instructions: instructions,
                origin_airport: origin_airport,
                destination_airport: destination_airport,
                departure: departure,
                reference_id: reference_id,
                estimated_cost: estimated_cost,
                price_charged: price_charged,
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addAircraftDB = function (aircraft) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/aircraft', {
                aircraft: aircraft
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addAircraft = function (callsign, manufacturername, manufacturer, icaotypename, icaotype, modelname, model, year, homebase, fuel_type, speedunit, fuelunit, comment, equipment, transponder, com, nav, dat, picname, crewcontact, colormarking, dinghies, dinghycapacity, dinghycolor, dinghycover, emergencyradio, survival, lifejackets, wb, distances, defaultmaxfl, maxbhp, taxifuel, taxifuelflow, contingencyfuel) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/aircraft/addAircraft', {
                callsign: callsign,
                manufacturername: manufacturername,
                manufacturer: manufacturer,
                icaotypename: icaotypename,
                icaotype: icaotype,
                modelname: modelname,
                model: model,
                year: year,
                homebase: homebase,
                fuel_type: fuel_type,
                speedunit: speedunit,
                fuelunit: fuelunit,
                comment: comment,
                equipment: equipment,
                transponder: transponder,
                com: com,
                nav: nav,
                dat: dat,
                picname: picname,
                crewcontact: crewcontact,
                colormarking: colormarking,
                dinghies: dinghies,
                dinghycapacity: dinghycapacity,
                dinghycolor: dinghycolor,
                dinghycover: dinghycover,
                emergencyradio: emergencyradio,
                survival: survival,
                lifejackets: lifejackets,
                wb: wb,
                distances: distances,
                defaultmaxfl: defaultmaxfl,
                maxbhp: maxbhp,
                taxifuel: taxifuel,
                taxifuelflow: taxifuelflow,
                contingencyfuel: contingencyfuel
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateAircraft = function (id, registration, aircraftId, img_url, tow, fuel, pax, cargo, icao24, base) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/aircraft/update/' + id, {
                registration: registration,
                aircraftId: aircraftId,
                img_url: img_url,
                tow: tow,
                fuel: fuel,
                pax: pax,
                cargo: cargo,
                icao24: icao24,
                base: base
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addLicence = function (crew_id, licence, expiry) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/licence', {
                crew_id: crew_id,
                licence: licence,
                expiry: expiry
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addAirport = function (name, country, icao, latitude, longitude, elevation, longest_runway, magnetic_variation, airport_type, beacon, fuel_types, landing_fee, oxygen, repairs) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/airport', {
                name: name,
                country: country,
                icao: icao,
                latitude: latitude,
                longitude: longitude,
                elevation: elevation,
                longest_runway: longest_runway,
                magnetic_variation: magnetic_variation,
                airport_type: airport_type,
                beacon: beacon,
                fuel_types: fuel_types,
                landing_fee: landing_fee,
                oxygen: oxygen,
                repairs: repairs
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateAirport = function (id, name, country, icao, latitude, longitude, elevation, longest_runway, magnetic_variation, airport_type, beacon, fuel_types, landing_fee, oxygen, repairs) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/airport/update/' + id, {
                name: name,
                country: country,
                icao: icao,
                latitude: latitude,
                longitude: longitude,
                elevation: elevation,
                longest_runway: longest_runway,
                magnetic_variation: magnetic_variation,
                airport_type: airport_type,
                beacon: beacon,
                fuel_types: fuel_types,
                landing_fee: landing_fee,
                oxygen: oxygen,
                repairs: repairs
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addHandler = function (name, icao, logo, phone_primary, phone_secondary, email_primary, email_secondary, monday_open, monday_close, tuesday_open, tuesday_close, wednesday_open, wednesday_close, thursday_open, thursday_close, friday_open, friday_close, saturday_open, saturday_close, sunday_open, sunday_close) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/handler', {
                name: name,
                icao: icao,
                logo: logo,
                phone_primary: phone_primary,
                phone_secondary: phone_secondary,
                email_primary: email_primary,
                email_secondary: email_secondary,
                monday_open: monday_open,
                monday_close: monday_close,
                tuesday_open: tuesday_open,
                tuesday_close: tuesday_close,
                wednesday_open: wednesday_open,
                wednesday_close: wednesday_close,
                thursday_open: thursday_open,
                thursday_close: thursday_close,
                friday_open: friday_open,
                friday_close: friday_close,
                saturday_open: saturday_open,
                saturday_close: saturday_close,
                sunday_open: sunday_open,
                sunday_close: sunday_close,
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAircrafts = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteCrew = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/crew/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteUser = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/auth/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteAirport = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/airport/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.deleteAircraft = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.delete('/api/aircraft/delete/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAirports = function (pageNo, size) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/fetch/' + pageNo + '/' + size).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.findAirports = function (keyword) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/find/' + keyword).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getHandlers = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/handler/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrews = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getSale = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/sale/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.lastLiveFlight = function (aircraft) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/lastLiveFlight/' + aircraft).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getBriefing = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getBriefing/' + route).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrew = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrewByUser = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetchUser/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getNOTAM = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getNOTAM/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getCrewByOccupation = function (occupation) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/crew/fetchType/' + occupation).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAircraft = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAirport = function (icao) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/fetch/' + icao).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAirportDetails = function (icao) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/airport/fetchAirport/' + icao).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getLicences = function (crew_id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/licence/fetch/' + crew_id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getHandler = function (airport) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/handler/fetch/' + airport).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getHandlerDetails = function (handler) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/handler/fetchDetails/' + handler).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getSales = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/sale/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getUsers = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/auth/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getUser = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/auth/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.addUser = function (fullname, email, password, repeatPassword, role, occupation) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/register', {
                fullname: fullname,
                email: email,
                password: password,
                repeatPassword: repeatPassword,
                role: role,
                occupation: occupation
            }).subscribe(function (data) {
                observer.next({ data: data.user });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateUser = function (id, fullname, email, password, repeatPassword, role, occupation) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/auth/update/' + id, {
                fullname: fullname,
                email: email,
                password: password,
                repeatPassword: repeatPassword,
                role: role,
                occupation: occupation
            }).subscribe(function (data) {
                observer.next({ data: data.user });
                observer.complete();
            });
        });
    };
    AdminService.prototype.route = function (data) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/aircraft/createRoute', data).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getFplan = function (routeId) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getFplan/' + routeId).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getFlight = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/flight/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getMovements = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getMovement = function (id) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetch/' + id).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.downloadBriefing = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var mediaType = 'application/pdf';
            _this.http.get('/api/aircraft/downloadBriefing/' + route, {
                responseType: 'blob'
            }).subscribe(function (data) {
                console.log(data);
                var blob = new Blob([data], { type: mediaType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, route + '.pdf');
                observer.next({ data: data });
                observer.complete();
                console.log('not found');
            });
        });
    };
    AdminService.prototype.getAircraftSchedule = function (aircraftId) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchAircraft/' + aircraftId).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getOPSSchedule = function (ops) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchOPS/' + ops).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getPICSchedule = function (pic) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchPIC/' + pic).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getFOSchedule = function (fo) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetchFO/' + fo).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAdminSchedule = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/route/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getTemplates = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/mail/fetch').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.longPoll = function (routeId) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/longpoll/' + routeId).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getChatByRoom = function (room) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/chat/' + room).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getMboard = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/mboard/fetch/' + route).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getManufacturers = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getManufacturers').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getAircraftTypes = function (manufacturer) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/getAircraftTypes/' + manufacturer).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.getLocation = function (icao24) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('https://kininteractivesolutions:KinSolutions123@opensky-network.org/api/tracks/all?icao24=' + icao24 + '&time=0').subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.updateFiled = function (id, filed) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put('/api/route/updateFiled/' + id, {
                filed: filed
            }).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.fileFPL = function (route) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/fileFPL/' + route).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.cancelFPL = function (flightid) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get('/api/aircraft/cancelFPL/' + flightid).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService.prototype.saveChat = function (data) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/chat', data).subscribe(function (data) {
                observer.next({ data: data });
                observer.complete();
            });
        });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/aircraft/aircraft.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/aircraft/aircraft.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\" *ngIf=\"aircraft\">\n        <div class=\"notification is-primary has-text-centered\">\n            <h4 class=\"title is-size-5\">{{status}}</h4>\n\n        </div>\n      <div class=\"columns is-mobile is-multiline\">\n        <div class=\"column is-3\">\n          <span class=\"header-icon user-profile-image\">\n            <img src=\"{{aircraft.img_url}}\" alt=\"\">\n          </span>\n        </div>\n        <div class=\"column is-9\">\n          <aol-map [width]=\"'100%'\" [height]=\"'100%'\" *ngIf=\"aircraftLocation\">\n            <aol-view [zoom]=\"5\">\n              <aol-coordinate [x]=\"aircraftLon\" [y]=\"aircraftLat\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n            </aol-view>\n            <aol-layer-tile>\n              <aol-source-osm></aol-source-osm>\n            </aol-layer-tile>\n            <aol-layer-vector>\n              <aol-source-vector>\n                <aol-feature>\n                  <aol-geometry-point>\n                    <aol-coordinate [x]=\"aircraftLon\" [y]=\"aircraftLat\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n                  </aol-geometry-point>\n                  <aol-style>\n                    <aol-style-circle [radius]=\"10\">\n                      <aol-style-stroke [color]=\"'black'\" [width]=\"2\"></aol-style-stroke>\n                      <aol-style-fill [color]=\"'red'\"></aol-style-fill>\n                    </aol-style-circle>\n                  </aol-style>\n                </aol-feature>\n              </aol-source-vector>\n            </aol-layer-vector>\n          </aol-map>\n        </div>\n        <div class=\"column is-5\">\n          <span class=\"title is-bold\">{{aircraft.registration}}</span>\n          <a href=\"#\" class=\"button is-primary is-outlined\">Add New Flight</a>\n        </div>\n        <div class=\"column is-7\">\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <h3 class=\"title is-size-6\">Upcoming Movements</h3>\n              <div *ngFor=\"let schedule of aircraftSchedule;  let i=index\">\n                <div class=\"box\" *ngIf=\"i<4 && schedule.departuretime*1000 > currentTime\">\n                  <article class=\"media\">\n                    <div class=\"media-content\">\n                      <div class=\"content has-text-centered\t\">\n                        <a routerLink=\"/admin/movement/{{schedule._id}}\">\n                          <h5 class=\"is-marginless\">{{schedule.departure_airport}} -> {{schedule.arrival_airport}}</h5>\n                        </a>\n                        <time datetime=\"2016-1-1\">{{schedule.departuretime*1000 | date : \"short\"}}</time>\n                      </div>\n                    </div>\n                  </article>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"column is-6\">\n              <h3 class=\"title is-size-6\">Past Movements</h3>\n              <div *ngFor=\"let schedule of aircraftSchedule;  let i=index\">\n                <div class=\"box\" *ngIf=\"i<4 && schedule.departuretime*1000 < currentTime\">\n                  <article class=\"media\">\n                    <div class=\"media-content\">\n                      <div class=\"content has-text-centered\t\">\n                        <a routerLink=\"/admin/movement/{{schedule._id}}\">\n                          <h5 class=\"is-marginless\">{{schedule.departure_airport}} -> {{schedule.arrival_airport}}</h5>\n                        </a>\n                        <time datetime=\"2016-1-1\">{{schedule.departuretime*1000 | date : \"short\"}}</time>\n                      </div>\n                    </div>\n                  </article>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"columns\">\n        <div class=\"column is-4\">\n          <div class=\"field has-addons\">\n            <p class=\"control\">\n              <a class=\"button is-primary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                (viewDateChange)=\"activeDayIsOpen = false\">\n                Previous\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary is-outlined\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n                Today\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                (viewDateChange)=\"activeDayIsOpen = false\">\n                Next\n              </a>\n            </p>\n          </div>\n        </div>\n        <div class=\"column is-4\">\n          <h3 class=\"title has-text-centered\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <div class=\"column is-4\">\n          <div class=\"field has-addons is-pulled-right\">\n            <p class=\"control\">\n              <a class=\"button is-primary\" (click)=\"view = CalendarView.Month\"\n                [class.active]=\"view === CalendarView.Month\">\n                Month\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary\" (click)=\"view = CalendarView.Week\"\n                [class.active]=\"view === CalendarView.Week\">\n                Week\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary\" (click)=\"view = CalendarView.Day\" [class.active]=\"view === CalendarView.Day\">\n                Day\n              </a>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div [ngSwitch]=\"view\">\n        <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\n          [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-month-view>\n        <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"\n          [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-week-view>\n        <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"\n          [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-day-view>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/aircraft/aircraft.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/aircraft/aircraft.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tab-content > div {\n  display: none; }\n\n#tab-content > div.is-active {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWlyY3JhZnQvQzpcXG1lYW5cXGZsaWdodG9wc1xcYml0XFxmbGlnaHRvcHMvc3JjXFxhcHBcXGFkbWluXFxhaXJjcmFmdFxcYWlyY3JhZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9haXJjcmFmdC9haXJjcmFmdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YWItY29udGVudD5kaXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI3RhYi1jb250ZW50PmRpdi5pcy1hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/admin/aircraft/aircraft.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/aircraft/aircraft.component.ts ***!
  \******************************************************/
/*! exports provided: AircraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftComponent", function() { return AircraftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var AircraftComponent = /** @class */ (function () {
    function AircraftComponent(adminService, route) {
        var _this = this;
        this.adminService = adminService;
        this.route = route;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    AircraftComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getAircraft();
        this.status = "On Ground";
        this.currentTime = new Date().getTime();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').on('click', function () {
            var tab = jquery__WEBPACK_IMPORTED_MODULE_1__(this).data('tab');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tab-content div').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('div[data-content="' + tab + '"]').addClass('is-active');
        });
    };
    AircraftComponent.prototype.getAircraft = function () {
        var _this = this;
        this.adminService.getAircraft(this.id).subscribe(function (data) {
            _this.aircraft = data.data;
            _this.getLocation();
            _this.getAircraftSchedule();
            console.log('aircraft ', _this.aircraft);
        });
    };
    AircraftComponent.prototype.getAircraftSchedule = function () {
        var _this = this;
        this.adminService.getAircraftSchedule(this.aircraft.aircraftId).subscribe(function (data) {
            _this.aircraftSchedule = data.data;
            _this.aircraftSchedule.forEach(function (element) {
                if (_this.status === "On Ground") {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = "In Progress";
                    }
                }
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('aircraft route', _this.aircraftSchedule);
        });
    };
    AircraftComponent.prototype.getLocation = function () {
        var _this = this;
        this.adminService.getLocation(this.aircraft.icao24).subscribe(function (data) {
            // this.aircraft = data.data;
            _this.aircraftLocation = data.data.path[data.data.path.length - 1];
            _this.aircraftLat = _this.aircraftLocation[1];
            _this.aircraftLon = _this.aircraftLocation[2];
            console.log('location ', _this.aircraftLat);
        });
    };
    AircraftComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    AircraftComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    AircraftComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        // this.modal.open(this.modalContent, { size: 'lg' });
    };
    AircraftComponent.prototype.addEvent = function (title, start, end) {
        this.events.push({
            title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
            start: new Date(start * 1000),
            end: new Date(end * 1000),
            color: colors.red,
            draggable: false,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    AircraftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aircraft',
            template: __webpack_require__(/*! ./aircraft.component.html */ "./src/app/admin/aircraft/aircraft.component.html"),
            styles: [__webpack_require__(/*! ./aircraft.component.scss */ "./src/app/admin/aircraft/aircraft.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AircraftComponent);
    return AircraftComponent;
}());



/***/ }),

/***/ "./src/app/admin/aircrafts/aircrafts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/aircrafts/aircrafts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Aircrafts Overview</h3>\n      <a class=\"button is-primary is-outlined is-pulled-right\" routerLink=\"/admin/new-aircraft\">Add Aircraft</a>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th></th>\n          <th>Registration</th>\n          <th>Upcoming Movement</th>\n          <th>Current Status</th>\n          <th>Action</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let aircraft of aircrafts\">\n            <td>\n              <a routerLink=\"/admin/aircraft/{{aircraft._id}}\">\n                <img src=\"{{aircraft.img_url}}\" class=\"aircraft-img\" alt=\"\">\n              </a>\n            </td>\n            <td>\n              <a routerLink=\"/admin/aircraft/{{aircraft._id}}\">\n                {{aircraft.registration}}\n              </a>\n            </td>\n            <td>\n            </td>\n            <td></td>\n            <td>\n              <a class=\"is-link\" (click)=\"edit(aircraft);update=true\">Edit</a> / \n              <a class=\"is-danger\" (click)=\"delete(aircraft._id)\">Delete</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <app-chat></app-chat>\n\n      <div class=\"modal\" id=\"add-aircraft\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <form>\n            <header class=\"modal-card-head\">\n                <p class=\"modal-card-title\" *ngIf=\"!update\">Add Aircraft</p>\n                <p class=\"modal-card-title\" *ngIf=\"update\">Update Aircraft</p>\n              <button class=\"delete\" aria-label=\"close\" (click)=\"close()\"></button>\n            </header>\n            <section class=\"modal-card-body\">\n              <div class=\"field\">\n                <label class=\"label\">Registration</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"registration\" [(ngModel)]=\"registration\">\n                </div>\n              </div>\n              <div class=\"field\">\n                <label class=\"label\">Aircraft ID</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"aircraftId\" [(ngModel)]=\"aircraftId\">\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <label class=\"label\">Photo</label>\n                <div class=\"control\">\n                  <progress *ngIf=\"currentFileUpload\" class=\"progress is-primary\" value=\"{{progress.percentage}}\"\n                    max=\"100\"></progress>\n                  <div class=\"file has-name\">\n                    <label class=\"file-label\"> <input type=\"file\" class=\"file-input\" (change)=\"selectFile($event)\">\n                      <span class=\"file-cta\">\n                        <span class=\"file-icon\">\n                          <i class=\"fas fa-upload\"></i>\n                        </span>\n                        <span class=\"file-label\">\n                          Choose an image…\n                        </span>\n                      </span>\n                      <span class=\"file-name\">\n                        .jpg, .png, .gif\n                      </span>\n                    </label>\n                  </div>\n\n                  <button class=\"button is-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n                </div>\n              </div>\n\n              <div class=\"field\">\n                <label class=\"label\">Max Take Off Weight</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"tow\" name=\"tow\">\n                </div>\n              </div>\n              <div class=\"field\">\n                <label class=\"label\">Max Fuel Capacity</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"fuel\" name=\"fuel\">\n                </div>\n              </div>\n              <div class=\"field\">\n                <label class=\"label\">Max PAX</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"pax\" name=\"pax\">\n                </div>\n              </div>\n              <div class=\"field\">\n                <label class=\"label\">Max Cargo</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"cargo\" name=\"cargo\">\n                </div>\n              </div>\n              <div class=\"field\">\n                <label class=\"label\">ICAO 24</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"icao24\" name=\"icao24\">\n                </div>\n              </div>\n              <div class=\"field\">\n                <label class=\"label\">Base Location</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"base\" name=\"base\">\n                      <option *ngFor=\"let airport of airports\" [value]=\"airport.icao\">{{airport.icao}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n\n            </section>\n            <footer class=\"modal-card-foot\">\n                <button class=\"button is-success\" id=\"addBtn\" (click)=\"addAircraft()\" *ngIf=\"!update\">Add</button>\n                <button class=\"button is-success\" id=\"addBtn\" (click)=\"updateAircraft()\" *ngIf=\"update\">Update</button>\n                <button class=\"button\" (click)=\"close()\">Cancel</button>\n            </footer>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/aircrafts/aircrafts.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/aircrafts/aircrafts.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aircraft-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWlyY3JhZnRzL0M6XFxtZWFuXFxmbGlnaHRvcHNcXGJpdFxcZmxpZ2h0b3BzL3NyY1xcYXBwXFxhZG1pblxcYWlyY3JhZnRzXFxhaXJjcmFmdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9haXJjcmFmdHMvYWlyY3JhZnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFpcmNyYWZ0LWltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/aircrafts/aircrafts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/aircrafts/aircrafts.component.ts ***!
  \********************************************************/
/*! exports provided: AircraftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftsComponent", function() { return AircraftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fileupload */ "./src/app/admin/fileupload.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AircraftsComponent = /** @class */ (function () {
    function AircraftsComponent(adminService) {
        this.adminService = adminService;
        this.progress = { percentage: 0 };
        this.update = false;
        this.responses = [];
    }
    AircraftsComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-aircraft').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
        this.getAirports();
        this.getAircrafts();
    };
    AircraftsComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    AircraftsComponent.prototype.close = function () {
        this.update = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        this.registration = '';
        this.image = '';
        this.tow = '';
        this.fuel = '';
        this.pax = '';
        this.cargo = '';
        this.icao24 = '';
        this.base = '';
        this.aircraftId = '';
    };
    AircraftsComponent.prototype.upload = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"](file);
        this.adminService.pushFileToStorage(this.currentFileUpload, this.progress).subscribe(function (data) {
            _this.image = data.data;
            console.log('file uploaded ', _this.image);
        });
    };
    AircraftsComponent.prototype.getAircrafts = function () {
        var _this = this;
        this.adminService.getAircrafts().subscribe(function (data) {
            _this.aircrafts = data.data;
            console.log('aircrafts ', _this.aircrafts);
        });
    };
    AircraftsComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    AircraftsComponent.prototype.addAircraft = function () {
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            // this.adminService.addAircraft(this.registration, this.aircraftId, this.image, this.tow, this.fuel, this.pax, this.cargo, this.icao24, this.base)
            //   .subscribe(data => {
            //     console.log('Aircraft Added ', data)
            //     this.getAircrafts();
            //     $('form').trigger("reset");
            //     $('#addBtn').removeClass('is-loading');
            //     // $('#add-aircraft').removeClass('is-active');
            //     this.doRun = false
            //   },
            //     error => {
            //       $('#addBtn').removeClass('is-loading');
            //       console.log(error)
            //     })
        }
    };
    AircraftsComponent.prototype.updateAircraft = function () {
        var _this = this;
        console.log('update start');
        this.adminService.updateAircraft(this.id, this.registration, this.aircraftId, this.image, this.tow, this.fuel, this.pax, this.cargo, this.icao24, this.base)
            .subscribe(function (data) {
            console.log('Crew Updated ', data);
            _this.getAircrafts();
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                message: "Aircraft Updated",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
    };
    AircraftsComponent.prototype.delete = function (aircraft) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(aircraft)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Crew Deleted ', data);
                _this.getAircrafts();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Aircraft Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    AircraftsComponent.prototype.edit = function (aircraft) {
        this.id = aircraft._id;
        this.registration = aircraft.registration;
        this.tow = aircraft.tow;
        this.aircraftId = aircraft.aircraftId;
        this.image = aircraft.img_url;
        this.fuel = aircraft.fuel;
        this.pax = aircraft.pax;
        this.cargo = aircraft.cargo;
        this.icao24 = aircraft.icao24;
        this.base = aircraft.base;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AircraftsComponent.prototype, "responses", void 0);
    AircraftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aircrafts',
            template: __webpack_require__(/*! ./aircrafts.component.html */ "./src/app/admin/aircrafts/aircrafts.component.html"),
            styles: [__webpack_require__(/*! ./aircrafts.component.scss */ "./src/app/admin/aircrafts/aircrafts.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], AircraftsComponent);
    return AircraftsComponent;
}());



/***/ }),

/***/ "./src/app/admin/airport/airport.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/airport/airport.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Airport Handlers</h3>\n      <button class=\"button is-primary is-outlined is-pulled-right\" routerLink=\"/admin/new-handler/{{id}}\">Add Handler</button>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th></th>\n          <th>Name</th>\n          <th>ICAO</th>\n          <th>Local Phone</th>\n          <th>Local Email</th>\n          <th>Type</th>\n          <th>Items</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let handler of handlers\">\n            <td>\n                <img src=\"{{handler.logo}}\" class=\"aircraft-img\" alt=\"\">\n            </td>\n            <td>\n                {{handler.name}}\n            </td>\n            <td>{{handler.icao}}</td>\n            <td>{{handler.local_telephone}}</td>\n            <td>{{handler.local_email}}</td>\n            <td>{{handler.type}}</td>\n            <td>{{handler.items}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <app-chat></app-chat>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/airport/airport.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/airport/airport.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FpcnBvcnQvYWlycG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/airport/airport.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/airport/airport.component.ts ***!
  \****************************************************/
/*! exports provided: AirportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportComponent", function() { return AirportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AirportComponent = /** @class */ (function () {
    function AirportComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
    }
    AirportComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getHandlers(this.id);
    };
    AirportComponent.prototype.getHandlers = function (airport) {
        var _this = this;
        this.adminService.getHandler(airport).subscribe(function (data) {
            _this.handlers = data.data;
            console.log('handlers ', _this.handlers);
        });
    };
    AirportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-airport',
            template: __webpack_require__(/*! ./airport.component.html */ "./src/app/admin/airport/airport.component.html"),
            styles: [__webpack_require__(/*! ./airport.component.scss */ "./src/app/admin/airport/airport.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AirportComponent);
    return AirportComponent;
}());



/***/ }),

/***/ "./src/app/admin/airports/airports.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/airports/airports.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Airport Overview</h3>\n      <button class=\"button is-primary is-outlined is-pulled-right\" routerLink=\"/admin/new-airport\">Add Airport</button>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th></th>\n          <th>Name</th>\n          <th>ICAO</th>\n          <th>Action</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let airport of airports\">\n            <td>\n                <img src=\"{{airport.logo}}\" class=\"aircraft-img\" alt=\"\">\n            </td>\n            <td>\n                <a routerLink=\"/admin/airport/{{airport.icao}}\">{{airport.name}}</a>\n            </td>\n            <td>{{airport.icao}}</td>\n            <td>\n              <a class=\"is-link\" routerLink=\"/admin/edit-airport/{{airport.icao}}\">Edit</a> / \n              <a class=\"is-danger\" (click)=\"delete(airport._id)\">Delete</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <a (click)=\"prev()\" class=\"is-link\" *ngIf=\"pageNo > 1\">&lt;&lt;&lt; Previous</a> - \n      <a (click)=\"next()\" class=\"is-link\">Next &gt;&gt;&gt;</a>\n      <app-chat></app-chat>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/airports/airports.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/airports/airports.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aircraft-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWlycG9ydHMvQzpcXG1lYW5cXGZsaWdodG9wc1xcYml0XFxmbGlnaHRvcHMvc3JjXFxhcHBcXGFkbWluXFxhaXJwb3J0c1xcYWlycG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9haXJwb3J0cy9haXJwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5haXJjcmFmdC1pbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/airports/airports.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/airports/airports.component.ts ***!
  \******************************************************/
/*! exports provided: AirportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportsComponent", function() { return AirportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AirportsComponent = /** @class */ (function () {
    function AirportsComponent(adminService, router, route) {
        this.adminService = adminService;
        this.router = router;
        this.route = route;
        this.responses = [];
    }
    AirportsComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        this.pageNo = this.route.snapshot.paramMap.get("pageNo");
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-aircraft').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
        this.getAirports();
    };
    AirportsComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(this.pageNo, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    AirportsComponent.prototype.next = function () {
        this.pageNo = parseInt(this.pageNo) + 1;
        console.log(this.pageNo);
        this.getAirports();
    };
    AirportsComponent.prototype.prev = function () {
        this.pageNo = parseInt(this.pageNo) - 1;
        console.log(this.pageNo);
        this.getAirports();
    };
    AirportsComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    AirportsComponent.prototype.delete = function (aircraft) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(aircraft)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Airport Deleted ', data);
                _this.getAirports();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Airport Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AirportsComponent.prototype, "responses", void 0);
    AirportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-airports',
            template: __webpack_require__(/*! ./airports.component.html */ "./src/app/admin/airports/airports.component.html"),
            styles: [__webpack_require__(/*! ./airports.component.scss */ "./src/app/admin/airports/airports.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AirportsComponent);
    return AirportsComponent;
}());



/***/ }),

/***/ "./src/app/admin/chat/chat.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/chat/chat.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-4 is-hidden\" id=\"chatCon\">\n    <div class=\"panel\" *ngIf=\"joinned; else joinroom\">\n      <div class=\"panel-heading\">\n        {{ msgData.room }}\n        <!-- <button type=\"button\" class=\"button\" (click)=\"logout()\">\n          Leave Room\n        </button> -->\n      <button class=\"delete\" aria-label=\"close\" style=\"float: right;\" (click)=\"hideChat()\"></button>\n      </div>\n      <div class=\"panel-block\">\n        <div #scrollMe style=\"height: 300px; width: 100%; overflow: auto;\">\n          <ul class=\"chat\">\n            <li *ngFor=\"let c of chats\">\n              <div class=\"clearfix\" *ngIf=\"c.email===msgData.email; else rightchat\">\n                <div class=\"chat-body clearfix\">\n                  <!-- <div class=\"header\">\n                    <strong class=\"primary-font\">{{ c.email }}</strong> <small class=\"pull-right text-muted\">\n                      <span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\n                  </div> -->\n                  <!-- <p style=\"text-align: right;\">\n                    <small>{{ c.email }}</small>\n                  </p> -->\n                  <p style=\"text-align: right;\">\n                    <span class=\"tag is-info is-medium\">{{ c.message }}</span>\n                  </p>\n                  <p style=\"text-align: right;\">\n                    <small>{{ c.updated_at | date: 'medium' }}</small>\n                  </p>\n                </div>\n              </div>\n              <ng-template #rightchat>\n                <div class=\"clearfix\">\n                  <div class=\"chat-body clearfix\">\n                    <!-- <div class=\"header\">\n                      <small class=\" text-muted\"><span\n                          class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\n                      <strong class=\"pull-right primary-font\">{{ c.email }}</strong>\n                    </div> -->\n                    <p>\n                      <small>{{ c.email }}</small>\n                    </p>\n                    <p>\n                      <span class=\"tag is-success is-medium\">{{ c.message }}</span>\n                    </p>\n                    <p>\n                      <small>{{ c.updated_at | date: 'medium' }}</small>\n                    </p>\n                  </div>\n                </div>\n              </ng-template>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"panel-block\">\n        <form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\" style=\"width: 100%\">\n          <div class=\"field has-addons\">\n            <div class=\"control is-expanded\">\n              <input type=\"hidden\" [(ngModel)]=\"msgData.room\" name=\"room\" />\n              <input type=\"hidden\" [(ngModel)]=\"msgData.email\" name=\"email\" />\n              <input class=\"input\" [(ngModel)]=\"msgData.message\" name=\"message\" type=\"text\"\n                placeholder=\"Type your message here...\" required=\"\" />\n            </div>\n            <div class=\"control\">\n              <button class=\"button is-info\" [disabled]=\"!msgForm.form.valid\">\n                Send\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <ng-template #joinroom>\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-body\">\n          <h1>Select Chat Room</h1>\n          <form (ngSubmit)=\"joinRoom()\" #joinForm=\"ngForm\">\n            <div class=\"field\">\n              <select class=\"select\" [(ngModel)]=\"newUser.room\" name=\"room\" required=\"\">\n                <option>Select Room</option>\n                <option>General</option>\n                <option>Admin</option>\n              </select>\n            </div>\n            <div class=\"field\">\n              <button type=\"submit\" class=\"button is-success\" [disabled]=\"!joinForm.form.valid\">Join</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  <button class=\"button is-primary is-rounded is-medium\" id=\"chatBtn\" type=\"button\" (click)=\"showChat()\">Chat</button>"

/***/ }),

/***/ "./src/app/admin/chat/chat.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/chat/chat.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chatCon {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #ffffff; }\n\n#chatBtn {\n  position: fixed;\n  bottom: 15px;\n  right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY2hhdC9DOlxcbWVhblxcZmxpZ2h0b3BzXFxiaXRcXGZsaWdodG9wcy9zcmNcXGFwcFxcYWRtaW5cXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixtQkFDSixFQUFBOztBQUNBO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhdENvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZcclxufVxyXG4jY2hhdEJ0biB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(authService, adminService, router) {
        this.authService = authService;
        this.adminService = adminService;
        this.router = router;
        this.joinned = false;
        this.newUser = { email: '', room: '' };
        this.msgData = { room: '', email: '', message: '' };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__('http://104.238.148.111:4000');
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.me().subscribe(function (user) {
            _this.user = user.user;
            _this.chats = [];
            _this.newUser.email = _this.user.email;
            _this.newUser.room = 'General';
            if (_this.joinned !== true) {
                _this.joinRoom();
            }
            var user = JSON.parse(localStorage.getItem("user"));
            if (user !== null) {
                _this.getChatByRoom(user.room);
                _this.msgData = { room: user.room, email: user.email, message: '' };
                _this.joinned = true;
                _this.scrollToBottom();
            }
            _this.socket.on('new-message', function (data) {
                console.log('new message', data);
                console.log('new message', JSON.parse(localStorage.getItem("user")));
                data.message.email = this.user.email;
                var user = JSON.parse(localStorage.getItem("user"));
                if (data.message.room === JSON.parse(localStorage.getItem("user")).room) {
                    this.chats.push(data.message);
                    this.msgData = { room: user.room, email: user.email, message: '' };
                    this.scrollToBottom();
                }
                var user = JSON.parse(localStorage.getItem("user"));
                this.getChatByRoom(user.room);
            }.bind(_this));
        });
    };
    ChatComponent.prototype.joinRoom = function () {
        var date = new Date();
        localStorage.setItem("user", JSON.stringify(this.newUser));
        this.getChatByRoom(this.newUser.room);
        this.msgData = { room: this.newUser.room, email: this.newUser.email, message: '' };
        this.joinned = true;
        this.socket.emit('save-message', { room: this.newUser.room, email: this.newUser.email, message: 'Join this room', updated_at: date });
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        this.adminService.saveChat(this.msgData).subscribe(function (data) {
            console.log('savee ', data);
            _this.msgData.message = '';
            _this.socket.emit('save-message', data);
        });
    };
    ChatComponent.prototype.getChatByRoom = function (room) {
        var _this = this;
        this.adminService.getChatByRoom(room).subscribe(function (data) {
            _this.chats = data.data;
            console.log('chats ', _this.chats);
        });
    };
    ChatComponent.prototype.hideChat = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#chatCon').addClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_4__('#chatBtn').removeClass('is-hidden');
    };
    ChatComponent.prototype.showChat = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#chatCon').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_4__('#chatBtn').addClass('is-hidden');
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/admin/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/admin/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/admin/crew/crew.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/crew/crew.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\" *ngIf=\"crew\">\n      <div class=\"notification is-primary has-text-centered\">\n          <h4 class=\"title is-size-5\">{{status}}</h4>\n        \n      </div>\n      <div class=\"columns is-mobile is-multiline\">\n        <div class=\"column is-3\">\n          <span class=\"header-icon user-profile-image\">\n            <img src=\"{{crew.img_url}}\" alt=\"\">\n          </span>\n        </div>\n        <div class=\"column is-9\">\n\n        </div>\n        <div class=\"column is-5\">\n          <span class=\"title is-bold is-pulled-left\">{{crew.name}}</span>\n          <button class=\"button is-primary is-outlined is-pulled-right\" (click)=\"showAddLicence()\"\n            id=\"btn-add-licence\">Add Licence</button>\n          <table class=\"table is-fullwidth\">\n            <thead>\n              <th>Licence</th>\n              <th>Expiry</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let licence of licences\">\n                <td>{{licence.licence}}</td>\n                <td>{{licence.expiry}}</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"modal\" id=\"add-licence\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-card\">\n              <form>\n                <header class=\"modal-card-head\">\n                  <p class=\"modal-card-title\">Add Licence</p>\n                  <button class=\"delete\" aria-label=\"close\" (click)=\"hideAddLicence()\"></button>\n                </header>\n                <section class=\"modal-card-body\">\n\n                  <div class=\"columns\">\n                    <div class=\"column is-6\">\n                      <div class=\"field\">\n                        <label class=\"label\">Licence</label>\n                        <div class=\"control\">\n                          <input class=\"input\" type=\"text\" name=\"licence\" [(ngModel)]=\"licence\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"column is-6\">\n                      <div class=\"field\">\n                        <label class=\"label\">Expiry Date</label>\n                        <div class=\"control\">\n                          <input class=\"input\" type=\"text\" name=\"expiry\" [(ngModel)]=\"expiry\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n                </section>\n                <footer class=\"modal-card-foot\">\n                  <button class=\"button is-success\" id=\"addBtn\" (click)=\"addLicence()\">Add</button>\n                  <button class=\"button\">Cancel</button>\n                </footer>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"column is-7\">\n          <div class=\"columns\">\n            <div class=\"column is-6\">\n              <h3 class=\"title is-size-6\">Upcoming Movements</h3>\n              <div *ngFor=\"let schedule of schedule;  let i=index\">\n                <div class=\"box\" *ngIf=\"i<4 && schedule.departuretime*1000 > currentTime\">\n                <article class=\"media\">\n                  <div class=\"media-content\">\n                    <div class=\"content has-text-centered\t\">\n                      <a routerLink=\"/admin/movement/{{schedule._id}}\">\n                        <h5 class=\"is-marginless\">{{schedule.departure_airport}} -> {{schedule.arrival_airport}}</h5>\n                      </a>\n                      <time datetime=\"2016-1-1\">{{schedule.departuretime*1000 | date : \"short\"}}</time>\n                    </div>\n                  </div>\n                </article>\n              </div>\n            </div>\n\n            </div>\n            <div class=\"column is-6\">\n              <h3 class=\"title is-size-6\">Past Movements</h3>\n              <div *ngFor=\"let schedule of schedule;  let i=index\">\n                <div class=\"box\" *ngIf=\"i<4 && schedule.departuretime*1000 < currentTime\">\n                  <article class=\"media\">\n                    <div class=\"media-content\">\n                      <div class=\"content has-text-centered\t\">\n                        <a routerLink=\"/admin/movement/{{schedule._id}}\">\n                          <h5 class=\"is-marginless\">{{schedule.departure_airport}} -> {{schedule.arrival_airport}}</h5>\n                        </a>\n                        <time datetime=\"2016-1-1\">{{schedule.departuretime*1000 | date : \"short\"}}</time>\n                      </div>\n                    </div>\n                  </article>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <header class=\"modal-card-head\">\n            <p class=\"modal-card-title\">Modal title</p>\n            <button class=\"delete\" aria-label=\"close\"></button>\n          </header>\n          <section class=\"modal-card-body\">\n            <div>\n              Event:\n              <pre>{{ modalData?.event | json }}</pre>\n            </div>\n            <!-- Content ... -->\n          </section>\n          <footer class=\"modal-card-foot\">\n            <button class=\"button is-success\">Save changes</button>\n            <button class=\"button\">Cancel</button>\n          </footer>\n        </div>\n      </div>\n      <div class=\"columns\">\n        <div class=\"column is-4\">\n          <div class=\"field has-addons\">\n            <p class=\"control\">\n              <a class=\"button is-primary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                (viewDateChange)=\"activeDayIsOpen = false\">\n                Previous\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary is-outlined\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n                Today\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                (viewDateChange)=\"activeDayIsOpen = false\">\n                Next\n              </a>\n            </p>\n          </div>\n        </div>\n        <div class=\"column is-4\">\n          <h3 class=\"title has-text-centered\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <div class=\"column is-4\">\n          <div class=\"field has-addons is-pulled-right\">\n            <p class=\"control\">\n              <a class=\"button is-primary\" (click)=\"view = CalendarView.Month\"\n                [class.active]=\"view === CalendarView.Month\">\n                Month\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary\" (click)=\"view = CalendarView.Week\"\n                [class.active]=\"view === CalendarView.Week\">\n                Week\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-primary\" (click)=\"view = CalendarView.Day\" [class.active]=\"view === CalendarView.Day\">\n                Day\n              </a>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div [ngSwitch]=\"view\" *ngIf=\"crew\">\n        <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\n          [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-month-view>\n        <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"\n          [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-week-view>\n        <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"\n          [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-day-view>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/crew/crew.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/crew/crew.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZXcvY3Jldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/crew/crew.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/crew/crew.component.ts ***!
  \**********************************************/
/*! exports provided: CrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewComponent", function() { return CrewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CrewComponent = /** @class */ (function () {
    function CrewComponent(adminService, route) {
        var _this = this;
        this.adminService = adminService;
        this.route = route;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    CrewComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        this.currentTime = new Date().getTime();
        this.status = "On Ground";
        console.log('click');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#btn-add-licence').on('click', function () {
            console.log('click');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#add-licence').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#add-licence').removeClass('is-active');
        });
        this.id = this.route.snapshot.paramMap.get("id");
        console.log(this.id);
        this.getCrew();
        this.getLicences();
    };
    CrewComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    CrewComponent.prototype.showAddLicence = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#add-licence').addClass('is-active');
    };
    CrewComponent.prototype.hideAddLicence = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#add-licence').removeClass('is-active');
    };
    CrewComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CrewComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        // this.modal.open(this.modalContent, { size: 'lg' });
    };
    CrewComponent.prototype.getCrew = function () {
        var _this = this;
        this.adminService.getCrew(this.id).subscribe(function (data) {
            _this.crew = data.data;
            if (_this.crew.occupation === 'OPS')
                _this.getOPSSchedule();
            if (_this.crew.occupation === 'PIC')
                _this.getPICSchedule();
            if (_this.crew.occupation === 'FO')
                _this.getFOSchedule();
            console.log('crew ', _this.crew);
        });
    };
    CrewComponent.prototype.getLicences = function () {
        var _this = this;
        this.adminService.getLicences(this.id).subscribe(function (data) {
            _this.licences = data.data;
            console.log('licences ', _this.licences);
        });
    };
    CrewComponent.prototype.getFOSchedule = function () {
        var _this = this;
        this.adminService.getFOSchedule(this.id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                if (_this.status === "On Ground") {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = "In Progress";
                    }
                }
                _this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    CrewComponent.prototype.getOPSSchedule = function () {
        var _this = this;
        this.adminService.getOPSSchedule(this.id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                if (_this.status === "On Ground") {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = "In Progress";
                    }
                }
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    CrewComponent.prototype.getPICSchedule = function () {
        var _this = this;
        this.adminService.getPICSchedule(this.id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                if (_this.status === "On Ground") {
                    if (element.departuretime * 1000 < _this.currentTime && element.arrivaltime > _this.currentTime) {
                        _this.status = "In Progress";
                    }
                }
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    CrewComponent.prototype.addLicence = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addLicence(this.id, this.licence, this.expiry)
                .subscribe(function (data) {
                console.log('Licence Added ', data);
                _this.getLicences();
                jquery__WEBPACK_IMPORTED_MODULE_2__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                // $('#add-licence').removeClass('is-active');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    CrewComponent.prototype.addEvent = function (title, start, end) {
        this.events.push({
            title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
            start: new Date(start * 1000),
            end: new Date(end * 1000),
            color: colors.red,
            draggable: false,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    CrewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crew',
            template: __webpack_require__(/*! ./crew.component.html */ "./src/app/admin/crew/crew.component.html"),
            styles: [__webpack_require__(/*! ./crew.component.scss */ "./src/app/admin/crew/crew.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], CrewComponent);
    return CrewComponent;
}());



/***/ }),

/***/ "./src/app/admin/crews/crews.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/crews/crews.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Crews</h3>\n      <button class=\"button is-primary is-outlined is-pulled-right\" id=\"btn-add-crew\">Add Crew</button>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th></th>\n          <th>Name</th>\n          <th>Upcoming Movement</th>\n          <th>Current Status</th>\n          <th>Action</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let crew of crews\">\n            <td>\n              <a routerLink=\"/admin/crew/{{crew._id}}\">\n                <img src=\"{{crew.img_url}}\" class=\"crew-img\" alt=\"\">\n              </a>\n            </td>\n            <td>\n              <a routerLink=\"/admin/crew/{{crew._id}}\">\n                {{crew.name}}\n              </a>\n            </td>\n            <td>\n              {{crew.name}}\n            </td>\n            <td>\n              On-duty\n            </td>\n            <td>\n              <a class=\"is-link\" (click)=\"edit(crew);update=true\">Edit</a> / \n              <a class=\"is-danger\" (click)=\"deleteCrew(crew._id)\">Delete</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"modal\" id=\"add-crew\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <form>\n            <header class=\"modal-card-head\">\n              <p class=\"modal-card-title\" *ngIf=\"!update\">Add Crew Member</p>\n              <p class=\"modal-card-title\" *ngIf=\"update\">Update Crew Member</p>\n              <button class=\"delete\" aria-label=\"close\" (click)=\"close()\"></button>\n            </header>\n            <section class=\"modal-card-body\">\n              <div class=\"field\">\n                <label class=\"label\">Name</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n                </div>\n              </div>\n              <div class=\"columns\">\n                <div class=\"column is-8\">\n                  <div class=\"field\">\n                    <label class=\"label\">Photo</label>\n                    <div class=\"control\">\n                      <progress *ngIf=\"currentFileUpload\" class=\"progress is-primary\" value=\"{{progress.percentage}}\" max=\"100\"></progress>\n                      <div class=\"file has-name\">\n                        <label class=\"file-label\"> <input type=\"file\" class=\"file-input\" (change)=\"selectFile($event)\">\n                        <span class=\"file-cta\">\n                          <span class=\"file-icon\">\n                            <i class=\"fas fa-upload\"></i>\n                          </span>\n                          <span class=\"file-label\">\n                            Choose an image…\n                          </span>\n                        </span>\n                        <span class=\"file-name\">\n                          .jpg, .png, .gif\n                        </span>\n                        </label>\n                      </div>\n\n                      <button class=\"button is-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"column is-4\">\n                  <div class=\"field\">\n                    <label class=\"label\">Occupation</label>\n                    <div class=\"control\">\n                      <div class=\"select\">\n                        <select name=\"occupation\" [(ngModel)]=\"occupation\">\n                          <option></option>\n                          <option>PIC</option>\n                          <option>FO</option>\n                          <option>OPS</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"columns\">\n                <div class=\"column is-6\" *ngIf=\"!update\">\n                  <div class=\"field\">\n                    <label class=\"label\">Primary Email</label>\n                    <div class=\"control\">\n                      <input class=\"input\" type=\"text\" name=\"p_email\" [(ngModel)]=\"p_email\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"column is-6\">\n                  <div class=\"field\">\n                    <label class=\"label\">Secondary Email</label>\n                    <div class=\"control\">\n                      <input class=\"input\" type=\"text\" name=\"s_email\" [(ngModel)]=\"s_email\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"columns\" *ngIf=\"!update\">\n\n                <div class=\"column is-6\">\n                  <div class=\"field\">\n                    <label class=\"label\">Password</label>\n                    <div class=\"control\">\n                      <input placeholder=\"Password\" class=\"input\" type=\"password\" [(ngModel)]=\"password\" name=\"password\"\n                        required>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"column is-6\">\n                  <div class=\"field\">\n                    <label class=\"label\">Repeat Password</label>\n                    <div class=\"control\">\n                      <input placeholder=\"Reapet Password\" class=\"input\" [(ngModel)]=\"repeatPassword\" type=\"password\"\n                        name=\"repeatPassword\" required>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"columns\">\n                <div class=\"column is-6\">\n                  <div class=\"field\">\n                    <label class=\"label\">Primary Phone Number</label>\n                    <div class=\"control\">\n                      <input class=\"input\" type=\"text\" name=\"p_phone\" [(ngModel)]=\"p_phone\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"column is-6\">\n                  <div class=\"field\">\n                    <label class=\"label\">Secondary Phone Number</label>\n                    <div class=\"control\">\n                      <input class=\"input\" type=\"text\" name=\"s_phone\" [(ngModel)]=\"s_phone\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n            </section>\n            <footer class=\"modal-card-foot\">\n              <button class=\"button is-success\" id=\"addBtn\" (click)=\"register()\" *ngIf=\"!update\">Add</button>\n              <button class=\"button is-success\" id=\"addBtn\" (click)=\"updateCrew()\" *ngIf=\"update\">Update</button>\n              <button class=\"button\" (click)=\"close()\">Cancel</button>\n            </footer>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/crews/crews.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/crews/crews.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crew-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3Jld3MvQzpcXG1lYW5cXGZsaWdodG9wc1xcYml0XFxmbGlnaHRvcHMvc3JjXFxhcHBcXGFkbWluXFxjcmV3c1xcY3Jld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jcmV3cy9jcmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmV3LWltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/crews/crews.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/crews/crews.component.ts ***!
  \************************************************/
/*! exports provided: CrewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewsComponent", function() { return CrewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fileupload */ "./src/app/admin/fileupload.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrewsComponent = /** @class */ (function () {
    function CrewsComponent(adminService) {
        this.adminService = adminService;
        this.progress = { percentage: 0 };
        this.update = false;
        this.responses = [];
    }
    CrewsComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    CrewsComponent.prototype.upload = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"](file);
        this.adminService.pushFileToStorage(this.currentFileUpload, this.progress).subscribe(function (data) {
            _this.img_url = data.data;
            console.log('file uploaded ', _this.img_url);
        });
    };
    CrewsComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-crew').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
        });
        this.getCrews();
    };
    CrewsComponent.prototype.close = function () {
        this.update = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').removeClass('is-active');
        this.name = '';
        this.img_url = '';
        this.occupation = '';
        this.p_email = '';
        this.s_email = '';
        this.p_phone = '';
        this.s_phone = '';
    };
    CrewsComponent.prototype.getCrews = function () {
        var _this = this;
        this.adminService.getCrews().subscribe(function (data) {
            _this.crews = data.data;
            console.log('crews ', _this.crews);
        });
    };
    CrewsComponent.prototype.edit = function (crew) {
        this.crewid = crew._id;
        this.name = crew.name;
        this.img_url = crew.img_url;
        this.occupation = crew.occupation;
        this.p_email = crew.p_email;
        this.s_email = crew.s_email;
        this.p_phone = crew.p_phone;
        this.s_phone = crew.s_phone;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').addClass('is-active');
    };
    CrewsComponent.prototype.addCrew = function (userID) {
        var _this = this;
        console.log('add start');
        this.adminService.addCrew(this.name, this.img_url, this.occupation, 0, 0, this.p_email, this.s_email, this.p_phone, this.s_phone, this.licence, this.expiry, userID)
            .subscribe(function (data) {
            console.log('Crew Added ', data);
            _this.getCrews();
            _this.doRun = false;
            jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
        }, function (error) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            console.log(error);
        });
    };
    CrewsComponent.prototype.updateCrew = function () {
        var _this = this;
        console.log('update start');
        this.adminService.updateCrewData(this.crewid, this.name, this.img_url, this.occupation, this.p_email, this.s_email, this.p_phone, this.s_phone)
            .subscribe(function (data) {
            console.log('Crew Updated ', data);
            _this.getCrews();
            jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-crew').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                message: "Crew Member Updated",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
        }, function (error) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
            console.log(error);
        });
    };
    CrewsComponent.prototype.deleteCrew = function (crewid) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(crewid)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Crew Deleted ', data);
                _this.getCrews();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Crew Member Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    CrewsComponent.prototype.register = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            if (this.password === this.repeatPassword) {
                this.adminService.addUser(this.name, this.p_email, this.password, this.repeatPassword, "crew", this.occupation)
                    .subscribe(function (data) {
                    console.log('new user ', data);
                    _this.addCrew(data.data._id);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CrewsComponent.prototype, "responses", void 0);
    CrewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crews',
            template: __webpack_require__(/*! ./crews.component.html */ "./src/app/admin/crews/crews.component.html"),
            styles: [__webpack_require__(/*! ./crews.component.scss */ "./src/app/admin/crews/crews.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], CrewsComponent);
    return CrewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <div class=\"container\">\n        <div class=\"columns is-multiline\">\n          <div class=\"column is-9\">\n\n            <div class=\"columns\">\n              <div class=\"column is-4\">\n                <div class=\"field has-addons\">\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                      (viewDateChange)=\"activeDayIsOpen = false\">\n                      Previous\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary is-outlined\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n                      Today\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                      (viewDateChange)=\"activeDayIsOpen = false\">\n                      Next\n                    </a>\n                  </p>\n                </div>\n              </div>\n              <div class=\"column is-4\">\n                <h3 class=\"title has-text-centered\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n              </div>\n              <div class=\"column is-4\">\n                <div class=\"field has-addons is-pulled-right\">\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" (click)=\"view = CalendarView.Month\"\n                      [class.active]=\"view === CalendarView.Month\">\n                      Month\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" (click)=\"view = CalendarView.Week\"\n                      [class.active]=\"view === CalendarView.Week\">\n                      Week\n                    </a>\n                  </p>\n                  <p class=\"control\">\n                    <a class=\"button is-primary\" (click)=\"view = CalendarView.Day\"\n                      [class.active]=\"view === CalendarView.Day\">\n                      Day\n                    </a>\n                  </p>\n                </div>\n              </div>\n            </div>\n            <div [ngSwitch]=\"view\">\n              <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\n                [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-month-view>\n              <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"\n                [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-week-view>\n              <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"\n                [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-day-view>\n            </div>\n          </div>\n<app-chat></app-chat>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, adminService, router) {
        var _this = this;
        this.authService = authService;
        this.adminService = adminService;
        this.router = router;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
        if (!this.authService.loggedIn())
            this.navigate('/auth/login');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init this.user on startup
        this.authService.me().subscribe(function (user) {
            _this.user = user.user;
            _this.id = _this.user._id;
            console.log('user ', _this.user);
            if (_this.user.role === "admin") {
                _this.getAdminSchedule();
            }
            else {
                _this.adminService.getCrewByUser(_this.id).subscribe(function (data) {
                    console.log(data.data);
                    if (data.data[0]) {
                        _this.crew_id = data.data[0]._id;
                        console.log('crew_id ', _this.crew_id);
                        if (_this.user.occupation === "PIC")
                            _this.getPICSchedule();
                        if (_this.user.occupation === "OPS")
                            _this.getOPSSchedule();
                        if (_this.user.occupation === "FO")
                            _this.getFOSchedule();
                    }
                });
            }
        });
        // update this.user after login/register/logout
        this.userSubscription = this.authService.$userSource.subscribe(function (user) {
            _this.user = user;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    DashboardComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    DashboardComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    DashboardComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    DashboardComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        // this.modal.open(this.modalContent, { size: 'lg' });
    };
    DashboardComponent.prototype.getAdminSchedule = function () {
        var _this = this;
        this.adminService.getAdminSchedule().subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.getFOSchedule = function () {
        var _this = this;
        this.adminService.getFOSchedule(this.crew_id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.getOPSSchedule = function () {
        var _this = this;
        this.adminService.getOPSSchedule(this.crew_id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.getPICSchedule = function () {
        var _this = this;
        this.adminService.getPICSchedule(this.crew_id).subscribe(function (data) {
            _this.schedule = data.data;
            _this.schedule.forEach(function (element) {
                _this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
            });
            console.log('schedule ', _this.schedule);
        });
    };
    DashboardComponent.prototype.addEvent = function (title, start, end) {
        this.events.push({
            title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
            start: new Date(start * 1000),
            end: new Date(end * 1000),
            color: colors.red,
            draggable: false,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('/auth/login');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "myScrollContainer", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-airport/edit-airport.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-airport/edit-airport.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Edit Airport</h3>\n\n      <form>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Name</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">ICAO Code</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"icao\" [(ngModel)]=\"icao\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longitude\" [(ngModel)]=\"longitude\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Latitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"latitude\" [(ngModel)]=\"latitude\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Elevation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"elevation\" [(ngModel)]=\"elevation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longest Runway</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longest_runway\" [(ngModel)]=\"longest_runway\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Magnetic Variation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"magnetic_variation\" [(ngModel)]=\"magnetic_variation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Airport Type</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"airport_type\" [(ngModel)]=\"airport_type\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Beacon</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"beacon\" [(ngModel)]=\"beacon\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Fuel Types</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"fuel_types\" [(ngModel)]=\"fuel_types\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Landing Fee</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"landing_fee\" [(ngModel)]=\"landing_fee\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Oxygen</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"oxygen\" [(ngModel)]=\"oxygen\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Repairs</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"repairs\" [(ngModel)]=\"repairs\">\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Country</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"country\" [(ngModel)]=\"country\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\">\n                <button class=\"button is-link\" id=\"addBtn\" (click)=\"updateAirport()\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/edit-airport/edit-airport.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-airport/edit-airport.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtYWlycG9ydC9lZGl0LWFpcnBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/edit-airport/edit-airport.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-airport/edit-airport.component.ts ***!
  \**************************************************************/
/*! exports provided: EditAirportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAirportComponent", function() { return EditAirportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditAirportComponent = /** @class */ (function () {
    function EditAirportComponent(adminService, route, router) {
        this.adminService = adminService;
        this.route = route;
        this.router = router;
    }
    EditAirportComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.doRun = true;
        this.getAirport();
    };
    EditAirportComponent.prototype.getAirport = function () {
        var _this = this;
        console.log('getting airport');
        this.adminService.getAirportDetails(this.id).subscribe(function (data) {
            var airport = data.data;
            _this._id = airport._id;
            _this.name = airport.name;
            _this.country = airport.country;
            _this.icao = airport.icao;
            _this.latitude = airport.latitude;
            _this.longitude = airport.longitude;
            _this.elevation = airport.elevation;
            _this.longest_runway = airport.longest_runway;
            _this.magnetic_variation = airport.magnetic_variation;
            _this.airport_type = airport.airport_type;
            _this.beacon = airport.beacon;
            _this.fuel_types = airport.fuel_types;
            _this.landing_fee = airport.landing_fee;
            _this.oxygen = airport.oxygen;
            _this.repairs = airport.repairs;
            console.log('airport got', airport);
        });
    };
    EditAirportComponent.prototype.updateAirport = function () {
        console.log('update start');
        this.adminService.updateAirport(this._id, this.name, this.country, this.icao, this.latitude, this.longitude, this.elevation, this.longest_runway, this.magnetic_variation, this.airport_type, this.beacon, this.fuel_types, this.landing_fee, this.oxygen, this.repairs)
            .subscribe(function (data) {
            console.log('Crew Updated ', data);
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_3__["toast"])({
                message: "Airport Updated",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
        });
    };
    EditAirportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-airport',
            template: __webpack_require__(/*! ./edit-airport.component.html */ "./src/app/admin/edit-airport/edit-airport.component.html"),
            styles: [__webpack_require__(/*! ./edit-airport.component.scss */ "./src/app/admin/edit-airport/edit-airport.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditAirportComponent);
    return EditAirportComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-sales/edit-sales.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/edit-sales/edit-sales.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-sales works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/edit-sales/edit-sales.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/edit-sales/edit-sales.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtc2FsZXMvZWRpdC1zYWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/edit-sales/edit-sales.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/edit-sales/edit-sales.component.ts ***!
  \**********************************************************/
/*! exports provided: EditSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSalesComponent", function() { return EditSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditSalesComponent = /** @class */ (function () {
    function EditSalesComponent(adminService, renderer, route, document) {
        this.adminService = adminService;
        this.renderer = renderer;
        this.route = route;
        this.document = document;
        this.exampleOptions = {
            enableTime: true,
            mode: "single"
        };
    }
    EditSalesComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getAirports();
        this.doRun = true;
    };
    EditSalesComponent.prototype.ngAfterViewInit = function () {
        // addClass hack until ng2-flatpickr takes my PR
        this.renderer.addClass(this.document.getElementsByClassName('ng2-flatpickr-input flatpickr-input')[0], 'input');
    };
    EditSalesComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    EditSalesComponent.prototype.getSale = function () {
        var _this = this;
        console.log('getting airport');
        this.adminService.getSale(this.id).subscribe(function (data) {
            var sale = data.data;
            _this._id = sale._id;
            _this.company_name = sale.company_name;
            _this.contact_name = sale.contact_name;
            _this.contact_email = sale.contact_email;
            _this.contact_phone = sale.contact_phone;
            _this.weight = sale.weight;
            _this.description = sale.description;
            _this.instructions = sale.instructions;
            _this.origin_airport = sale.origin_airport;
            _this.destination_airport = sale.destination_airport;
            _this.departure = sale.departure;
            _this.estimated_cost = sale.estimated_cost;
            _this.price_charged = sale.price_charged;
            console.log('airport got', sale);
        });
    };
    EditSalesComponent.prototype.updateSale = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.updateSale(this.id, this.company_name, this.contact_name, this.contact_email, this.contact_phone, this.weight, this.dangerous, this.instructions, this.description, this.origin_airport, this.destination_airport, Date.parse(this.departure) / 1000, this.reference_id, this.estimated_cost, this.price_charged)
                .subscribe(function (data) {
                console.log('Aircraft Updated ', data);
                // this.getAircrafts();
                jquery__WEBPACK_IMPORTED_MODULE_2__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    EditSalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-sales',
            template: __webpack_require__(/*! ./edit-sales.component.html */ "./src/app/admin/edit-sales/edit-sales.component.html"),
            styles: [__webpack_require__(/*! ./edit-sales.component.scss */ "./src/app/admin/edit-sales/edit-sales.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], Object])
    ], EditSalesComponent);
    return EditSalesComponent;
}());



/***/ }),

/***/ "./src/app/admin/fileupload.ts":
/*!*************************************!*\
  !*** ./src/app/admin/fileupload.ts ***!
  \*************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "./src/app/admin/handlers/handlers.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/handlers/handlers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Handler Overview</h3>\n      <button class=\"button is-primary is-outlined is-pulled-right\" routerLink=\"/admin/new-handler\">Add Handler</button>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th></th>\n          <th>Name</th>\n          <th>ICAO</th>\n          <th>Primary Phone</th>\n          <th>Primary Email</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let handler of handlers\">\n            <td>\n              <a routerLink=\"/admin/aircraft\">\n                <img src=\"{{handler.logo}}\" class=\"aircraft-img\" alt=\"\">\n              </a>\n            </td>\n            <td>\n              <a routerLink=\"/admin/aircraft\">\n                {{handler.name}}\n              </a>\n            </td>\n            <td>{{handler.icao}}</td>\n            <td>{{handler.phone_primary}}</td>\n            <td>{{handler.email_primary}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <app-chat></app-chat>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/handlers/handlers.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/handlers/handlers.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aircraft-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaGFuZGxlcnMvQzpcXG1lYW5cXGZsaWdodG9wc1xcYml0XFxmbGlnaHRvcHMvc3JjXFxhcHBcXGFkbWluXFxoYW5kbGVyc1xcaGFuZGxlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9oYW5kbGVycy9oYW5kbGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5haXJjcmFmdC1pbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/handlers/handlers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/handlers/handlers.component.ts ***!
  \******************************************************/
/*! exports provided: HandlersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlersComponent", function() { return HandlersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandlersComponent = /** @class */ (function () {
    function HandlersComponent(adminService) {
        this.adminService = adminService;
        this.responses = [];
    }
    HandlersComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-aircraft').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').addClass('is-active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-aircraft').removeClass('is-active');
        });
        this.getHandlers();
    };
    HandlersComponent.prototype.getHandlers = function () {
        var _this = this;
        this.adminService.getHandlers().subscribe(function (data) {
            _this.handlers = data.data;
            console.log('handlers ', _this.handlers);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HandlersComponent.prototype, "responses", void 0);
    HandlersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-handlers',
            template: __webpack_require__(/*! ./handlers.component.html */ "./src/app/admin/handlers/handlers.component.html"),
            styles: [__webpack_require__(/*! ./handlers.component.scss */ "./src/app/admin/handlers/handlers.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], HandlersComponent);
    return HandlersComponent;
}());



/***/ }),

/***/ "./src/app/admin/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-dark\" role=\"navigation\" aria-label=\"main navigation\">\r\n  <div class=\"navbar-brand\">\r\n    <a class=\"navbar-item\" href=\"/\">\r\n      FlightOPS\r\n    </a>\r\n\r\n    <a role=\"button\" class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\"\r\n      data-target=\"navbarBasicExample\">\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"navbarBasicExample\" class=\"navbar-menu\">\r\n    <div class=\"navbar-start\">\r\n      <div class=\"navbar-item field\">\r\n        <p class=\"control has-icons-right\">\r\n          <input class=\"input\" type=\"search\" placeholder=\"Search...\">\r\n          <span class=\"icon is-small is-right\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"navbar-end\">\r\n      <a class=\"navbar-item\" (click)=\"logout()\">\r\n        Logout\r\n      </a>\r\n\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/admin/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaGVhZGVyL0M6XFxtZWFuXFxmbGlnaHRvcHNcXGJpdFxcZmxpZ2h0b3BzL3NyY1xcYXBwXFxhZG1pblxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('/auth/login');
    };
    HeaderComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/admin/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/admin/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/movement/movement.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/movement/movement.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"columns\">\r\n    <div class=\"column is-3\">\r\n      <app-side-nav></app-side-nav>\r\n    </div>\r\n    <div class=\"column is-9\" *ngIf=\"movement\">\r\n      <div class=\"notification is-primary has-text-centered\">\r\n        <ng-template [ngIf]=\"movement.departuretime*1000 < currentTime && movement.arrivaltime*1000 > currentTime\"\r\n          [ngIfElse]=\"onGround\">\r\n          <h4 class=\"title is-size-5\">In Progress</h4>\r\n        </ng-template>\r\n\r\n        <ng-template #onGround>\r\n          <h4 class=\"title is-size-5\">On Ground</h4>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"columns is-mobile is-multiline\">\r\n        <div class=\"column is-3\">\r\n          <span class=\"header-icon user-profile-image\" *ngIf=\"ops\">\r\n            <img src=\"{{ops.img_url}}\" alt=\"\">\r\n          </span>\r\n          <div class=\"columns\">\r\n            <div class=\"column is-6\">\r\n\r\n              <span class=\"header-icon user-profile-image\" *ngIf=\"pic\">\r\n                <img src=\"{{pic.img_url}}\" alt=\"\">\r\n              </span>\r\n            </div>\r\n            <div class=\"column is-6\">\r\n\r\n              <span class=\"header-icon user-profile-image\" *ngIf=\"fo\">\r\n                <img src=\"{{fo.img_url}}\" alt=\"\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column is-9\">\r\n          <aol-map [width]=\"'100%'\" [height]=\"'350px'\" *ngIf=\"arriveLat && departLat\">\r\n            <aol-interaction-default></aol-interaction-default>\r\n            <aol-control-defaults></aol-control-defaults>\r\n            <aol-control-fullscreen></aol-control-fullscreen>\r\n\r\n            <aol-view [zoom]=\"4\">\r\n              <aol-coordinate [x]=\"viewLat\" [y]=\"viewLon\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\r\n            </aol-view>\r\n\r\n            <aol-layer-tile [opacity]=\"1\">\r\n              <aol-source-osm></aol-source-osm>\r\n            </aol-layer-tile>\r\n            <aol-layer-vector>\r\n              <aol-source-vector>\r\n                <aol-feature>\r\n                  <aol-geometry-polygon>\r\n                    <aol-collection-coordinates [coordinates]=\"[[departLat, departLon], [arriveLat, arriveLon]]\"\r\n                      [srid]=\"'EPSG:4326'\">\r\n                    </aol-collection-coordinates>\r\n                  </aol-geometry-polygon>\r\n                  <aol-style>\r\n                    <aol-style-stroke [color]=\"'red'\" [width]=\"3\"></aol-style-stroke>\r\n                    <aol-style-fill [color]=\"[255,0,0,0.1]\"></aol-style-fill>\r\n                  </aol-style>\r\n                </aol-feature>\r\n\r\n              </aol-source-vector>\r\n            </aol-layer-vector>\r\n          </aol-map>\r\n        </div>\r\n        <div class=\"column is-5\">\r\n          <div class=\"field has-addons\">\r\n            <div class=\"control\">\r\n              <input class=\"input\" type=\"text\" placeholder=\"Off-Block\">\r\n            </div>\r\n            <div class=\"control\">\r\n              <a class=\"button is-info\">\r\n                Save\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"field has-addons\">\r\n            <div class=\"control\">\r\n              <input class=\"input\" type=\"text\" placeholder=\"Take off\">\r\n            </div>\r\n            <div class=\"control\">\r\n              <a class=\"button is-info\">\r\n                Save\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"field has-addons\">\r\n            <div class=\"control\">\r\n              <input class=\"input\" type=\"text\" placeholder=\"Landing\">\r\n            </div>\r\n            <div class=\"control\">\r\n              <a class=\"button is-info\">\r\n                Save\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"field has-addons\">\r\n            <div class=\"control\">\r\n              <input class=\"input\" type=\"text\" placeholder=\"On-Block\">\r\n            </div>\r\n            <div class=\"control\">\r\n              <a class=\"button is-info\">\r\n                Save\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column is-7\">\r\n          <div class=\"columns\">\r\n            <div class=\"column is-6\">\r\n              <h3 class=\"title is-size-6\">Notes (Operations):</h3>\r\n              <div class=\"message-board\">\r\n                <div *ngFor=\"let message of messages\">\r\n                  <div *ngIf=\"message.usergroup === 'handler'\">\r\n                    {{message.message}}\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"control\">\r\n                  <textarea name=\"handler_message\" [(ngModel)]=\"handler_message\" class=\"textarea\"></textarea>\r\n                </div>\r\n              </div>\r\n              <button class=\"button is-link\" (click)=\"addMessage('handler')\">Save</button>\r\n\r\n            </div>\r\n            <div class=\"column is-6\">\r\n              <h3 class=\"title is-size-6\">Notes (Flight Crew)</h3>\r\n              <div class=\"message-board\">\r\n                <div *ngFor=\"let message of messages\">\r\n                  <div *ngIf=\"message.usergroup === 'crew'\">\r\n                    {{message.message}}\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"control\">\r\n                  <textarea name=\"crew_message\" class=\"textarea\" [(ngModel)]=\"crew_message\"></textarea>\r\n                </div>\r\n              </div>\r\n              <button class=\"button is-link\" (click)=\"addMessage('crew')\">Save</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column is-6\">\r\n          <table class=\"table is-fullwidth\">\r\n            <thead>\r\n\r\n              <th>Departure NOTAM</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let notam of departureNOTAM\">\r\n                <td>{{notam.iteme}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"column is-6\">\r\n          <table class=\"table is-fullwidth\">\r\n            <thead>\r\n\r\n              <th>Arrival NOTAM</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let notam of arrivalNOTAM\">\r\n                <td>{{notam.iteme}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/movement/movement.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/movement/movement.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-board {\n  height: 200px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbW92ZW1lbnQvQzpcXG1lYW5cXGZsaWdodG9wc1xcYml0XFxmbGlnaHRvcHMvc3JjXFxhcHBcXGFkbWluXFxtb3ZlbWVudFxcbW92ZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbW92ZW1lbnQvbW92ZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1ib2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/movement/movement.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/movement/movement.component.ts ***!
  \******************************************************/
/*! exports provided: MovementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementComponent", function() { return MovementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovementComponent = /** @class */ (function () {
    function MovementComponent(route, adminService) {
        this.route = route;
        this.adminService = adminService;
    }
    MovementComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.currentTime = new Date().getTime();
        this.getMovement();
        this.getMessages();
    };
    MovementComponent.prototype.getMovement = function () {
        var _this = this;
        this.adminService.getMovement(this.id).subscribe(function (data) {
            _this.movement = data.data;
            _this.getDepartureNOTAM(_this.movement.departure_airport);
            _this.getArrivalNOTAM(_this.movement.arrival_airport);
            _this.getPIC();
            _this.getFO();
            _this.getOPS();
            _this.getHandler();
            _this.getDepartAirport();
            _this.getArriveAirport();
            console.log('movement ', _this.movement);
        });
    };
    MovementComponent.prototype.getDepartAirport = function () {
        var _this = this;
        this.adminService.getAirport(this.movement.departure_airport).subscribe(function (data) {
            console.log('depart airport ', data.data);
            _this.departLat = data.data[0].latitude;
            _this.departLon = data.data[0].longitude;
        });
    };
    MovementComponent.prototype.getArriveAirport = function () {
        var _this = this;
        this.adminService.getAirport(this.movement.arrival_airport).subscribe(function (data) {
            console.log('arrival airport ', data.data);
            _this.arriveLat = data.data[0].latitude;
            _this.arriveLon = data.data[0].longitude;
            if (_this.arriveLat && _this.departLat) {
                _this.viewLat = (_this.departLat + _this.arriveLat) / 2;
                _this.viewLon = (_this.departLon + _this.arriveLon) / 2;
                console.log('paaic ', _this.viewLat);
                console.log('paaic ', _this.viewLon);
            }
        });
    };
    MovementComponent.prototype.getPIC = function () {
        var _this = this;
        this.adminService.getCrew(this.movement.pic_crew).subscribe(function (data) {
            _this.pic = data.data;
            console.log('pic ', _this.pic);
        });
    };
    MovementComponent.prototype.getFO = function () {
        var _this = this;
        this.adminService.getCrew(this.movement.fo_crew).subscribe(function (data) {
            _this.fo = data.data;
            console.log('fo ', _this.fo);
        });
    };
    MovementComponent.prototype.getOPS = function () {
        var _this = this;
        this.adminService.getCrew(this.movement.ops_crew).subscribe(function (data) {
            _this.ops = data.data;
            console.log('ops ', _this.ops);
        });
    };
    MovementComponent.prototype.getHandler = function () {
        var _this = this;
        this.adminService.getHandlerDetails(this.movement.handler).subscribe(function (data) {
            _this.handler = data.data;
            console.log('handler ', _this.handler);
        });
    };
    MovementComponent.prototype.getDepartureNOTAM = function (id) {
        var _this = this;
        this.adminService.getNOTAM(id).subscribe(function (data) {
            _this.departureNOTAM = data.data.rows;
            console.log('departureNOTAM ', _this.departureNOTAM);
        });
    };
    MovementComponent.prototype.getArrivalNOTAM = function (id) {
        var _this = this;
        this.adminService.getNOTAM(id).subscribe(function (data) {
            _this.arrivalNOTAM = data.data.rows;
            console.log('arrivalNOTAM ', _this.arrivalNOTAM);
        });
    };
    MovementComponent.prototype.addMessage = function (type) {
        var _this = this;
        if (type === 'crew') {
            var message = this.crew_message;
            this.adminService.sendMail(this.pic.p_email, 'Message Board - Crew ' + this.id, message).subscribe(function (data) {
                console.log('pic mail ', data);
            });
            this.adminService.sendMail(this.ops.p_email, 'Message Board - Crew ' + this.id, message).subscribe(function (data) {
                console.log('ops mail ', data);
            });
            this.adminService.sendMail(this.fo.p_email, 'Message Board - Crew ' + this.id, message).subscribe(function (data) {
                console.log('fo mail ', data);
            });
        }
        else {
            var message = this.handler_message;
            this.adminService.sendMail(this.handler.email_primary, 'Message Board - Handler ' + this.id, message).subscribe(function (data) {
                console.log('handler mail ', data);
            });
        }
        this.adminService.addMboard(this.id, message, type).subscribe(function (data) {
            console.log('added ', data);
            _this.getMessages();
            _this.crew_message = '';
            _this.handler_message = '';
        });
    };
    MovementComponent.prototype.getMessages = function () {
        var _this = this;
        this.adminService.getMboard(this.id).subscribe(function (data) {
            console.log('get messages ', data);
            _this.messages = data.data;
        });
    };
    MovementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movement',
            template: __webpack_require__(/*! ./movement.component.html */ "./src/app/admin/movement/movement.component.html"),
            styles: [__webpack_require__(/*! ./movement.component.scss */ "./src/app/admin/movement/movement.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], MovementComponent);
    return MovementComponent;
}());



/***/ }),

/***/ "./src/app/admin/movements/movements.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/movements/movements.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"columns\">\r\n    <div class=\"column is-3\">\r\n      <app-side-nav></app-side-nav>\r\n    </div>\r\n    <div class=\"column is-9\">\r\n      <h3 class=\"title is-pulled-left\">Movements Overview</h3>\r\n      <table class=\"table is-fullwidth\">\r\n        <thead>\r\n          <th>Movement ID</th>\r\n          <th>Aircraft ID</th>\r\n          <th>PIC & FO</th>\r\n          <th>Origin/Destination</th>\r\n          <th>Departure</th>\r\n          <th>Arrival</th>\r\n          <th>Briefing Pack</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let movement of movements\">\r\n            <td>\r\n              <a routerLink=\"/admin/movement/{{movement._id}}\">\r\n                {{movement._id}}\r\n              </a>\r\n            </td>\r\n            <td>\r\n              {{movement.aircraft}}\r\n            </td>\r\n            <td>\r\n              {{movement.pic_crew_name}} & {{movement.fo_crew_name}}\r\n            </td>\r\n            <td>\r\n              {{movement.departure_airport}} / {{movement.arrival_airport}}\r\n            </td>\r\n            <td>\r\n              {{ movement.departuretime*1000 | date :  \"short\" }}\r\n            </td>\r\n            <td>\r\n              {{movement.arrivaltime*1000 | date : \"short\"}}\r\n            </td>\r\n            <td>\r\n              <a (click)=\"download(movement.route)\">Download</a> <span *ngIf=\"movement.filed !== true && next3Days > movement.departuretime*1000 && today < movement.departuretime*1000\"> / \r\n              <a (click)=\"fileFPL(movement)\">File Flight Plan</a></span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-chat></app-chat>\r\n"

/***/ }),

/***/ "./src/app/admin/movements/movements.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/movements/movements.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21vdmVtZW50cy9tb3ZlbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/movements/movements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/movements/movements.component.ts ***!
  \********************************************************/
/*! exports provided: MovementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementsComponent", function() { return MovementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovementsComponent = /** @class */ (function () {
    function MovementsComponent(adminService) {
        this.adminService = adminService;
    }
    MovementsComponent.prototype.ngOnInit = function () {
        this.getFlight();
        this.today = new Date();
        this.addDays(this.today, 3);
        Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
            message: "Hello There",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true
        });
    };
    MovementsComponent.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        this.next3Days = result;
        console.log(this.next3Days);
    };
    MovementsComponent.prototype.getFlight = function () {
        var _this = this;
        this.adminService.getMovements().subscribe(function (data) {
            _this.movements = data.data;
            console.log('movements ', _this.movements);
        });
    };
    MovementsComponent.prototype.fileFPL = function (movement) {
        var _this = this;
        this.subFileFPL = this.adminService.fileFPL(movement.route).subscribe(function (data) {
            console.log('fileFPL ', data);
            if (data.data.error) {
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                    message: data.data.error,
                    type: "is-danger",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
            else {
                _this.flightID = data.data.flightid;
                if (_this.flightID) {
                    _this.adminService.updateFiled(movement._id, true).subscribe(function (data) {
                        _this.getFlight();
                        console.log('update filed ', data);
                        Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                            message: "Flight Plan Filed Successfully",
                            type: "is-success",
                            dismissible: true,
                            pauseOnHover: true
                        });
                    });
                    _this.cancelFPL();
                }
            }
        });
    };
    MovementsComponent.prototype.cancelFPL = function () {
        this.adminService.cancelFPL(this.flightID).subscribe(function (data) {
            console.log('cancelFPL ', data);
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                message: "Flight Plan Cancelled Successfully",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
        });
    };
    MovementsComponent.prototype.download = function (id) {
        console.log(id);
        this.adminService.downloadBriefing(id).subscribe();
    };
    MovementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movements',
            template: __webpack_require__(/*! ./movements.component.html */ "./src/app/admin/movements/movements.component.html"),
            styles: [__webpack_require__(/*! ./movements.component.scss */ "./src/app/admin/movements/movements.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], MovementsComponent);
    return MovementsComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-aircraft/new-aircraft.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/new-aircraft/new-aircraft.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Aircraft</h3>\n      <ul class=\"steps\">\n        <li class=\"steps-segment is-active\" data-step=\"1\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"2\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"3\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"4\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"5\">\n          <span class=\"steps-marker\"></span>\n        </li>\n        <li class=\"steps-segment\" data-step=\"6\">\n          <span class=\"steps-marker\"></span>\n        </li>\n      </ul>\n      <form action=\"#\">\n        <section class=\"\" id=\"step-1\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns\">\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Registration Mark</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"callsign\" name=\"callsign\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Manufacturer</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"manufacturer\" name=\"manufacturer\" (change)=\"getAircraftTypes()\">\n                      <option *ngFor=\"let manufacturer of manufacturers\" [ngValue]=\"manufacturer\">{{manufacturer.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Type</label>\n                <div class=\"control\">\n                  <div class=\"select\">\n                    <select [(ngModel)]=\"icaotype\" name=\"icaotype\">\n                      <option>Aircraft Type</option>\n                      <option *ngFor=\"let aircraftType of aircraftTypes\" [ngValue]=\"aircraftType\">{{aircraftType.type}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns\">\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Model</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"modelname\" class=\"input\" name=\"modelname\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Year of Construction</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"year\" class=\"input\" name=\"year\">\n\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-4\">\n              <div class=\"field\">\n                <label class=\"label\">Homebase</label>\n                <div class=\"control\">\n                  <div class=\"dropdown\" id=\"base\">\n                    <div class=\"dropdown-trigger\">\n                      <input class=\"input\" name=\"homebase\" autocomplete=\"off\" [(ngModel)]=\"homebase.name\"\n                        (input)=\"getAirports($event.target.value, 'base')\" type=\"text\"\n                        placeholder=\"Enter Homebase\" aria-haspopup=\"true\">\n                    </div>\n                    <div class=\"dropdown-menu\" role=\"menu\">\n                      <div class=\"dropdown-content\">\n                        <a (click)=\"homebase = airport;hideSearch()\" class=\"dropdown-item\" *ngFor=\"let airport of airports\">\n                          {{airport.name}} ({{airport.icao}})\n                        </a>\n                        <span *ngIf=\"!airports\">Loading...</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Fuel Type</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fueltype\" value=\"AVGAS 100LL\" name=\"fueltype\">\n                    AVGAS 100LL\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fueltype\" value=\"Jet A-1\" name=\"fueltype\">\n                    Jet A-1\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Mass Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.massunitname\" value=\"kg\" name=\"massunitname\">\n                    kg\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.massunitname\" value=\"lb\" name=\"massunitname\">\n                    lb\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Aircraft Mass ARM Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.armunitname\" value=\"in\" name=\"armunitname\">\n                    in\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"wb.armunitname\" value=\"cm\" name=\"armunitname\">\n                    cm\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Speed Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"speedunit\" value=\"kts\" name=\"speedunit\">\n                    kts\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"speedunit\" value=\"kph\" name=\"speedunit\">\n                    kph\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"speedunit\" value=\"mph\" name=\"speedunit\">\n                    mph\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"fuel_unit\">\n                <label class=\"label\">Fuel Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"l\" name=\"fuelunit\">\n                    liter\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"usgal\" name=\"fuelunit\">\n                    US gal\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"lb\" name=\"fuelunit\">\n                    lb\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"fuelunit\" value=\"kg\" name=\"fuelunit\">\n                    kg\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"column is-12\">\n            <div class=\"field\" id=\"cargo\">\n              <label class=\"label\">Comment</label>\n              <div class=\"control\">\n                <textarea name=\"comment\" id=\"comment\" [(ngModel)]=\"comment\" class=\"textarea\"></textarea>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"is-hidden\" id=\"step-2\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Equipment String</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"equipment\" name=\"equipment\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Transponder</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"transponder\" name=\"transponder\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Additional Communication Equipment (COM)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"com\" name=\"com\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Additional Navigation Equipment (NAV)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"nav\" name=\"nav\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Additional Data Equipment (DAT)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"dat\" name=\"dat\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n        <section class=\"is-hidden\" id=\"step-3\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Pilot in Command (PIC)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"picname\" name=\"picname\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Crew Contact Number</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"crewcontact\" name=\"crewcontact\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Color Markings</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"colormarking\" name=\"colormarking\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Dinghies</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"dinghies\" class=\"input\" name=\"dinghies\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Dinghy Capacity</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"dinghycapacity\" class=\"input\" name=\"dinghycapacity\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Dinghy Color</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"dinghycolor\" value=\"yellow\" name=\"dinghycolor\">\n                    Yellow\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"dinghycolor\" value=\"orange\" name=\"dinghycolor\">\n                    Orange\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"dinghycolor\" value=\"red\" name=\"dinghycolor\">\n                    Red\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"dinghycover\" value=\"true\" name=\"dinghycover\">\n                    With Cover\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Emergency Radios</label>\n                <div class=\"control\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"uhf\" value=\"yes\" name=\"uhf\">\n                    UHF\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"vhf\" value=\"yes\" name=\"vhf\">\n                    VHF\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"elt\" value=\"yes\" name=\"elt\">\n                    ELT\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Survival</label>\n                <div class=\"control\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"standard\" value=\"yes\" name=\"standard\">\n                    Standard\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"polar\" value=\"yes\" name=\"polar\">\n                    Polar\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"desert\" value=\"yes\" name=\"desert\">\n                    Desert\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"maritime\" value=\"yes\" name=\"maritime\">\n                    Maritime\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"jungle\" value=\"yes\" name=\"jungle\">\n                    Jungle\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"life_jackets\">\n                <label class=\"label\">Life Jackets</label>\n                <div class=\"control\">\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"standard\" value=\"yes\" name=\"standard\">\n                    Standard\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"light\" value=\"yes\" name=\"light\">\n                    Light\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"fluorescent\" value=\"yes\" name=\"fluorescent\">\n                    Fluorescent\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"life_uhf\" value=\"yes\" name=\"life_uhf\">\n                    UHF\n                  </label>\n                  <label class=\"checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"life_vhf\" value=\"yes\" name=\"life_vhf\">\n                    VHF\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n        <section class=\"is-hidden\" id=\"step-4\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Takeoff Mass (kg)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"wb.mtom\" name=\"mtom\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Landing Mass (kg)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"wb.mlm\" name=\"mlm\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Ramp Mass (kg)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"wb.mrm\" name=\"mrm\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Maximum Zero Fuel Mass (kg)</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"max_zerofuel\" class=\"input\" name=\"max_zerofuel\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n\n        <section class=\"is-hidden\" id=\"step-5\">\n\n          <div class=\"columns is-multiline\">\n\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Distance Unit</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"distances.unitname\" value=\"liter\" name=\"unitname\">\n                    feet\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"distances.unitname\" value=\"US gal\" name=\"unitname\">\n                    meter\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Rotation Speed Vr (kts)</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"distances.vrotate\" class=\"input\" name=\"vrotate\">\n\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-12\">\n              <a class=\"button is-success\" (click)=\"addTakeOff()\">\n                Add TakeOff Entry\n              </a>\n              <table class=\"table is-bordered is-fullwidth is-striped is-hoverable\">\n                <thead>\n                  <tr>\n                    <th>Density Altitude</th>\n                    <th>Ground Roll M</th>\n                    <th>50ft Obstacle M</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let takeOff of distances.takeoff; let id = index\">\n                    <td>\n                      <span (keyup)=\"changeTakeOffValue(id, 'da', $event)\"\n                        (blur)=\"updateTakeOffList(id, 'da', $event)\"\n                        contenteditable=\"true\">{{takeOff.da}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeTakeOffValue(id, 'gnddist', $event)\"\n                        (blur)=\"updateTakeOffList(id, 'gnddist', $event)\">{{takeOff.gnddist}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeTakeOffValue(id, 'obstdist', $event)\"\n                        (blur)=\"updateTakeOffList(id, 'obstdist', $event)\">{{takeOff.obstdist}}</span>\n                    </td>\n                    <td>\n                      <button type=\"button\" class=\"button is-danger\" (click)=\"removeTakeOff(id)\">Remove</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"column is-12\">\n              <a class=\"button is-success\" (click)=\"addLanding()\">\n                Add Landing Entry\n              </a>\n              <table class=\"table is-bordered is-fullwidth is-striped is-hoverable\">\n                <thead>\n                  <tr>\n                    <th>Density Altitude</th>\n                    <th>Ground Roll M</th>\n                    <th>50ft Obstacle M</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let landing of distances.landing; let id = index\">\n                    <td>\n                      <span (keyup)=\"changeLandingValue(id, 'da', $event)\"\n                        (blur)=\"updateLandingList(id, 'da', $event)\"\n                        contenteditable=\"true\">{{landing.da}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeLandingValue(id, 'gnddist', $event)\"\n                        (blur)=\"updateLandingList(id, 'gnddist', $event)\">{{landing.gnddist}}</span>\n                    </td>\n                    <td>\n                      <span contenteditable=\"true\" (keyup)=\"changeLandingValue(id, 'obstdist', $event)\"\n                        (blur)=\"updateLandingList(id, 'obstdist', $event)\">{{landing.obstdist}}</span>\n                    </td>\n                    <td>\n                      <button type=\"button\" class=\"button is-danger\" (click)=\"removeLanding(id)\">Remove</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"column is-12\">\n              <div class=\"field\">\n                <label class=\"label\">Runway Visual Range (RVR, meters)</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"rvr\" class=\"input\" name=\"rvr\">\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"is-hidden\" id=\"step-6\">\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\n          <div class=\"columns is-multiline\">\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Default Maximum Flight Level</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"defaultmaxfl\" name=\"defaultmaxfl\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Horse Power Per Engine (BHP)</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"maxbhp\" name=\"maxbhp\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Fixed Taxi Fuel</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"taxifuel\" name=\"taxifuel\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Variable Taxi Fuel</label>\n                <div class=\"control\">\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"taxifuelflow\" name=\"taxifuelflow\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"column is-6\">\n              <div class=\"field\">\n                <label class=\"label\">Contingency Fuel</label>\n                <div class=\"control\">\n                  <input type=\"text\" [(ngModel)]=\"contingencyfuel\" class=\"input\" name=\"contingencyfuel\">\n                </div>\n              </div>\n            </div>\n            <div class=\"column is-6\">\n              <div class=\"field\" id=\"distance_unit\">\n                <label class=\"label\">Performance Model</label>\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"yellow\" name=\"performancemodel\">\n                    Fixed Pitch\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"orange\" name=\"performancemodel\">\n                    Constant Speed\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"red\" name=\"performancemodel\">\n                    Turboprop\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" [(ngModel)]=\"performancemodel\" value=\"red\" name=\"performancemodel\">\n                    Turbojet\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </section>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\" *ngIf=\"!first\">\n                <button class=\"button is-link\" (click)=\"prev()\">Previous</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-link\" (click)=\"next()\" *ngIf=\"!last\">Next</button>\n                <button class=\"button is-link\" (click)=\"addAircraft()\" id=\"addBtn\" *ngIf=\"last\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\" id=\"reset\">Reset</button>\n                <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancel\" (click)=\"cancel()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </form>\n    </div>\n\n\n\n  </div>\n</div>\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/new-aircraft/new-aircraft.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/new-aircraft/new-aircraft.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ldy1haXJjcmFmdC9uZXctYWlyY3JhZnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/new-aircraft/new-aircraft.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-aircraft/new-aircraft.component.ts ***!
  \**************************************************************/
/*! exports provided: NewAircraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAircraftComponent", function() { return NewAircraftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAircraftComponent = /** @class */ (function () {
    function NewAircraftComponent(adminService, router, route) {
        this.adminService = adminService;
        this.router = router;
        this.route = route;
        this.takeOffList = [];
        this.landingList = [];
        this.last = false;
        this.current = 1;
        this.first = true;
        this.takeOffCount = 0;
        this.landingCount = 0;
        this.homebase = {
            name: '',
            icao: ''
        };
        this.wb = {
            massunitname: "",
            mtom: 0,
            mlm: 0,
            mrm: 0,
            armunitname: "",
        };
        this.distances = {
            unitname: "",
            vrotate: 0,
            takeoff: [],
            landing: []
        };
    }
    NewAircraftComponent.prototype.ngOnInit = function () {
        this.getManufacturers();
    };
    NewAircraftComponent.prototype.updateTakeOffList = function (id, property, event) {
        var editField = event.target.textContent;
        this.takeOffList[id][property] = editField;
    };
    NewAircraftComponent.prototype.updateLandingList = function (id, property, event) {
        var editField = event.target.textContent;
        this.landingList[id][property] = editField;
    };
    NewAircraftComponent.prototype.removeTakeOff = function (id) {
        this.distances.takeoff.splice(id, 1);
    };
    NewAircraftComponent.prototype.removeLanding = function (id) {
        this.distances.landing.splice(id, 1);
    };
    NewAircraftComponent.prototype.addTakeOff = function () {
        this.takeOffCount = this.takeOffCount + 1;
        var takeOff = { id: this.takeOffCount, da: '0', gnddist: '0', obstdist: '0' };
        this.distances.takeoff.push(takeOff);
    };
    NewAircraftComponent.prototype.addLanding = function () {
        this.landingCount = this.landingCount + 1;
        var landing = { id: this.landingCount, da: '0', gnddist: '0', obstdist: '0' };
        this.distances.landing.push(landing);
    };
    NewAircraftComponent.prototype.changeTakeOffValue = function (id, property, event) {
        this.editField = event.target.textContent;
        console.log('edit ', this.takeOffList);
    };
    NewAircraftComponent.prototype.changeLandingValue = function (id, property, event) {
        this.editField = event.target.textContent;
        console.log('edit ', this.landingList);
    };
    NewAircraftComponent.prototype.getAirports = function (keyword, type) {
        var _this = this;
        if (keyword.length > 2) {
            this.airports = [];
            jquery__WEBPACK_IMPORTED_MODULE_3__('#' + type).addClass('is-active');
            this.adminService.findAirports(keyword).subscribe(function (data) {
                console.log('search ', data.data);
                _this.airports = data.data;
            });
        }
    };
    NewAircraftComponent.prototype.next = function () {
        this.first = false;
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).addClass("is-hidden");
        this.current = this.current + 1;
        if (this.current === 6) {
            this.last = true;
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").addClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).removeClass("is-hidden");
    };
    NewAircraftComponent.prototype.prev = function () {
        this.last = false;
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).addClass("is-hidden");
        this.current = this.current - 1;
        if (this.current === 1) {
            this.first = true;
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__(".steps-segment[data-step='" + this.current + "']").addClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#step-" + this.current).removeClass("is-hidden");
    };
    NewAircraftComponent.prototype.addAircraft = function () {
        var _this = this;
        this.adminService.addAircraft(this.callsign, this.manufacturer.name, this.manufacturer.id, this.icaotype.icao, this.icaotype.id, this.modelname, this.modelname, this.year, this.homebase.icao, this.fueltype, this.speedunit, this.fuelunit, this.comment, this.equipment, this.transponder, this.com, this.nav, this.dat, this.picname, this.crewcontact, this.colormarking, this.dinghies, this.dinghycapacity, this.dinghycolor, this.dinghycover, this.emergencyradio, this.survival, this.lifejackets, this.wb, this.distances, this.defaultmaxfl, this.maxbhp, this.taxifuel, this.taxifuelflow, this.contingencyfuel).subscribe(function (data) {
            console.log('Aircraft Added ', data);
            _this.adminService.addAircraftDB(data.data).subscribe(function (data) {
                // this.navigate('/admin/aircrafts')
                jquery__WEBPACK_IMPORTED_MODULE_3__('form').trigger("reset");
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "Aircraft Created",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            });
        }, function (error) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#addBtn').removeClass('is-loading');
            console.log(error);
        });
    };
    NewAircraftComponent.prototype.getManufacturers = function () {
        var _this = this;
        this.adminService.getManufacturers().subscribe(function (data) {
            _this.manufacturers = data.data;
            console.log('Manufacturers ', _this.manufacturers);
        });
    };
    NewAircraftComponent.prototype.getAircraftTypes = function () {
        var _this = this;
        this.adminService.getAircraftTypes(this.manufacturer.id).subscribe(function (data) {
            _this.aircraftTypes = data.data;
            console.log('Aircraft Types ', _this.aircraftTypes);
        });
    };
    NewAircraftComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    NewAircraftComponent.prototype.hideSearch = function () {
        console.log(this.homebase);
        jquery__WEBPACK_IMPORTED_MODULE_3__('.dropdown').removeClass('is-active');
    };
    NewAircraftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-aircraft',
            template: __webpack_require__(/*! ./new-aircraft.component.html */ "./src/app/admin/new-aircraft/new-aircraft.component.html"),
            styles: [__webpack_require__(/*! ./new-aircraft.component.scss */ "./src/app/admin/new-aircraft/new-aircraft.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewAircraftComponent);
    return NewAircraftComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-airport/new-airport.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-airport/new-airport.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Airport</h3>\n\n      <form>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Name</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">ICAO Code</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"icao\" [(ngModel)]=\"icao\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longitude\" [(ngModel)]=\"longitude\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Latitude</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"latitude\" [(ngModel)]=\"latitude\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Elevation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"elevation\" [(ngModel)]=\"elevation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Longest Runway</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"longest_runway\" [(ngModel)]=\"longest_runway\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Magnetic Variation</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"magnetic_variation\" [(ngModel)]=\"magnetic_variation\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Airport Type</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"airport_type\" [(ngModel)]=\"airport_type\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Beacon</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"beacon\" [(ngModel)]=\"beacon\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Fuel Types</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"fuel_types\" [(ngModel)]=\"fuel_types\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Landing Fee</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"landing_fee\" [(ngModel)]=\"landing_fee\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Oxygen</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"oxygen\" [(ngModel)]=\"oxygen\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Repairs</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"repairs\" [(ngModel)]=\"repairs\">\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Country</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"country\" [(ngModel)]=\"country\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\">\n                <button class=\"button is-link\" id=\"addBtn\" (click)=\"addAirport()\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/new-airport/new-airport.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-airport/new-airport.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ldy1haXJwb3J0L25ldy1haXJwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/new-airport/new-airport.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/new-airport/new-airport.component.ts ***!
  \************************************************************/
/*! exports provided: NewAirportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAirportComponent", function() { return NewAirportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAirportComponent = /** @class */ (function () {
    function NewAirportComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
    }
    NewAirportComponent.prototype.ngOnInit = function () {
        this.doRun = true;
    };
    NewAirportComponent.prototype.addAirport = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addAirport(this.name, this.country, this.icao, this.latitude, this.longitude, this.elevation, this.longest_runway, this.magnetic_variation, this.airport_type, this.beacon, this.fuel_types, this.landing_fee, this.oxygen, this.repairs)
                .subscribe(function (data) {
                console.log('Aircraft Added ', data);
                jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    NewAirportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-airport',
            template: __webpack_require__(/*! ./new-airport.component.html */ "./src/app/admin/new-airport/new-airport.component.html"),
            styles: [__webpack_require__(/*! ./new-airport.component.scss */ "./src/app/admin/new-airport/new-airport.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewAirportComponent);
    return NewAirportComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-flight/new-flight.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/new-flight/new-flight.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"columns\">\r\n    <div class=\"column is-3\">\r\n      <app-side-nav></app-side-nav>\r\n    </div>\r\n    <div class=\"column is-9\">\r\n      <h3 class=\"title\">Add Flight</h3>\r\n      <form action=\"#\" *ngIf=\"sale\">\r\n        <section class=\"\">\r\n          <!-- <h3 class=\"title\">Live Leg</h3> -->\r\n          <div class=\"columns\">\r\n            <div class=\"column is-4\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Reference ID</label>\r\n                <div class=\"control\">\r\n                  <input class=\"input\" type=\"text\" [(ngModel)]=\"reference_id\" name=\"reference_id\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-4\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">OPS Employee</label>\r\n                <div class=\"control\">\r\n                  <div class=\"select\">\r\n                    <select [(ngModel)]=\"ops_crew\" name=\"ops_crew\">\r\n                      <option>OPS Employees</option>\r\n                      <option *ngFor=\"let ops_crew of ops_crews\" [ngValue]=\"ops_crew\">{{ops_crew.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-4\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Aircraft</label>\r\n                <div class=\"control\">\r\n                  <div class=\"select\">\r\n                    <select [(ngModel)]=\"aircraft\" name=\"aircraft\">\r\n                      <option>Suggested Aircraft</option>\r\n                      <option *ngFor=\"let aircraft of aircrafts\" [ngValue]=\"aircraft\">{{aircraft.registration}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"columns\">\r\n            <div class=\"column is-4\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Departure Time</label>\r\n                <div class=\"control\">\r\n                  <ng2-flatpickr [config]=\"exampleOptions\" [(ngModel)]=\"departure_time\" name=\"departure_time\">\r\n                  </ng2-flatpickr>\r\n                  <!-- <input type=\"text\" [(ngModel)]=\"departure_time\" name=\"departure_time\"> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-4\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Departure Airport</label>\r\n                <div class=\"control\">\r\n                  <div class=\"dropdown\" id=\"dptAir\">\r\n                    <div class=\"dropdown-trigger\">\r\n                      <input class=\"input\" name=\"departure_airport\" autocomplete=\"off\"\r\n                        [(ngModel)]=\"departure_airport.name\" (input)=\"getAirports($event.target.value, 'dptAir')\"\r\n                        type=\"text\" placeholder=\"Enter Departure Airport\" aria-haspopup=\"true\">\r\n                    </div>\r\n                    <div class=\"dropdown-menu\" role=\"menu\">\r\n                      <div class=\"dropdown-content\">\r\n                        <a (click)=\"departure_airport = airport;hideSearch()\" class=\"dropdown-item\"\r\n                          *ngFor=\"let airport of airports\">\r\n                          {{airport.name}} ({{airport.icao}})\r\n                        </a>\r\n                        <span *ngIf=\"!airports\">Loading...</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-4\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Arrival Airport</label>\r\n                <div class=\"control\">\r\n                  <div class=\"dropdown\" id=\"arrAir\">\r\n                    <div class=\"dropdown-trigger\">\r\n                      <input class=\"input\" name=\"arrival_airport\" autocomplete=\"off\" [(ngModel)]=\"arrival_airport.name\"\r\n                        (input)=\"getAirports($event.target.value, 'arrAir')\" type=\"text\"\r\n                        placeholder=\"Enter Arrival Airport\" aria-haspopup=\"true\">\r\n                    </div>\r\n                    <div class=\"dropdown-menu\" role=\"menu\">\r\n                      <div class=\"dropdown-content\">\r\n                        <a (click)=\"arrival_airport = airport;getHandler(airport);hideSearch();\" class=\"dropdown-item\"\r\n                          *ngFor=\"let airport of airports\">\r\n                          {{airport.name}} ({{airport.icao}})\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"columns\">\r\n            <div class=\"column is-6\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Handler</label>\r\n                <div class=\"control\">\r\n                  <div class=\"select\">\r\n                    <select [(ngModel)]=\"handler\" name=\"handler\">\r\n                      <option>Handler Values</option>\r\n                      <option *ngFor=\"let handler of handlers\" [ngValue]=\"handler\">{{handler.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-6\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Dangerous Good?</label>\r\n                <div class=\"control\">\r\n                  <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"dangerous\" value=\"yes\" name=\"dangerous\">\r\n                    Yes\r\n                  </label>\r\n                  <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"answer\" [(ngModel)]=\"dangerous\" value=\"no\" name=\"dangerous\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"columns\">\r\n            <div class=\"column is-6\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Pax/Cargo</label>\r\n                <div class=\"control\">\r\n                  <div class=\"select\">\r\n                    <select #paxCargo1 [(ngModel)]=\"type\" name=\"type\" (change)=\"paxCargo(paxCargo1.value)\">\r\n                      <option value=\"pax\">Pax.</option>\r\n                      <option value=\"cargo\">Cargo</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-6\">\r\n              <div class=\"field\" id=\"pax\">\r\n                <label class=\"label\">Number of Passengers</label>\r\n                <div class=\"control\">\r\n                  <input type=\"text\" [(ngModel)]=\"pax\" name=\"pax\" class=\"input\">\r\n                </div>\r\n              </div>\r\n              <div class=\"field\" id=\"cargo\" style=\"display: none;\">\r\n                <label class=\"label\">Weight of Cargo</label>\r\n                <div class=\"control\">\r\n                  <input type=\"text\" [(ngModel)]=\"cargo\" name=\"cargo\" class=\"input\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"columns\">\r\n            <div class=\"column is-6\">\r\n              <div class=\"field is-grouped\">\r\n                <div class=\"control\">\r\n                  <button class=\"button is-link\" (click)=\"doRoute()\" id=\"addBtn\">Submit</button>\r\n                </div>\r\n                <div class=\"control\">\r\n                  <button class=\"button is-text\" type=\"reset\" id=\"reset\">Reset</button>\r\n                  <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancel\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </section>\r\n\r\n\r\n      </form>\r\n      <pre>{{result}}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal\" id=\"position-from\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n      <form>\r\n        <header class=\"modal-card-head\">\r\n          <p class=\"modal-card-title\">Position From</p>\r\n        </header>\r\n        <section class=\"modal-card-body\">\r\n          <h4 *ngIf=\"lastFlight\">Flight {{lastFlight.reference_id}} arrives at {{lastFlight.arrivaltime*1000 | date :  \"short\"}} at\r\n            {{lastFlight.arrival_airport}}. Where would you like to plan the positioning flight from?</h4>\r\n          <div class=\"field\">\r\n            <div class=\"control\">\r\n              <label class=\"radio\">\r\n                <input type=\"radio\" name=\"question\" checked (change)=\"handleChange('arrival')\">\r\n                Arrival Location\r\n              </label>\r\n              <label class=\"radio\">\r\n                <input type=\"radio\" name=\"question\" (change)=\"handleChange('choose')\">\r\n                Choose\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"columns\" id=\"choose\" *ngIf=\"currentLoc\">\r\n            <div class=\"column is-5\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Position From</label>\r\n                <div class=\"control\">\r\n                    <div class=\"dropdown\" id=\"dptFromAir\">\r\n                      <div class=\"dropdown-trigger\">\r\n                        <input class=\"input\" name=\"currentLoc\" id=\"currentLoc\" autocomplete=\"off\"\r\n                          [(ngModel)]=\"currentLoc.name\" (input)=\"getAirports($event.target.value, 'dptFromAir')\"\r\n                          type=\"text\" placeholder=\"Enter Departure Airport\" aria-haspopup=\"true\">\r\n                      </div>\r\n                      <div class=\"dropdown-menu\" role=\"menu\">\r\n                        <div class=\"dropdown-content\">\r\n                          <a (click)=\"currentLoc = airport;getHandler(airport);hideSearch()\" class=\"dropdown-item\"\r\n                            *ngFor=\"let airport of airports\">\r\n                            {{airport.name}} ({{airport.icao}})\r\n                          </a>\r\n                          <span *ngIf=\"!airports\">Loading...</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-5\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Handler</label>\r\n                <div class=\"control\">\r\n                  <div class=\"select\">\r\n                    <select [(ngModel)]=\"fromHandler\" name=\"fromHandler\" id=\"fromHandler\">\r\n                      <option>Handler Values</option>\r\n                      <option *ngFor=\"let handler of handlers\" [ngValue]=\"handler\">{{handler.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-2\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Layover Time</label>\r\n                <div class=\"control\">\r\n                  <input class=\"input\" type=\"text\" name=\"fromLayOver\" [(ngModel)]=\"fromLayOver\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </section>\r\n          \r\n        <footer class=\"modal-card-foot\">\r\n          <button class=\"button is-success\" id=\"positionBtn\" (click)=\"doPositionFrom()\">Position</button>\r\n          <button class=\"button is-text\" type=\"reset\" id=\"resetFrom\">Reset</button>\r\n          <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancelFrom\" (click)=\"cancelFrom()\">Cancel</button>\r\n        </footer>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal\" id=\"position-to\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n      <form>\r\n        <header class=\"modal-card-head\">\r\n          <p class=\"modal-card-title\">Position To</p>\r\n        </header>\r\n        <section class=\"modal-card-body\">\r\n          <div class=\"columns\">\r\n            <div class=\"column is-5\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Base Location</label>\r\n                <div class=\"control\">\r\n                  <div class=\"select\">\r\n\r\n                    <select (ngModelChange)=\"getHandler($event)\" [(ngModel)]=\"baseLoc\" name=\"baseLoc\">\r\n                      <option>Suggested Base Aiport</option>\r\n                      <option *ngFor=\"let airport of airports\" [ngValue]=\"airport\">{{airport.name}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-5\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Handler</label>\r\n                <div class=\"control\">\r\n                  <div class=\"select\">\r\n                    <select [(ngModel)]=\"toHandler\" name=\"toHandler\">\r\n                      <option>Handler Values</option>\r\n                      <option *ngFor=\"let handler of handlers\" [ngValue]=\"handler\">{{handler.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column is-2\">\r\n              <div class=\"field\">\r\n                <label class=\"label\">Layover Time</label>\r\n                <div class=\"control\">\r\n                  <input class=\"input\" type=\"text\" name=\"toLayOver\" [(ngModel)]=\"toLayOver\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </section>\r\n        <footer class=\"modal-card-foot\">\r\n          <button class=\"button is-success\" id=\"positionToBtn\" (click)=\"doPositionTo()\">Position</button>\r\n          <button class=\"button is-text\" type=\"reset\" id=\"resetTo\">Reset</button>\r\n          <button class=\"button is-text is-hidden\" type=\"button\" id=\"cancelTo\" (click)=\"cancelTo()\">Cancel</button>\r\n        </footer>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal\" id=\"suggested\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n      <form>\r\n        <header class=\"modal-card-head\">\r\n          <p class=\"modal-card-title\">Suggested Actions</p>\r\n          <button class=\"delete\" aria-label=\"close\"></button>\r\n        </header>\r\n        <section class=\"modal-card-body\">\r\n\r\n          <button class=\"button is-success is-block\" (click)=\"createMail()\">Send Crew Notification</button>\r\n          <button class=\"button is-success is-block\" (click)=\"createHandlerMail()\">Send Handling Request</button>\r\n\r\n\r\n\r\n        </section>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<script type=\"text/javascript\" src=\"/node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion.min.js\"></script>\r\n<script type=\"text/javascript\">\r\nvar accordions = bulmaAccordion.attach();\r\n</script>\r\n<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/admin/new-flight/new-flight.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/new-flight/new-flight.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tab-content .container_item {\n  display: none; }\n\n#tab-content .container_item.is-active {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbmV3LWZsaWdodC9DOlxcbWVhblxcZmxpZ2h0b3BzXFxiaXRcXGZsaWdodG9wcy9zcmNcXGFwcFxcYWRtaW5cXG5ldy1mbGlnaHRcXG5ldy1mbGlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9uZXctZmxpZ2h0L25ldy1mbGlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFiLWNvbnRlbnQgLmNvbnRhaW5lcl9pdGVtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICN0YWItY29udGVudCAuY29udGFpbmVyX2l0ZW0uaXMtYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/admin/new-flight/new-flight.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/new-flight/new-flight.component.ts ***!
  \**********************************************************/
/*! exports provided: NewFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFlightComponent", function() { return NewFlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var NewFlightComponent = /** @class */ (function () {
    function NewFlightComponent(adminService, route, renderer, document) {
        this.adminService = adminService;
        this.route = route;
        this.renderer = renderer;
        this.document = document;
        this.routeDet = {
            arrivaltime: 0,
            departuretime: 0,
            fuel: 0,
            distance: 0,
            fplan: {},
        };
        this.exampleOptions = {
            enableTime: true,
            defaultDate: this.departure_time,
            mode: "single"
        };
        this.replaceArray = function (text, find, replace) {
            var replaceString = text;
            var regex;
            for (var i = 0; i < find.length; i++) {
                regex = new RegExp(find[i], "g");
                replaceString = replaceString.replace(regex, replace[i]);
            }
            return replaceString;
        };
    }
    NewFlightComponent.prototype.ngOnInit = function () {
        this.departure_airport = {};
        this.departure_airport.name = '';
        this.arrival_airport = {};
        this.arrival_airport.name = '';
        this.id = this.route.snapshot.paramMap.get("id");
        console.log(this.id);
        jquery__WEBPACK_IMPORTED_MODULE_1__('.delete').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#suggested').removeClass('is-active');
        });
        this.getAircrafts();
        // this.sendMail();
        if (this.id !== 'new') {
            this.getSale();
        }
        else {
            this.sale = 'new';
            jquery__WEBPACK_IMPORTED_MODULE_1__('.ng2-flatpickr-input').addClass('input');
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').on('click', function () {
            var tab = jquery__WEBPACK_IMPORTED_MODULE_1__(this).data('option');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tabs li').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#tab-content div').removeClass('is-active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('div[data-content="' + tab + '"]').addClass('is-active');
        });
        this.getCrewByOccupation();
    };
    NewFlightComponent.prototype.getAircrafts = function () {
        var _this = this;
        this.adminService.getAircrafts().subscribe(function (data) {
            _this.aircrafts = data.data;
            console.log('aircrafts ', _this.aircrafts);
        });
    };
    NewFlightComponent.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            }
            if (unit == "N") {
                dist = dist * 0.8684;
            }
            return dist;
        }
    };
    NewFlightComponent.prototype.getAirports = function (keyword, type) {
        var _this = this;
        if (keyword.length > 2) {
            this.airports = [];
            jquery__WEBPACK_IMPORTED_MODULE_1__('#' + type).addClass('is-active');
            this.adminService.findAirports(keyword).subscribe(function (data) {
                console.log('search ', data.data);
                _this.airports = data.data;
            });
        }
    };
    NewFlightComponent.prototype.hideSearch = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.dropdown').removeClass('is-active');
    };
    NewFlightComponent.prototype.getSale = function () {
        var _this = this;
        this.adminService.getSale(this.id).subscribe(function (data) {
            _this.sale = data.data;
            _this.reference_id = data.data.reference_id;
            _this.departure_time = new Date(data.data.departure);
            _this.departure_airport = data.data.origin_airport;
            _this.arrival_airport = data.data.destination_airport;
            console.log('sale ', _this.departure_time);
            jquery__WEBPACK_IMPORTED_MODULE_1__('ng2-flatpickr').addClass('input');
        });
    };
    NewFlightComponent.prototype.lastLiveFlight = function () {
        var _this = this;
        this.adminService.lastLiveFlight(this.aircraft.aircraftId).subscribe(function (data) {
            _this.lastFlight = data.data[0];
            console.log('last flight', _this.lastFlight);
            _this.handleChange('arrival');
        });
    };
    NewFlightComponent.prototype.handleChange = function (val) {
        if (val === 'arrival') {
            this.currentLoc = {};
            this.currentLoc.icao = this.lastFlight.arrival_airport;
            this.currentLoc.name = this.lastFlight.arrival_airport;
            this.fromHandler = {};
            this.fromHandler._id = this.lastFlight.handler;
            jquery__WEBPACK_IMPORTED_MODULE_1__('#currentLoc').prop("disabled", true);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#fromHandler').prop("disabled", true);
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#currentLoc').prop("disabled", false);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#fromHandler').prop("disabled", false);
        }
    };
    NewFlightComponent.prototype.createMail = function () {
        console.log('sending mail');
        this.sendCrewMail(this.ops_crew.name, 'OPS', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendCrewMail(this.ops_crew.name, 'OPS', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendCrewMail(this.ops_crew.name, 'OPS', this.positionToDep, this.positionToArr, this.positionToDepT);
        this.sendCrewMail(this.pic_crew.name, 'PIC', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendCrewMail(this.pic_crew.name, 'PIC', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendCrewMail(this.pic_crew.name, 'PIC', this.positionToDep, this.positionToArr, this.positionToDepT);
        this.sendCrewMail(this.fo_crew.name, 'FO', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendCrewMail(this.fo_crew.name, 'FO', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendCrewMail(this.fo_crew.name, 'FO', this.positionToDep, this.positionToArr, this.positionToDepT);
    };
    NewFlightComponent.prototype.createHandlerMail = function () {
        console.log('sending handler mail');
        this.sendHandlerMail(this.fromHandler.email_primary, this.fromHandler.name, 'Handler', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
        this.sendHandlerMail(this.handler.email_primary, this.handler.name, 'Handler', this.LiveDep, this.LiveArr, this.LiveDepT);
        this.sendHandlerMail(this.toHandler.email_primary, this.toHandler.name, 'Handler', this.positionToDep, this.positionToArr, this.positionToDepT);
    };
    NewFlightComponent.prototype.sendCrewMail = function (name, role, beginning, end, departTime) {
        var _this = this;
        this.adminService.getTemplates().subscribe(function (data) {
            _this.crewTemplate = data.data[0];
            _this.handlerTemplate = data.data[1];
            var find = ["%crewname%", "%role%", "%flightID%", "%aircraftID%", "%aircraftname%", "%date%", "%time%", "%airportdeparture%", "%airportarrival%", "%link%"];
            var replace = [name, role, _this.reference_id, _this.aircraft.aircraftId, _this.aircraft.registration, new Date(departTime * 1000).getDate() + '-' + new Date(departTime * 1000).getMonth() + '-' + new Date(departTime * 1000).getFullYear(), new Date(departTime * 1000).getHours() + ':' + new Date(departTime * 1000).getMinutes() + ':' + new Date(departTime * 1000).getSeconds(), beginning, end, _this.reference_id];
            _this.crewTemplate.subject = _this.replaceArray(_this.crewTemplate.subject, find, replace);
            _this.crewTemplate.message = _this.replaceArray(_this.crewTemplate.message, find, replace);
            _this.adminService.sendMail(_this.ops_crew.p_email, _this.crewTemplate.subject, _this.crewTemplate.message).subscribe(function (data) {
                console.log('hello ', data);
            });
        });
    };
    NewFlightComponent.prototype.sendHandlerMail = function (email, name, role, beginning, end, departTime) {
        var _this = this;
        this.adminService.getTemplates().subscribe(function (data) {
            _this.handlerTemplate = data.data[1];
            var find = ["%handlername%", "%role%", "%flightID%", "%aircraftID%", "%aircraftname%", "%date%", "%time%", "%airportdeparture%", "%airportarrival%", "%link%"];
            var replace = [name, role, _this.reference_id, _this.aircraft.aircraftId, _this.aircraft.registration, new Date(departTime * 1000).getDate() + '-' + new Date(departTime * 1000).getMonth() + '-' + new Date(departTime * 1000).getFullYear(), new Date(departTime * 1000).getHours() + ':' + new Date(departTime * 1000).getMinutes() + ':' + new Date(departTime * 1000).getSeconds(), beginning, end, _this.reference_id];
            _this.handlerTemplate.subject = _this.replaceArray(_this.handlerTemplate.subject, find, replace);
            _this.handlerTemplate.message = _this.replaceArray(_this.handlerTemplate.message, find, replace);
            _this.adminService.sendMail('kininteractivesolutions@gmail.com', _this.handlerTemplate.subject, _this.handlerTemplate.message).subscribe(function (data) {
                console.log('hello ', data);
            });
        });
    };
    NewFlightComponent.prototype.getHandler = function (airport) {
        var _this = this;
        this.adminService.getHandler(airport.icao).subscribe(function (data) {
            _this.handlers = data.data;
            console.log('handlers ', _this.handlers);
        });
    };
    NewFlightComponent.prototype.paxCargo = function (choice) {
        if (choice === 'pax') {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#cargo').hide();
            jquery__WEBPACK_IMPORTED_MODULE_1__('#pax').show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#pax').hide();
            jquery__WEBPACK_IMPORTED_MODULE_1__('#cargo').show();
        }
    };
    NewFlightComponent.prototype.getCrewByOccupation = function () {
        var _this = this;
        this.adminService.getCrewByOccupation('OPS').subscribe(function (data) {
            _this.ops_crews = data.data;
            console.log('crews ', _this.ops_crews);
        });
    };
    NewFlightComponent.prototype.addFlight = function () {
        var _this = this;
        console.log(Date.parse(this.departure_time) / 1000);
        this.adminService.getCrewByOccupation('PIC').subscribe(function (data) {
            console.log('crewPIC', data.data);
            data.data.some(function (element) {
                // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
                var subtract = Date.parse(_this.departure_time) / 1000 - element.unavailableTo;
                _this.pic_crew = element._id;
                _this.pic_crew_name = element.name;
                _this.pic_crew_email = element.p_email;
                return subtract >= 0;
            });
            _this.adminService.getCrewByOccupation('FO').subscribe(function (data) {
                console.log('crewFO', data.data);
                data.data.some(function (element) {
                    // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
                    var subtract = Date.parse(_this.departure_time) / 1000 - element.unavailableTo;
                    _this.fo_crew = element._id;
                    _this.fo_crew_name = element.name;
                    _this.fo_crew_email = element.p_email;
                    return subtract >= 0;
                });
                _this.adminService.getHandlerDetails(_this.handler).subscribe(function (data) {
                    _this.handler_email = data.data.email_primary;
                    _this.adminService.getCrew(_this.ops_crew._id).subscribe(function (data) {
                        _this.ops_crew_name = data.data.name;
                        _this.ops_crew_email = data.data.p_email;
                        console.log('checkOPS', _this.ops_crew_name);
                        console.log('checkFO', _this.fo_crew);
                        _this.adminService.addFlight(_this.reference_id, _this.ops_crew, _this.pic_crew, _this.fo_crew, _this.ops_crew_name, _this.pic_crew_name, _this.fo_crew_name, _this.aircraft.aircraftId, _this.departure_airport.icao, _this.arrival_airport, _this.departure_time, _this.handler, _this.dangerous, _this.type, _this.pax, _this.cargo, _this.liveLeg, _this.positionFrom, _this.positionTo).subscribe(function (data) {
                            console.log('resp ', data.data);
                            _this.flight_id = data.data._id;
                            console.log('flight id ', _this.flight_id);
                            _this.adminService.updateCrew(_this.pic_crew, _this.departure_time, _this.routeDet.arrivaltime).subscribe(function (data) {
                                console.log('updated', data);
                            });
                            _this.adminService.updateCrew(_this.fo_crew, _this.departure_time, _this.routeDet.arrivaltime).subscribe(function (data) {
                                jquery__WEBPACK_IMPORTED_MODULE_1__('#suggested').addClass('is-active');
                                console.log('updated', data);
                            });
                        });
                    });
                });
            });
        });
    };
    NewFlightComponent.prototype.doRoute = function () {
        var _this = this;
        console.log('DISTANCE ', this.distance(this.departure_airport.latitude, this.departure_airport.longitude, this.arrival_airport.latitude, this.arrival_airport.longitude, 'K'));
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#reset').addClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancel').removeClass('is-hidden');
        var data = {
            aircraftid: this.aircraft.aircraftId,
            departure: this.departure_airport.icao,
            destination: this.arrival_airport.icao,
            departuretime: Date.parse(this.departure_time) / 1000
        };
        this.adminService.route(data).subscribe(function (data) {
            _this.routeId = data.data;
            console.log('response ', _this.routeId);
            _this.result = _this.routeId;
            _this.poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(5000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.adminService.longPoll(data.data); }))
                .subscribe(function (res) {
                console.log(res.data);
                if (res.data.length >= 6) {
                    _this.poll.unsubscribe();
                    _this.adminService.getFplan(_this.routeId).subscribe(function (data) {
                        console.log(data);
                        _this.arrival_time = data.data.arrivaltime;
                        _this.departure_time = data.data.departuretime;
                        _this.routeDet.arrivaltime = data.data.arrivaltime;
                        _this.routeDet.departuretime = data.data.departuretime;
                        _this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                        _this.routeDet.distance = data.data.gcdist;
                        _this.routeDet.fplan = __assign({}, data.data.fplan);
                        console.log('rou', _this.routeDet);
                        _this.result = JSON.stringify(_this.routeDet, undefined, 2);
                        // $('#addBtn').removeClass('is-loading');
                        _this.adminService.getCrewByOccupation('PIC').subscribe(function (data) {
                            console.log('crewPIC', data.data);
                            data.data.some(function (element) {
                                // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
                                var subtract = Date.parse(_this.departure_time) / 1000 - element.unavailableTo;
                                _this.pic_crew = element;
                                return subtract >= 0;
                            });
                            _this.adminService.getCrewByOccupation('FO').subscribe(function (data) {
                                console.log('crewFO', data.data);
                                data.data.some(function (element) {
                                    // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
                                    var subtract = Date.parse(_this.departure_time) / 1000 - element.unavailableTo;
                                    _this.fo_crew = element;
                                    return subtract >= 0;
                                });
                                _this.adminService.addRoute(_this.reference_id, _this.routeId, _this.ops_crew._id, _this.pic_crew._id, _this.fo_crew._id, _this.ops_crew.name, _this.pic_crew.name, _this.fo_crew.name, _this.aircraft.aircraftId, _this.departure_airport.icao, _this.arrival_airport.icao, _this.handler._id, _this.dangerous, _this.type, _this.pax, _this.cargo, 'live', _this.routeDet.arrivaltime, _this.routeDet.departuretime, _this.routeDet.fuel, _this.routeDet.distance, _this.routeDet.fplan).subscribe(function (data) {
                                    jquery__WEBPACK_IMPORTED_MODULE_1__('#position-from').addClass('is-active');
                                    _this.lastLiveFlight();
                                    _this.currentLoc = {};
                                    _this.currentLoc.name = '';
                                    console.log('ROUTE ADDED ', data);
                                    _this.LiveDep = _this.departure_airport.icao;
                                    _this.LiveArr = _this.arrival_airport.icao;
                                    _this.LiveDepT = _this.routeDet.departuretime;
                                    _this.LiveArr = _this.routeDet.arrivaltime;
                                    _this.liveLeg = data.data._id;
                                    _this.adminService.getBriefing(_this.routeId).subscribe(function (data) {
                                        console.log('briefing', data);
                                    });
                                });
                            });
                        });
                    });
                }
                _this.result = JSON.stringify(res.data, undefined, 2);
            });
        });
    };
    NewFlightComponent.prototype.doPositionFrom = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionBtn').addClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetFrom').addClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelFrom').removeClass('is-hidden');
        var layToTime = this.fromLayOver * 60;
        var arrivalTime = this.departure_time - layToTime;
        console.log(arrivalTime);
        var data = {
            aircraftid: this.aircraft.aircraftId,
            departure: this.currentLoc.icao,
            destination: this.departure_airport.icao,
            arrivaltime: arrivalTime
        };
        this.adminService.route(data).subscribe(function (data) {
            _this.routeId = data.data;
            console.log('response ', _this.routeId);
            _this.result = _this.routeId;
            _this.poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(5000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.adminService.longPoll(data.data); }))
                .subscribe(function (res) {
                console.log(res.data);
                if (res.data.length >= 6) {
                    _this.poll.unsubscribe();
                    _this.adminService.getFplan(_this.routeId).subscribe(function (data) {
                        // console.log(data)
                        _this.routeDet.arrivaltime = data.data.arrivaltime;
                        _this.departure_time = data.data.departuretime;
                        _this.routeDet.departuretime = data.data.departuretime;
                        _this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                        _this.routeDet.distance = data.data.gcdist;
                        _this.routeDet.fplan = __assign({}, data.data.fplan);
                        console.log(_this.routeDet);
                        _this.result = JSON.stringify(_this.routeDet, undefined, 2);
                        _this.adminService.addRoute(_this.reference_id, _this.routeId, _this.ops_crew._id, _this.pic_crew._id, _this.fo_crew._id, _this.ops_crew.name, _this.pic_crew.name, _this.fo_crew.name, _this.aircraft.aircraftId, _this.currentLoc.icao, _this.departure_airport.icao, _this.fromHandler._id, _this.dangerous, _this.type, _this.pax, _this.cargo, 'positionFrom', _this.routeDet.arrivaltime, _this.routeDet.departuretime, _this.routeDet.fuel, _this.routeDet.distance, _this.routeDet.fplan).subscribe(function (data) {
                            console.log('ROUTE ADDED ', data);
                            _this.positionFromDep = _this.currentLoc.icao;
                            _this.positionFromArr = _this.departure_airport.icao;
                            _this.positionFromDepT = _this.routeDet.departuretime;
                            _this.positionFromArrT = _this.routeDet.arrivaltime;
                            _this.adminService.getBriefing(_this.routeId).subscribe(function (data) {
                                console.log('briefing', data);
                            });
                            _this.adminService.updateCrew(_this.pic_crew._id, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                                console.log('updated', data);
                            });
                            _this.adminService.updateCrew(_this.fo_crew._id, _this.routeDet.departuretime, _this.routeDet.arrivaltime).subscribe(function (data) {
                                console.log('updated', data);
                            });
                            jquery__WEBPACK_IMPORTED_MODULE_1__('#positionBtn').removeClass('is-loading');
                            jquery__WEBPACK_IMPORTED_MODULE_1__('#position-from').removeClass('is-active');
                            jquery__WEBPACK_IMPORTED_MODULE_1__('#position-to').addClass('is-active');
                        });
                    });
                }
                _this.result = JSON.stringify(res.data, undefined, 2);
                console.log(res.data.length);
            });
        });
    };
    NewFlightComponent.prototype.doPositionTo = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionToBtn').addClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetTo').addClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelTo').removeClass('is-hidden');
        var layToTime = this.toLayOver * 60;
        var departTime = this.departure_time + layToTime;
        console.log(departTime);
        var data = {
            aircraftid: this.aircraft.aircraftId,
            departure: this.arrival_airport.icao,
            destination: this.baseLoc.icao,
            departuretime: departTime
        };
        this.adminService.route(data).subscribe(function (data) {
            _this.routeId = data.data;
            console.log('response ', _this.routeId);
            _this.result = _this.routeId;
            _this.poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(5000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.adminService.longPoll(data.data); }))
                .subscribe(function (res) {
                console.log(res.data);
                if (res.data.length >= 6) {
                    _this.poll.unsubscribe();
                    _this.adminService.getFplan(_this.routeId).subscribe(function (data) {
                        // console.log(data)
                        _this.routeDet.arrivaltime = data.data.arrivaltime;
                        _this.routeDet.departuretime = data.data.departuretime;
                        _this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                        _this.routeDet.distance = data.data.gcdist;
                        _this.routeDet.fplan = __assign({}, data.data.fplan);
                        console.log(_this.routeDet);
                        _this.result = JSON.stringify(_this.routeDet, undefined, 2);
                        _this.adminService.addRoute(_this.reference_id, _this.routeId, _this.ops_crew._id, _this.pic_crew._id, _this.fo_crew._id, _this.ops_crew.name, _this.pic_crew.name, _this.fo_crew.name, _this.aircraft.aircraftId, _this.arrival_airport.icao, _this.baseLoc.icao, _this.toHandler._id, _this.dangerous, _this.type, _this.pax, _this.cargo, 'positionTo', _this.routeDet.arrivaltime, _this.routeDet.departuretime, _this.routeDet.fuel, _this.routeDet.distance, _this.routeDet.fplan).subscribe(function (data) {
                            console.log('ROUTE ADDED ', data);
                            console.log('DEPARTURE ROUTE ADDED ', _this.departure_time);
                            _this.positionToDep = _this.arrival_airport.icao;
                            _this.positionToArr = _this.baseLoc.icao;
                            _this.positionToDepT = _this.routeDet.departuretime;
                            _this.positionToArrT = _this.routeDet.arrivaltime;
                            _this.adminService.getBriefing(_this.routeId).subscribe(function (data) {
                                console.log('briefing', data);
                            });
                            _this.adminService.updateCrew(_this.pic_crew._id, _this.positionFromDepT, _this.routeDet.arrivaltime).subscribe(function (data) {
                                console.log('updated', data);
                            });
                            _this.adminService.updateCrew(_this.fo_crew._id, _this.positionFromDepT, _this.routeDet.arrivaltime).subscribe(function (data) {
                                console.log('updated', data);
                            });
                            jquery__WEBPACK_IMPORTED_MODULE_1__('#suggested').addClass('is-active');
                            _this.positionTo = data.data._id;
                            // this.addFlight()
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionToBtn').removeClass('is-loading');
                        jquery__WEBPACK_IMPORTED_MODULE_1__('#position-to').removeClass('is-active');
                    });
                }
                _this.result = JSON.stringify(res.data, undefined, 2);
                console.log(res.data.length);
            });
        });
    };
    NewFlightComponent.prototype.ngOnDestroy = function () {
    };
    NewFlightComponent.prototype.cancel = function () {
        this.poll.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#reset').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancel').addClass('is-hidden');
    };
    NewFlightComponent.prototype.cancelTo = function () {
        this.poll.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionToBtn').removeClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetTo').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelTo').addClass('is-hidden');
    };
    NewFlightComponent.prototype.cancelFrom = function () {
        this.poll.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#positionBtn').removeClass('is-loading');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#resetFrom').removeClass('is-hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cancelFrom').addClass('is-hidden');
    };
    NewFlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-flight',
            template: __webpack_require__(/*! ./new-flight.component.html */ "./src/app/admin/new-flight/new-flight.component.html"),
            styles: [__webpack_require__(/*! ./new-flight.component.scss */ "./src/app/admin/new-flight/new-flight.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], Object])
    ], NewFlightComponent);
    return NewFlightComponent;
}());



/***/ }),

/***/ "./src/app/admin/new-handler/new-handler.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-handler/new-handler.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title\">Add Airport</h3>\n\n      <form>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Name</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Logo URL</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"logo\" [(ngModel)]=\"logo\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Primary Phone</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"phone_primary\" [(ngModel)]=\"phone_primary\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Secondary Phone</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"phone_secondary\" [(ngModel)]=\"phone_secondary\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Primary Email</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"email_primary\" [(ngModel)]=\"email_primary\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Secondary Email</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"email_secondary\" [(ngModel)]=\"email_secondary\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Monday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"monday_open\" [(ngModel)]=\"monday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Monday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"monday_close\" [(ngModel)]=\"monday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Tuesday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"tuesday_open\" [(ngModel)]=\"tuesday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Tuesday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"tuesday_close\" [(ngModel)]=\"tuesday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Wednesday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"wednesday_open\" [(ngModel)]=\"wednesday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Wednesday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"wednesday_close\" [(ngModel)]=\"wednesday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Thursday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"thursday_open\" [(ngModel)]=\"thursday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Thursday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"thursday_close\" [(ngModel)]=\"thursday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Friday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"friday_open\" [(ngModel)]=\"friday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Friday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"friday_close\" [(ngModel)]=\"friday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Saturday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"saturday_open\" [(ngModel)]=\"saturday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Saturday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"saturday_close\" [(ngModel)]=\"saturday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Sunday Open Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"sunday_open\" [(ngModel)]=\"sunday_open\">\n              </div>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"field\">\n              <label class=\"label\">Sunday Close Hours</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" name=\"sunday_close\" [(ngModel)]=\"sunday_close\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"field is-grouped\">\n              <div class=\"control\">\n                <button class=\"button is-link\" id=\"addBtn\" (click)=\"addHandler()\">Submit</button>\n              </div>\n              <div class=\"control\">\n                <button class=\"button is-text\" type=\"reset\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/new-handler/new-handler.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/new-handler/new-handler.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ldy1oYW5kbGVyL25ldy1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/new-handler/new-handler.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/new-handler/new-handler.component.ts ***!
  \************************************************************/
/*! exports provided: NewHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHandlerComponent", function() { return NewHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewHandlerComponent = /** @class */ (function () {
    function NewHandlerComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
    }
    NewHandlerComponent.prototype.ngOnInit = function () {
        this.doRun = true;
        this.id = this.route.snapshot.paramMap.get("id");
        this.getAirports();
    };
    NewHandlerComponent.prototype.addHandler = function () {
        var _this = this;
        console.log('add start');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').addClass('is-loading');
        if (this.doRun === true) {
            this.adminService.addHandler(this.name, this.id, this.logo, this.phone_primary, this.phone_secondary, this.email_primary, this.email_secondary, this.monday_open, this.monday_close, this.tuesday_open, this.tuesday_close, this.wednesday_open, this.wednesday_close, this.thursday_open, this.thursday_close, this.friday_open, this.friday_close, this.saturday_open, this.saturday_close, this.sunday_open, this.sunday_close)
                .subscribe(function (data) {
                console.log('Aircraft Added ', data);
                jquery__WEBPACK_IMPORTED_MODULE_1__('form').trigger("reset");
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                _this.doRun = false;
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#addBtn').removeClass('is-loading');
                console.log(error);
            });
        }
    };
    NewHandlerComponent.prototype.getAirports = function () {
        var _this = this;
        this.adminService.getAirports(1, 20).subscribe(function (data) {
            _this.airports = data.data;
            console.log('airports ', _this.airports);
        });
    };
    NewHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-handler',
            template: __webpack_require__(/*! ./new-handler.component.html */ "./src/app/admin/new-handler/new-handler.component.html"),
            styles: [__webpack_require__(/*! ./new-handler.component.scss */ "./src/app/admin/new-handler/new-handler.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewHandlerComponent);
    return NewHandlerComponent;
}());



/***/ }),

/***/ "./src/app/admin/sales/sales.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/sales/sales.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Sales Overview</h3>\n      <a routerLink=\"/admin/add-sales\" class=\"button is-primary is-outlined is-pulled-right\">Add Sales</a>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th>ID</th>\n          <th>Client Name</th>\n          <th>Date Created</th>\n          <th>Flight Date</th>\n          <th>Flight Origin</th>\n          <th>Flight Destination</th>\n          <th>Action</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let sale of sales\">\n            <td>\n              <a routerLink=\"/admin/new-flight/{{sale._id}}\">\n                {{sale._id}}\n              </a>\n            </td>\n            <td>\n                {{sale.contact_name}}\n            </td>\n            <td>\n              2019-02-11 11:00PM\n            </td>\n            <td>\n              {{sale.departure}}\n            </td>\n            <td>{{sale.origin_airport}}</td>\n            <td>{{sale.destination_airport}}</td>\n            <td>\n              <a class=\"is-link\" routerLink=\"/admin/edit-sales/{{sale._id}}\">Edit</a> / \n              <a class=\"is-danger\" (click)=\"delete(sale._id)\">Delete</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"modal\" id=\"add-aircraft\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <header class=\"modal-card-head\">\n            <p class=\"modal-card-title\">Add Aircraft</p>\n            <button class=\"delete\" aria-label=\"close\"></button>\n          </header>\n          <section class=\"modal-card-body\">\n            <div class=\"field\">\n              <label class=\"label\">Registration</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Photo</label>\n              <div class=\"control\">\n                <div class=\"file has-name\">\n                  <label class=\"file-label\">\n                    <input class=\"file-input\" type=\"file\" name=\"resume\">\n                    <span class=\"file-cta\">\n                      <span class=\"file-icon\">\n                        <i class=\"fas fa-upload\"></i>\n                      </span>\n                      <span class=\"file-label\">\n                        Choose an image…\n                      </span>\n                    </span>\n                    <span class=\"file-name\">\n                      .jpg, .png, .gif\n                    </span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max Take Off Weight</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max Fuel Capacity</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max PAX</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Max Cargo</label>\n              <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"\">\n              </div>\n            </div>\n\n\n          </section>\n          <footer class=\"modal-card-foot\">\n            <button class=\"button is-success\">Add</button>\n            <button class=\"button\">Cancel</button>\n          </footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/sales/sales.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/sales/sales.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/sales/sales.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/sales/sales.component.ts ***!
  \************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesComponent = /** @class */ (function () {
    function SalesComponent(adminService) {
        this.adminService = adminService;
    }
    SalesComponent.prototype.ngOnInit = function () {
        this.getSales();
    };
    SalesComponent.prototype.getSales = function () {
        var _this = this;
        this.adminService.getSales().subscribe(function (data) {
            _this.sales = data.data;
            console.log('sales ', _this.sales);
        });
    };
    SalesComponent.prototype.delete = function (aircraft) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteCrew(aircraft)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('Airport Deleted ', data);
                _this.getSales();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_2__["toast"])({
                    message: "Airport Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/admin/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.scss */ "./src/app/admin/sales/sales.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-3\">\n      <app-side-nav></app-side-nav>\n    </div>\n    <div class=\"column is-9\">\n      <h3 class=\"title is-pulled-left\">Users Overview</h3>\n      <button class=\"button is-primary is-outlined is-pulled-right\" id=\"btn-add-user\">Add User</button>\n      <table class=\"table is-fullwidth\">\n        <thead>\n          <th>ID</th>\n          <th>Fullname</th>\n          <th>Email Address</th>\n          <th>Date Created</th>\n          <th>Action</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users\">\n            <td>\n              <a routerLink=\"/admin/new-flight/{{user._id}}\">\n                {{user._id}}\n              </a>\n            </td>\n            <td>\n              {{user.fullname}}\n            </td>\n            <td>\n              {{user.email}}\n            </td>\n            <td>{{user.createdAt}}</td>\n            <td>\n              <a class=\"is-link\" (click)=\"getUser(user._id)\">Edit</a> / \n              <a class=\"is-danger\" (click)=\"delete(user._id)\">Delete</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"columns\">\n        <div class=\"column is-6\" *ngIf=\"crewTemplate\">\n\n            <h3 class=\"title\">Crew Mail Template</h3>\n\n            <div class=\"field\">\n              <label class=\"label\">Subject</label>\n              <div class=\"control\">\n                <input type=\"input\" placeholder=\"Type Subject Here...\" name=\"crew_subject\" [(ngModel)]=\"crewTemplate.subject\" class=\"input\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Message</label>\n              <div class=\"control\">\n                <textarea placeholder=\"Type Message Here...\" name=\"crew_message\" [(ngModel)]=\"crewTemplate.message\" class=\"textarea\" (change)=\"handleCrewChange($event.target.value)\" [(ngModel)]=\"crewTemplate.message\"></textarea>\n              </div>\n            </div>\n            <button class=\"button is-success\" (click)=\"saveCrew()\">Save</button>\n        </div>\n        <div class=\"column is-6\" *ngIf=\"handlerTemplate\">\n\n          <h3 class=\"title\">Handler Mail Template</h3>\n\n          <div class=\"field\">\n            <label class=\"label\">Subject</label>\n            <div class=\"control\">\n              <input type=\"input\" placeholder=\"Type Subject Here...\" name=\"subject\" [(ngModel)]=\"handlerTemplate.subject\" class=\"input\">\n            </div>\n          </div>\n          <div class=\"field\">\n            <label class=\"label\">Message</label>\n            <div class=\"control\">\n              <textarea placeholder=\"Type Message Here...\" name=\"message\" class=\"textarea\" [(ngModel)]=\"handlerTemplate.message\"></textarea>\n            </div>\n          </div>\n          <button class=\"button is-success\" (click)=\"saveHandler()\">Save</button>\n        </div>\n      </div>\n      <div class=\"modal\" id=\"add-user\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <header class=\"modal-card-head\">\n            <p class=\"modal-card-title\" *ngIf=\"!update\">Add User</p>\n            <p class=\"modal-card-title\" *ngIf=\"update\">Update User</p>\n            <button class=\"delete\" aria-label=\"close\" (click)=\"close()\"></button>\n          </header>\n          <section class=\"modal-card-body\" [formGroup]=\"userForm\">\n            <div class=\"field\">\n              <label class=\"label\">Fullname</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Fullname\" formControlName=\"fullname\" name=\"fullname\" required>\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Email</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\n\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Password</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\"\n                  required>\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"label\">Repeat Password</label>\n              <div class=\"control\">\n                <input class=\"input\" placeholder=\"Reapet Password\" formControlName=\"repeatPassword\" type=\"password\"\n                  name=\"repeatPassword\" required>\n\n              </div>\n            </div>\n\n\n          </section>\n          <footer class=\"modal-card-foot\">\n            <button class=\"button is-success\" (click)=\"register()\" *ngIf=\"!update\">Add</button>\n              <button class=\"button is-success\" (click)=\"updateUser()\" *ngIf=\"update\">Update</button>\n              <button class=\"button\" (click)=\"close()\">Cancel</button>\n          </footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/admin/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/settings/settings.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma-toast */ "./node_modules/bulma-toast/dist/bulma-toast.min.js");
/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(adminService) {
        this.adminService = adminService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.passwordsMatchValidator])
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getTemplates();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#btn-add-user').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').addClass('is-active');
        });
        this.getUsers();
    };
    SettingsComponent.prototype.getUsers = function () {
        var _this = this;
        this.adminService.getUsers().subscribe(function (data) {
            _this.users = data.data;
            console.log('crews ', _this.users);
        });
    };
    SettingsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.adminService.getUser(id).subscribe(function (data) {
            _this.update = true;
            _this.user = data.data;
            _this.userForm.patchValue({
                fullname: _this.user.fullname,
                email: _this.user.email
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').addClass('is-active');
            console.log('user ', _this.user);
        });
    };
    SettingsComponent.prototype.close = function () {
        this.update = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').removeClass('is-active');
        this.userForm.patchValue({
            fullname: '',
            email: ''
        });
    };
    SettingsComponent.prototype.passwordsMatchValidator = function (control) {
        var password = control.root.get('password');
        return password && control.value !== password.value ? {
            passwordMatch: true
        } : null;
    };
    Object.defineProperty(SettingsComponent.prototype, "fullname", {
        get: function () { return this.userForm.get('fullname'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "email", {
        get: function () { return this.userForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "password", {
        get: function () { return this.userForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "repeatPassword", {
        get: function () { return this.userForm.get('repeatPassword'); },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.getTemplates = function () {
        var _this = this;
        this.adminService.getTemplates().subscribe(function (data) {
            _this.crewTemplate = data.data[0];
            _this.handlerTemplate = data.data[1];
            console.log('get templates ', _this.crewTemplate);
        });
    };
    SettingsComponent.prototype.saveHandler = function () {
        this.adminService.updateTemplate(this.handlerTemplate._id, this.handlerTemplate.subject, this.handlerTemplate.message).subscribe(function (data) {
            console.log('update ', data);
        });
    };
    SettingsComponent.prototype.saveCrew = function () {
        this.adminService.updateTemplate(this.crewTemplate._id, this.crewTemplate.subject, this.crewTemplate.message).subscribe(function (data) {
            console.log('update ', data);
        });
    };
    SettingsComponent.prototype.handleHandlerChange = function (value) {
        this.handlerTemplate.message = value;
        console.log(value);
        console.log(this.handlerTemplate.message);
    };
    SettingsComponent.prototype.handleCrewChange = function (value) {
        this.crewTemplate.message = value;
    };
    SettingsComponent.prototype.register = function () {
        if (!this.userForm.valid)
            return;
        var _a = this.userForm.getRawValue(), fullname = _a.fullname, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        this.adminService.addUser(fullname, email, password, repeatPassword, "admin", "")
            .subscribe(function (data) {
            console.log('new user ', data);
        });
    };
    SettingsComponent.prototype.updateUser = function () {
        var _this = this;
        console.log('update user', this.passwordsMatchValidator);
        var _a = this.userForm.getRawValue(), fullname = _a.fullname, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        this.adminService.updateUser(this.user._id, fullname, email, password, repeatPassword, this.user.role, this.user.occupation)
            .subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#add-user').removeClass('is-active');
            _this.getUsers();
            console.log('update user ', data);
            Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                message: "User Updated",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true
            });
        });
    };
    SettingsComponent.prototype.delete = function (user) {
        var _this = this;
        console.log('update start');
        this.adminService.deleteUser(user)
            .subscribe(function (data) {
            if (data.data === "deleted") {
                console.log('User Deleted ', data);
                _this.getUsers();
                Object(bulma_toast__WEBPACK_IMPORTED_MODULE_4__["toast"])({
                    message: "User Deleted",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true
                });
            }
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/admin/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/admin/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"menu is-hidden-mobile\">\n  <p class=\"menu-label\">\n    General\n  </p>\n  <ul class=\"menu-list\">\n    <li><a routerLink=\"/admin/dashboard\" routerLinkActive=\"is-active\">Dashboard</a></li>\n    <li><a routerLink=\"/admin/aircrafts\" routerLinkActive=\"is-active\">Aircrafts</a></li>\n    <li><a routerLink=\"/admin/airports/1\" routerLinkActive=\"is-active\">Airports</a></li>\n    <li><a routerLink=\"/admin/crews\" routerLinkActive=\"is-active\">Crews</a></li>\n    <li><a routerLink=\"/admin/movements\" routerLinkActive=\"is-active\">Movements</a></li>\n    <li><a routerLink=\"/admin/sales\" routerLinkActive=\"is-active\">Sales</a></li>\n    <li><a routerLink=\"/admin/new-flight/new\" routerLinkActive=\"is-active\">New Flight</a></li>\n    <li><a routerLink=\"/admin/settings\" routerLinkActive=\"is-active\">Settings</a></li>\n  </ul>\n  <div class=\"box\">\n    <article class=\"media\">\n      <div class=\"media-content\">\n        <div class=\"content has-text-centered\t\">\n          <h5 class=\"is-marginless\">Zulu Time</h5>\n          <time datetime=\"2016-1-1\">{{zuluTime}}</time>\n        </div>\n      </div>\n    </article>\n  </div>\n  <div class=\"box\">\n    <article class=\"media\">\n      <div class=\"media-content\">\n        <div class=\"content has-text-centered\t\">\n          <h5 class=\"is-marginless\">Local Time</h5>\n          <time datetime=\"2016-1-1\">{{localTime}}</time>\n        </div>\n      </div>\n    </article>\n  </div>\n</aside>"

/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.ts ***!
  \******************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.startTime(); _this.startZuluTime(); }, 1000);
        this.zuluTime = new Date();
    };
    SideNavComponent.prototype.checkTime = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    SideNavComponent.prototype.startTime = function () {
        var today = new Date();
        var d = today.getDate();
        var mm = today.getMonth();
        var y = today.getFullYear();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        d = this.checkTime(d);
        mm = this.checkTime(mm);
        h = this.checkTime(h);
        m = this.checkTime(m);
        s = this.checkTime(s);
        this.localTime = d + "-" + mm + "-" + y + " " + h + ":" + m + ":" + s;
    };
    SideNavComponent.prototype.startZuluTime = function () {
        var today = new Date();
        var d = today.getUTCDate();
        var mm = today.getUTCMonth();
        var y = today.getUTCFullYear();
        var h = today.getUTCHours();
        var m = today.getUTCMinutes();
        var s = today.getUTCSeconds();
        // add a zero in front of numbers<10
        d = this.checkTime(d);
        mm = this.checkTime(mm);
        h = this.checkTime(h);
        m = this.checkTime(m);
        s = this.checkTime(s);
        this.zuluTime = d + "-" + mm + "-" + y + " " + h + ":" + m + ":" + s;
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/admin/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/admin/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule'
    }, {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, domSanitizer, matIconRegistry) {
        this.authService = authService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
        this.registerSvgIcons();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init this.user on startup
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
        });
        // update this.user after login/register/logout
        this.userSubscription = this.authService.$userSource.subscribe(function (user) {
            _this.user = user;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('');
    };
    AppComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.registerSvgIcons = function () {
        var _this = this;
        [
            'close',
            'add',
            'add-blue',
            'airplane-front-view',
            'air-station',
            'balloon',
            'boat',
            'cargo-ship',
            'car',
            'catamaran',
            'clone',
            'convertible',
            'delete',
            'drone',
            'fighter-plane',
            'fire-truck',
            'horseback-riding',
            'motorcycle',
            'railcar',
            'railroad-train',
            'rocket-boot',
            'sailing-boat',
            'segway',
            'shuttle',
            'space-shuttle',
            'steam-engine',
            'suv',
            'tour-bus',
            'tow-truck',
            'transportation',
            'trolleybus',
            'water-transportation',
        ].forEach(function (icon) {
            _this.matIconRegistry.addSvgIcon(icon, _this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/" + icon + ".svg"));
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/header.interceptor */ "./src/app/interceptors/header.interceptor.ts");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ "./src/app/interceptors/http-error.interceptor.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _shell_shell_component__WEBPACK_IMPORTED_MODULE_13__["ShellComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthHeaderInterceptor"],
                    multi: true,
                }, {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["CatchErrorInterceptor"],
                    multi: true,
                }],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var user = window.user;
        if (user)
            return true;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'auth',
        children: [{
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            }, {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            }]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.example-card {\n  width: 400px;\n  margin: 10% auto; }\n\n.mat-card-title {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcbWVhblxcZmxpZ2h0b3BzXFxiaXRcXGZsaWdodG9wcy9zcmNcXGFwcFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.storage */ "./src/app/auth/token.storage.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _token_storage__WEBPACK_IMPORTED_MODULE_6__["TokenStorage"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.storage */ "./src/app/auth/token.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
        this.$userSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/login', {
                email: email,
                password: password
            }).subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                _this.token.saveToken(data.token);
                observer.complete();
            });
        });
    };
    AuthService.prototype.register = function (fullname, email, password, repeatPassword) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/register', {
                fullname: fullname,
                email: email,
                password: password,
                repeatPassword: repeatPassword
            }).subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                _this.token.saveToken(data.token);
                observer.complete();
            });
        });
    };
    AuthService.prototype.setUser = function (user) {
        if (user)
            user.isAdmin = (user.roles.indexOf('admin') > -1);
        this.$userSource.next(user);
        window.user = user;
    };
    AuthService.prototype.getUser = function () {
        return this.$userSource.asObservable();
    };
    AuthService.prototype.me = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var tokenVal = _this.token.getToken();
            if (!tokenVal)
                return observer.complete();
            _this.http.get('/api/auth/me').subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                observer.complete();
            });
        });
    };
    AuthService.prototype.loggedIn = function () {
        var tokenVal = this.token.getToken();
        if (!tokenVal)
            return false;
        return true;
    };
    AuthService.prototype.signOut = function () {
        this.token.signOut();
        this.setUser(null);
        delete window.user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _token_storage__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <div class=\"columns\">\r\n        <div class=\"column is-4 is-offset-4\">\r\n          <div class=\"box\">\r\n            <div class=\"field\">\r\n              <label class=\"label\">Email Address</label>\r\n              <div class=\"control has-icons-left has-icons-right\">\r\n                <input class=\"input\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" required>\r\n                <span class=\"icon is-small is-left\">\r\n                  <i class=\"fas fa-user\"></i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"field\">\r\n              <label class=\"label\">Password</label>\r\n              <div class=\"control has-icons-left has-icons-right\">\r\n                <input class=\"input\" type=\"password\" [(ngModel)]=\"password\" name=\"password\">\r\n                <span class=\"icon is-small is-left\">\r\n                  <i class=\"fas fa-lock\"></i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"field is-grouped\">\r\n              <div class=\"control\">\r\n                <button class=\"button is-link\" (click)=\"login()\">Login</button>\r\n                <!-- <span>Allrady have an account ? <a [routerLink]=\"['/auth/register']\">login</a> here</span> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .subscribe(function (data) {
            _this.router.navigate(['/admin/dashboard']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>Register</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form class=\"example-form\">\r\n      <table cellspacing=\"0\" [formGroup]=\"userForm\">\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Fullname\" formControlName=\"fullname\" name=\"fullname\" required>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\r\n              <mat-error *ngIf=\"email.invalid && email.errors.email\">Invalid email address</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\" required>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Reapet Password\" formControlName=\"repeatPassword\" type=\"password\" name=\"repeatPassword\" required>\r\n              <mat-error *ngIf=\"repeatPassword.invalid && repeatPassword.errors.passwordMatch\">Password mismatch</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">Register</button>\r\n    <span>Allrady have an account ? <a [routerLink]=\"['/auth/login']\">login</a> here</span>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.passwordsMatchValidator])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.passwordsMatchValidator = function (control) {
        var password = control.root.get('password');
        return password && control.value !== password.value ? {
            passwordMatch: true
        } : null;
    };
    Object.defineProperty(RegisterComponent.prototype, "fullname", {
        get: function () { return this.userForm.get('fullname'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.userForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.userForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "repeatPassword", {
        get: function () { return this.userForm.get('repeatPassword'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.userForm.valid)
            return;
        var _a = this.userForm.getRawValue(), fullname = _a.fullname, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        this.authService.register(fullname, email, password, repeatPassword)
            .subscribe(function (data) {
            _this.router.navigate(['']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/token.storage.ts":
/*!***************************************!*\
  !*** ./src/app/auth/token.storage.ts ***!
  \***************************************/
/*! exports provided: TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var TokenStorage = /** @class */ (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    };
    TokenStorage.prototype.saveToken = function (token) {
        if (!token)
            return;
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorage.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_KEY);
    };
    TokenStorage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
}());



/***/ }),

/***/ "./src/app/interceptors/header.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/header.interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var _auth_token_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/token.storage */ "./src/app/auth/token.storage.ts");

var AuthHeaderInterceptor = /** @class */ (function () {
    function AuthHeaderInterceptor() {
    }
    AuthHeaderInterceptor.prototype.intercept = function (req, next) {
        // Clone the request to add the new header
        var token = new _auth_token_storage__WEBPACK_IMPORTED_MODULE_0__["TokenStorage"]();
        var tokenVal = token.getToken();
        var clonedRequest = req.clone({
            headers: req
                .headers
                .set('Authorization', tokenVal ? "Bearer " + tokenVal : '')
        });
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    };
    return AuthHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/http-error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: CatchErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatchErrorInterceptor", function() { return CatchErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");


var CatchErrorInterceptor = /** @class */ (function () {
    function CatchErrorInterceptor() {
    }
    CatchErrorInterceptor.prototype.intercept = function (request, next) {
        return next
            .handle(request)
            .do(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                var text = (err.error && err.error.message) ? err.error.message : err.statusText;
                window.globalEvents.emit('open error dialog', text);
            }
        });
    };
    return CatchErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            ],
            declarations: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shell works!\n</p>\n"

/***/ }),

/***/ "./src/app/shell/shell.component.scss":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBjvGw8Ad2D2MBj-0EyghV-Y0fX0k_Imos",
        authDomain: "flight-ops-b1f2d.firebaseapp.com",
        databaseURL: "https://flight-ops-b1f2d.firebaseio.com",
        projectId: "flight-ops-b1f2d",
        storageBucket: "flight-ops-b1f2d.appspot.com",
        messagingSenderId: "264798965298"
    }
};


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

module.exports = __webpack_require__(/*! C:\mean\flightops\bit\flightops\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map