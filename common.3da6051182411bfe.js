"use strict";
(self["webpackChunkangular_oauth2_oidc"] = self["webpackChunkangular_oauth2_oidc"] || []).push([["common"],{

/***/ 6259:
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);




class ApiService {
  constructor(http) {
    this.http = http;
  }
  getProtectedApiResponse() {
    return this.http.get('https://demo.duendesoftware.com/api/test').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.find(i => i.type === 'iss').value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(iss => '☁ API Success from ' + iss), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(`🌩 API Error: ${e.status} ${e.statusText}`)));
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac
});


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 6259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService]
});


/***/ })

}]);
//# sourceMappingURL=common.3da6051182411bfe.js.map