function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empresas-empresas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empresas/empresas-form/empresas-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empresas/empresas-form/empresas-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmpresasEmpresasFormEmpresasFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"needs-validation\" novalidate [formGroup]=\"form\">\n  <div class=\"card border-primary mb-3\">\n    <div class=\"card-header\">\n      <h4>Empresa: <small class=\"text-secondary\">{{ form.controls['nomeReal'].value }}</small></h4>\n    </div>\n    <div class=\"card-body text-primary\">\n      <div class=\"form-row mb-3\">\n        <div class=\"col-sm-12\">\n          <label for=\"codigo\">Código</label>\n          <input [readonly]=\"edit\" type=\"text\" class=\"form-control\" id=\"codigo\" placeholder=\"Código\" formControlName=\"codigo\"  [ngClass]=\"{'is-invalid': submitted && hasError('codigo')}\" />          \n          <div class=\"valid-feedback\"></div>\n          <div class=\"invalid-feedback\" *ngIf=\"hasError('codigo') && hasError('codigo')['required']\">\n            Por favor informe um código para a empresa.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row mb-3\">\n        <div class=\"col-sm-12\">\n          <label for=\"nomeReal\">Nome Real</label>\n          <input type=\"text\" class=\"form-control\" id=\"nomeReal\" placeholder=\"Nome Real\" formControlName=\"nomeReal\" [ngClass]=\"{ 'is-invalid': submitted && hasError('nomeReal')}\" />\n          <div class=\"valid-feedback\"></div>\n          <div class=\"invalid-feedback\" *ngIf=\"hasError('nomeReal') && hasError('nomeReal')['required']\">\n            Por favor informe um nome real para a empresa.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row mb-3\">\n        <div class=\"col-sm-12\">\n          <label for=\"nomeFantasia\">Nome Fantasia</label>\n          <input type=\"text\" class=\"form-control\" id=\"nomeFantasia\" placeholder=\"Nome Fantasia\" formControlName=\"nomeFantasia\" [ngClass]=\"{ 'is-invalid': submitted && hasError('nomeFantasia')}\"/>\n          <div class=\"valid-feedback\"></div>\n          <div class=\"invalid-feedback\" *ngIf=\"hasError('nomeFantasia') && hasError('nomeFantasia')['required']\">\n            Por favor informe um nome fantasia para a empresa.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-row btn-row form-row-btn\">\n    <button class=\"btn btn-outline-secondary mr-2\" (click)=\"onBack()\">Voltar</button>\n    <button class=\"btn btn-outline-primary\" (click)=\"onSubmit()\">Salvar</button>\n  </div>\n\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empresas/empresas-lista/empresas-lista.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empresas/empresas-lista/empresas-lista.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmpresasEmpresasListaEmpresasListaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"float-left text-primary\">\n      <span class=\"icon icon-office title\"></span>\n      <h4 class=\"title\">Empresas</h4>\n    </div>\n    <div class=\"float-right\">\n          <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" [routerLink]=\"['novo']\" tooltip=\"New record.\" placement=\"top\">\n            <span class=\"icon icon-plus \"></span>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"onRefresh()\" tooltip=\"Refresh List.\" placement=\"top\">\n            <span class=\"icon icon-loop2 \"></span>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"onConfigList()\" tooltip=\"Config List.\" placement=\"top\">\n            <span class=\"icon icon-cog \"></span>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"onRefresh()\" tooltip=\"Carga.\" placement=\"top\">\n            <span class=\"icon icon-upload \"></span>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"onRefresh()\" tooltip=\"Dowload file.\" placement=\"top\">\n            <span class=\"icon icon-download \"></span>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary \" [ngClass]=\"{'active': !isCollapsed}\" (click)=\"isCollapsed = !isCollapsed\"\n            [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\" tooltip=\"Filter.\" placement=\"top\">\n            <span class=\"icon icon-filter \"></span>\n          </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n\n    <div id=\"collapseBasic\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\" class=\"bg-light mb-3 rounded shadow-sm\">\n      <form class=\"needs-validation\" novalidate [formGroup]=\"form\">\n        <div class=\"form-row pr-3 pl-3\">\n          <div class=\"col-sm-4 mb-3\">\n            <label class=\"col-form-label\" for=\"codigo\">#</label>\n            <input class=\"form-control\" id=\"codigo\" placeholder=\"Código\" formControlName=\"codigo\" />\n          </div>\n          <div class=\"col-sm-8 mb-3\">\n            <label class=\"col-form-label\" for=\"nomeFantasia\">Empresa</label>\n            <input type=\"text\" class=\"form-control\" id=\"nomeFantasia\" placeholder=\"Empresa\" formControlName=\"nomeFantasia\" />\n          </div>\n        </div>\n        <div class=\"form-row pr-3 pl-3\">\n          <div class=\"col-sm-12 mb-3 text-right\">\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onFilterConfirm()\">Aplicar Filtro</button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <table class=\"table table-striped mobile-optimised\" *ngIf=\"list; else loading\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Empresa</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let fields of list.data\">\n          <td data-th=\"#\">{{ fields.codigo }}</td>\n          <td data-th=\"Empresa\">{{ fields.nomeFantasia }}</td>\n          <td>\n            <span class=\"float-right\">\n              <button class=\"btn btn-outline-info mb-1 btn-sm mr-2\" (click)=\"onEdit(fields.codigo)\" tooltip=\"Edit.\" placement=\"top\">\n                <span class=\"icon icon-pencil \"></span>\n              </button>\n              <button class=\"btn btn-outline-danger mb-1 btn-sm\" (click)=\"onDelete(fields.codigo)\" tooltip=\"Delete.\" placement=\"top\">\n                <span class=\"icon icon-bin \"></span>\n              </button>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #loading>\n      <span>Carregando Empresas...</span>\n    </ng-template>\n  </div>\n  <div class=\"card-footer text-muted\" *ngIf=\"list\">\n    <div class=\"float-left\">\n      <nav aria-label=\"Page navigation example\" *ngIf=\"list\">\n        <ul class=\"pagination mb-0\">\n          <li class=\"page-item\" *ngIf=\"list.pages.length >= 1\">\n            <span class=\"page-link link-pointer\" (click)=\"onPagination(1)\">\n              <<span class=\"sr-only\">(current)</span>\n            </span>\n          </li>\n          <li class=\"page-item\" *ngFor=\"let page of list.pages\" [ngClass]=\"{'active': page == list.pageNow}\" aria-current=\"page\">\n            <span class=\"page-link\" [ngClass]=\"{'link-pointer': page != list.pageNow}\" (click)=\"onPagination(page)\">\n              {{ page }}\n              <span class=\"sr-only\">(current)</span>\n            </span>\n          </li>\n          <li class=\"page-item\"  *ngIf=\"list.pages.length >= 1\">\n            <span class=\"page-link link-pointer\" (click)=\"onPagination(list.pageCount)\">\n              ><span class=\"sr-only\">(current)</span>\n            </span>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"float-right text-primary pagination-ds\">\n      {{list.pageNow}} de {{list.pageCount}} paginas ( {{list.regCount}} itens )\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/empresas/empresas-form/empresas-form.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/empresas/empresas-form/empresas-form.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmpresasEmpresasFormEmpresasFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-row {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxhcmF1am9nb21lcy9Qcm9qZWN0cy9PcmNhbWVudG8uRnJvbnQvT3JjYW1lbnRvL3NyYy9hcHAvZW1wcmVzYXMvZW1wcmVzYXMtZm9ybS9lbXByZXNhcy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbXByZXNhcy9lbXByZXNhcy1mb3JtL2VtcHJlc2FzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZW1wcmVzYXMvZW1wcmVzYXMtZm9ybS9lbXByZXNhcy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1yb3cge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuIiwiLmJ0bi1yb3cge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/empresas/empresas-form/empresas-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/empresas/empresas-form/empresas-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AlertEmpresa, EmpresasFormComponent */

  /***/
  function srcAppEmpresasEmpresasFormEmpresasFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertEmpresa", function () {
      return AlertEmpresa;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasFormComponent", function () {
      return EmpresasFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _empresas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../empresas.service */
    "./src/app/empresas/empresas.service.ts");
    /* harmony import */


    var _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/alert-modal.service */
    "./src/app/shared/alert-modal.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AlertEmpresa;

    (function (AlertEmpresa) {
      AlertEmpresa["UPDATE_SUCCESS"] = "Empresa atualizada com sucesso!";
      AlertEmpresa["UPDATE_ERROR"] = "Erro ao atualizar empresa, tente novamente!";
      AlertEmpresa["CREATE_SUCCESS"] = "Empresa criada com sucesso!";
      AlertEmpresa["CREATE_ERROR"] = "Erro ao criar empresa, tente novamente!";
    })(AlertEmpresa || (AlertEmpresa = {}));

    var EmpresasFormComponent =
    /*#__PURE__*/
    function () {
      function EmpresasFormComponent(fb, service, modal, location, route) {
        _classCallCheck(this, EmpresasFormComponent);

        this.fb = fb;
        this.service = service;
        this.modal = modal;
        this.location = location;
        this.route = route;
      }

      _createClass(EmpresasFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var empresa = this.route.snapshot.data.empresa;
          this.edit = empresa.codigo == null ? false : true;
          this.form = this.fb.group({
            codigo: [empresa.codigo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomeReal: [empresa.nomeReal, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomeFantasia: [empresa.nomeFantasia, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.submitted = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.submitted = true;

          if (this.form.valid) {
            this.service.save(this.form.value, this.edit).subscribe(function (success) {
              _this.edit ? _this.onUpdate() : _this.onCreate();
            }, function (error) {
              return _this.modal.showAlertDanger(_this.edit ? AlertEmpresa.UPDATE_ERROR : AlertEmpresa.CREATE_ERROR);
            });
          }
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          this.modal.showAlertSuccess(AlertEmpresa.UPDATE_SUCCESS);
          this.onBack();
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          this.modal.showAlertSuccess(AlertEmpresa.CREATE_SUCCESS);
          this.submitted = false;
          this.form.reset();
        }
      }, {
        key: "hasError",
        value: function hasError(field) {
          return this.form.get(field).errors;
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.submitted = false;
          this.form.reset();
          console.log('onCancel');
        }
      }, {
        key: "onBack",
        value: function onBack() {
          this.location.back();
        }
      }]);

      return EmpresasFormComponent;
    }();

    EmpresasFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _empresas_service__WEBPACK_IMPORTED_MODULE_4__["EmpresasService"]
      }, {
        type: _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_5__["AlertModalService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    EmpresasFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empresas-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./empresas-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empresas/empresas-form/empresas-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./empresas-form.component.scss */
      "./src/app/empresas/empresas-form/empresas-form.component.scss")).default]
    })], EmpresasFormComponent);
    /***/
  },

  /***/
  "./src/app/empresas/empresas-lista/empresas-lista.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/empresas/empresas-lista/empresas-lista.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmpresasEmpresasListaEmpresasListaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcHJlc2FzL2VtcHJlc2FzLWxpc3RhL2VtcHJlc2FzLWxpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/empresas/empresas-lista/empresas-lista.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/empresas/empresas-lista/empresas-lista.component.ts ***!
    \*********************************************************************/

  /*! exports provided: Alert, EmpresasListaComponent */

  /***/
  function srcAppEmpresasEmpresasListaEmpresasListaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasListaComponent", function () {
      return EmpresasListaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _empresas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../empresas.service */
    "./src/app/empresas/empresas.service.ts");
    /* harmony import */


    var _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/alert-modal.service */
    "./src/app/shared/alert-modal.service.ts");

    var Alert;

    (function (Alert) {
      Alert["LISTA_ERROR"] = "Erro ao carregar empresas. Tente novamente mais tarde.";
      Alert["CONFIRMACAO_EXCLUSAO"] = "Tem certeza que deseja remover essa empresa?";
      Alert["DELETE_SUCCESS"] = "Empresa removida com sucesso!";
      Alert["DELETE_ERROR"] = "Erro ao remover empresa. Tente novamente mais tarde!";
      Alert["SESSION_STORAGE"] = "empresaLista";
      Alert["CONFIG_LIST_ERROR"] = "Erro ao configurar a lista. Tente novamente mais tarde!";
      Alert["CONFIG_LIST_SUCCESS"] = "Configura\xE7\xE3o aplicada com sucesso.";
    })(Alert || (Alert = {}));

    var EmpresasListaComponent =
    /*#__PURE__*/
    function () {
      function EmpresasListaComponent(fb, service, alertService, router, route, modalService) {
        _classCallCheck(this, EmpresasListaComponent);

        this.fb = fb;
        this.service = service;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.list = {
          pagination: true,
          pagePrevious: 0,
          pageNext: 0,
          pageCount: 0,
          pageNow: 0,
          pageSize: 0,
          regCount: 0,
          pages: [],
          select: [],
          orderBy: [],
          filters: [],
          data: null
        };
        this.isCollapsed = true;
      }

      _createClass(EmpresasListaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var session = JSON.parse(sessionStorage.getItem(Alert.SESSION_STORAGE));

          if (session != null) {
            this.list = session;
          }

          this.setInputSearch(this.list.filters);
          this.lista();
          sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
        }
      }, {
        key: "setInputSearch",
        value: function setInputSearch(filter) {
          var codigo = null;
          var nomeFantasia = null;
          filter.forEach(function (x) {
            if (x.name == 'codigo') {
              codigo = x.value;
            }

            if (x.name == 'nomeFantasia') {
              nomeFantasia = x.value;
            }
          });

          if (filter.length >= 1) {
            this.isCollapsed = false;
          }

          this.form = this.fb.group({
            codigo: [codigo],
            nomeFantasia: [nomeFantasia]
          });
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          this.list.filters = [];
          this.list.pageNow = 1;
          this.isCollapsed = true;
          this.form.reset();
          this.lista();
          sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
        }
      }, {
        key: "onFilter",
        value: function onFilter(template) {
          this.filterModalRef = this.modalService.show(template);
        }
      }, {
        key: "onPagination",
        value: function onPagination(page) {
          this.list.pageNow = page;
          this.lista();
          sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
        }
      }, {
        key: "onFilterConfirm",
        value: function onFilterConfirm() {
          var _this2 = this;

          var filters = [];
          this.list.filters = [];
          this.list.pageNow = 1;
          Object.keys(this.form.controls).forEach(function (key) {
            if (_this2.form.get(key).value != null && _this2.form.get(key).value != '') {
              _this2.list.filters.push({
                name: key,
                value: _this2.form.get(key).value
              });
            }
          });
          this.lista();
          sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          this.alertService.showAlertDanger(Alert.LISTA_ERROR);
        }
      }, {
        key: "onEdit",
        value: function onEdit(codigo) {
          this.router.navigate(['editar', codigo], {
            relativeTo: this.route
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(codigo) {
          var _this3 = this;

          var result$ = this.alertService.showConfirm('Confirmação', Alert.CONFIRMACAO_EXCLUSAO);
          result$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (result) {
            return result ? _this3.service.remove(codigo) : rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
          })).subscribe(function (success) {
            return _this3.onConfirmeDeleteSuccess();
          }, function (error) {
            return _this3.onConfirmeDeleteError();
          });
        }
      }, {
        key: "onConfigList",
        value: function onConfigList() {
          var _this4 = this;

          var session = JSON.parse(sessionStorage.getItem(Alert.SESSION_STORAGE));
          var list = session; // this.list = session;

          var configList = {
            success: true,
            pagination: list.pagination,
            pageSize: list.pageSize
          };
          var result$ = this.alertService.showConfigList(configList);
          result$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (success) {
            return _this4.onConfirmeConfigListSuccess(success);
          }, function (error) {
            return _this4.onConfirmeConfigListError();
          });
        }
      }, {
        key: "onConfirmeConfigListSuccess",
        value: function onConfirmeConfigListSuccess(configList) {
          if (!configList.success) {
            return;
          }

          console.log(configList);
          this.list.pageSize = configList.pageSize != null ? configList.pageSize : 0;
          this.list.pagination = configList.pagination != null ? configList.pagination : true;
          sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
          this.lista();
          this.alertService.showAlertSuccess(Alert.CONFIG_LIST_SUCCESS);
        }
      }, {
        key: "onConfirmeConfigListError",
        value: function onConfirmeConfigListError() {
          this.alertService.showAlertDanger(Alert.CONFIG_LIST_ERROR);
        }
      }, {
        key: "lista",
        value: function lista() {
          var _this5 = this;

          this.service.listFilter(this.list).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this5.handleError();

            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
          })).subscribe(function (dados) {
            return _this5.list = dados;
          });
        }
      }, {
        key: "onConfirmeDeleteSuccess",
        value: function onConfirmeDeleteSuccess() {
          this.onRefresh();
          this.alertService.showAlertSuccess(Alert.DELETE_SUCCESS);
        }
      }, {
        key: "onConfirmeDeleteError",
        value: function onConfirmeDeleteError() {
          this.alertService.showAlertDanger(Alert.DELETE_ERROR);
        }
      }]);

      return EmpresasListaComponent;
    }();

    EmpresasListaComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _empresas_service__WEBPACK_IMPORTED_MODULE_7__["EmpresasService"]
      }, {
        type: _shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_8__["AlertModalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal', {
      static: false
    })], EmpresasListaComponent.prototype, "deleteModal", void 0);
    EmpresasListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empresas-lista',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./empresas-lista.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empresas/empresas-lista/empresas-lista.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./empresas-lista.component.scss */
      "./src/app/empresas/empresas-lista/empresas-lista.component.scss")).default]
    })], EmpresasListaComponent);
    /***/
  },

  /***/
  "./src/app/empresas/empresas-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/empresas/empresas-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: EmpresasRoutingModule */

  /***/
  function srcAppEmpresasEmpresasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasRoutingModule", function () {
      return EmpresasRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _empresas_lista_empresas_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empresas-lista/empresas-lista.component */
    "./src/app/empresas/empresas-lista/empresas-lista.component.ts");
    /* harmony import */


    var _empresas_form_empresas_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./empresas-form/empresas-form.component */
    "./src/app/empresas/empresas-form/empresas-form.component.ts");
    /* harmony import */


    var _guards_empresa_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/empresa-resolver.guard */
    "./src/app/empresas/guards/empresa-resolver.guard.ts");

    var routes = [{
      path: '',
      component: _empresas_lista_empresas_lista_component__WEBPACK_IMPORTED_MODULE_3__["EmpresasListaComponent"]
    }, {
      path: 'novo',
      component: _empresas_form_empresas_form_component__WEBPACK_IMPORTED_MODULE_4__["EmpresasFormComponent"],
      resolve: {
        empresa: _guards_empresa_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["EmpresaResolverGuard"]
      }
    }, {
      path: 'editar/:codigo',
      component: _empresas_form_empresas_form_component__WEBPACK_IMPORTED_MODULE_4__["EmpresasFormComponent"],
      resolve: {
        empresa: _guards_empresa_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["EmpresaResolverGuard"]
      }
    }];

    var EmpresasRoutingModule = function EmpresasRoutingModule() {
      _classCallCheck(this, EmpresasRoutingModule);
    };

    EmpresasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmpresasRoutingModule);
    /***/
  },

  /***/
  "./src/app/empresas/empresas.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/empresas/empresas.module.ts ***!
    \*********************************************/

  /*! exports provided: EmpresasModule */

  /***/
  function srcAppEmpresasEmpresasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasModule", function () {
      return EmpresasModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _empresas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./empresas-routing.module */
    "./src/app/empresas/empresas-routing.module.ts");
    /* harmony import */


    var _empresas_lista_empresas_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./empresas-lista/empresas-lista.component */
    "./src/app/empresas/empresas-lista/empresas-lista.component.ts");
    /* harmony import */


    var _empresas_form_empresas_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empresas-form/empresas-form.component */
    "./src/app/empresas/empresas-form/empresas-form.component.ts");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");

    var EmpresasModule = function EmpresasModule() {
      _classCallCheck(this, EmpresasModule);
    };

    EmpresasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_empresas_lista_empresas_lista_component__WEBPACK_IMPORTED_MODULE_5__["EmpresasListaComponent"], _empresas_form_empresas_form_component__WEBPACK_IMPORTED_MODULE_6__["EmpresasFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _empresas_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmpresasRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]]
    })], EmpresasModule);
    /***/
  },

  /***/
  "./src/app/empresas/empresas.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/empresas/empresas.service.ts ***!
    \**********************************************/

  /*! exports provided: EmpresasService */

  /***/
  function srcAppEmpresasEmpresasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasService", function () {
      return EmpresasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/crud-service */
    "./src/app/shared/crud-service.ts");

    var EmpresasService =
    /*#__PURE__*/
    function (_shared_crud_service_) {
      _inherits(EmpresasService, _shared_crud_service_);

      function EmpresasService(http) {
        var _this6;

        _classCallCheck(this, EmpresasService);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(EmpresasService).call(this, http, '/api/Empresa'));
        _this6.http = http;
        return _this6;
      }

      return EmpresasService;
    }(_shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]);

    EmpresasService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmpresasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmpresasService);
    /***/
  },

  /***/
  "./src/app/empresas/guards/empresa-resolver.guard.ts":
  /*!***********************************************************!*\
    !*** ./src/app/empresas/guards/empresa-resolver.guard.ts ***!
    \***********************************************************/

  /*! exports provided: EmpresaResolverGuard */

  /***/
  function srcAppEmpresasGuardsEmpresaResolverGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaResolverGuard", function () {
      return EmpresaResolverGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _empresas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../empresas.service */
    "./src/app/empresas/empresas.service.ts");

    var EmpresaResolverGuard =
    /*#__PURE__*/
    function () {
      function EmpresaResolverGuard(service) {
        _classCallCheck(this, EmpresaResolverGuard);

        this.service = service;
      }

      _createClass(EmpresaResolverGuard, [{
        key: "resolve",
        value: function resolve(route, state) {
          if (route.params && route.params.codigo) {
            return this.service.loadByCodigo(route.params.codigo);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            codigo: null,
            nomeReal: null,
            nomeFantasia: null,
            filiais: null
          });
        }
      }]);

      return EmpresaResolverGuard;
    }();

    EmpresaResolverGuard.ctorParameters = function () {
      return [{
        type: _empresas_service__WEBPACK_IMPORTED_MODULE_3__["EmpresasService"]
      }];
    };

    EmpresaResolverGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmpresaResolverGuard);
    /***/
  }
}]);
//# sourceMappingURL=empresas-empresas-module-es5.js.map