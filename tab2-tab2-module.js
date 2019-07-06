(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/offeritem/offeritem.component.html":
/*!*********************************************************!*\
  !*** ./src/app/tab2/offeritem/offeritem.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item            \n[routerLink]=\"[\n'/',\n'offerdetail',\noffer.id\n]\" >\n  <ion-thumbnail slot=\"start\">\n    <img src={{offer.image}}>\n  </ion-thumbnail>\n  <ion-label>\n    <h1>{{offer.title}}</h1>\n    <div class=\"offer-details\">\n      <ion-icon name=\"calendar\" color=\"secondary\"></ion-icon>\n      <ion-text color=\"primary\" class=\"space-left\">{{offer.availableFrom | date}}</ion-text>\n      <span class=\"space-left\">to</span>\n      <ion-icon name=\"calendar\" color=\"secondary\" class=\"space-left\"></ion-icon>\n      <ion-text color=\"primary\" class=\"space-left\">{{offer.availableTo | date}}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>\n"

/***/ }),

/***/ "./src/app/tab2/offeritem/offeritem.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tab2/offeritem/offeritem.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".offer-details {\n  display: flex;\n  align-items: center; }\n  .offer-details .space-left {\n    margin-left: 5px; }\n  h1 {\n  font-size: 18px;\n  border: 1px solid var(--ion-color-tertiary);\n  padding: 8px;\n  border-radius: 5px;\n  color: var(--ion-color-tertiary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9vZmZlcml0ZW0vQzpcXFVzZXJzXFxoYW5kalxcRG93bmxvYWRzXFxMQS1CcmV3ZXJzLW1hcHNcXExBLUJyZXdlcnMtbWFwcy9zcmNcXGFwcFxcdGFiMlxcb2ZmZXJpdGVtXFxvZmZlcml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFGdkI7SUFJUSxnQkFBZ0IsRUFBQTtFQUd4QjtFQUNJLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvb2ZmZXJpdGVtL29mZmVyaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlci1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnNwYWNlLWxlZnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/offeritem/offeritem.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tab2/offeritem/offeritem.component.ts ***!
  \*******************************************************/
/*! exports provided: OfferitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferitemComponent", function() { return OfferitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_tab1_place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tab1/place.model */ "./src/app/tab1/place.model.ts");



var OfferitemComponent = /** @class */ (function () {
    function OfferitemComponent() {
    }
    OfferitemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_tab1_place_model__WEBPACK_IMPORTED_MODULE_2__["Place"])
    ], OfferitemComponent.prototype, "offer", void 0);
    OfferitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offeritem',
            template: __webpack_require__(/*! ./offeritem.component.html */ "./src/app/tab2/offeritem/offeritem.component.html"),
            styles: [__webpack_require__(/*! ./offeritem.component.scss */ "./src/app/tab2/offeritem/offeritem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OfferitemComponent);
    return OfferitemComponent;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _offeritem_offeritem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offeritem/offeritem.component */ "./src/app/tab2/offeritem/offeritem.component.ts");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], _offeritem_offeritem_component__WEBPACK_IMPORTED_MODULE_7__["OfferitemComponent"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <!-- <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n      </ion-buttons> -->\n    <ion-title>\n     List of Breweries\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button href=\"location\" color=\"secondary\" style=\"display:block;margin:auto;\">Map of Breweries</ion-button>\n  <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\" text-center>\n        <ion-list>\n          <ion-item *ngFor= \"let brewery of loadedBreweries.slice(0)\">\n          <!-- [routerLink]=\"[\n          '/',\n          'placedetail',\n          brewery.id\n          ]\"lo\n          detail> -->\n            <!-- <ion-thumbnail slot=\"start\">\n              <img src = {{place.image}}>\n            </ion-thumbnail> -->\n            <ion-label>\n              <h2>{{brewery.name}}</h2>\n              <p>{{brewery.address}}</p>\n              <p>{{brewery.location}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  <!--\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\" text-center>\n        <ion-list>\n          <ion-item-sliding *ngFor = \"let offer of offers\">\n            <app-offeritem [offer] = \"offer\"></app-offeritem>\n              <ion-item-options>\n                <ion-item-option color=\"secondary\"\n                [routerLink]=\"[\n                '/',\n                'editoffer',\n                offer.id\n                ]\">\n                  <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>      \n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breweries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breweries.service */ "./src/app/tab2/breweries.service.ts");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(breweryService) {
        this.breweryService = breweryService;
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.loadedBreweries = this.breweryService.getBreweries();
        for (var each in this.loadedBreweries) {
            console.log(each);
        }
        console.log(this.loadedBreweries);
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_breweries_service__WEBPACK_IMPORTED_MODULE_2__["BreweryService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map