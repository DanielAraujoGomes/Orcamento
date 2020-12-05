(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/alert-modal.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/alert-modal.service.ts ***!
  \***********************************************/
/*! exports provided: AlertTypes, AlertModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertTypes", function() { return AlertTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModalService", function() { return AlertModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-modal/alert-modal.component */ "./src/app/shared/alert-modal/alert-modal.component.ts");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-modal/confirm-modal.component */ "./src/app/shared/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _config_list_modal_config_list_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-list-modal/config-list-modal.component */ "./src/app/shared/config-list-modal/config-list-modal.component.ts");






var AlertTypes;
(function (AlertTypes) {
    AlertTypes["DANGER"] = "danger";
    AlertTypes["SUCCESS"] = "success";
})(AlertTypes || (AlertTypes = {}));
let AlertModalService = class AlertModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showAlert(message, type, dismissTimeount) {
        const bsModalRef = this.modalService.show(_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__["AlertModalComponent"]);
        bsModalRef.content.type = type;
        bsModalRef.content.message = message;
        if (dismissTimeount) {
            setTimeout(() => bsModalRef.hide(), dismissTimeount);
        }
    }
    showAlertDanger(message) {
        this.showAlert(message, AlertTypes.DANGER);
    }
    showAlertSuccess(message) {
        this.showAlert(message, AlertTypes.SUCCESS, 2000);
    }
    showConfirm(title, msg, okText, cancelTxt) {
        const bsModelRef = this.modalService.show(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"]);
        bsModelRef.content.title = title;
        bsModelRef.content.msg = msg;
        if (okText) {
            bsModelRef.content.okText = okText;
        }
        if (cancelTxt) {
            bsModelRef.content.cancelText = cancelTxt;
        }
        return bsModelRef.content.confirmResult;
    }
    showConfigList(configList) {
        const bsModelRef = this.modalService.show(_config_list_modal_config_list_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfigListModalComponent"]);
        bsModelRef.content.pagination = configList.pagination;
        bsModelRef.content.pageSize = configList.pageSize;
        return bsModelRef.content.confirmResult;
    }
};
AlertModalService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
AlertModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertModalService);



/***/ }),

/***/ "./src/app/shared/crud-service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/crud-service.ts ***!
  \****************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class CrudService {
    constructor(http, API_URL) {
        this.http = http;
        this.API_URL = API_URL;
    }
    list() {
        return this.http.get(`${this.API_URL}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    listFilter(record) {
        return this.http.post(`${this.API_URL}/lista`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    loadByCodigo(codigo) {
        return this.http.get(`${this.API_URL}/${codigo}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    create(record) {
        return this.http.post(this.API_URL, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    update(record) {
        return this.http.put(this.API_URL, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    save(record, edit) {
        return (edit) ? this.update(record) : this.create(record);
    }
    remove(codigo) {
        return this.http.delete(`${this.API_URL}/${codigo}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map