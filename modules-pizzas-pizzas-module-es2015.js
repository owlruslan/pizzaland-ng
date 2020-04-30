(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pizzas-pizzas-module"],{

/***/ "./src/app/modules/pizzas/pizzas-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/pizzas/pizzas-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PizzasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasRoutingModule", function() { return PizzasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_modules_pizzas_pizzas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/pizzas/pizzas.component */ "./src/app/modules/pizzas/pizzas.component.ts");





const routes = [
    {
        path: '',
        component: _app_modules_pizzas_pizzas_component__WEBPACK_IMPORTED_MODULE_2__["PizzasComponent"],
    }
];
class PizzasRoutingModule {
}
PizzasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PizzasRoutingModule });
PizzasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PizzasRoutingModule_Factory(t) { return new (t || PizzasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PizzasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/pizzas/pizzas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/pizzas/pizzas.component.ts ***!
  \****************************************************/
/*! exports provided: PizzasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasComponent", function() { return PizzasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_store_root_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/store/root/client */ "./src/app/store/root/client/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/navbar/navbar.component */ "./src/app/modules/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_pizza_toppings_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pizza-toppings/pizza-toppings.component */ "./src/app/modules/shared/pizza-toppings/pizza-toppings.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pizza_card_pizza_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/pizza-card/pizza-card.component */ "./src/app/modules/shared/pizza-card/pizza-card.component.ts");












function PizzasComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pizza-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pizza_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pizza", pizza_r1);
} }
class PizzasComponent {
    constructor(store, fb) {
        this.store = store;
        this.fb = fb;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.form = this.fb.group({
            toppings: [[]]
        });
        this.pizzasResponse$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_store_root_client__WEBPACK_IMPORTED_MODULE_4__["PizzasStoreSelectors"].getPizzasResponseState), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe));
        this.pizzas$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.form.controls.toppings.valueChanges,
            this.pizzasResponse$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((results) => {
            const toppings = results[0];
            const pizzasResponse = results[1];
            if (toppings.length > 0) {
                return pizzasResponse.pizzas.filter(pizza => toppings.some(topping => pizza.toppings.includes(topping)));
            }
            else {
                return pizzasResponse.pizzas;
            }
        }));
        this.form.controls.toppings.enable();
    }
    ngOnInit() {
        this.store.dispatch(new _app_store_root_client__WEBPACK_IMPORTED_MODULE_4__["PizzasStoreActions"].GetPizzas());
    }
    ngAfterContentChecked() {
        this.form.controls.toppings.enable();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
    }
}
PizzasComponent.ɵfac = function PizzasComponent_Factory(t) { return new (t || PizzasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
PizzasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PizzasComponent, selectors: [["app-pizzas"]], decls: 9, vars: 4, consts: [[1, "container", 3, "formGroup"], [1, "filter"], ["formControlName", "toppings"], [1, "pizzas"], [4, "ngFor", "ngForOf"], [1, "pizza-card", 3, "pizza"]], template: function PizzasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pizzas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-pizza-toppings", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PizzasComponent_ng_container_7_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.pizzas$));
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_pizza_toppings_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_7__["PizzaToppingsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_pizza_card_pizza_card_component__WEBPACK_IMPORTED_MODULE_9__["PizzaCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  max-width: 1280px;\n  width: 100%;\n  margin: 20px auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.pizzas[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  color: #1A1A1A;\n}\n\n.filter[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 40px;\n}\n\n.filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #e5f1fd;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 900;\n  height: 36px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 36px;\n  padding: 0 20px;\n  cursor: pointer;\n  -webkit-transition: 200ms ease-out;\n  transition: 200ms ease-out;\n}\n\n.filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: rgba(240, 248, 255, 0.8);\n  color: black;\n}\n\n.pizza-card[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vcGl6emFpb2xzL3NyYy9hcHAvbW9kdWxlcy9waXp6YXMvcGl6emFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Bpenphcy9waXp6YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUFBLDBCQUFBO0FDQ0o7O0FEQ0k7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNDTjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGl6emFzL3Bpenphcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGl6emFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogIzFBMUExQTtcbn1cblxuLmZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjFmZDtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShhbGljZWJsdWUsIDAuOCk7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG59XG5cbi5waXp6YS1jYXJkIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5waXp6YXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGNvbG9yOiAjMUExQTFBO1xufVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5maWx0ZXIgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWYxZmQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1vdXQ7XG59XG4uZmlsdGVyIHNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBpenphLWNhcmQge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pizzas',
                templateUrl: './pizzas.component.html',
                styleUrls: ['./pizzas.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/pizzas/pizzas.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/pizzas/pizzas.module.ts ***!
  \*************************************************/
/*! exports provided: PizzasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasModule", function() { return PizzasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pizzas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizzas-routing.module */ "./src/app/modules/pizzas/pizzas-routing.module.ts");
/* harmony import */ var _pizzas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pizzas.component */ "./src/app/modules/pizzas/pizzas.component.ts");
/* harmony import */ var _app_modules_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared/navbar/navbar.module */ "./src/app/modules/shared/navbar/navbar.module.ts");
/* harmony import */ var _app_modules_shared_pizza_card_pizza_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared/pizza-card/pizza-card.module */ "./src/app/modules/shared/pizza-card/pizza-card.module.ts");
/* harmony import */ var _app_modules_shared_pizza_toppings_pizza_toppings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/shared/pizza-toppings/pizza-toppings.module */ "./src/app/modules/shared/pizza-toppings/pizza-toppings.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class PizzasModule {
}
PizzasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PizzasModule });
PizzasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PizzasModule_Factory(t) { return new (t || PizzasModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pizzas_routing_module__WEBPACK_IMPORTED_MODULE_2__["PizzasRoutingModule"],
            _app_modules_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
            _app_modules_shared_pizza_card_pizza_card_module__WEBPACK_IMPORTED_MODULE_5__["PizzaCardModule"],
            _app_modules_shared_pizza_toppings_pizza_toppings_module__WEBPACK_IMPORTED_MODULE_6__["PizzaToppingsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PizzasModule, { declarations: [_pizzas_component__WEBPACK_IMPORTED_MODULE_3__["PizzasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pizzas_routing_module__WEBPACK_IMPORTED_MODULE_2__["PizzasRoutingModule"],
        _app_modules_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
        _app_modules_shared_pizza_card_pizza_card_module__WEBPACK_IMPORTED_MODULE_5__["PizzaCardModule"],
        _app_modules_shared_pizza_toppings_pizza_toppings_module__WEBPACK_IMPORTED_MODULE_6__["PizzaToppingsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]], exports: [_pizzas_component__WEBPACK_IMPORTED_MODULE_3__["PizzasComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pizzas_component__WEBPACK_IMPORTED_MODULE_3__["PizzasComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pizzas_routing_module__WEBPACK_IMPORTED_MODULE_2__["PizzasRoutingModule"],
                    _app_modules_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
                    _app_modules_shared_pizza_card_pizza_card_module__WEBPACK_IMPORTED_MODULE_5__["PizzaCardModule"],
                    _app_modules_shared_pizza_toppings_pizza_toppings_module__WEBPACK_IMPORTED_MODULE_6__["PizzaToppingsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                exports: [_pizzas_component__WEBPACK_IMPORTED_MODULE_3__["PizzasComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/shared/pizza-toppings/pizza-toppings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/pizza-toppings/pizza-toppings.component.ts ***!
  \***************************************************************************/
/*! exports provided: PizzaToppingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaToppingsComponent", function() { return PizzaToppingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PizzaToppingsComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PizzaToppingsComponent_label_1_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const topping_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onBlur(topping_r1); })("change", function PizzaToppingsComponent_label_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const topping_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateTopping(topping_r1); })("focus", function PizzaToppingsComponent_label_1_Template_input_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const topping_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFocus(topping_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pizza-topping--active", ctx_r0.value.includes(topping_r1))("pizza-topping--focused", ctx_r0.focused === topping_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.value.includes(topping_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", topping_r1)("value", topping_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pizza-topping__icon pizza-topping__icon--", topping_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, topping_r1), " ");
} }
const PIZZA_TOPPINGS_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PizzaToppingsComponent),
    multi: true
};
class PizzaToppingsComponent {
    constructor() {
        this.toppings = [
            'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
            'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
        ];
        this.value = [];
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    updateTopping(topping) {
        if (this.value.includes(topping)) {
            this.value = this.value.filter((x) => topping !== x);
        }
        else {
            this.value = this.value.concat([topping]);
        }
        this.onModelChange(this.value);
    }
    onBlur(value) {
        this.focused = '';
    }
    onFocus(value) {
        this.focused = value;
        this.onTouch();
    }
}
PizzaToppingsComponent.ɵfac = function PizzaToppingsComponent_Factory(t) { return new (t || PizzaToppingsComponent)(); };
PizzaToppingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PizzaToppingsComponent, selectors: [["app-pizza-toppings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PIZZA_TOPPINGS_ACCESSOR])], decls: 2, vars: 1, consts: [[1, "pizza-toppings"], ["class", "pizza-topping", 3, "pizza-topping--active", "pizza-topping--focused", 4, "ngFor", "ngForOf"], [1, "pizza-topping"], ["type", "checkbox", 3, "checked", "blur", "change", "focus"]], template: function PizzaToppingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PizzaToppingsComponent_label_1_Template, 5, 13, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toppings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: [".pizza-toppings[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 40px;\n  max-width: 1280px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.pizza-toppings[_ngcontent-%COMP%]   .pizza-topping[_ngcontent-%COMP%] {\n  background-color: #e5f1fd;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 900;\n  height: 36px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 36px;\n  padding: 0 20px;\n  cursor: pointer;\n  -webkit-transition: 200ms ease-out;\n  transition: 200ms ease-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-bottom: 12px;\n}\n.pizza-toppings[_ngcontent-%COMP%]   .pizza-topping[_ngcontent-%COMP%]:hover {\n  background-color: rgba(240, 248, 255, 0.8);\n  color: black;\n}\n.pizza-toppings[_ngcontent-%COMP%]   .pizza-topping[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.pizza-toppings[_ngcontent-%COMP%]   .pizza-topping--active[_ngcontent-%COMP%] {\n  background-color: rgba(240, 248, 255, 0.8);\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vcGl6emFpb2xzL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcGl6emEtdG9wcGluZ3MvcGl6emEtdG9wcGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3BpenphLXRvcHBpbmdzL3BpenphLXRvcHBpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQUEsMEJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0NOO0FERUk7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FOO0FER0k7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3BpenphLXRvcHBpbmdzL3BpenphLXRvcHBpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpenphLXRvcHBpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnBpenphLXRvcHBpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWYxZmQ7XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgMC41KTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGhlaWdodDogMzZweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1vdXQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShhbGljZWJsdWUsIDAuOCk7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMXB4O1xuICAgIH1cblxuICAgICYtLWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGFsaWNlYmx1ZSwgMC44KTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cbn1cbiIsIi5waXp6YS10b3BwaW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBpenphLXRvcHBpbmdzIC5waXp6YS10b3BwaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjFmZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLW91dDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucGl6emEtdG9wcGluZ3MgLnBpenphLXRvcHBpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5waXp6YS10b3BwaW5ncyAucGl6emEtdG9wcGluZyBpbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuLnBpenphLXRvcHBpbmdzIC5waXp6YS10b3BwaW5nLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzaToppingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pizza-toppings',
                providers: [PIZZA_TOPPINGS_ACCESSOR],
                templateUrl: './pizza-toppings.component.html',
                styleUrls: ['./pizza-toppings.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/shared/pizza-toppings/pizza-toppings.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/pizza-toppings/pizza-toppings.module.ts ***!
  \************************************************************************/
/*! exports provided: PizzaToppingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaToppingsModule", function() { return PizzaToppingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pizza_toppings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizza-toppings.component */ "./src/app/modules/shared/pizza-toppings/pizza-toppings.component.ts");




class PizzaToppingsModule {
}
PizzaToppingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PizzaToppingsModule });
PizzaToppingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PizzaToppingsModule_Factory(t) { return new (t || PizzaToppingsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PizzaToppingsModule, { declarations: [_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_2__["PizzaToppingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_2__["PizzaToppingsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PizzaToppingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_2__["PizzaToppingsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_2__["PizzaToppingsComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-pizzas-pizzas-module-es2015.js.map