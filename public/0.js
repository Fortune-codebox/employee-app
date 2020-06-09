(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/employeesOverview.js?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./resources/js/pages/employees/employees-overview/employeesOverview.js?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/actions */ "./resources/js/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    getAllEmployees: function getAllEmployees() {
      var _this = this;

      this.loading = true;
      this.$store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_EMPLOYEES"]).then(function () {
        _this.loading = false;
      });
    },
    deleteEmployee: function deleteEmployee(id) {
      var _this2 = this;

      alert(id);
      this.$store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_EMPLOYEE"], id).then(function () {
        _this2.getAllEmployees();
      });
    },
    editEmployee: function editEmployee(id) {
      this.$router.push({
        name: 'edit-employee',
        params: {
          employeeId: id,
          editing: true
        }
      });
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['employees'])),
  mounted: function mounted() {
    this.getAllEmployees();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-b[data-v-03663123] {\n  margin-left: 77%;\n  padding: 5px 10px;\n  width: 10em;\n  border-radius: 20px;\n  background: #0ec9ae;\n}\n.table-head[data-v-03663123] {\n  font-size: 13px;\n  font-weight: bold;\n  color: grey;\n}\n.badge_adj[data-v-03663123] {\n  background: #0ec9ae;\n  padding: 5px;\n}\n.card[data-v-03663123] {\n  background: #f8f9fa;\n}\n.top-tag[data-v-03663123] {\n  font-size: 13px;\n  font-weight: bold;\n  color: grey;\n}\n.bottom-tag[data-v-03663123] {\n  color: grey;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "router-link",
        { attrs: { to: { name: "add-employee" } } },
        [_c("b-button", { staticClass: "top-b" }, [_vm._v("add employee")])],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-4 table-head pl-3 ml-4" },
        [
          _c(
            "b-col",
            { attrs: { cols: "1" } },
            [
              _c("b-form-checkbox", {
                attrs: { id: "checkbox-1", name: "checkbox-1" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "3" } }, [
            _c("p", [_vm._v("EMPLOYEE")])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "3" } }, [_c("p", [_vm._v("SALARY")])]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "2" } }, [_c("p", [_vm._v("STATUS")])]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "3" } }, [_c("p", [_vm._v("MANAGE")])])
        ],
        1
      ),
      _vm._v(" "),
      !_vm.employees
        ? _c(
            "div",
            [
              _c("b-card", [
                _vm._v(
                  "\n            There are no employees, Please create one by clicking the link above\n       "
                )
              ])
            ],
            1
          )
        : _c(
            "div",
            { staticClass: "container-fluid", staticStyle: { width: "95%" } },
            _vm._l(_vm.employees, function(employee, i) {
              return _c(
                "b-card",
                { key: i, staticClass: "mt-2" },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "1" } },
                        [
                          _c("b-form-checkbox", {
                            attrs: { name: "checkbox-1" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "3" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "3" } }),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "9" } }, [
                                _c("span", { staticClass: "top-tag" }, [
                                  _vm._v(
                                    _vm._s(employee.first_name) +
                                      " " +
                                      _vm._s(employee.last_name)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticClass: "bottom-tag" }, [
                                  _c("small", [
                                    _vm._v(_vm._s(employee.job_title))
                                  ])
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { cols: "3" } }, [
                        _c(
                          "span",
                          { staticClass: "top-tag" },
                          [
                            _vm._v(_vm._s(employee.salary) + " NOK "),
                            _c("b-badge", { staticClass: "badge_adj" }, [
                              _vm._v("New")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "bottom-tag" }, [
                          _c("small", [_vm._v("full time")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "top-tag" }, [
                          _vm._v("test period")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "bottom-tag" }, [
                          _c("small", [_vm._v(_vm._s(employee.period))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "2" } },
                        [
                          _c(
                            "b-row",
                            { staticClass: "mt-2" },
                            [
                              _c(
                                "b-col",
                                {
                                  staticStyle: {
                                    "border-right": "1px solid #dcdcdc"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editEmployee(employee.id)
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "fa fa-pencil",
                                    attrs: { id: "edit" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tooltip",
                                {
                                  attrs: { target: "edit", triggers: "hover" }
                                },
                                [
                                  _vm._v(
                                    "\n                      Edit Employee\n                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteEmployee(employee.id)
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "fa fa-trash-o",
                                    attrs: { id: "delete" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tooltip",
                                {
                                  attrs: { target: "delete", triggers: "hover" }
                                },
                                [
                                  _vm._v(
                                    "\n                      Delete Employee\n                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/employees/employees-overview/EmployeesOverview.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/employees/employees-overview/EmployeesOverview.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmployeesOverview_vue_vue_type_template_id_03663123_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true& */ "./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true&");
/* harmony import */ var _employeesOverview_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employeesOverview.js?vue&type=script&lang=js& */ "./resources/js/pages/employees/employees-overview/employeesOverview.js?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _employeesOverview_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _employeesOverview_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _EmployeesOverview_vue_vue_type_style_index_0_id_03663123_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true& */ "./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _employeesOverview_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeesOverview_vue_vue_type_template_id_03663123_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmployeesOverview_vue_vue_type_template_id_03663123_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03663123",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employees/employees-overview/EmployeesOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_style_index_0_id_03663123_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=style&index=0&id=03663123&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_style_index_0_id_03663123_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_style_index_0_id_03663123_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_style_index_0_id_03663123_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_style_index_0_id_03663123_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_style_index_0_id_03663123_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_template_id_03663123_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/EmployeesOverview.vue?vue&type=template&id=03663123&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_template_id_03663123_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeesOverview_vue_vue_type_template_id_03663123_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/employees/employees-overview/employeesOverview.js?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/employees/employees-overview/employeesOverview.js?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_employeesOverview_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!./employeesOverview.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./resources/js/pages/employees/employees-overview/employeesOverview.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_employeesOverview_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);