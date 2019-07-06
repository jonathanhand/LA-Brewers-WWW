(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");







var routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]
    }
];
var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/location/location.page.html":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n   <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Breweries Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div #mapElement class=\"map\" id=\"googMap\"></div>\n</ion-content>\n<script>\n</script>"

/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 100%; }\n\nion-back-button {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vQzpcXFVzZXJzXFxoYW5kalxcRG93bmxvYWRzXFxMQS1CcmV3ZXJzLW1hcHNcXExBLUJyZXdlcnMtbWFwcy9zcmNcXGFwcFxcbG9jYXRpb25cXGxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab2_breweries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab2/breweries.service */ "./src/app/tab2/breweries.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");





var LocationPage = /** @class */ (function () {
    function LocationPage(breweryService, geolocation, nativeGeocoder) {
        this.breweryService = breweryService;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    LocationPage.prototype.ngOnInit = function () {
        this.loadedBreweries = this.breweryService.getBreweries();
        // tslint:disable-next-line: forin
    };
    LocationPage.prototype.ngAfterContentInit = function () {
        var _this = this;
        var locationMarker;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latCode = resp.coords.latitude;
            _this.lngCode = resp.coords.longitude;
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById('googMap'), mapOptions);
            _this.map.addListener('tilesloaded', function () {
                locationMarker = new google.maps.Marker({
                    map: _this.map,
                    position: latLng,
                    title: 'Current Location',
                    label: 'C'
                });
                _this.geocoder = new google.maps.Geocoder();
                var address = '36232 42nd st e palmdale, ca';
                // tslint:disable-next-line: forin
                for (var each in _this.loadedBreweries) {
                    _this.createMarker(each);
                }
            });
            _this.map.addListener('center_changed', function () {
                // 3 seconds after the center of the map has changed, pan back to the
                // marker.
                window.setTimeout(function () {
                    console.log('center changed...3 secs!');
                }, 3000);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // creates marker and infowindow so no namespace pollution
    LocationPage.prototype.createMarker = function (each) {
        var marker = new google.maps.Marker({
            map: this.map,
            position: { lat: Number(this.loadedBreweries[each].lat), lng: Number(this.loadedBreweries[each].lng) },
            title: this.loadedBreweries[each].name
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<span>' + this.loadedBreweries[each].name + '</span></br>'
                + '<span>' + this.loadedBreweries[each].address + '</span></br>'
                + '<span>' + this.loadedBreweries[each].location + '</span>'
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(this.map, this);
            this.map.setZoom(14);
            this.map.panTo(marker.getPosition());
        });
    };
    // for getting geocode. stopped using because of google request limit
    LocationPage.prototype.getCoord = function (address, geocoder, map) {
        geocoder.geocode({ address: address }, function (results, status) {
            if (status == 'OK') {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
                console.log(results[0].geometry.location);
            }
            else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.page.html */ "./src/app/location/location.page.html"),
            styles: [__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab2_breweries_service__WEBPACK_IMPORTED_MODULE_2__["BreweryService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]])
    ], LocationPage);
    return LocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-location-module.js.map