"use strict";
(self["webpackChunkangular_oauth2_oidc"] = self["webpackChunkangular_oauth2_oidc"] || []).push([["src_app_feature-extras_extras_module_ts"],{

/***/ 5681:
/*!****************************************************!*\
  !*** ./src/app/feature-extras/admin2.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Admin2Component": () => (/* binding */ Admin2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api.service */ 6259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



class Admin2Component {
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.apiResponse = this.apiService.getProtectedApiResponse();
  }
}
Admin2Component.ɵfac = function Admin2Component_Factory(t) {
  return new (t || Admin2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
Admin2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Admin2Component,
  selectors: [["app-admin"]],
  decls: 6,
  vars: 3,
  consts: [[1, "alert", "alert-danger"]],
  template: function Admin2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This is the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83D\uDD27 ADMIN 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" component. It will redirect you to login if needed. - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.apiResponse), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 25:
/*!*************************************************!*\
  !*** ./src/app/feature-extras/extras.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrasModule": () => (/* binding */ ExtrasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _core_auth_guard_with_forced_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth-guard-with-forced-login.service */ 6743);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _admin2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin2.component */ 5681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);







class ExtrasModule {}
ExtrasModule.ɵfac = function ExtrasModule_Factory(t) {
  return new (t || ExtrasModule)();
};
ExtrasModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ExtrasModule
});
ExtrasModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: 'admin2',
    component: _admin2_component__WEBPACK_IMPORTED_MODULE_2__.Admin2Component,
    canActivate: [_core_auth_guard_with_forced_login_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardWithForcedLogin]
  }])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExtrasModule, {
    declarations: [_admin2_component__WEBPACK_IMPORTED_MODULE_2__.Admin2Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_feature-extras_extras_module_ts.7af8f29ea7726c6c.js.map