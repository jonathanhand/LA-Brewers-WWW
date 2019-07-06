(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-offerdetail-offerdetail-module"],{

/***/ "./src/app/tab2/offerdetail/offerdetail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tab2/offerdetail/offerdetail.module.ts ***!
  \********************************************************/
/*! exports provided: OfferdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferdetailPageModule", function() { return OfferdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offerdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offerdetail.page */ "./src/app/tab2/offerdetail/offerdetail.page.ts");







var routes = [
    {
        path: '',
        component: _offerdetail_page__WEBPACK_IMPORTED_MODULE_6__["OfferdetailPage"]
    },
    {
        path: ':placeId',
        component: _offerdetail_page__WEBPACK_IMPORTED_MODULE_6__["OfferdetailPage"]
    }
];
var OfferdetailPageModule = /** @class */ (function () {
    function OfferdetailPageModule() {
    }
    OfferdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_offerdetail_page__WEBPACK_IMPORTED_MODULE_6__["OfferdetailPage"]]
        })
    ], OfferdetailPageModule);
    return OfferdetailPageModule;
}());



/***/ }),

/***/ "./src/app/tab2/offerdetail/offerdetail.page.html":
/*!********************************************************!*\
  !*** ./src/app/tab2/offerdetail/offerdetail.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>{{place.title}} Offer Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p></p>\n  <ion-button\n  margin\n  [routerLink]=\"['/', 'editoffer', place.id]\"\n  >Edit</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/offerdetail/offerdetail.page.scss":
/*!********************************************************!*\
  !*** ./src/app/tab2/offerdetail/offerdetail.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvb2ZmZXJkZXRhaWwvb2ZmZXJkZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tab2/offerdetail/offerdetail.page.ts":
/*!******************************************************!*\
  !*** ./src/app/tab2/offerdetail/offerdetail.page.ts ***!
  \******************************************************/
/*! exports provided: OfferdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferdetailPage", function() { return OfferdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_tab1_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tab1/place.service */ "./src/app/tab1/place.service.ts");




var OfferdetailPage = /** @class */ (function () {
    function OfferdetailPage(route, placeService) {
        this.route = route;
        this.placeService = placeService;
    }
    OfferdetailPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('placeId');
        this.place = this.placeService.getPlace(this.id);
    };
    OfferdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offerdetail',
            template: __webpack_require__(/*! ./offerdetail.page.html */ "./src/app/tab2/offerdetail/offerdetail.page.html"),
            styles: [__webpack_require__(/*! ./offerdetail.page.scss */ "./src/app/tab2/offerdetail/offerdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_tab1_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"]])
    ], OfferdetailPage);
    return OfferdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-offerdetail-offerdetail-module.js.map