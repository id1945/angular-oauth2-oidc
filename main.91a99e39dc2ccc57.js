"use strict";
(self["webpackChunkangular_oauth2_oidc"] = self["webpackChunkangular_oauth2_oidc"] || []).push([["main"],{

/***/ 1553:
/*!***************************************!*\
  !*** ./src/app/app-menu.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/auth.service */ 7341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);




function AppMenuComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\uD83D\uDD12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppMenuComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\uD83D\uDD12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppMenuComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppMenuComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppMenuComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.email);
  }
}
function AppMenuComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppMenuComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(log out)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppMenuComponent {
  constructor(authService) {
    this.authService = authService;
    this.isAuthenticated$ = authService.isAuthenticated$;
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
  get email() {
    return this.authService.identityClaims ? this.authService.identityClaims['email'] : '-';
  }
}
AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) {
  return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AppMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppMenuComponent,
  selectors: [["app-menu"]],
  decls: 24,
  vars: 15,
  consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "basics/home", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "basics/public", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "basics/admin1", 1, "nav-link"], [4, "ngIf"], ["routerLinkActive", "active", "routerLink", "extras/admin2", 1, "nav-link"], ["class", "btn btn-sm btn-default", 3, "click", 4, "ngIf"], ["id", "email", 4, "ngIf"], ["href", "#", "class", "btn btn-link", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-default", 3, "click"], ["id", "email"], ["href", "#", 1, "btn", "btn-link", 3, "click"]],
  template: function AppMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Public");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 2)(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppMenuComponent_span_10_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Admin-1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 2)(14, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppMenuComponent_span_15_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Admin-2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppMenuComponent_button_18_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppMenuComponent_span_20_Template, 2, 1, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AppMenuComponent_button_22_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, ctx.isAuthenticated$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, ctx.isAuthenticated$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 9, ctx.isAuthenticated$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 11, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 13, ctx.isAuthenticated$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/auth.service */ 7341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-menu.component */ 1553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);





class AppComponent {
  constructor(authService) {
    this.authService = authService;
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.isDoneLoading$ = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes$ = this.authService.canActivateProtectedRoutes$;
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
  refresh() {
    this.authService.refresh();
  }
  reload() {
    window.location.reload();
  }
  clearStorage() {
    localStorage.clear();
  }
  logoutExternally() {
    window.open(this.authService.logoutUrl);
  }
  get hasValidToken() {
    return this.authService.hasValidToken();
  }
  get accessToken() {
    return this.authService.accessToken;
  }
  get refreshToken() {
    return this.authService.refreshToken;
  }
  get identityClaims() {
    return this.authService.identityClaims;
  }
  get idToken() {
    return this.authService.idToken;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 84,
  vars: 16,
  consts: [[1, "container-fluid"], [1, "container-fluid", "mt-2"], ["routerLink", "/url-without-route"], [1, "btn", "btn-success", "mr-1", 3, "click"], [1, "btn", "btn-primary", "mr-1", 3, "click"], [1, "btn", "btn-link", "mr-1", 3, "click"], [1, "btn", "btn-warning", "mr-1", 3, "click"], [1, "btn", "btn-secondary", "mr-1", 3, "click"], [1, "btn", "btn-danger", "mr-1", 3, "click"], [1, "table", "table-bordered", "table-sm", "table-props"], ["id", "isAuthenticated"], ["id", "hasValidToken"], ["id", "isDoneLoading"], ["id", "canActivateProtectedRoutes"], [1, "pre"], ["id", "identityClaims"], [1, "break-all"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "This is part of the app.component. Below is the router outlet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr")(8, "router-outlet")(9, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "You can ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "go to a url without a route");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " to see the fallback route.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p")(17, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() {
        return ctx.logoutExternally();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "logout externally...");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p")(24, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "force silent refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() {
        return ctx.reload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "reload page");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() {
        return ctx.clearStorage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "clear storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "table", 9)(32, "tr")(33, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "IsAuthenticated");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td")(36, "code", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "tr")(40, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "HasValidToken");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "code", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr")(46, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "IsDoneLoading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td")(49, "code", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tr")(53, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "CanActivateProtectedRoutes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td")(56, "code", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "tr")(60, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "IdentityClaims");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "td", 14)(63, "code", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr")(67, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "RefreshToken");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td")(70, "code", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "tr")(73, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "AccessToken");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "td")(76, "code", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "tr")(79, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "IdToken");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "td")(82, "code", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 8, ctx.isAuthenticated$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hasValidToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 10, ctx.isDoneLoading$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 12, ctx.canActivateProtectedRoutes$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 14, ctx.identityClaims));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.refreshToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.accessToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.idToken);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _app_menu_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
  encapsulation: 2
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-menu.component */ 1553);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _fallback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fallback.component */ 5007);
/* harmony import */ var _should_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./should-login.component */ 5242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);










class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot([{
    path: '',
    redirectTo: 'basics/home',
    pathMatch: 'full'
  },
  // Note: this way of module loading requires this in your tsconfig.json: "module": "esnext"
  {
    path: 'basics',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_feature-basics_basics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature-basics/basics.module */ 9919)).then(m => m.BasicsModule)
  }, {
    path: 'extras',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_feature-extras_extras_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature-extras/extras.module */ 25)).then(m => m.ExtrasModule)
  }, {
    path: 'should-login',
    component: _should_login_component__WEBPACK_IMPORTED_MODULE_4__.ShouldLoginComponent
  }, {
    path: '**',
    component: _fallback_component__WEBPACK_IMPORTED_MODULE_3__.FallbackComponent
  }], {})]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_menu_component__WEBPACK_IMPORTED_MODULE_0__.AppMenuComponent, _fallback_component__WEBPACK_IMPORTED_MODULE_3__.FallbackComponent, _should_login_component__WEBPACK_IMPORTED_MODULE_4__.ShouldLoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 7520:
/*!******************************************************!*\
  !*** ./src/app/core/auth-app-initializer.factory.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authAppInitializerFactory": () => (/* binding */ authAppInitializerFactory)
/* harmony export */ });
function authAppInitializerFactory(authService) {
  return () => authService.runInitialLoginSequence();
}

/***/ }),

/***/ 5446:
/*!*************************************!*\
  !*** ./src/app/core/auth-config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authConfig": () => (/* binding */ authConfig)
/* harmony export */ });
const authConfig = {
  issuer: 'https://demo.duendesoftware.com',
  clientId: 'interactive.public',
  responseType: 'code',
  redirectUri: window.location.origin + '/angular-oauth2-oidc/',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email api',
  useSilentRefresh: true,
  silentRefreshTimeout: 5000,
  timeoutFactor: 0.25,
  sessionChecksEnabled: true,
  showDebugInformation: true,
  clearHashAfterLogin: false,
  nonceStateSeparator: 'semicolon' // Real semicolon gets mangled by Duende ID Server's URI encoding
};

/***/ }),

/***/ 6743:
/*!**************************************************************!*\
  !*** ./src/app/core/auth-guard-with-forced-login.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardWithForcedLogin": () => (/* binding */ AuthGuardWithForcedLogin)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7341);



class AuthGuardWithForcedLogin {
  constructor(authService) {
    this.authService = authService;
  }
  canActivate(route, state) {
    return this.authService.isDoneLoading$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(isDone => isDone), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(_ => this.authService.isAuthenticated$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAuthenticated => isAuthenticated || this.authService.login(state.url)));
  }
}
AuthGuardWithForcedLogin.ɵfac = function AuthGuardWithForcedLogin_Factory(t) {
  return new (t || AuthGuardWithForcedLogin)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AuthGuardWithForcedLogin.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthGuardWithForcedLogin,
  factory: AuthGuardWithForcedLogin.ɵfac
});


/***/ }),

/***/ 3048:
/*!********************************************!*\
  !*** ./src/app/core/auth-guard.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7341);



class AuthGuard {
  constructor(authService) {
    this.authService = authService;
  }
  canActivate(route, state) {
    return this.authService.canActivateProtectedRoutes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(x => console.log('You tried to go to ' + state.url + ' and this guard said ' + x)));
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac
});


/***/ }),

/***/ 6475:
/*!********************************************!*\
  !*** ./src/app/core/auth-module-config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authModuleConfig": () => (/* binding */ authModuleConfig)
/* harmony export */ });
const authModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://demo.duendesoftware.com/api'],
    sendAccessToken: true
  }
};

/***/ }),

/***/ 7341:
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);






class AuthService {
  navigateToLoginPage() {
    // TODO: Remember current URL
    this.router.navigateByUrl('/should-login');
  }
  constructor(oauthService, router) {
    this.oauthService = oauthService;
    this.router = router;
    this.isAuthenticatedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();
    this.isDoneLoadingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();
    /**
     * Publishes `true` if and only if (a) all the asynchronous initial
     * login calls have completed or errorred, and (b) the user ended up
     * being authenticated.
     *
     * In essence, it combines:
     *
     * - the latest known state of whether the user is authorized
     * - whether the ajax calls for initial log in have all been done
     */
    this.canActivateProtectedRoutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.isAuthenticated$, this.isDoneLoading$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(values => values.every(b => b)));
    // Useful for debugging:
    this.oauthService.events.subscribe(event => {
      if (event instanceof angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__.OAuthErrorEvent) {
        console.error('OAuthErrorEvent Object:', event);
      } else {
        console.warn('OAuthEvent Object:', event);
      }
    });
    // This is tricky, as it might cause race conditions (where access_token is set in another
    // tab before everything is said and done there.
    // TODO: Improve this setup. See: https://github.com/jeroenheijmans/sample-angular-oauth2-oidc-with-auth-guards/issues/2
    window.addEventListener('storage', event => {
      // The `key` is `null` if the event was caused by `.clear()`
      if (event.key !== 'access_token' && event.key !== null) {
        return;
      }
      console.warn('Noticed changes to access_token (most likely from another tab), updating isAuthenticated');
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
      if (!this.oauthService.hasValidAccessToken()) {
        this.navigateToLoginPage();
      }
    });
    this.oauthService.events.subscribe(_ => {
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
    });
    this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
    this.oauthService.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => ['token_received'].includes(e.type))).subscribe(e => this.oauthService.loadUserProfile());
    this.oauthService.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => ['session_terminated', 'session_error'].includes(e.type))).subscribe(e => this.navigateToLoginPage());
    this.oauthService.setupAutomaticSilentRefresh();
  }
  runInitialLoginSequence() {
    if (location.hash) {
      console.log('Encountered hash fragment, plotting as table...');
      console.table(location.hash.substr(1).split('&').map(kvp => kvp.split('=')));
    }
    // 0. LOAD CONFIG:
    // First we have to check to see how the IdServer is
    // currently configured:
    return this.oauthService.loadDiscoveryDocument()
    // For demo purposes, we pretend the previous call was very slow
    .then(() => new Promise(resolve => setTimeout(() => resolve(), 1500)))
    // 1. HASH LOGIN:
    // Try to log in via hash fragment after redirect back
    // from IdServer from initImplicitFlow:
    .then(() => this.oauthService.tryLogin()).then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        return Promise.resolve();
      }
      // 2. SILENT LOGIN:
      // Try to log in via a refresh because then we can prevent
      // needing to redirect the user:
      return this.oauthService.silentRefresh().then(() => Promise.resolve()).catch(result => {
        // Subset of situations from https://openid.net/specs/openid-connect-core-1_0.html#AuthError
        // Only the ones where it's reasonably sure that sending the
        // user to the IdServer will help.
        const errorResponsesRequiringUserInteraction = ['interaction_required', 'login_required', 'account_selection_required', 'consent_required'];
        if (result && result.reason && errorResponsesRequiringUserInteraction.indexOf(result.reason.error) >= 0) {
          // 3. ASK FOR LOGIN:
          // At this point we know for sure that we have to ask the
          // user to log in, so we redirect them to the IdServer to
          // enter credentials.
          //
          // Enable this to ALWAYS force a user to login.
          // this.login();
          //
          // Instead, we'll now do this:
          console.warn('User interaction is needed to log in, we will wait for the user to manually log in.');
          return Promise.resolve();
        }
        // We can't handle the truth, just pass on the problem to the
        // next handler.
        return Promise.reject(result);
      });
    }).then(() => {
      this.isDoneLoadingSubject$.next(true);
      // Check for the strings 'undefined' and 'null' just to be sure. Our current
      // login(...) should never have this, but in case someone ever calls
      // initImplicitFlow(undefined | null) this could happen.
      if (this.oauthService.state && this.oauthService.state !== 'undefined' && this.oauthService.state !== 'null') {
        let stateUrl = this.oauthService.state;
        if (stateUrl.startsWith('/') === false) {
          stateUrl = decodeURIComponent(stateUrl);
        }
        console.log(`There was state of ${this.oauthService.state}, so we are sending you to: ${stateUrl}`);
        this.router.navigateByUrl(stateUrl);
      }
    }).catch(() => this.isDoneLoadingSubject$.next(true));
  }
  login(targetUrl) {
    // Note: before version 9.1.0 of the library you needed to
    // call encodeURIComponent on the argument to the method.
    this.oauthService.initLoginFlow(targetUrl || this.router.url);
  }
  logout() {
    this.oauthService.logOut();
  }
  refresh() {
    this.oauthService.silentRefresh();
  }
  hasValidToken() {
    return this.oauthService.hasValidAccessToken();
  }
  // These normally won't be exposed from a service like this, but
  // for debugging it makes sense.
  get accessToken() {
    return this.oauthService.getAccessToken();
  }
  get refreshToken() {
    return this.oauthService.getRefreshToken();
  }
  get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }
  get idToken() {
    return this.oauthService.getIdToken();
  }
  get logoutUrl() {
    return this.oauthService.logoutUrl;
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "storageFactory": () => (/* binding */ storageFactory)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var _auth_app_initializer_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-app-initializer.factory */ 7520);
/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-config */ 5446);
/* harmony import */ var _auth_guard_with_forced_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard-with-forced-login.service */ 6743);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-guard.service */ 3048);
/* harmony import */ var _auth_module_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-module-config */ 6475);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ 7341);











// We need a factory since localStorage is not available at AOT build time
function storageFactory() {
  return localStorage;
}
class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.APP_INITIALIZER,
        useFactory: _auth_app_initializer_factory__WEBPACK_IMPORTED_MODULE_0__.authAppInitializerFactory,
        deps: [_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService],
        multi: true
      }, {
        provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__.AuthConfig,
        useValue: _auth_config__WEBPACK_IMPORTED_MODULE_1__.authConfig
      }, {
        provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__.OAuthModuleConfig,
        useValue: _auth_module_config__WEBPACK_IMPORTED_MODULE_4__.authModuleConfig
      }, {
        provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__.OAuthStorage,
        useFactory: storageFactory
      }]
    };
  }
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](CoreModule, 12));
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService, _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _auth_guard_with_forced_login_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardWithForcedLogin],
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__.OAuthModule.forRoot()]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__.OAuthModule]
  });
})();

/***/ }),

/***/ 5007:
/*!***************************************!*\
  !*** ./src/app/fallback.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FallbackComponent": () => (/* binding */ FallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class FallbackComponent {}
FallbackComponent.ɵfac = function FallbackComponent_Factory(t) {
  return new (t || FallbackComponent)();
};
FallbackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FallbackComponent,
  selectors: [["app-fallback"]],
  decls: 5,
  vars: 0,
  consts: [[1, "alert", "alert-warning"]],
  template: function FallbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDD73\uFE0F FALLBACK");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " component.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 5242:
/*!*******************************************!*\
  !*** ./src/app/should-login.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShouldLoginComponent": () => (/* binding */ ShouldLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);


class ShouldLoginComponent {
  constructor(authService) {
    this.authService = authService;
  }
  login($event) {
    $event.preventDefault();
    this.authService.initLoginFlow();
  }
}
ShouldLoginComponent.ɵfac = function ShouldLoginComponent_Factory(t) {
  return new (t || ShouldLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__.OAuthService));
};
ShouldLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ShouldLoginComponent,
  selectors: [["app-should-login"]],
  decls: 7,
  vars: 0,
  consts: [[1, "alert", "alert-dark"], ["href", "#", 3, "click"]],
  template: function ShouldLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You need to be logged in to view requested page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShouldLoginComponent_Template_a_click_4_listener($event) {
        return ctx.login($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "log in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " before continuing.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.91a99e39dc2ccc57.js.map