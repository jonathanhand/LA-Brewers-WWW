(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <ion-title>\n      LA Brewers Guild\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <img src=\"../assets/brew-imgs/labrewerlogo.png\" style=\"display:block;margin:auto;\">\n\n  <!--\n  <ion-segment (ionChange)=\"onFilterUpdate($event)\">\n    <ion-segment-button value=\"all\" checked>\n      All Places\n    </ion-segment-button>\n    <ion-segment-button value=\"bookable\">\n      Bookable\n    </ion-segment-button>    \n  </ion-segment>\n-->\n  <ion-grid>\n    <ion-row size-md=\"2\">\n      <ion-col size-md=\"8\" offset-md=\"2\" text-center>\n          <ion-row size-md=\"2\">\n              <ion-col size-md=\"8\" offset-md=\"2\" text-center>\n        <ion-button color=\"secondary\" href=\"/location\">Find a Brewery Near You</ion-button>\n        </ion-col>\n      </ion-row>\n        <ion-row size-md=\"2\">\n            <ion-col size-md=\"8\" offset-md=\"2\" text-center>\n        <ion-button color=\"secondary\" href=\"/tabs/tab2\">List of LA Breweries</ion-button>\n        </ion-col>\n      </ion-row>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              {{loadedPlaces[0].title}}\n            </ion-card-title>\n            <ion-card-subtitle>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <img src={{loadedPlaces[0].image}}>\n          <ion-card-content>\n            <p>{{loadedPlaces[0].description}}</p>\n          </ion-card-content>\n          <ion-button\n          fill =\"clear\"\n          [routerLink]=\"[\n          '/',\n          'placedetail',\n          loadedPlaces[0].id\n          ]\" >\n            More\n          </ion-button>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\" text-center>\n        <ion-list>\n          <ion-item *ngFor= \"let place of loadedPlaces.slice(1)\"\n          [routerLink]=\"[\n          '/',\n          'placedetail',\n          place.id\n          ]\"\n          detail>\n            <ion-thumbnail slot=\"start\">\n              <img src = {{place.image}}>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{place.title}}</h2>\n              <p>{{place.description}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n  width: 70%;\n  height: 70%; }\n\nion-card {\n  background-color: white; }\n\n.button-inner {\n  flex-flow: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXGhhbmRqXFxEb3dubG9hZHNcXExBLUJyZXdlcnMtbWFwc1xcTEEtQnJld2Vycy1tYXBzL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFYjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xufVxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b24taW5uZXIge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place.service */ "./src/app/tab1/place.service.ts");



var Tab1Page = /** @class */ (function () {
    function Tab1Page(placeService) {
        this.placeService = placeService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.loadedPlaces = this.placeService.places;
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.loadedPlaces = this.placeService.places;
    };
    Tab1Page.prototype.onFilterUpdate = function (event) {
        console.log(event.detail);
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map