(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-editoffer-editoffer-module"],{

/***/ "./src/app/tab2/editoffer/editoffer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tab2/editoffer/editoffer.module.ts ***!
  \****************************************************/
/*! exports provided: EditofferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditofferPageModule", function() { return EditofferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editoffer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editoffer.page */ "./src/app/tab2/editoffer/editoffer.page.ts");







var routes = [
    {
        path: '',
        component: _editoffer_page__WEBPACK_IMPORTED_MODULE_6__["EditofferPage"]
    },
    {
        path: ':placeId',
        component: _editoffer_page__WEBPACK_IMPORTED_MODULE_6__["EditofferPage"]
    }
];
var EditofferPageModule = /** @class */ (function () {
    function EditofferPageModule() {
    }
    EditofferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editoffer_page__WEBPACK_IMPORTED_MODULE_6__["EditofferPage"]]
        })
    ], EditofferPageModule);
    return EditofferPageModule;
}());



/***/ }),

/***/ "./src/app/tab2/editoffer/editoffer.page.html":
/*!****************************************************!*\
  !*** ./src/app/tab2/editoffer/editoffer.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"'/offerdetail/'+place.id\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>editoffer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click) = \"onEditOffer()\" [disabled]=\"!form.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              Title\n            </ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect\n            formControlName=\"title\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              Description\n            </ion-label>\n            <ion-textarea rows=3 \n            formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!form.get('description').valid \n      && form.get('description').touched\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/editoffer/editoffer.page.scss":
/*!****************************************************!*\
  !*** ./src/app/tab2/editoffer/editoffer.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvZWRpdG9mZmVyL2VkaXRvZmZlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/editoffer/editoffer.page.ts":
/*!**************************************************!*\
  !*** ./src/app/tab2/editoffer/editoffer.page.ts ***!
  \**************************************************/
/*! exports provided: EditofferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditofferPage", function() { return EditofferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_tab1_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tab1/place.service */ "./src/app/tab1/place.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditofferPage = /** @class */ (function () {
    function EditofferPage(route, placeService, router) {
        this.route = route;
        this.placeService = placeService;
        this.router = router;
    }
    EditofferPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('placeId');
        this.place = this.placeService.getPlace(this.id);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.place.title, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.place.description, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(180)]
            }),
        });
    };
    EditofferPage.prototype.onEditOffer = function () {
        console.log(this.form);
        this.placeService.updateOffer(this.id, this.form.value.title, this.form.value.description);
        this.form.reset();
        this.router.navigate(['/tabs/tab1']);
    };
    EditofferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editoffer',
            template: __webpack_require__(/*! ./editoffer.page.html */ "./src/app/tab2/editoffer/editoffer.page.html"),
            styles: [__webpack_require__(/*! ./editoffer.page.scss */ "./src/app/tab2/editoffer/editoffer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_tab1_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditofferPage);
    return EditofferPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-editoffer-editoffer-module.js.map