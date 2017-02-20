webpackJsonp([0,3],{

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return slideInDownAnimation; });

// Component transition animations
var slideInDownAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.8s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0
        }))
    ])
]);
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/animations.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_animations__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AspirationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AspirationsComponent = (function () {
    function AspirationsComponent() {
        this.toddler = 'assets/img/tutti.jpg';
        this.adolescent = 'assets/img/mcjoonas.jpg';
        this.younggun = 'assets/img/wedded.jpg';
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'relative';
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'), 
        __metadata('design:type', Object)
    ], AspirationsComponent.prototype, "routeAnimation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'), 
        __metadata('design:type', Object)
    ], AspirationsComponent.prototype, "display", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'), 
        __metadata('design:type', Object)
    ], AspirationsComponent.prototype, "position", void 0);
    AspirationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aspirations',
            animations: [__WEBPACK_IMPORTED_MODULE_1_app_animations__["a" /* slideInDownAnimation */]],
            template: __webpack_require__(773),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [])
    ], AspirationsComponent);
    return AspirationsComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/aspirations.component.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_animations__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CurrentSkillsetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentSkillsetComponent = (function () {
    function CurrentSkillsetComponent() {
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'relative';
        this.title = 'This page lists the technologies I have experience with.';
        this.skills = [
            { url: 'assets/img/trinity.png', explanation: 'HTML, CSS and Javascript, or atleast the basics in each, are familiar to me.', alt: 'Trinity' },
            { url: 'assets/img/jquery.png', explanation: 'I have used jQuery in a few school projects. Again, basic knowledge of how it works, nothing too deep, though.', alt: 'JQuery' },
            { url: 'assets/img/java.png', explanation: 'Java is the language we`ve been using at school. Learning Python and C++ would be cool, too. Haven`t gotten that far yet, though. ', alt: 'Java' },
            { url: 'assets/img/spring.png', explanation: 'We used the Spring framework to speed up Java development in one of our school projects. You can take a look at it on GitHub:', alt: 'Spring' },
            { url: 'assets/img/mysql.png', explanation: 'MySql is what we`ve been using with our databases. Basic skills in this department.', alt: 'MySql' },
            { url: 'assets/img/npm.png', explanation: 'I first used npm when I created this site. Don`t know much about it, except that it`s used to handle Javascipt packages and dependencies.', alt: 'npm' },
            { url: 'assets/img/git.png', explanation: 'I`ve used git for version control. In school projects and personal stuff.', alt: 'git' },
            { url: 'assets/img/eclipse.png', explanation: 'The only IDE that I`ve used so far. ', alt: 'eclipse' }
        ];
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'), 
        __metadata('design:type', Object)
    ], CurrentSkillsetComponent.prototype, "routeAnimation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'), 
        __metadata('design:type', Object)
    ], CurrentSkillsetComponent.prototype, "display", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'), 
        __metadata('design:type', Object)
    ], CurrentSkillsetComponent.prototype, "position", void 0);
    CurrentSkillsetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-current-skillset',
            animations: [__WEBPACK_IMPORTED_MODULE_1_app_animations__["a" /* slideInDownAnimation */]],
            template: __webpack_require__(776),
            styles: [__webpack_require__(768)],
        }), 
        __metadata('design:paramtypes', [])
    ], CurrentSkillsetComponent);
    return CurrentSkillsetComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/current-skillset.component.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_animations__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonalInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalInfoComponent = (function () {
    function PersonalInfoComponent() {
        this.winter = 'assets/video/winter.mp4';
        this.field = 'assets/img/field.jpg';
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'relative';
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'), 
        __metadata('design:type', Object)
    ], PersonalInfoComponent.prototype, "routeAnimation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'), 
        __metadata('design:type', Object)
    ], PersonalInfoComponent.prototype, "display", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'), 
        __metadata('design:type', Object)
    ], PersonalInfoComponent.prototype, "position", void 0);
    PersonalInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(778),
            styles: [__webpack_require__(770)],
            animations: [__WEBPACK_IMPORTED_MODULE_1_app_animations__["a" /* slideInDownAnimation */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/personal-info.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(779),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/welcome.component.js.map

/***/ },

/***/ 471:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 471;


/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(595);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/main.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_info_personal_info_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aspirations_aspirations_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__current_skillset_current_skillset_component__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'personal-info', component: __WEBPACK_IMPORTED_MODULE_3__personal_info_personal_info_component__["a" /* PersonalInfoComponent */] },
    { path: 'aspirations', component: __WEBPACK_IMPORTED_MODULE_4__aspirations_aspirations_component__["a" /* AspirationsComponent */] },
    { path: 'current-skillset', component: __WEBPACK_IMPORTED_MODULE_5__current_skillset_current_skillset_component__["a" /* CurrentSkillsetComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/app-routing.module.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.leaf = 'assets/img/leaf.png';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(772),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/app.component.js.map

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_dropdown__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_tooltip__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__personal_info_personal_info_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aspirations_aspirations_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__current_skillset_current_skillset_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_component_my_component_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dropdown_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_message_form_component__ = __webpack_require__(596);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__personal_info_personal_info_component__["a" /* PersonalInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__aspirations_aspirations_component__["a" /* AspirationsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__current_skillset_current_skillset_component__["a" /* CurrentSkillsetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__my_component_my_component_component__["a" /* MyComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__contact_message_form_component__["a" /* ContactMessageFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_dropdown__["DropdownModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["ModalModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_tooltip__["TooltipModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/app.module.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactmessage__ = __webpack_require__(598);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactMessageFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactMessageFormComponent = (function () {
    function ContactMessageFormComponent(http) {
        this.http = http;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__contactmessage__["a" /* ContactMessage */]('', '', '');
        this.submitted = false;
    }
    ContactMessageFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-form',
            template: __webpack_require__(774)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ContactMessageFormComponent);
    return ContactMessageFormComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/contact-message-form.component.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(775),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/contact.component.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactMessage; });
var ContactMessage = (function () {
    function ContactMessage(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    return ContactMessage;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/contactmessage.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownComponent = (function () {
    function DropdownComponent() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!',
            'And another choice for you.', 'but wait! A third!'];
    }
    DropdownComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    DropdownComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    DropdownComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dropdown',
            template: __webpack_require__(777)
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/dropdown.component.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyComponentComponent = (function () {
    function MyComponentComponent() {
        this.isVisible = true;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], MyComponentComponent.prototype, "isVisible", void 0);
    MyComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-fader',
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibilityChanged', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.5s'))
                ])
            ],
            template: "\n               <div [@visibilityChanged]=\"isVisible\" >\n               <li><a routerLink=\"/personal-info\"\n        routerLinkActive=\"active\">Personal info</a></li>\n        </div>\n               ",
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponentComponent);
    return MyComponentComponent;
}());
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/my-component.component.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/environment.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Joonas/myWebsite/src/polyfills.js.map

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = "\r\napp-root{\r\n\theight:100% !important;\r\n}\r\n\r\nul{\r\n\tdisplay:inline-block;\r\n}\r\n\r\n\r\n@media screen and (max-width: 480px) {\r\n    \r\n    a{\r\n    font-size:0.7em;\r\n    padding:3px !important;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (min-width: 910px){\r\n\tli a {\r\n  -webkit-transition:1s;\r\n  transition: 1s;\r\n}\r\n\r\nul a:hover { background: #fff !important; }\r\n\r\nli a:after{\r\n\t content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top:10px;\r\n  right:10px;\r\n  -webkit-transition:0.5s;\r\n  transition: 0.5s;\r\n}\r\n\r\nli:hover a {\r\n  padding-right: 25px;\r\n}\r\n\r\nli:hover a:after {\r\n  opacity: 1;\r\n  right: 5px;\r\n}\r\n\t\r\n}\r\n\r\nimg{\r\n\theight:50px;\r\n}\r\n\r\na.activated{\r\n\tbackground:#ffa6a6 !important;\r\n}\r\n\r\n"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "@media screen and (min-width:911px) {\r\n\t.aspirewidth {\r\n\t\twidth: 60% !important;\r\n\t}\r\n}\r\n.carousel-caption {\r\n\tbackground: rgba(30, 25, 25, 0.47);\r\n\tpadding: 0.5em;\r\n\tpadding-bottom: 1.5em;\r\n}\r\n\r\n\r\n@media screen and (max-width: 480px) {\r\n\th3 {\r\n\t\tfont-size: 1em;\r\n\t}\r\n\tp {\r\n\t\tfont-size: 0.8em;\r\n\t}\r\n\r\n}\r\n\r\nimg{\r\n\t-webkit-animation: fadeIn;\r\n\t        animation: fadeIn;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    width:100%;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from {opacity:0}\r\n    to {opacity:1}\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {opacity:0}\r\n    to {opacity:1}\r\n}\r\n\r\nngb-carousel{\r\n\tbackground:black;\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = "input:focus, textarea:focus {\r\n    border-color: #000;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    width:100%;\r\n}\r\n\r\nform {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    padding: 1em;\r\n}\r\n\r\nform div + div {\r\n    margin-top: 1em;\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = " img{\r\n\twidth:150px;\r\n\tpadding-right:30px;\r\n}\r\n\r\n.skills  img {\r\n\t-webkit-animation-name: slideIn;\r\n\t        animation-name: slideIn;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n}\r\n\r\n@-webkit-keyframes slideIn {\r\n    from {-webkit-transform:translate(-70px);transform:translate(-70px);}\r\n    to {-webkit-transform:translate(0px);transform:translate(0px);}\r\n}\r\n\r\n@keyframes slideIn {\r\n    from {-webkit-transform:translate(-70px);transform:translate(-70px);}\r\n    to {-webkit-transform:translate(0px);transform:translate(0px);}\r\n}\r\n\r\n\r\n\t#text{\r\n\tposition:relative;\r\n\ttop:2vw;\r\n}\r\n\r\n\r\n\r\n"

/***/ },

/***/ 769:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = "img{\r\n\tborder-radius:5px;\r\n}\r\n\r\nvideo {\r\n\twidth:60%;\r\n\tmargin:auto;\r\n}\r\n\r\n@media screen and (max-width:480px){\r\n\tvideo{\r\n\twidth:100%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width:910px) {\r\n\tvideo {\r\n\t\twidth: 80%;\r\n\t}\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = "#welcometext {\r\n\tmargin-top:3em;\r\n}\r\n\r\n"

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = "\r\n\r\n<div class=\"page-header text-center\">\r\n\t<h1>\r\n\t\t<a routerLink=\"/\"><img src={{leaf}}>My Portfolio<img src={{leaf}} style=\"transform: scaleX(-1);\"></a>\r\n\t</h1>\r\n</div>\r\n\r\n\r\n<nav class=\"text-center hidden-xs btmmargin\">\r\n<ul class=\"nav nav-pills\">\r\n\t<li><a routerLink=\"/personal-info\"\r\n\t\trouterLinkActive=\"activated\">About me</a></li>\r\n\t\t<li><a routerLink=\"/aspirations\"\r\n\t\trouterLinkActive=\"activated\">Roadmap</a></li>\r\n\t\t<li><a routerLink=\"/current-skillset\"\r\n\t\trouterLinkActive=\"activated\">Competencies</a></li>\r\n</ul>\r\n</nav>\r\n\r\n\r\n\r\n<dropdown></dropdown>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = "  <article class=\"btmmarg\">\r\n  <ngb-carousel class=\"globalwidth aspirewidth\">\r\n    <template ngbSlide>\r\n      <img src=\"{{toddler}}\" alt=\"Pacifier\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>Learning to walk</h3>\r\n        <p>This is where I'm at right now. Taking my first tentative steps in the industry.</p>\r\n      </div>\r\n    </template>\r\n    <template ngbSlide>\r\n      <img src=\"{{adolescent}}\" alt=\"Young gun\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>Standing on my own two feet</h3>\r\n        <p>Hopefully, some day soon, I'll be able to call myself a Junior Developer. With a straight face.</p>\r\n      </div>\r\n    </template>\r\n      <template ngbSlide>\r\n      <img src=\"{{younggun}}\" alt=\"Love and marriage\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>Growing wings</h3>\r\n        <p>Gain a profound understanding of software and web development. Keep improving and learning new things. Stick \r\n        with it, for better or for worse.</p>\r\n      </div>\r\n    </template>\r\n  </ngb-carousel>\r\n  <section class=\"text-center mt-2 col-sm-12 col-md-8 offset-md-2\">\r\n  <h4>The road is long...</h4>\r\n  <p>To become an excellent software developer takes ages. Hell, even becoming a mediocre one takes a long, long time. \r\n  Yet, my aim is to keep learning new things and gradually improve upon my professional skills as a developer. I'm interested in both\r\n  back-end and front-end development. Though as it now stands, front-end development seems more appealing to me. Angular 2, on which this\r\n  website is built, seems fascinating and I'd like to keep studying it.</p>\r\n  <p>As I'm in the home stretch of my studies, it's time to start thinking about my future employment. Hopefully it'll be at a company\r\n  that provides a young developer such as myself with a nurturing, facilitating environment with room to breathe yet with\r\n  challenging tasks. Somewhere where the working environment is multicultural; English and Swedish have always been two\r\n  of my favourite subjects at school, so putting those skills to practice would be great. </p>\r\n  </section>\r\n  </article>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = "\r\n\r\n<div class=\"text-center\">\r\n\t<button type=\"button\" class=\"btn btn-default\" (click)=\"smModal.show()\">Contact\r\n\t\t</button>\r\n\r\n\r\n\t<div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n\t\trole=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog modal-sm\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\r\n\t\t\t\t\t\t(click)=\"smModal.hide()\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\">\r\n\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<h3 class=\"text-success\">Contact me</h3>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<form ngNoForm action=\"https://formspree.io/solarshadow.jh@gmail.com\" method=\"POST\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" tooltip=\"Who are you?\">Name</label> <input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"name\" required\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.name\" name=\"name\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"email\" tooltip=\"What's your email?(not required)\">Email</label> <input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"Email\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.email\" name=\"_replyto\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"message\" tooltip=\"What's up?\">Message</label>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\" id=\"message\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.message\" name=\"message\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button type=\"submit\" value=\"send\" class=\"btn btn-default\">Submit</button>\r\n\t\t\t\t\t\t\t<input type=\"text\" name=\"_gotcha\" style=\"display:none\" />\r\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"_next\" value=\"https://submergedsnake.github.io/my-website/welcome\" />\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<span><small>Powered by <a href=\"https://formspree.io/\" target=\"_blank\">Formspree.io</a></small></span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n</div>"

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n\t<button type=\"button\" class=\"btn btn-default\" (click)=\"smModal.show()\">Contact\r\n\t\tme</button>\r\n\r\n\r\n<div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n\trole=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-sm\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\r\n\t\t\t\t\t(click)=\"smModal.hide()\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Contact</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n</div>"

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = "\r\n<header>\r\n\t<h4 class=\"text-center\">{{title}}</h4>\r\n</header>\r\n<div class=\"container\">\r\n\r\n\t<article class=\"globalwidth btmmarg\">\r\n\r\n\r\n\t\t<div *ngFor=\"let skill of skills; let i=index\" class=\"row skills pb-2\">\r\n\t\t\t<div class=\"col-sm-12 col-md-2 text-center\">\r\n\t\t\t\t<img src=\"{{skill.url}}\" alt=\"{{skill.alt}}\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-12 col-md-9 offset-md-1 text-center\"\r\n\t\t\t\tstyle=\"height: 120px;\" id=\"text\">\r\n\t\t\t\t{{skill.explanation}} <span *ngIf=\"i === 3\"><a \r\n\t\t\t\t\thref=\"https://github.com/ledeveo/hoptimus\" target=\"_blank\">https://github.com/ledeveo/hoptimus</a></span>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<section>\r\n\t\t\t<h5>Honorable mentions</h5>\r\n\t\t\t<p>I have some experience with a couple of CSS libraries,\r\n\t\t\t\tincluding Bootstrap, Foundation 6 and Materialize.css. And in the\r\n\t\t\t\tabove mentioned Spring project we used Maven to manage dependencies,\r\n\t\t\t\tso there's that, too. I recognize JSON syntax, have used AJAX\r\n\t\t\t\tsuccessfully a couple of times. Used SASS a couple of times. The\r\n\t\t\t\timages on this website where created/edited with paint.net. Photo\r\n\t\t\t\tediting is really not my game, though...</p>\r\n\t\t\t\t\r\n\t\t</section>\r\n\r\n\t</article>\r\n\r\n</div>"

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = "\r\n\r\n<div dropdown [(isOpen)]=\"status.isopen\" class=\"text-center visible-xs\">\r\n    <button id=\"single-button\" type=\"button\" class=\"btn btn-default btmmargin\" dropdownToggle [disabled]=\"disabled\">\r\n      \tMenu </button>\r\n    <ul dropdownMenu role=\"menu\" aria-labelledby=\"single-button\" style=\"width:100%;margin-top:-0.1em;\">\r\n     <li class=\"mb-1 mt-1 text-center\"><a routerLink=\"/personal-info\"\r\n\t\trouterLinkActive=\"active\">About me</a></li>\r\n\t\t<li  class=\"mb-1 text-center\"><a routerLink=\"/aspirations\"\r\n\t\trouterLinkActive=\"active\">Roadmap</a></li>\r\n\t\t<li  class=\"mb-1 text-center\"><a routerLink=\"/current-skillset\"\r\n\t\trouterLinkActive=\"active\">Competencies</a></li>\r\n    </ul>\r\n  </div>\r\n  \r\n "

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = "\r\n\r\n\r\n<article class=\"text-center btmmarg\">\r\n<h3 class=\"pt-1\">Video introduction <small>to come</small></h3>\r\n<p>In the mean time, enjoy this clip of wintry scenery from Kartanonkoski.</p>\r\n\r\n   <video controls muted poster=\"{{field}}\">\r\n      <source src=\"{{winter}}\" type=\"video/mp4\">\r\n      Your browser does not support HTML5 video.\r\n    </video>\r\n<section class=\"mt-2 pt-1 col-sm-12 col-md-8 offset-md-2\">\r\n\r\n<h4>Personal information</h4>\r\n\r\n\r\n<strong>Name:</strong>\r\n<p>Joonas Elmeri Heikkinen</p>\r\n<strong>Age:</strong>\r\n<p>27</p>\r\n<strong>Email:</strong>\r\n<p>solarshadow.jh@gmail.com</p>\r\n\r\n<strong>Place of residence</strong>\r\n<p>Kartanonkoski, Vantaa</p>\r\n<strong>Employment history</strong>\r\n<p>~9 years at Paulig (coffee roastery), in various \r\nwork tasks in production.</p>\r\n\r\n<strong>Recreational interests</strong>\r\n<p>I used to like reading books written in Swedish or English (still do, but finding time for it has become\r\nrather difficult). I played football for ten years, ten years ago. Nowadays I play floorball once a week. I enjoy taking long\r\nwalks with our dog, Dahlia. Playing videogames has been close to my heart ever since I was a kid (I own a PS4). Picking up and \r\ndropping off my lovely wife to work has become a daily routine. I also enjoy traveling and have been to quite a few countries in Europe and\r\na few overseas. </p>  \r\n\r\n\r\n\r\n</section>\r\n</article>\r\n"

/***/ },

/***/ 779:
/***/ function(module, exports) {

module.exports = "\r\n\r\n\r\n<article class=\"text-center globalwidth\">\r\n<h4  id=\"welcometext\">\r\nWelcome to my personal portfolio. My name is Joonas and I'm a third year IT student at Haaga-Helia University of Applied Sciences in Helsinki,\r\nFinland. Browse through these pages to learn more about me, the skills I have and what my interests are. If you wish to contact me, return to this \r\npage (click on My Portfolio) and click on the Contact-button below.   \r\n</h4>\r\n<contact-form></contact-form>\r\n</article>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(472);


/***/ }

},[805]);
//# sourceMappingURL=main.bundle.map