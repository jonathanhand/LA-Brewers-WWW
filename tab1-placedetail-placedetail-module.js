(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-placedetail-placedetail-module"],{

/***/ "./src/app/tab1/placedetail/placedetail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tab1/placedetail/placedetail.module.ts ***!
  \********************************************************/
/*! exports provided: PlacedetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacedetailPageModule", function() { return PlacedetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _placedetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placedetail.page */ "./src/app/tab1/placedetail/placedetail.page.ts");







var routes = [
    {
        path: '',
        component: _placedetail_page__WEBPACK_IMPORTED_MODULE_6__["PlacedetailPage"]
    },
    {
        path: ':placeId',
        component: _placedetail_page__WEBPACK_IMPORTED_MODULE_6__["PlacedetailPage"]
    }
];
var PlacedetailPageModule = /** @class */ (function () {
    function PlacedetailPageModule() {
    }
    PlacedetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_placedetail_page__WEBPACK_IMPORTED_MODULE_6__["PlacedetailPage"]]
        })
    ], PlacedetailPageModule);
    return PlacedetailPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/placedetail/placedetail.page.html":
/*!********************************************************!*\
  !*** ./src/app/tab1/placedetail/placedetail.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{place.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <img src={{place.image}}>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" text-center>\n        <p>{{place.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n    </ion-row>    \n  </ion-grid>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/placedetail/placedetail.page.scss":
/*!********************************************************!*\
  !*** ./src/app/tab1/placedetail/placedetail.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcGxhY2VkZXRhaWwvcGxhY2VkZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tab1/placedetail/placedetail.page.ts":
/*!******************************************************!*\
  !*** ./src/app/tab1/placedetail/placedetail.page.ts ***!
  \******************************************************/
/*! exports provided: PlacedetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacedetailPage", function() { return PlacedetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../place.service */ "./src/app/tab1/place.service.ts");




var PlacedetailPage = /** @class */ (function () {
    function PlacedetailPage(route, placeService) {
        this.route = route;
        this.placeService = placeService;
    }
    // private router: Router,
    // private modalCtrl: ModalController,
    // private ActionSheetCtrl: ActionSheetController,
    // private bookingService: BookingService) { }
    PlacedetailPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('placeId');
        this.place = this.placeService.getPlace(this.id);
    };
    PlacedetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-placedetail',
            template: __webpack_require__(/*! ./placedetail.page.html */ "./src/app/tab1/placedetail/placedetail.page.html"),
            styles: [__webpack_require__(/*! ./placedetail.page.scss */ "./src/app/tab1/placedetail/placedetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"]])
    ], PlacedetailPage);
    return PlacedetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-placedetail-placedetail-module.js.map