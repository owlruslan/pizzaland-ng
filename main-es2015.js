(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





const routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        children: [
            {
                path: 'pizzas',
                loadChildren: () => Promise.all(/*! import() | modules-pizzas-pizzas-module */[__webpack_require__.e("default~modules-auth-auth-module~modules-pizzas-pizzas-module"), __webpack_require__.e("default~modules-basket-basket-module~modules-pizzas-pizzas-module"), __webpack_require__.e("modules-pizzas-pizzas-module")]).then(__webpack_require__.bind(null, /*! ./modules/pizzas/pizzas.module */ "./src/app/modules/pizzas/pizzas.module.ts")).then(mod => mod.PizzasModule)
            },
            {
                path: 'auth',
                loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("default~modules-auth-auth-module~modules-pizzas-pizzas-module"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then(mod => mod.AuthModule)
            },
            {
                path: 'basket',
                loadChildren: () => Promise.all(/*! import() | modules-basket-basket-module */[__webpack_require__.e("default~modules-basket-basket-module~modules-pizzas-pizzas-module"), __webpack_require__.e("modules-basket-basket-module")]).then(__webpack_require__.bind(null, /*! ./modules/basket/basket.module */ "./src/app/modules/basket/basket.module.ts")).then(mod => mod.BasketModule)
            },
            {
                path: '',
                redirectTo: 'pizzas',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: false,
                enableTracing: false
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: false,
                        enableTracing: false
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_store_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/store/root */ "./src/app/store/root/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_in_memory_web_api_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/in-memory-web-api/in-memory-web-api.module */ "./src/app/in-memory-web-api/in-memory-web-api.module.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_in_memory_web_api_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_7__["InMemoryWebApiModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _app_store_root__WEBPACK_IMPORTED_MODULE_4__["RootStoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_in_memory_web_api_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_7__["InMemoryWebApiModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _app_store_root__WEBPACK_IMPORTED_MODULE_4__["RootStoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_in_memory_web_api_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_7__["InMemoryWebApiModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _app_store_root__WEBPACK_IMPORTED_MODULE_4__["RootStoreModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/in-memory-web-api/data/user/pizzas-response.data.ts":
/*!*********************************************************************!*\
  !*** ./src/app/in-memory-web-api/data/user/pizzas-response.data.ts ***!
  \*********************************************************************/
/*! exports provided: pizzasResponseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pizzasResponseData", function() { return pizzasResponseData; });
/* harmony import */ var _app_mocks_pizzas_get_pizzas_response_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/mocks/pizzas/get-pizzas-response.mock */ "./src/app/mocks/pizzas/get-pizzas-response.mock.ts");
/* harmony import */ var _app_models_response_response_success_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/models/response/response-success.model */ "./src/app/models/response/response-success.model.ts");


const pizzasResponseData = new _app_models_response_response_success_model__WEBPACK_IMPORTED_MODULE_1__["ResponseSuccess"]();
pizzasResponseData.data = _app_mocks_pizzas_get_pizzas_response_mock__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./src/app/in-memory-web-api/data/user/user-response-data.ts":
/*!*******************************************************************!*\
  !*** ./src/app/in-memory-web-api/data/user/user-response-data.ts ***!
  \*******************************************************************/
/*! exports provided: userResponseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userResponseData", function() { return userResponseData; });
/* harmony import */ var _app_mocks_user_user_login_response_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/mocks/user/user-login-response.mock */ "./src/app/mocks/user/user-login-response.mock.ts");

const userResponseData = _app_mocks_user_user_login_response_mock__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./src/app/in-memory-web-api/in-memory-web-api.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/in-memory-web-api/in-memory-web-api.module.ts ***!
  \***************************************************************/
/*! exports provided: InMemoryWebApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryWebApiModule", function() { return InMemoryWebApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _app_in_memory_web_api_services_app_in_memory_web_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/in-memory-web-api/services/app.in-memory-web-api.service */ "./src/app/in-memory-web-api/services/app.in-memory-web-api.service.ts");






class InMemoryWebApiModule {
}
InMemoryWebApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InMemoryWebApiModule });
InMemoryWebApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InMemoryWebApiModule_Factory(t) { return new (t || InMemoryWebApiModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__["HttpClientInMemoryWebApiModule"].forRoot(_app_in_memory_web_api_services_app_in_memory_web_api_service__WEBPACK_IMPORTED_MODULE_3__["AppInMemoryWebAPIService"], {
                delay: 0,
                dataEncapsulation: true,
                apiBase: '/api/v1',
                host: 'localhost',
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InMemoryWebApiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__["HttpClientInMemoryWebApiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryWebApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__["HttpClientInMemoryWebApiModule"].forRoot(_app_in_memory_web_api_services_app_in_memory_web_api_service__WEBPACK_IMPORTED_MODULE_3__["AppInMemoryWebAPIService"], {
                        delay: 0,
                        dataEncapsulation: true,
                        apiBase: '/api/v1',
                        host: 'localhost',
                    })
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/in-memory-web-api/services/app.in-memory-web-api.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/in-memory-web-api/services/app.in-memory-web-api.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AppInMemoryWebAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInMemoryWebAPIService", function() { return AppInMemoryWebAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _app_in_memory_web_api_data_user_user_response_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/in-memory-web-api/data/user/user-response-data */ "./src/app/in-memory-web-api/data/user/user-response-data.ts");
/* harmony import */ var _app_in_memory_web_api_services_user_in_memory_web_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/in-memory-web-api/services/user.in-memory-web-api.service */ "./src/app/in-memory-web-api/services/user.in-memory-web-api.service.ts");
/* harmony import */ var _app_in_memory_web_api_services_pizzas_in_memory_web_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/in-memory-web-api/services/pizzas.in-memory-web-api.service */ "./src/app/in-memory-web-api/services/pizzas.in-memory-web-api.service.ts");
/* harmony import */ var _app_in_memory_web_api_data_user_pizzas_response_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/in-memory-web-api/data/user/pizzas-response.data */ "./src/app/in-memory-web-api/data/user/pizzas-response.data.ts");







class AppInMemoryWebAPIService {
    createDb() {
        this.userInMemoryWebAPIService = new _app_in_memory_web_api_services_user_in_memory_web_api_service__WEBPACK_IMPORTED_MODULE_3__["UserInMemoryWebAPIService"]();
        this.pizzasInMemoryWebAPIService = new _app_in_memory_web_api_services_pizzas_in_memory_web_api_service__WEBPACK_IMPORTED_MODULE_4__["PizzasInMemoryWebAPIService"]();
        return {
            userResponseData: _app_in_memory_web_api_data_user_user_response_data__WEBPACK_IMPORTED_MODULE_2__["userResponseData"],
            pizzasResponseData: _app_in_memory_web_api_data_user_pizzas_response_data__WEBPACK_IMPORTED_MODULE_5__["pizzasResponseData"]
        };
    }
    /**
     * HTTP GET interceptor.
     */
    get(reqInfo) {
        const url = reqInfo.req.url;
        const collectionName = reqInfo.collectionName;
        // User
        if (collectionName === this.userInMemoryWebAPIService.collectionName) {
            return this.userInMemoryWebAPIService.get(reqInfo);
        }
        // Pizzas
        if (collectionName === this.pizzasInMemoryWebAPIService.collectionName) {
            return this.pizzasInMemoryWebAPIService.get(reqInfo);
        }
        return undefined; // let the default GET handle all others
    }
    /**
     * Helper
     */
    finishOptions(options, { headers, url }) {
        options.statusText = Object(angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["getStatusText"])(options.status);
        options.headers = headers;
        options.url = url;
        return options;
    }
}
AppInMemoryWebAPIService.ɵfac = function AppInMemoryWebAPIService_Factory(t) { return new (t || AppInMemoryWebAPIService)(); };
AppInMemoryWebAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInMemoryWebAPIService, factory: AppInMemoryWebAPIService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInMemoryWebAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/in-memory-web-api/services/pizzas.in-memory-web-api.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/in-memory-web-api/services/pizzas.in-memory-web-api.service.ts ***!
  \********************************************************************************/
/*! exports provided: PizzasInMemoryWebAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasInMemoryWebAPIService", function() { return PizzasInMemoryWebAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_in_memory_web_api_data_user_pizzas_response_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/in-memory-web-api/data/user/pizzas-response.data */ "./src/app/in-memory-web-api/data/user/pizzas-response.data.ts");





class PizzasInMemoryWebAPIService {
    constructor() {
        this.host = _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host;
        this.collectionName = 'pizzas';
    }
    /**
     * HTTP GET interceptor.
     */
    get(reqInfo) {
        const url = reqInfo.req.url;
        switch (url) {
            case `${this.host}/api/v1/pizzas`: {
                return this.getPizzas(reqInfo);
            }
        }
        return undefined; // let the default GET handle all others
    }
    /**
     * GET: `/api/v1/pizzas`.
     * Returns pizzas response
     */
    getPizzas(reqInfo) {
        return reqInfo.utils.createResponse$(() => {
            const options = {
                body: _app_in_memory_web_api_data_user_pizzas_response_data__WEBPACK_IMPORTED_MODULE_3__["pizzasResponseData"],
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["STATUS"].OK
            };
            return this.finishOptions(options, reqInfo);
        });
    }
    /**
     * Helper
     */
    finishOptions(options, { headers, url }) {
        options.statusText = Object(angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["getStatusText"])(options.status);
        options.headers = headers;
        options.url = url;
        return options;
    }
}
PizzasInMemoryWebAPIService.ɵfac = function PizzasInMemoryWebAPIService_Factory(t) { return new (t || PizzasInMemoryWebAPIService)(); };
PizzasInMemoryWebAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PizzasInMemoryWebAPIService, factory: PizzasInMemoryWebAPIService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzasInMemoryWebAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/in-memory-web-api/services/user.in-memory-web-api.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/in-memory-web-api/services/user.in-memory-web-api.service.ts ***!
  \******************************************************************************/
/*! exports provided: UserInMemoryWebAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInMemoryWebAPIService", function() { return UserInMemoryWebAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_in_memory_web_api_data_user_user_response_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/in-memory-web-api/data/user/user-response-data */ "./src/app/in-memory-web-api/data/user/user-response-data.ts");





class UserInMemoryWebAPIService {
    constructor() {
        this.host = _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host;
        this.collectionName = 'user';
    }
    /**
     * HTTP GET interceptor.
     */
    get(reqInfo) {
        const url = reqInfo.req.url;
        switch (url) {
            case `${this.host}/api/v1/user/profile`: {
                return this.getProfile(reqInfo);
            }
        }
        return undefined; // let the default GET handle all others
    }
    post(reqInfo) {
        const url = reqInfo.req.url;
        switch (url) {
            case `${this.host}/api/v1/user/login`: {
                return this.postLogin(reqInfo);
            }
        }
    }
    /**
     * GET: `/api/v1/user/profile`.
     * Returns info about profile
     */
    getProfile(reqInfo) {
        return reqInfo.utils.createResponse$(() => {
            const options = {
                body: _app_in_memory_web_api_data_user_user_response_data__WEBPACK_IMPORTED_MODULE_3__["userResponseData"],
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["STATUS"].OK
            };
            return this.finishOptions(options, reqInfo);
        });
    }
    /**
     * POST: `/api/v1/user/login`.
     * Returns user login response.
     */
    postLogin(reqInfo) {
        return reqInfo.utils.createResponse$(() => {
            const options = {
                body: _app_in_memory_web_api_data_user_user_response_data__WEBPACK_IMPORTED_MODULE_3__["userResponseData"],
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["STATUS"].OK
            };
            return this.finishOptions(options, reqInfo);
        });
    }
    /**
     * Helper
     */
    finishOptions(options, { headers, url }) {
        options.statusText = Object(angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["getStatusText"])(options.status);
        options.headers = headers;
        options.url = url;
        return options;
    }
}
UserInMemoryWebAPIService.ɵfac = function UserInMemoryWebAPIService_Factory(t) { return new (t || UserInMemoryWebAPIService)(); };
UserInMemoryWebAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserInMemoryWebAPIService, factory: UserInMemoryWebAPIService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInMemoryWebAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mocks/pizzas/get-pizzas-response.mock.ts":
/*!**********************************************************!*\
  !*** ./src/app/mocks/pizzas/get-pizzas-response.mock.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_models_pizzas_get_pizzas_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/models/pizzas/get-pizzas-response.model */ "./src/app/models/pizzas/get-pizzas-response.model.ts");

const mockGetPizzasResponse = new _app_models_pizzas_get_pizzas_response_model__WEBPACK_IMPORTED_MODULE_0__["GetPizzasResponse"]();
mockGetPizzasResponse.pizzas = [
    {
        id: '0',
        name: 'Margherita',
        description: 'PIZZA_DESCRIPTION_0',
        toppings: ['anchovy', 'basil', 'mozzarella', 'tomato'],
        price: 100,
    },
    {
        id: '1',
        name: 'Marinara',
        description: 'PIZZA_DESCRIPTION_1',
        toppings: ['sweetcorn', 'pepper', 'onion', 'olive'],
        price: 130,
    },
    {
        id: '2',
        name: 'Napoletana',
        description: 'PIZZA_DESCRIPTION_2',
        toppings: ['bacon', 'mushroom', 'chili', 'pepperoni'],
        price: 146,
    }
];
/* harmony default export */ __webpack_exports__["default"] = (mockGetPizzasResponse);


/***/ }),

/***/ "./src/app/mocks/user/user-login-response.mock.ts":
/*!********************************************************!*\
  !*** ./src/app/mocks/user/user-login-response.mock.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_models_user_user_login_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/models/user/user-login-response.model */ "./src/app/models/user/user-login-response.model.ts");

const mockUserLoginResponse = new _app_models_user_user_login_response_model__WEBPACK_IMPORTED_MODULE_0__["UserLoginResponse"]();
mockUserLoginResponse.token = 'TOKEN';
// TODO: add date
mockUserLoginResponse.expiresAt = 'DATE';
/* harmony default export */ __webpack_exports__["default"] = (mockUserLoginResponse);


/***/ }),

/***/ "./src/app/models/pizzas/get-pizzas-response.model.ts":
/*!************************************************************!*\
  !*** ./src/app/models/pizzas/get-pizzas-response.model.ts ***!
  \************************************************************/
/*! exports provided: GetPizzasResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPizzasResponse", function() { return GetPizzasResponse; });
class GetPizzasResponse {
}


/***/ }),

/***/ "./src/app/models/response/response-success.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/models/response/response-success.model.ts ***!
  \***********************************************************/
/*! exports provided: ResponseSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseSuccess", function() { return ResponseSuccess; });
class ResponseSuccess {
    constructor() {
        this.success = true;
    }
}


/***/ }),

/***/ "./src/app/models/user/user-login-response.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/models/user/user-login-response.model.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginResponse", function() { return UserLoginResponse; });
class UserLoginResponse {
}


/***/ }),

/***/ "./src/app/services/pizzas/pizzas.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/pizzas/pizzas.service.ts ***!
  \***************************************************/
/*! exports provided: PizzasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasService", function() { return PizzasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





/**
 * Implementation of pizzas APIs.
 */
class PizzasService {
    constructor(http) {
        this.http = http;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host;
    }
    /**
     * GET: /api/v1/pizzas
     * Get Pizzas.
     */
    getPizzas(token) {
        return this.http.get(`${this.host}/api/v1/pizzas`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: `Bearer ${token}` }),
        });
    }
}
PizzasService.ɵfac = function PizzasService_Factory(t) { return new (t || PizzasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PizzasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PizzasService, factory: PizzasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




/**
 * Implementation of user APIs.
 */
class UserService {
    constructor(http) {
        this.http = http;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host;
    }
    /**
     * POST: /api/v1/user/login
     * Login.
     */
    login(request) {
        return this.http.post(`${this.host}/api/v1/user/login`, request);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/root/app/actions.ts":
/*!*******************************************!*\
  !*** ./src/app/store/root/app/actions.ts ***!
  \*******************************************/
/*! exports provided: ActionTypes, AddErrorResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddErrorResponse", function() { return AddErrorResponse; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["AddErrorResponse"] = "[Errors] Add Error Response";
})(ActionTypes || (ActionTypes = {}));
class AddErrorResponse {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.AddErrorResponse;
    }
}


/***/ }),

/***/ "./src/app/store/root/app/app-store.module.ts":
/*!****************************************************!*\
  !*** ./src/app/store/root/app/app-store.module.ts ***!
  \****************************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _app_store_root_app_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/store/root/app/index */ "./src/app/store/root/app/index.ts");






class AppStoreModule {
}
AppStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppStoreModule });
AppStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppStoreModule_Factory(t) { return new (t || AppStoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('app', _app_store_root_app_index__WEBPACK_IMPORTED_MODULE_3__["AppStoreReducer"].reducer),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('app', _app_store_root_app_index__WEBPACK_IMPORTED_MODULE_3__["AppStoreReducer"].reducer),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/root/app/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/root/app/index.ts ***!
  \*****************************************/
/*! exports provided: AppStoreActions, AppStoreSelectors, AppStoreState, AppStoreReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/root/app/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppStoreActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/app/store/root/app/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppStoreSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/root/app/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./src/app/store/root/app/reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppStoreReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/store/root/app/reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/store/root/app/reducer.ts ***!
  \*******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/root/app/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/store/root/app/state.ts");


function reducer(state = _state__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AddErrorResponse: {
            return Object.assign(Object.assign({}, state), { errorResponse: action.payload.response });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/root/app/selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/store/root/app/selectors.ts ***!
  \*********************************************/
/*! exports provided: getAppState, getErrorsResponseState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return getAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorsResponseState", function() { return getErrorsResponseState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getAppState = (state) => state.app;
const getErrorsResponseState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, (state) => state.errorResponse);


/***/ }),

/***/ "./src/app/store/root/app/state.ts":
/*!*****************************************!*\
  !*** ./src/app/store/root/app/state.ts ***!
  \*****************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    errorResponse: null,
};


/***/ }),

/***/ "./src/app/store/root/client/basket/basket.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/store/root/client/basket/basket.actions.ts ***!
  \************************************************************/
/*! exports provided: ActionTypes, AddPizzas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPizzas", function() { return AddPizzas; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["AddPizzas"] = "[Basket] Add Pizzas";
})(ActionTypes || (ActionTypes = {}));
// Add Pizzas
class AddPizzas {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.AddPizzas;
    }
}


/***/ }),

/***/ "./src/app/store/root/client/basket/basket.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/store/root/client/basket/basket.reducer.ts ***!
  \************************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _basket_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.actions */ "./src/app/store/root/client/basket/basket.actions.ts");
/* harmony import */ var _basket_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.state */ "./src/app/store/root/client/basket/basket.state.ts");
/* harmony import */ var _app_models_pizzas_get_pizzas_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models/pizzas/get-pizzas-response.model */ "./src/app/models/pizzas/get-pizzas-response.model.ts");



function reducer(state = _basket_state__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
    switch (action.type) {
        // Add Pizzas
        case _basket_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].AddPizzas: {
            const resp = new _app_models_pizzas_get_pizzas_response_model__WEBPACK_IMPORTED_MODULE_2__["GetPizzasResponse"]();
            resp.pizzas = action.payload.pizzas;
            return Object.assign(Object.assign({}, state), { pizzasResponse: resp });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/root/client/basket/basket.selectors.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/root/client/basket/basket.selectors.ts ***!
  \**************************************************************/
/*! exports provided: getBasketState, getPizzasResponseState, getTotalState, getPizzasCountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasketState", function() { return getBasketState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPizzasResponseState", function() { return getPizzasResponseState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalState", function() { return getTotalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPizzasCountState", function() { return getPizzasCountState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getBasketState = (state) => state.client.basket;
const getPizzasResponseState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBasketState, (state) => state.pizzasResponse);
const getTotalState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPizzasResponseState, (state) => {
    if (state.pizzas) {
        return state.pizzas
            .map(pizza => pizza.price)
            .reduce((accumulator, currentValue) => accumulator + currentValue);
    }
});
const getPizzasCountState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPizzasResponseState, (state) => {
    if (state.pizzas) {
        return state.pizzas.length;
    }
});


/***/ }),

/***/ "./src/app/store/root/client/basket/basket.state.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/root/client/basket/basket.state.ts ***!
  \**********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _app_mocks_pizzas_get_pizzas_response_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/mocks/pizzas/get-pizzas-response.mock */ "./src/app/mocks/pizzas/get-pizzas-response.mock.ts");

const initialState = {
    pizzasResponse: {
        pizzas: _app_mocks_pizzas_get_pizzas_response_mock__WEBPACK_IMPORTED_MODULE_0__["default"].pizzas.slice(0, 2)
    }
};


/***/ }),

/***/ "./src/app/store/root/client/basket/index.ts":
/*!***************************************************!*\
  !*** ./src/app/store/root/client/basket/index.ts ***!
  \***************************************************/
/*! exports provided: BasketStoreActions, BasketStoreSelectors, BasketStoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basket_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.actions */ "./src/app/store/root/client/basket/basket.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BasketStoreActions", function() { return _basket_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _basket_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.selectors */ "./src/app/store/root/client/basket/basket.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BasketStoreSelectors", function() { return _basket_selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _basket_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket.state */ "./src/app/store/root/client/basket/basket.state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BasketStoreState", function() { return _basket_state__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./src/app/store/root/client/client-store.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/root/client/client-store.module.ts ***!
  \**********************************************************/
/*! exports provided: FEATURE_REDUCER_TOKEN, getReducers, ClientStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_REDUCER_TOKEN", function() { return FEATURE_REDUCER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReducers", function() { return getReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientStoreModule", function() { return ClientStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _app_store_root_client_user_user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/store/root/client/user/user.reducer */ "./src/app/store/root/client/user/user.reducer.ts");
/* harmony import */ var _app_store_root_client_pizzas_pizzas_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/store/root/client/pizzas/pizzas.reducer */ "./src/app/store/root/client/pizzas/pizzas.reducer.ts");
/* harmony import */ var _app_store_root_client_basket_basket_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/store/root/client/basket/basket.reducer */ "./src/app/store/root/client/basket/basket.reducer.ts");
/* harmony import */ var _app_store_root_client_user_user_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/store/root/client/user/user.effects */ "./src/app/store/root/client/user/user.effects.ts");
/* harmony import */ var _app_store_root_client_pizzas_pizzas_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/store/root/client/pizzas/pizzas.effects */ "./src/app/store/root/client/pizzas/pizzas.effects.ts");












const FEATURE_REDUCER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Client Feature Reducers');
function getReducers() {
    // map of reducers
    return {
        user: _app_store_root_client_user_user_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
        pizzas: _app_store_root_client_pizzas_pizzas_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
        basket: _app_store_root_client_basket_basket_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
    };
}
class ClientStoreModule {
}
ClientStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientStoreModule });
ClientStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ClientStoreModule_Factory(t) { return new (t || ClientStoreModule)(); }, providers: [
        {
            provide: FEATURE_REDUCER_TOKEN,
            useFactory: getReducers,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([
                _app_store_root_client_user_user_effects__WEBPACK_IMPORTED_MODULE_7__["UserEffects"],
                _app_store_root_client_pizzas_pizzas_effects__WEBPACK_IMPORTED_MODULE_8__["PizzasEffects"],
            ]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('client', FEATURE_REDUCER_TOKEN),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([
                        _app_store_root_client_user_user_effects__WEBPACK_IMPORTED_MODULE_7__["UserEffects"],
                        _app_store_root_client_pizzas_pizzas_effects__WEBPACK_IMPORTED_MODULE_8__["PizzasEffects"],
                    ]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('client', FEATURE_REDUCER_TOKEN),
                ],
                providers: [
                    {
                        provide: FEATURE_REDUCER_TOKEN,
                        useFactory: getReducers,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/root/client/index.ts":
/*!********************************************!*\
  !*** ./src/app/store/root/client/index.ts ***!
  \********************************************/
/*! exports provided: UserStoreActions, UserStoreSelectors, UserStoreState, PizzasStoreActions, PizzasStoreSelectors, PizzasStoreState, BasketStoreActions, BasketStoreSelectors, BasketStoreState, ClientStoreModule, ClientStoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-store.module */ "./src/app/store/root/client/client-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientStoreModule", function() { return _client_store_module__WEBPACK_IMPORTED_MODULE_0__["ClientStoreModule"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/store/root/client/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ClientStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/store/root/client/user/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStoreActions", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["UserStoreActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStoreSelectors", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["UserStoreSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStoreState", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["UserStoreState"]; });

/* harmony import */ var _pizzas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pizzas */ "./src/app/store/root/client/pizzas/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PizzasStoreActions", function() { return _pizzas__WEBPACK_IMPORTED_MODULE_3__["PizzasStoreActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PizzasStoreSelectors", function() { return _pizzas__WEBPACK_IMPORTED_MODULE_3__["PizzasStoreSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PizzasStoreState", function() { return _pizzas__WEBPACK_IMPORTED_MODULE_3__["PizzasStoreState"]; });

/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basket */ "./src/app/store/root/client/basket/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasketStoreActions", function() { return _basket__WEBPACK_IMPORTED_MODULE_4__["BasketStoreActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasketStoreSelectors", function() { return _basket__WEBPACK_IMPORTED_MODULE_4__["BasketStoreSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasketStoreState", function() { return _basket__WEBPACK_IMPORTED_MODULE_4__["BasketStoreState"]; });









/***/ }),

/***/ "./src/app/store/root/client/pizzas/index.ts":
/*!***************************************************!*\
  !*** ./src/app/store/root/client/pizzas/index.ts ***!
  \***************************************************/
/*! exports provided: PizzasStoreActions, PizzasStoreSelectors, PizzasStoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pizzas_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzas.actions */ "./src/app/store/root/client/pizzas/pizzas.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PizzasStoreActions", function() { return _pizzas_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _pizzas_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizzas.selectors */ "./src/app/store/root/client/pizzas/pizzas.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PizzasStoreSelectors", function() { return _pizzas_selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _pizzas_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizzas.state */ "./src/app/store/root/client/pizzas/pizzas.state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PizzasStoreState", function() { return _pizzas_state__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./src/app/store/root/client/pizzas/pizzas.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/store/root/client/pizzas/pizzas.actions.ts ***!
  \************************************************************/
/*! exports provided: ActionTypes, GetPizzas, GetPizzasSuccess, GetPizzasFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPizzas", function() { return GetPizzas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPizzasSuccess", function() { return GetPizzasSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPizzasFailure", function() { return GetPizzasFailure; });
var ActionTypes;
(function (ActionTypes) {
    // Get Pizzas
    ActionTypes["GetPizzas"] = "[Pizzas] Get Pizzas";
    ActionTypes["GetPizzasSuccess"] = "[Pizzas] Get Pizzas Success";
    ActionTypes["GetPizzasFailure"] = "[Pizzas] Get Pizzas Failure";
})(ActionTypes || (ActionTypes = {}));
// GetPizzas
class GetPizzas {
    constructor() {
        this.type = ActionTypes.GetPizzas;
    }
}
class GetPizzasSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.GetPizzasSuccess;
    }
}
class GetPizzasFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.GetPizzasFailure;
    }
}


/***/ }),

/***/ "./src/app/store/root/client/pizzas/pizzas.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/store/root/client/pizzas/pizzas.effects.ts ***!
  \************************************************************/
/*! exports provided: PizzasEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasEffects", function() { return PizzasEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _pizzas_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pizzas.actions */ "./src/app/store/root/client/pizzas/pizzas.actions.ts");
/* harmony import */ var _app_store_root_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/store/root/app */ "./src/app/store/root/app/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_store_root_client_user_user_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/store/root/client/user/user.selectors */ "./src/app/store/root/client/user/user.selectors.ts");
/* harmony import */ var _app_services_pizzas_pizzas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/pizzas/pizzas.service */ "./src/app/services/pizzas/pizzas.service.ts");












/**
 * Provides Pizzas Store Effects.
 */
class PizzasEffects {
    constructor(actions$, store, pizzasService) {
        this.actions$ = actions$;
        this.store = store;
        this.pizzasService = pizzasService;
        /**
         * @action - [Pizzas] GetPizzas
         * @return:
         *   Success: [Pizzas] GetPizzasSuccess
         *   Failure: [Pizzas] GetPizzasFailure & [Errors] AddErrorResponse
         */
        this.getPizzas$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_pizzas_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].GetPizzas), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_store_root_client_user_user_selectors__WEBPACK_IMPORTED_MODULE_7__["getUserTokenState"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([action, token]) => {
            return this.pizzasService.getPizzas(token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => new _pizzas_actions__WEBPACK_IMPORTED_MODULE_4__["GetPizzasSuccess"]({ response })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errResponse) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(errResponse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => [
                new _pizzas_actions__WEBPACK_IMPORTED_MODULE_4__["GetPizzasFailure"]({ response }),
                new _app_store_root_app__WEBPACK_IMPORTED_MODULE_5__["AppStoreActions"].AddErrorResponse({ response })
            ]))));
        })));
    }
}
PizzasEffects.ɵfac = function PizzasEffects_Factory(t) { return new (t || PizzasEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_pizzas_pizzas_service__WEBPACK_IMPORTED_MODULE_8__["PizzasService"])); };
PizzasEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PizzasEffects, factory: PizzasEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzasEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _app_services_pizzas_pizzas_service__WEBPACK_IMPORTED_MODULE_8__["PizzasService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/root/client/pizzas/pizzas.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/store/root/client/pizzas/pizzas.reducer.ts ***!
  \************************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _pizzas_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzas.actions */ "./src/app/store/root/client/pizzas/pizzas.actions.ts");
/* harmony import */ var _pizzas_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizzas.state */ "./src/app/store/root/client/pizzas/pizzas.state.ts");


function reducer(state = _pizzas_state__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
    switch (action.type) {
        // Login
        case _pizzas_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GetPizzas: {
            return Object.assign({}, state);
        }
        case _pizzas_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GetPizzasSuccess: {
            return Object.assign(Object.assign({}, state), { pizzasResponse: action.payload.response.data });
        }
        case _pizzas_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GetPizzasFailure: {
            return Object.assign(Object.assign({}, state), { pizzasResponse: null });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/root/client/pizzas/pizzas.selectors.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/root/client/pizzas/pizzas.selectors.ts ***!
  \**************************************************************/
/*! exports provided: getPizzasState, getPizzasResponseState, getToppingsResponseState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPizzasState", function() { return getPizzasState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPizzasResponseState", function() { return getPizzasResponseState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToppingsResponseState", function() { return getToppingsResponseState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getPizzasState = (state) => state.client.pizzas;
const getPizzasResponseState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPizzasState, (state) => state.pizzasResponse);
const getToppingsResponseState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPizzasState, (state) => state.toppingsResponse);


/***/ }),

/***/ "./src/app/store/root/client/pizzas/pizzas.state.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/root/client/pizzas/pizzas.state.ts ***!
  \**********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    pizzasResponse: {
        pizzas: []
    },
    toppingsResponse: [
        'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
        'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
    ]
};


/***/ }),

/***/ "./src/app/store/root/client/state.ts":
/*!********************************************!*\
  !*** ./src/app/store/root/client/state.ts ***!
  \********************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    user: null,
    pizzas: null,
    basket: null,
};


/***/ }),

/***/ "./src/app/store/root/client/user/index.ts":
/*!*************************************************!*\
  !*** ./src/app/store/root/client/user/index.ts ***!
  \*************************************************/
/*! exports provided: UserStoreActions, UserStoreSelectors, UserStoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/store/root/client/user/user.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UserStoreActions", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _user_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.selectors */ "./src/app/store/root/client/user/user.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UserStoreSelectors", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.state */ "./src/app/store/root/client/user/user.state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UserStoreState", function() { return _user_state__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./src/app/store/root/client/user/user.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/store/root/client/user/user.actions.ts ***!
  \********************************************************/
/*! exports provided: ActionTypes, Login, LoginSuccess, LoginFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailure", function() { return LoginFailure; });
var ActionTypes;
(function (ActionTypes) {
    // Login
    ActionTypes["Login"] = "[User] Login";
    ActionTypes["LoginSuccess"] = "[User] Login Success";
    ActionTypes["LoginFailure"] = "[User] Login Failure";
})(ActionTypes || (ActionTypes = {}));
// Login
class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.Login;
    }
}
class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LoginSuccess;
    }
}
class LoginFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LoginFailure;
    }
}


/***/ }),

/***/ "./src/app/store/root/client/user/user.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/store/root/client/user/user.effects.ts ***!
  \********************************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.actions */ "./src/app/store/root/client/user/user.actions.ts");
/* harmony import */ var _app_store_root_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/store/root/app */ "./src/app/store/root/app/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/user/user.service */ "./src/app/services/user/user.service.ts");










/**
 * Provides User Store Effects.
 */
class UserEffects {
    constructor(actions$, store, userService) {
        this.actions$ = actions$;
        this.store = store;
        this.userService = userService;
        /**
         * @action - [User] Login
         * @return:
         *   Success: [User] LoginSuccess
         *   Failure: [User] LoginFailure & [Errors] AddErrorResponse
         */
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(action => this.userService.login(action.payload.request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => new _user_actions__WEBPACK_IMPORTED_MODULE_3__["LoginSuccess"]({ response })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errResponse) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(errResponse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((response) => [
            new _user_actions__WEBPACK_IMPORTED_MODULE_3__["LoginFailure"]({ response }),
            new _app_store_root_app__WEBPACK_IMPORTED_MODULE_4__["AppStoreActions"].AddErrorResponse({ response })
        ])))))));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/root/client/user/user.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/root/client/user/user.reducer.ts ***!
  \********************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/store/root/client/user/user.actions.ts");
/* harmony import */ var _user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.state */ "./src/app/store/root/client/user/user.state.ts");


function reducer(state = _user_state__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
    switch (action.type) {
        // Login
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Login: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoginSuccess: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoginFailure: {
            return Object.assign({}, state);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/root/client/user/user.selectors.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/root/client/user/user.selectors.ts ***!
  \**********************************************************/
/*! exports provided: getUserState, getUserTokenState, getUserResponseState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserTokenState", function() { return getUserTokenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserResponseState", function() { return getUserResponseState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getUserState = (state) => state.client.user;
const getUserTokenState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, (state) => state.userTokenResponse.token);
const getUserResponseState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, (state) => state.userResponse);


/***/ }),

/***/ "./src/app/store/root/client/user/user.state.ts":
/*!******************************************************!*\
  !*** ./src/app/store/root/client/user/user.state.ts ***!
  \******************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    logined: false,
    userTokenResponse: {
        token: 'TOKEN',
        expiresAt: 'DATE'
    },
    userResponse: {
        name: 'Ruslan'
    }
};


/***/ }),

/***/ "./src/app/store/root/index.ts":
/*!*************************************!*\
  !*** ./src/app/store/root/index.ts ***!
  \*************************************/
/*! exports provided: UserStoreActions, UserStoreSelectors, UserStoreState, RootStoreModule, RootStoreState, fromRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root-store.module */ "./src/app/store/root/root-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return _root_store_module__WEBPACK_IMPORTED_MODULE_0__["RootStoreModule"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/store/root/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RootStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _client_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client/user */ "./src/app/store/root/client/user/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStoreActions", function() { return _client_user__WEBPACK_IMPORTED_MODULE_2__["UserStoreActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStoreSelectors", function() { return _client_user__WEBPACK_IMPORTED_MODULE_2__["UserStoreSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStoreState", function() { return _client_user__WEBPACK_IMPORTED_MODULE_2__["UserStoreState"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/store/root/router/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromRouter", function() { return _router__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/store/root/root-store.module.ts":
/*!*************************************************!*\
  !*** ./src/app/store/root/root-store.module.ts ***!
  \*************************************************/
/*! exports provided: RootStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return RootStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _app_store_root_app_app_store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/store/root/app/app-store.module */ "./src/app/store/root/app/app-store.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _app_store_root_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/store/root/client */ "./src/app/store/root/client/index.ts");













class RootStoreModule {
}
RootStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RootStoreModule });
RootStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RootStoreModule_Factory(t) { return new (t || RootStoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({}, {}),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({ name: 'Pizzaiols Store' }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
            _app_store_root_app_app_store_module__WEBPACK_IMPORTED_MODULE_4__["AppStoreModule"],
            _app_store_root_client__WEBPACK_IMPORTED_MODULE_7__["ClientStoreModule"],
            // App root store
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('router', _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RootStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"], _app_store_root_app_app_store_module__WEBPACK_IMPORTED_MODULE_4__["AppStoreModule"],
        _app_store_root_client__WEBPACK_IMPORTED_MODULE_7__["ClientStoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({}, {}),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({ name: 'Pizzaiols Store' }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
                    _app_store_root_app_app_store_module__WEBPACK_IMPORTED_MODULE_4__["AppStoreModule"],
                    _app_store_root_client__WEBPACK_IMPORTED_MODULE_7__["ClientStoreModule"],
                    // App root store
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('router', _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]),
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/root/router/index.ts":
/*!********************************************!*\
  !*** ./src/app/store/root/router/index.ts ***!
  \********************************************/
/*! exports provided: selectRouter, selectQueryParams, selectRouteParams, selectRouteData, selectUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouter", function() { return selectRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQueryParams", function() { return selectQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParams", function() { return selectRouteParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteData", function() { return selectRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUrl", function() { return selectUrl; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const selectRouter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('router');
const { selectQueryParams, // select the current route query params
selectRouteParams, // select the current route params
selectRouteData, // select the current route data
selectUrl, } = Object(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["getSelectors"])(selectRouter);


/***/ }),

/***/ "./src/app/store/root/state.ts":
/*!*************************************!*\
  !*** ./src/app/store/root/state.ts ***!
  \*************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    app: null,
    client: null,
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    host: 'localhost'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/owlruslan/pizzaiols/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map