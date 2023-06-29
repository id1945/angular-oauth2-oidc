"use strict";
(self["webpackChunkangular_oauth2_oidc"] = self["webpackChunkangular_oauth2_oidc"] || []).push([["src_app_feature-basics_basics_module_ts"],{

/***/ 8283:
/*!****************************************************!*\
  !*** ./src/app/feature-basics/admin1.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Admin1Component": () => (/* binding */ Admin1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api.service */ 6259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



class Admin1Component {
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.apiResponse = this.apiService.getProtectedApiResponse();
  }
}
Admin1Component.ɵfac = function Admin1Component_Factory(t) {
  return new (t || Admin1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
Admin1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Admin1Component,
  selectors: [["app-admin"]],
  decls: 6,
  vars: 3,
  consts: [[1, "alert", "alert-danger"]],
  template: function Admin1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This is the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2699 ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" component. It will not redirect you to the login server. - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.apiResponse), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 9919:
/*!*************************************************!*\
  !*** ./src/app/feature-basics/basics.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicsModule": () => (/* binding */ BasicsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _core_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth-guard.service */ 3048);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/api.service */ 6259);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _admin1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin1.component */ 8283);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ 6522);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public.component */ 5857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);










class BasicsModule {}
BasicsModule.ɵfac = function BasicsModule_Factory(t) {
  return new (t || BasicsModule)();
};
BasicsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: BasicsModule
});
BasicsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: _home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
  }, {
    path: 'admin1',
    component: _admin1_component__WEBPACK_IMPORTED_MODULE_3__.Admin1Component,
    canActivate: [_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'public',
    component: _public_component__WEBPACK_IMPORTED_MODULE_5__.PublicComponent
  }])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BasicsModule, {
    declarations: [_admin1_component__WEBPACK_IMPORTED_MODULE_3__.Admin1Component, _home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _public_component__WEBPACK_IMPORTED_MODULE_5__.PublicComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6522:
/*!**************************************************!*\
  !*** ./src/app/feature-basics/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api.service */ 6259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



class HomeComponent {
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.apiResponse = this.apiService.getProtectedApiResponse();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 6,
  vars: 3,
  consts: [[1, "alert", "alert-primary"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This is the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83C\uDFE0 HOME");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" component. - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.apiResponse), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 5857:
/*!****************************************************!*\
  !*** ./src/app/feature-basics/public.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicComponent": () => (/* binding */ PublicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class PublicComponent {}
PublicComponent.ɵfac = function PublicComponent_Factory(t) {
  return new (t || PublicComponent)();
};
PublicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PublicComponent,
  selectors: [["app-public"]],
  decls: 5,
  vars: 0,
  consts: [[1, "alert", "alert-success"]],
  template: function PublicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83C\uDF10 PUBLIC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " component.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});


/***/ })

}]);
//# sourceMappingURL=src_app_feature-basics_basics_module_ts.fb1866cd892a24ee.js.map