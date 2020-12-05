function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/alert-modal.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/alert-modal.service.ts ***!
    \***********************************************/

  /*! exports provided: AlertTypes, AlertModalService */

  /***/
  function srcAppSharedAlertModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertTypes", function () {
      return AlertTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModalService", function () {
      return AlertModalService;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert-modal/alert-modal.component */
    "./src/app/shared/alert-modal/alert-modal.component.ts");
    /* harmony import */


    var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./confirm-modal/confirm-modal.component */
    "./src/app/shared/confirm-modal/confirm-modal.component.ts");
    /* harmony import */


    var _config_list_modal_config_list_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./config-list-modal/config-list-modal.component */
    "./src/app/shared/config-list-modal/config-list-modal.component.ts");

    var AlertTypes;

    (function (AlertTypes) {
      AlertTypes["DANGER"] = "danger";
      AlertTypes["SUCCESS"] = "success";
    })(AlertTypes || (AlertTypes = {}));

    var AlertModalService =
    /*#__PURE__*/
    function () {
      function AlertModalService(modalService) {
        _classCallCheck(this, AlertModalService);

        this.modalService = modalService;
      }

      _createClass(AlertModalService, [{
        key: "showAlert",
        value: function showAlert(message, type, dismissTimeount) {
          var bsModalRef = this.modalService.show(_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__["AlertModalComponent"]);
          bsModalRef.content.type = type;
          bsModalRef.content.message = message;

          if (dismissTimeount) {
            setTimeout(function () {
              return bsModalRef.hide();
            }, dismissTimeount);
          }
        }
      }, {
        key: "showAlertDanger",
        value: function showAlertDanger(message) {
          this.showAlert(message, AlertTypes.DANGER);
        }
      }, {
        key: "showAlertSuccess",
        value: function showAlertSuccess(message) {
          this.showAlert(message, AlertTypes.SUCCESS, 2000);
        }
      }, {
        key: "showConfirm",
        value: function showConfirm(title, msg, okText, cancelTxt) {
          var bsModelRef = this.modalService.show(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"]);
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
      }, {
        key: "showConfigList",
        value: function showConfigList(configList) {
          var bsModelRef = this.modalService.show(_config_list_modal_config_list_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfigListModalComponent"]);
          bsModelRef.content.pagination = configList.pagination;
          bsModelRef.content.pageSize = configList.pageSize;
          return bsModelRef.content.confirmResult;
        }
      }]);

      return AlertModalService;
    }();

    AlertModalService.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    AlertModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertModalService);
    /***/
  },

  /***/
  "./src/app/shared/crud-service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/crud-service.ts ***!
    \****************************************/

  /*! exports provided: CrudService */

  /***/
  function srcAppSharedCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudService", function () {
      return CrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CrudService =
    /*#__PURE__*/
    function () {
      function CrudService(http, API_URL) {
        _classCallCheck(this, CrudService);

        this.http = http;
        this.API_URL = API_URL;
      }

      _createClass(CrudService, [{
        key: "list",
        value: function list() {
          return this.http.get("".concat(this.API_URL, "/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }, {
        key: "listFilter",
        value: function listFilter(record) {
          return this.http.post("".concat(this.API_URL, "/lista"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }, {
        key: "loadByCodigo",
        value: function loadByCodigo(codigo) {
          return this.http.get("".concat(this.API_URL, "/").concat(codigo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }, {
        key: "create",
        value: function create(record) {
          return this.http.post(this.API_URL, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }, {
        key: "update",
        value: function update(record) {
          return this.http.put(this.API_URL, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }, {
        key: "save",
        value: function save(record, edit) {
          return edit ? this.update(record) : this.create(record);
        }
      }, {
        key: "remove",
        value: function remove(codigo) {
          return this.http.delete("".concat(this.API_URL, "/").concat(codigo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
      }]);

      return CrudService;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map