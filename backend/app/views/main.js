(window.webpackJsonp = window.webpackJsonp || []).push([['main'], {

  /***/ 0:
  /*! ***************************!*\
  !*** multi ./src/main.ts ***!
  \************************** */
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! /Users/leonidtkacenko/Test_Cisco/frontend/Angular8ClientCrud/src/main.ts */'zUnb');
    /***/ }),

  /***/ AytR:
  /*! *****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \**************************************** */
  /*! exports provided: environment */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'environment', () => environment);
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    const environment = {
      production: false,
    };
    /*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
    /***/ }),

  /***/ BaVL:
  /*! ***********************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.ts ***!
  \********************************************************** */
  /*! exports provided: FeedbackComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FeedbackComponent', () => FeedbackComponent);
    /* harmony import */ const _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ '3Pt+');
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 'fXoL');
    /* harmony import */ const src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feedback.service */ 'kcTb');

    class FeedbackComponent {
      constructor(builder, contact) {
        this.builder = builder;
        this.contact = contact;
      }

      ngOnInit() {
        this.FormData = this.builder.group({
          tittle: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
          summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
        });
      }

      onSubmit(FormData) {
        console.log(FormData);
        this.contact.PostMessage(FormData)
          .subscribe((response) => {
            location.href = 'http://localhost:8081/#/correct';
            console.log(response);
          }, (error) => {
            console.warn(error.responseText);
            console.log({ error });
          });
      }
    }
    FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService)); };
    FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineComponent']({
      type: FeedbackComponent,
      selectors: [['app-feedback']],
      decls: 18,
      vars: 2,
      consts: [[1, 'wrapper-box'], [1, 'container'], [1, 'text-center', 'mb-5'], [1, 'row'], [1, 'col-md-6', 'offset-md-3'], [3, 'formGroup', 'ngSubmit'], [1, 'form-group'], ['for', 'tittle'], ['formControlName', 'tittle', 'name', 'tittle', 1, 'form-control'], ['for', 'summary'], ['formControlName', 'summary', 'name', 'summary', 1, 'form-control'], ['type', 'submit', 1, 'btn', 'btn-primary', 3, 'disabled']],
      template: function FeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'div', 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](1, 'div', 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](2, 'h2', 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](3, 'Feedback Form');
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](4, 'div', 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](5, 'div', 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](6, 'form', 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener']('ngSubmit', () => ctx.onSubmit(ctx.FormData.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](7, 'div', 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](8, 'label', 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](9, 'Tittle');
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](10, 'input', 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](11, 'div', 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](12, 'label', 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](13, 'Summary');
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](14, 'textarea', 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](15, '              ');
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](16, 'button', 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](17, ' Submit ');
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
        } if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('formGroup', ctx.FormData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('disabled', !ctx.FormData.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__['ɵangular_packages_forms_forms_y'], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
      styles: ['html[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.wrapper-box[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    overflow-x: hidden !important;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7O0FBRWpDIiwiZmlsZSI6ImZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53cmFwcGVyLWJveHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcblxufSJdfQ== */'],
    });
    /***/ }),

  /***/ DgPi:
  /*! *************************************************!*\
  !*** ./src/app/services/upload-file.service.ts ***!
  \************************************************ */
  /*! exports provided: UploadFileService */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UploadFileService', () => UploadFileService);
    /* harmony import */ const _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 'tk/3');
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 'fXoL');

    class UploadFileService {
      constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8081/api/tools';
      }

      upload(file) {
        const formData = new FormData();
        formData.append('file', file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
          reportProgress: true,
          responseType: 'json',
        });
        return this.http.request(req);
      }

      getFiles() {
        return this.http.get(`${this.baseUrl}/files`);
      }

      PostMessage(input) {
        return this.http.post(`${this.baseUrl}/upload/file`, input, {
          reportProgress: true,
          responseType: 'json',
        });
      }
    }
    UploadFileService.ɵfac = function UploadFileService_Factory(t) { return new (t || UploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
    UploadFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable']({ token: UploadFileService, factory: UploadFileService.ɵfac, providedIn: 'root' });
    /***/ }),

  /***/ HgBK:
  /*! ***********************************************************************!*\
  !*** ./src/app/components/right-response/right-response.component.ts ***!
  \********************************************************************** */
  /*! exports provided: RightResponseComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'RightResponseComponent', () => RightResponseComponent);
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 'fXoL');

    class RightResponseComponent {
      constructor() { }

      ngOnInit() {
      }
    }
    RightResponseComponent.ɵfac = function RightResponseComponent_Factory(t) { return new (t || RightResponseComponent)(); };
    RightResponseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
      type: RightResponseComponent,
      selectors: [['app-right-response']],
      decls: 3,
      vars: 0,
      consts: [[1, 'text-center'], [1, 'display-3']],
      template: function RightResponseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'h1', 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'Thank You!');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        }
      },
      styles: ['\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1yZXNwb25zZS5jb21wb25lbnQuY3NzIn0= */'],
    });
    /***/ }),

  /***/ Sy1n:
  /*! **********************************!*\
  !*** ./src/app/app.component.ts ***!
  \********************************* */
  /*! exports provided: AppComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppComponent', () => AppComponent);
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 'fXoL');
    /* harmony import */ const _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 'tyNb');

    class AppComponent {
      constructor() {
        this.title = 'Angular8ClientCrud';
      }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
      type: AppComponent,
      selectors: [['app-root']],
      decls: 6,
      vars: 0,
      consts: [[1, 'navbar', 'navbar-expand', 'navbar-dark', 'bg-dark'], [1, 'text'], [1, 'navbar-nav', 'mr-auto'], [1, 'container', 'mt-3']],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'nav', 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'a', 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'div', 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'router-outlet');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ['\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */'],
    });
    /***/ }),

  /***/ Y3Re:
  /*! *************************************************************!*\
  !*** ./src/app/components/tool-list/tool-list.component.ts ***!
  \************************************************************ */
  /*! exports provided: ToolListComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ToolListComponent', () => ToolListComponent);
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 'fXoL');
    /* harmony import */ const src_app_services_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tool.service */ 'rllv');
    /* harmony import */ const _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ '3Pt+');
    /* harmony import */ const _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 'ofXK');
    /* harmony import */ const _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 'tyNb');

    function ToolListComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener']('click', () => { _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r6); const tool_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](); return ctx_r5.setActiveTutorial(tool_r3, i_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
      } if (rf & 2) {
        const tool_r3 = ctx.$implicit;
        const i_r4 = ctx.index;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('active', i_r4 == ctx_r0.currentIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', tool_r3.answer, ' ');
      }
    }
    function ToolListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'h4');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'Tool');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'label');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'strong');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, 'Title:');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'label');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'strong');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, 'Description:');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'form', 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener']('ngSubmit', () => { _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](); return ctx_r7.onSubmit(ctx_r7.FormData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'div', 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'button', 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](16, ' Submit ');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
      } if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r1.currentTool.answer, ' ');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r1.currentTool.description, ' ');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx_r1.FormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', !ctx_r1.FormData.valid);
      }
    }
    function ToolListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'br');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'p');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, 'Please click on a Tool...');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
      }
    }
    class ToolListComponent {
      constructor(toolService, builder) {
        this.toolService = toolService;
        this.builder = builder;
        this.currentTool = null;
        this.currentIndex = -1;
        this.title = '';
      }

      ngOnInit() {
        this.retrieveTutorials();
        this.FormData = this.builder.group({});
      }

      retrieveTutorials() {
        this.toolService.getAll()
          .subscribe((data) => {
            this.tools = data;
            console.log(data);
          }, (error) => {
            console.log(error);
          });
      }

      refreshList() {
        this.retrieveTutorials();
        this.currentTool = null;
        this.currentIndex = -1;
      }

      setActiveTutorial(tool, index) {
        this.currentTool = tool;
        this.currentIndex = index;
        this.FormData = this.builder.group({
          id: tool._id,
          answer: tool.answer,
          description: tool.description,
        });
      }

      onSubmit(FormData) {
        console.log(FormData);
        this.toolService.PostMessage(FormData)
          .subscribe((response) => {
            location.href = 'http://localhost:8081/#/correct';
            console.log(response);
          }, (error) => {
            console.warn(error.responseText);
            console.log({ error });
          });
      }
    }
    ToolListComponent.ɵfac = function ToolListComponent_Factory(t) { return new (t || ToolListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](src_app_services_tool_service__WEBPACK_IMPORTED_MODULE_1__.ToolService), _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
    ToolListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
      type: ToolListComponent,
      selectors: [['app-tool-list']],
      decls: 17,
      vars: 3,
      consts: [[1, 'list', 'row'], [1, 'intro'], [1, 'list-group'], ['class', 'list-group-item', 3, 'active', 'click', 4, 'ngFor', 'ngForOf'], [4, 'ngIf'], ['routerLink', '/feedback'], [1, 'button', 2, 'vertical-align', 'middle'], ['routerLink', '/upload'], [1, 'list-group-item', 3, 'click'], [3, 'formGroup', 'ngSubmit'], [1, 'form-group'], ['type', 'submit', 1, 'btn', 'btn-primary', 3, 'disabled']],
      template: function ToolListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h4');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, 'What is the best animal in the world?');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'ul', 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](5, ToolListComponent_li_5_Template, 2, 3, 'li', 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](7, ToolListComponent_div_7_Template, 17, 4, 'div', 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](8, ToolListComponent_div_8_Template, 4, 0, 'div', 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'a', 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'button', 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'span');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, 'Feedback ');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'a', 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'button', 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'span');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](16, 'Upload Image');
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
        } if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.tools);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.currentTool);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.currentTool);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ɵangular_packages_forms_forms_y'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
      styles: [".list[_ngcontent-%COMP%] {\n    text-align: left;\n    max-width: 750px;\n    margin: auto;\n  }\n  .intro[_ngcontent-%COMP%] {\n      padding: 20px 25px;\n      margin: 10px 0 12px 0;\n  }\n  .list-group[_ngcontent-%COMP%]{\n    padding: 20px 25px;\n  }\n  .button[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 4px;\n    background-color: #ffffff;\n    border: none;\n    color: #000000;\n    text-align: center;\n    font-size: 20px;\n    padding: 5px;\n    width: 200px;\n    transition: all 0.5s;\n    cursor: pointer;\n    margin: 5px;\n  }\n  .button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n  .button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n  .button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    padding-right: 25px;\n  }\n  .button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n    opacity: 1;\n    right: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixxQkFBcUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7RUFDViIsImZpbGUiOiJ0b29sLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5pbnRybyB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XG4gICAgICBtYXJnaW46IDEwcHggMCAxMnB4IDA7XG4gIH1cbiAgLmxpc3QtZ3JvdXB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICB9XG4gIC5idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICBcbiAgLmJ1dHRvbiBzcGFuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIFxuICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogLTIwcHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH0iXX0= */"],
    });
    /***/ }),

  /***/ ZAI4:
  /*! *******************************!*\
  !*** ./src/app/app.module.ts ***!
  \****************************** */
  /*! exports provided: AppModule */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppModule', () => AppModule);
    /* harmony import */ const _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 'jhN1');
    /* harmony import */ const _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 'vY5A');
    /* harmony import */ const _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 'Sy1n');
    /* harmony import */ const _components_tool_list_tool_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tool-list/tool-list.component */ 'Y3Re');
    /* harmony import */ const _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ '3Pt+');
    /* harmony import */ const _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 'tk/3');
    /* harmony import */ const _components_right_response_right_response_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/right-response/right-response.component */ 'HgBK');
    /* harmony import */ const _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feedback/feedback.component */ 'BaVL');
    /* harmony import */ const _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/upload-file/upload-file.component */ 'kLp8');
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 'fXoL');

    class AppModule {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__['ɵɵdefineNgModule']({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__['ɵɵdefineInjector']({
      factory: function AppModule_Factory(t) { return new (t || AppModule)(); },
      providers: [],
      imports: [[
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
      ]],
    });
    (function () {
      (typeof ngJitMode === 'undefined' || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__['ɵɵsetNgModuleScope'](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
          _components_tool_list_tool_list_component__WEBPACK_IMPORTED_MODULE_3__.ToolListComponent,
          _components_right_response_right_response_component__WEBPACK_IMPORTED_MODULE_6__.RightResponseComponent,
          _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__.FeedbackComponent,
          _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__.UploadFileComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule,
          _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
          _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule],
      });
    }());
    /***/ }),

  /***/ kLp8:
  /*! *****************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.ts ***!
  \**************************************************************** */
  /*! exports provided: UploadFileComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UploadFileComponent', () => UploadFileComponent);
    /* harmony import */ const _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 'tk/3');
    /* harmony import */ const _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ '3Pt+');
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 'fXoL');
    /* harmony import */ const src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/upload-file.service */ 'DgPi');
    /* harmony import */ const _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 'ofXK');

    const _c0 = function (a0) { return { width: a0 }; };
    function UploadFileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](0, 'div', 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](1, 'div', 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
      } if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵnextContext']();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵproperty']('ngStyle', _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵpureFunction1'](3, _c0, `${ctx_r0.progress}%`));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵattribute']('aria-valuenow', ctx_r0.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtextInterpolate1'](' ', ctx_r0.progress, '% ');
      }
    }
    function UploadFileComponent_ul_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](0, 'ul', 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](1, 'li', 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](2, 'a', 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
      } if (rf & 2) {
        const file_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵpropertyInterpolate']('href', file_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵsanitizeUrl']);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtextInterpolate'](file_r2.name);
      }
    }
    class UploadFileComponent {
      constructor(uploadService, builder) {
        this.uploadService = uploadService;
        this.builder = builder;
        this.progress = 0;
        this.message = '';
        this.files = [];
      }

      ngOnInit() {
        this.fileInfos = this.uploadService.getFiles();
        this.FormData = this.builder.group({
          tittle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
        });
      }

      selectFile(event) {
        this.selectedFiles = event.target.files;
      }

      upload() {
        this.progress = 0;
        this.currentFile = this.selectedFiles.item(0);
        this.uploadService.upload(this.currentFile).subscribe((event) => {
          if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse) {
            this.files.push(this.currentFile.name);
            console.log(this.files);
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
            this.FormData = this.builder.group({
              tittle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
              file: [this.files],
            });
          }
        }, (err) => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
        this.selectedFiles = undefined;
      }

      onSubmit(FormData) {
        console.log(this.files);
        console.log(FormData);
        this.uploadService.PostMessage(FormData)
          .subscribe((response) => {
            location.href = 'http://localhost:8081/#/correct';
            console.log(response);
          }, (error) => {
            console.warn(error.responseText);
            console.log({ error });
          });
      }
    }
    UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_3__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
    UploadFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdefineComponent']({
      type: UploadFileComponent,
      selectors: [['app-upload-file']],
      decls: 20,
      vars: 8,
      consts: [['class', 'progress', 4, 'ngIf'], [1, 'btn', 'btn-default'], ['type', 'file', 3, 'change'], [1, 'btn', 'btn-primary', 3, 'disabled', 'click'], ['role', 'alert', 1, 'alert', 'alert-light'], [1, 'card'], [1, 'card-header'], ['class', 'list-group list-group-flush', 4, 'ngFor', 'ngForOf'], [3, 'formGroup', 'ngSubmit'], [1, 'form-group'], ['for', 'tittle'], ['formControlName', 'tittle', 'name', 'tittle', 1, 'form-control'], ['type', 'submit', 1, 'btn', 'btn-primary', 3, 'disabled'], [1, 'progress'], ['role', 'progressbar', 'aria-valuemin', '0', 'aria-valuemax', '100', 1, 'progress-bar', 'progress-bar-info', 'progress-bar-striped', 3, 'ngStyle'], [1, 'list-group', 'list-group-flush'], [1, 'list-group-item'], [3, 'href']],
      template: function UploadFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtemplate'](0, UploadFileComponent_div_0_Template, 3, 5, 'div', 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](1, 'label', 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](2, 'input', 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵlistener']('change', ($event) => ctx.selectFile($event));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](3, 'button', 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵlistener']('click', () => ctx.upload());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](4, ' Upload ');
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](5, 'div', 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](7, 'div', 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](8, 'div', 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](9, 'List of Files');
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtemplate'](10, UploadFileComponent_ul_10_Template, 4, 2, 'ul', 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵpipe'](11, 'async');
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](12, 'div');
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](13, 'form', 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵlistener']('ngSubmit', () => ctx.onSubmit(ctx.FormData.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](14, 'div', 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](15, 'label', 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](16, 'Tittle');
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelement'](17, 'input', 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](18, 'button', 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](19, ' Submit ');
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']();
        } if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵproperty']('ngIf', ctx.currentFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵproperty']('disabled', !ctx.selectedFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtextInterpolate'](ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵproperty']('ngForOf', _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵpipeBind1'](11, 6, ctx.fileInfos));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵproperty']('formGroup', ctx.FormData);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵadvance'](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵproperty']('disabled', !ctx.FormData.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__['ɵangular_packages_forms_forms_y'], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: ['.card-header[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n}\n.form-group[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJ1cGxvYWQtZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59Il19 */'],
    });
    /***/ }),

  /***/ kcTb:
  /*! **********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \********************************************* */
  /*! exports provided: FeedbackService */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FeedbackService', () => FeedbackService);
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 'fXoL');
    /* harmony import */ const _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 'tk/3');

    class FeedbackService {
      constructor(http) {
        this.http = http;
        this.base = 'http://localhost:8081/api/tools/feedback';
      }

      PostMessage(input) {
        return this.http.post(this.base, input, {
          reportProgress: true,
          responseType: 'json',
        });
      }
    }
    FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });
    /***/ }),

  /***/ rllv:
  /*! ******************************************!*\
  !*** ./src/app/services/tool.service.ts ***!
  \***************************************** */
  /*! exports provided: ToolService */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ToolService', () => ToolService);
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 'fXoL');
    /* harmony import */ const _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 'tk/3');

    const baseUrl = 'http://localhost:8081/api/tools';
    class ToolService {
      constructor(http) {
        this.http = http;
        this.base = 'http://localhost:8081/api/tools/save';
      }

      getAll() {
        return this.http.get(baseUrl);
      }

      PostMessage(input) {
        return this.http.post(this.base, input, {
          reportProgress: true,
          responseType: 'json',
        });
      }
    }
    ToolService.ɵfac = function ToolService_Factory(t) { return new (t || ToolService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    ToolService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({ token: ToolService, factory: ToolService.ɵfac, providedIn: 'root' });
    /***/ }),

  /***/ vY5A:
  /*! ***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \************************************** */
  /*! exports provided: AppRoutingModule */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppRoutingModule', () => AppRoutingModule);
    /* harmony import */ const _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 'tyNb');
    /* harmony import */ const _components_tool_list_tool_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tool-list/tool-list.component */ 'Y3Re');
    /* harmony import */ const _components_right_response_right_response_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/right-response/right-response.component */ 'HgBK');
    /* harmony import */ const _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feedback/feedback.component */ 'BaVL');
    /* harmony import */ const _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/upload-file/upload-file.component */ 'kLp8');
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 'fXoL');

    const routes = [{ path: '', redirectTo: 'tools', pathMatch: 'full' },
      { path: 'tools', component: _components_tool_list_tool_list_component__WEBPACK_IMPORTED_MODULE_1__.ToolListComponent },
      { path: 'correct', component: _components_right_response_right_response_component__WEBPACK_IMPORTED_MODULE_2__.RightResponseComponent },
      { path: 'feedback', component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__.FeedbackComponent },
      { path: 'upload', component: _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_4__.UploadFileComponent }];
    class AppRoutingModule {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__['ɵɵdefineNgModule']({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__['ɵɵdefineInjector']({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] });
    (function () { (typeof ngJitMode === 'undefined' || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__['ɵɵsetNgModuleScope'](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); }());
    /***/ }),

  /***/ zUnb:
  /*! *********************!*\
  !*** ./src/main.ts ***!
  \******************** */
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 'jhN1');
    /* harmony import */ const _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 'fXoL');
    /* harmony import */ const _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 'ZAI4');
    /* harmony import */ const _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 'AytR');

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
    }
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule)
      .catch((err) => console.error(err));
    /***/ }),

  /***/ zn8P:
  /*! ******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \***************************************************** */
  /*! no static exports found */
  /***/ (function (module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(() => {
        const e = new Error(`Cannot find module '${req}'`);
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () { return []; };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = 'zn8P';
    /***/ }),

}, [[0, 'runtime', 'vendor']]]);
// # sourceMappingURL=main.js.map
