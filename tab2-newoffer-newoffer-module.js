(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-newoffer-newoffer-module"],{

/***/ "./src/app/tab2/newoffer/newoffer.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tab2/newoffer/newoffer.module.ts ***!
  \**************************************************/
/*! exports provided: NewofferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewofferPageModule", function() { return NewofferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newoffer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newoffer.page */ "./src/app/tab2/newoffer/newoffer.page.ts");







var routes = [
    {
        path: '',
        component: _newoffer_page__WEBPACK_IMPORTED_MODULE_6__["NewofferPage"]
    }
];
var NewofferPageModule = /** @class */ (function () {
    function NewofferPageModule() {
    }
    NewofferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newoffer_page__WEBPACK_IMPORTED_MODULE_6__["NewofferPage"]]
        })
    ], NewofferPageModule);
    return NewofferPageModule;
}());



/***/ }),

/***/ "./src/app/tab2/newoffer/newoffer.page.html":
/*!**************************************************!*\
  !*** ./src/app/tab2/newoffer/newoffer.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>New Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCreateOffer()\" [disabled]=\"!form.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" \n            autocomplete \n            autocorrect \n            formControlName=\"title\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf = \"!form.get('description').valid && form.get('description').touched\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label poisition=\"floating\">Price</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label poisition=\"floating\">Available from</ion-label>\n            <ion-datetime  \n            min=\"2019-01-01\" \n            max=\"2025-12-31\" \n            formControlName=\"availableFrom\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label poisition=\"floating\">Available to</ion-label>\n            <ion-datetime  \n            min=\"2019-01-01\" \n            max=\"2025-12-31\"\n            formControlName=\"availableTo\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/newoffer/newoffer.page.scss":
/*!**************************************************!*\
  !*** ./src/app/tab2/newoffer/newoffer.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvbmV3b2ZmZXIvbmV3b2ZmZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tab2/newoffer/newoffer.page.ts":
/*!************************************************!*\
  !*** ./src/app/tab2/newoffer/newoffer.page.ts ***!
  \************************************************/
/*! exports provided: NewofferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewofferPage", function() { return NewofferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_tab1_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tab1/place.service */ "./src/app/tab1/place.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NewofferPage = /** @class */ (function () {
    function NewofferPage(placeService, router) {
        this.placeService = placeService;
        this.router = router;
    }
    NewofferPage.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(180)]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]
            }),
            availableFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            availableTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
        });
    };
    NewofferPage.prototype.onCreateOffer = function () {
        console.log(this.form.value);
        this.placeService.addPlace(this.form.value.title, this.form.value.description, this.form.value.price, new Date(this.form.value.availableFrom), new Date(this.form.value.availableTo));
        this.form.reset();
        this.router.navigate(['/tabs/tab1']);
    };
    NewofferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newoffer',
            template: __webpack_require__(/*! ./newoffer.page.html */ "./src/app/tab2/newoffer/newoffer.page.html"),
            styles: [__webpack_require__(/*! ./newoffer.page.scss */ "./src/app/tab2/newoffer/newoffer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_tab1_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewofferPage);
    return NewofferPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-newoffer-newoffer-module.js.map