(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filiais-filiais-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filiais/filiais-form/filiais-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filiais/filiais-form/filiais-form.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"needs-validation\" novalidate [formGroup]=\"form\">\n  <div class=\"card border-primary mb-3\">\n    <div class=\"card-header\">\n      <h4>Filial: <small class=\"text-secondary\">{{ form.controls['nome'].value }}</small></h4>\n    </div>\n    <div class=\"card-body text-primary\">\n      <div class=\"form-row mb-3\">\n        <div class=\"col-sm-12\">\n          <label for=\"codigo\">Código</label>\n          <input [readonly]=\"edit\" type=\"text\" class=\"form-control\" id=\"codigo\" placeholder=\"Código\" formControlName=\"codigo\"  [ngClass]=\"{'is-invalid': submitted && hasError('codigo')}\" />\n          <div class=\"valid-feedback\"></div>\n          <div class=\"invalid-feedback\" *ngIf=\"hasError('codigo') && hasError('codigo')['required']\">\n            Por favor informe um código para a filial.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row mb-3\">\n        <div class=\"col-sm-12\">\n          <label for=\"nome\">Nome</label>\n          <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome\" formControlName=\"nome\" [ngClass]=\"{ 'is-invalid': submitted && hasError('nome')}\" />\n          <div class=\"valid-feedback\"></div>\n          <div class=\"invalid-feedback\" *ngIf=\"hasError('nome') && hasError('nome')['required']\">\n            Por favor informe um nome real para a filial.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row mb-3\">\n        <div class=\"col-sm-12\" *ngIf=\"empresas; else loadingEmpresa\">\n          <label for=\"empresaCodigo\">Empresa</label>\n          <select class=\"form-control\" id=\"empresaCodigo\" formControlName=\"empresaCodigo\" [ngClass]=\"{ 'is-invalid': submitted && hasError('empresaCodigo')}\">\n            <option *ngFor=\"let empresa of empresas.data\" value= {{empresa.codigo}}>\n              {{empresa.codigo}} - {{empresa.nomeFantasia}}\n            </option>\n          </select>\n          <div class=\"valid-feedback\"></div>\n          <div class=\"invalid-feedback\" *ngIf=\"hasError('empresaCodigo') && hasError('empresaCodigo')['required']\">\n            Por favor informe uma empresa para esta filial.\n          </div>\n        </div>\n        <ng-template #loadingEmpresa>\n          <div class=\"col-sm-12\">\n            <select class=\"form-control\" disabled ></select>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-row btn-row form-row-btn\">\n    <button class=\"btn btn-outline-secondary mr-2\" (click)=\"onBack()\">Voltar</button>\n    <button class=\"btn btn-outline-primary\" (click)=\"onSubmit()\">Salvar</button>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filiais/filiais-lista/filiais-lista.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filiais/filiais-lista/filiais-lista.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"float-left text-primary\">\n      <span class=\"icon icon-home3 title\"></span>\n      <h4 class=\"title\">Filiais</h4>\n    </div>\n    <div class=\"float-right\">\n      <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [routerLink]=\"['novo']\">Nova</button>\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onRefresh()\">Atualizar</button>\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\n            [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">Filtrar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n\n    <div id=\"collapseBasic\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\" class=\"bg-light mb-3 rounded shadow-sm\">\n      <form class=\"needs-validation\" novalidate [formGroup]=\"form\">\n        <div class=\"form-row pr-3 pl-3\">\n          <div class=\"col-sm-4 mb-3\">\n            <label class=\"col-form-label\" for=\"codigo\">#</label>\n            <input type=\"text\" class=\"form-control\" id=\"codigo\" placeholder=\"Código\" formControlName=\"codigo\" />\n          </div>\n          <div class=\"col-sm-8 mb-3\">\n            <label class=\"col-form-label\" for=\"nome\">Filial</label>\n            <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Filial\" formControlName=\"nome\" />\n          </div>\n        </div>\n        <div class=\"form-row pr-3 pl-3\">\n          <div class=\"col-sm-12 mb-3 text-right\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onFilterConfirm()\">Aplicar Filtro</button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <table class=\"table table-striped mobile-optimised\" *ngIf=\"filialLista; else loading\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Filial</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let filial of filialLista.data\">\n          <td data-th=\"#\">{{ filial.codigo }}</td>\n          <td data-th=\"Empresa\">{{ filial.nome }}</td>\n          <td>\n            <span class=\"float-right\">\n              <button class=\"btn btn-outline-info mb-1 btn-sm mr-2\" (click)=\"onEdit(filial.codigo)\">Atualizar</button>\n              <button class=\"btn btn-outline-danger mb-1 btn-sm\" (click)=\"onDelete(filial.codigo)\">Remover</button>\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #loading>\n      <span>Carregando Filiais...</span>\n    </ng-template>\n  </div>\n  <div class=\"card-footer text-muted\" *ngIf=\"filialLista && filialLista.pageCount > 1\">\n    <div class=\"float-left\">\n      <nav aria-label=\"Page navigation example\" *ngIf=\"filialLista\">\n        <ul class=\"pagination mb-0\">\n          <li class=\"page-item\">\n            <span class=\"page-link link-pointer\" (click)=\"onPagination(1)\">\n              <\n              <span class=\"sr-only\">(current)</span>\n            </span>\n          </li>\n          <li class=\"page-item\" *ngFor=\"let page of filialLista.pages\" [ngClass]=\"{'active': page == filialLista.pageNow}\" aria-current=\"page\">\n            <span class=\"page-link\" [ngClass]=\"{'link-pointer': page != filialLista.pageNow}\" (click)=\"onPagination(page)\">\n              {{ page }}\n              <span class=\"sr-only\">(current)</span>\n            </span>\n          </li>\n          <li class=\"page-item\">\n            <span class=\"page-link link-pointer\" (click)=\"onPagination(filialLista.pageCount)\">\n              >\n              <span class=\"sr-only\">(current)</span>\n            </span>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"float-right text-primary pagination-ds\">\n      {{filialLista.pageNow}} de {{filialLista.pageCount}} paginas ( {{filialLista.regCount}} itens )\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/filiais/filiais-form/filiais-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/filiais/filiais-form/filiais-form.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGlhaXMvZmlsaWFpcy1mb3JtL2ZpbGlhaXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/filiais/filiais-form/filiais-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/filiais/filiais-form/filiais-form.component.ts ***!
  \****************************************************************/
/*! exports provided: Alert, FiliaisFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiliaisFormComponent", function() { return FiliaisFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _filiais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filiais.service */ "./src/app/filiais/filiais.service.ts");
/* harmony import */ var src_app_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/alert-modal.service */ "./src/app/shared/alert-modal.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









var Alert;
(function (Alert) {
    Alert["UPDATE_SUCCESS"] = "Filial atualizada com sucesso!";
    Alert["UPDATE_ERROR"] = "Erro ao atualizar filial, tente novamente!";
    Alert["CREATE_SUCCESS"] = "Filial criada com sucesso!";
    Alert["CREATE_ERROR"] = "Erro ao criar filial, tente novamente!";
    Alert["EMPRESA_ERROR"] = "Erro ao carregar empresas. Tente novamente mais tarde.";
})(Alert || (Alert = {}));
let FiliaisFormComponent = class FiliaisFormComponent {
    constructor(fb, service, modal, location, route) {
        this.fb = fb;
        this.service = service;
        this.modal = modal;
        this.location = location;
        this.route = route;
    }
    ngOnInit() {
        this.onLoadEmpresas();
        const filial = this.route.snapshot.data.filial;
        this.edit = (filial.codigo == null) ? false : true;
        this.form = this.fb.group({
            codigo: [filial.codigo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nome: [filial.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empresaCodigo: [filial.empresaCodigo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.submitted = false;
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            this.service.save(this.form.value, this.edit).subscribe(success => { this.edit ? this.onUpdate() : this.onCreate(); }, error => this.modal.showAlertDanger(this.edit ? Alert.UPDATE_ERROR : Alert.CREATE_ERROR));
        }
    }
    handleEmpresaError() {
        this.modal.showAlertDanger(Alert.EMPRESA_ERROR);
    }
    onLoadEmpresas() {
        this.service.listEmpresa().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(error => {
            this.handleEmpresaError();
            return rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        })).subscribe(dados => this.empresas = dados);
    }
    onUpdate() {
        this.modal.showAlertSuccess(Alert.UPDATE_SUCCESS);
        this.onBack();
    }
    onCreate() {
        this.modal.showAlertSuccess(Alert.CREATE_SUCCESS);
        this.submitted = false;
        this.form.reset();
    }
    hasError(field) {
        return this.form.get(field).errors;
    }
    onCancel() {
        this.submitted = false;
        this.form.reset();
    }
    onBack() {
        this.location.back();
    }
};
FiliaisFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _filiais_service__WEBPACK_IMPORTED_MODULE_5__["FiliaisService"] },
    { type: src_app_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FiliaisFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filiais-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filiais-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filiais/filiais-form/filiais-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filiais-form.component.scss */ "./src/app/filiais/filiais-form/filiais-form.component.scss")).default]
    })
], FiliaisFormComponent);



/***/ }),

/***/ "./src/app/filiais/filiais-lista/filiais-lista.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/filiais/filiais-lista/filiais-lista.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGlhaXMvZmlsaWFpcy1saXN0YS9maWxpYWlzLWxpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/filiais/filiais-lista/filiais-lista.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/filiais/filiais-lista/filiais-lista.component.ts ***!
  \******************************************************************/
/*! exports provided: Alert, FiliaisListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiliaisListaComponent", function() { return FiliaisListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _filiais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filiais.service */ "./src/app/filiais/filiais.service.ts");
/* harmony import */ var src_app_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/alert-modal.service */ "./src/app/shared/alert-modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");










var Alert;
(function (Alert) {
    Alert["LISTA_ERROR"] = "Erro ao carregar filiais. Tente novamente mais tarde.";
    Alert["CONFIRMACAO_EXCLUSAO"] = "Tem certeza que deseja remover essa filial?";
    Alert["DELETE_SUCCESS"] = "Filial removida com sucesso!";
    Alert["DELETE_ERROR"] = "Erro ao remover filial. Tente novamente mais tarde!";
    Alert["SESSION_STORAGE"] = "filialLista";
})(Alert || (Alert = {}));
let FiliaisListaComponent = class FiliaisListaComponent {
    constructor(fb, service, alertService, router, route, modalService, collapse) {
        this.fb = fb;
        this.service = service;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.collapse = collapse;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
    ngOnInit() {
        const sessionLista = JSON.parse(sessionStorage.getItem(Alert.SESSION_STORAGE));
        if (sessionLista != null) {
            this.list = sessionLista;
        }
        // tslint:disable-next-line: one-variable-per-declaration
        let codigo, nome, filter;
        if (this.list.filters.length >= 1) {
            this.isCollapsed = false;
            filter = this.list.filters;
            // tslint:disable-next-line: triple-equals
            codigo = filter.find(x => x.name == 'codigo') ? filter.find(x => x.name == 'codigo').value : null;
            // tslint:disable-next-line: triple-equals
            nome = filter.find(x => x.name == 'nome') ? filter.find(x => x.name == 'nome').value : null;
        }
        this.lista();
        this.form = this.fb.group({
            codigo: [codigo],
            nome: [nome]
        });
    }
    onRefresh() {
        this.list.filters = [];
        this.list.pageNow = 1;
        this.isCollapsed = true;
        this.form.reset();
        this.lista();
        sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
    }
    onFilter(template) {
        this.filterModalRef = this.modalService.show(template);
    }
    onPagination(page) {
        this.list.pageNow = page;
        this.lista();
        sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
    }
    onFilterConfirm() {
        this.list.filters = [];
        this.list.pageNow = 1;
        Object.keys(this.form.controls).forEach(key => {
            // tslint:disable-next-line: triple-equals
            if (this.form.get(key).value != null && this.form.get(key).value != '') {
                this.list.filters.push({
                    name: key,
                    value: this.form.get(key).value
                });
            }
        });
        this.lista();
        sessionStorage.setItem(Alert.SESSION_STORAGE, JSON.stringify(this.list));
    }
    handleError() {
        this.alertService.showAlertDanger(Alert.LISTA_ERROR);
    }
    onEdit(codigo) {
        this.router.navigate(['editar', codigo], { relativeTo: this.route });
    }
    onDelete(codigo) {
        const result$ = this.alertService.showConfirm('Confirmação', Alert.CONFIRMACAO_EXCLUSAO);
        result$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(result => result ? this.service.remove(codigo) : rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]))
            .subscribe(success => this.onConfirmeDeleteSuccess(), error => this.onConfirmeDeleteError());
    }
    lista() {
        this.service.listFilter(this.list).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(error => {
            this.handleError();
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        })).subscribe(dados => this.filialLista = dados);
    }
    onConfirmeDeleteSuccess() {
        this.onRefresh();
        this.alertService.showAlertSuccess(Alert.DELETE_SUCCESS);
    }
    onConfirmeDeleteError() {
        this.alertService.showAlertDanger(Alert.DELETE_ERROR);
    }
};
FiliaisListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _filiais_service__WEBPACK_IMPORTED_MODULE_5__["FiliaisService"] },
    { type: src_app_shared_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal', { static: false })
], FiliaisListaComponent.prototype, "deleteModal", void 0);
FiliaisListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filiais-lista',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filiais-lista.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filiais/filiais-lista/filiais-lista.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filiais-lista.component.scss */ "./src/app/filiais/filiais-lista/filiais-lista.component.scss")).default]
    })
], FiliaisListaComponent);



/***/ }),

/***/ "./src/app/filiais/filiais-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/filiais/filiais-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FiliaisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiliaisRoutingModule", function() { return FiliaisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _filiais_lista_filiais_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filiais-lista/filiais-lista.component */ "./src/app/filiais/filiais-lista/filiais-lista.component.ts");
/* harmony import */ var _filiais_form_filiais_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filiais-form/filiais-form.component */ "./src/app/filiais/filiais-form/filiais-form.component.ts");
/* harmony import */ var _guards_filial_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/filial-resolver.guard */ "./src/app/filiais/guards/filial-resolver.guard.ts");






const routes = [
    { path: '', component: _filiais_lista_filiais_lista_component__WEBPACK_IMPORTED_MODULE_3__["FiliaisListaComponent"] },
    { path: 'novo', component: _filiais_form_filiais_form_component__WEBPACK_IMPORTED_MODULE_4__["FiliaisFormComponent"], resolve: { filial: _guards_filial_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["FilialResolverGuard"] } },
    { path: 'editar/:codigo', component: _filiais_form_filiais_form_component__WEBPACK_IMPORTED_MODULE_4__["FiliaisFormComponent"], resolve: { filial: _guards_filial_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["FilialResolverGuard"] } },
];
let FiliaisRoutingModule = class FiliaisRoutingModule {
};
FiliaisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FiliaisRoutingModule);



/***/ }),

/***/ "./src/app/filiais/filiais.module.ts":
/*!*******************************************!*\
  !*** ./src/app/filiais/filiais.module.ts ***!
  \*******************************************/
/*! exports provided: FiliaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiliaisModule", function() { return FiliaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _filiais_form_filiais_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filiais-form/filiais-form.component */ "./src/app/filiais/filiais-form/filiais-form.component.ts");
/* harmony import */ var _filiais_lista_filiais_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filiais-lista/filiais-lista.component */ "./src/app/filiais/filiais-lista/filiais-lista.component.ts");
/* harmony import */ var _filiais_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filiais-routing.module */ "./src/app/filiais/filiais-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");








let FiliaisModule = class FiliaisModule {
};
FiliaisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filiais_form_filiais_form_component__WEBPACK_IMPORTED_MODULE_3__["FiliaisFormComponent"], _filiais_lista_filiais_lista_component__WEBPACK_IMPORTED_MODULE_4__["FiliaisListaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _filiais_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiliaisRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"]
        ]
    })
], FiliaisModule);



/***/ }),

/***/ "./src/app/filiais/filiais.service.ts":
/*!********************************************!*\
  !*** ./src/app/filiais/filiais.service.ts ***!
  \********************************************/
/*! exports provided: FiliaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiliaisService", function() { return FiliaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/crud-service */ "./src/app/shared/crud-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FiliaisService = class FiliaisService extends _shared_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] {
    constructor(http) {
        super(http, '/api/Filial');
        this.http = http;
    }
    listEmpresa() {
        return this.http.get('/api/Empresa/lista').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
FiliaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FiliaisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FiliaisService);



/***/ }),

/***/ "./src/app/filiais/guards/filial-resolver.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/filiais/guards/filial-resolver.guard.ts ***!
  \*********************************************************/
/*! exports provided: FilialResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialResolverGuard", function() { return FilialResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _filiais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filiais.service */ "./src/app/filiais/filiais.service.ts");




let FilialResolverGuard = class FilialResolverGuard {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        if (route.params && route.params.codigo) {
            return this.service.loadByCodigo(route.params.codigo);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            codigo: null,
            nome: null,
            empresaCodigo: null,
            empresa: null,
        });
    }
};
FilialResolverGuard.ctorParameters = () => [
    { type: _filiais_service__WEBPACK_IMPORTED_MODULE_3__["FiliaisService"] }
];
FilialResolverGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilialResolverGuard);



/***/ })

}]);
//# sourceMappingURL=filiais-filiais-module-es2015.js.map