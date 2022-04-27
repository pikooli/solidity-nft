"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Form */ \"./components/Form.tsx\");\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\n/* harmony import */ var hook_getContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hook/getContract */ \"./hook/getContract.tsx\");\n/* harmony import */ var hook_getAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hook/getAccount */ \"./hook/getAccount.tsx\");\n/* harmony import */ var components_ViewTransaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ViewTransaction */ \"./components/ViewTransaction.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var ref;\n    _s();\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    var provider = context === null || context === void 0 ? void 0 : (ref = context.values) === null || ref === void 0 ? void 0 : ref.provider;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), account1 = ref1[0], setAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), contract = ref2[0], setContract = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), values = ref3[0], setValues = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        createContract();\n    }, [\n        provider\n    ]);\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!contract) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return contract.methods.awardItem(account1, values.nft).send({\n                            from: account1\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createContract = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract1, account;\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(provider && !contract)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return (0,hook_getContract__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(provider);\n                    case 3:\n                        contract1 = _ctx.sent;\n                        _ctx.next = 6;\n                        return (0,hook_getAccount__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(provider);\n                    case 6:\n                        account = _ctx.sent;\n                        setContract(contract1);\n                        setAccount(account);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createContract() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-56\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onSubmit: onSubmit,\n                    setValues: setValues\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_ViewTransaction__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"WU1KWjJqUaHJIKpX1bEvDf4CAXk=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ2pCO0FBQ0o7QUFDWTtBQUVKO0FBQ0Y7QUFDaUI7O0FBRXpELEdBQUssQ0FBQ1MsSUFBSSxHQUFhLFFBQ3ZCLEdBRDZCLENBQUM7UUFFWEMsR0FBZTs7SUFEaEMsR0FBSyxDQUFDQSxPQUFPLEdBQUdSLGlEQUFVLENBQUNHLDZEQUFVO0lBQ3JDLEdBQUssQ0FBQ00sUUFBUSxHQUFHRCxPQUFPLGFBQVBBLE9BQU8sY0FBUEEsSUFBSSxDQUFKQSxDQUFlLElBQWZBLEdBQWUsR0FBZkEsT0FBTyxDQUFFRSxNQUFNLGNBQWZGLEdBQWUsY0FBZkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLEdBQWUsQ0FBRUMsUUFBUTtJQUMxQyxHQUFLLENBQXlCVixJQUFrQixHQUFsQkEsK0NBQVEsSUFBL0JZLFFBQU8sR0FBZ0JaLElBQWtCLEtBQWhDYSxVQUFVLEdBQUliLElBQWtCO0lBQ2hELEdBQUssQ0FBMkJBLElBQWUsR0FBZkEsK0NBQVEsSUFBakNjLFFBQVEsR0FBaUJkLElBQWUsS0FBOUJlLFdBQVcsR0FBSWYsSUFBZTtJQUMvQyxHQUFLLENBQXVCQSxJQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFDLENBQUMsR0FBckNXLE1BQU0sR0FBZVgsSUFBaUIsS0FBOUJnQixTQUFTLEdBQUloQixJQUFpQjtJQUU3Q0QsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZmtCLGNBQWMsRUFBRSxDQUFDO0lBQ25CLENBQUMsRUFBRSxDQUFDUDtRQUFBQSxRQUFRO0lBQUEsQ0FBQyxDQUFDLENBQUM7SUFFZixHQUFLLENBQUNRLFFBQVE7dUxBQUcsUUFBUSxTQUFEQyxDQUFZLEVBQUssQ0FBQzs7Ozt3QkFDeENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7NkJBQ2ZOLFFBQVE7Ozs7OytCQUNKQSxRQUFRLENBQUNPLE9BQU8sQ0FDbkJDLFNBQVMsQ0FBQ1YsUUFBTyxFQUFFRCxNQUFNLENBQUNZLEdBQUcsRUFDN0JDLElBQUksQ0FBQyxDQUFDOzRCQUFDQyxJQUFJLEVBQUViLFFBQU87d0JBQUMsQ0FBQzs7Ozs7O1FBRTdCLENBQUM7d0JBUEtNLFFBQVEsQ0FBVUMsQ0FBWTs7OztJQVNwQyxHQUFLLENBQUNGLGNBQWM7dUxBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRTFCSCxTQUFRLEVBQ1JGLE9BQU87Ozs7OEJBRlhGLFFBQVEsS0FBS0ksUUFBUTs7Ozs7K0JBQ0FULDREQUFXLENBQUNLLFFBQVE7O3dCQUFyQ0ksU0FBUSxZQWhDcEIsQ0FnQ2tEOzsrQkFDdEJSLDJEQUFVLENBQUNJLFFBQVE7O3dCQUFuQ0UsT0FBTyxZQWpDbkIsQ0FpQ2dEO3dCQUMxQ0csV0FBVyxDQUFDRCxTQUFRLENBQUMsQ0FBQzt3QkFDdEJELFVBQVUsQ0FBQ0QsT0FBTyxDQUFDLENBQUM7Ozs7OztRQUV4QixDQUFDO3dCQVBLSyxjQUFjOzs7O0lBU3BCLE1BQU0sNkVBQ0hmLHlEQUFNOzt3RkFDSndCLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFNO3NHQUNsQnhCLHVEQUFJO29CQUFDZSxRQUFRLEVBQUVBLFFBQVE7b0JBQUVGLFNBQVMsRUFBRUEsU0FBUzs7Ozs7Ozs7Ozs7d0ZBRS9DVCxrRUFBZ0I7Ozs7Ozs7Ozs7O0FBR3ZCLENBQUM7R0FyQ0tDLElBQUk7S0FBSkEsSUFBSTtBQXVDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJjb21wb25lbnRzL0Zvcm1cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJjb21wb25lbnRzL0FwcENvbnRleHRcIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gXCJzZXJ2aWNlcy9nZXRXZWIzXCI7XG5pbXBvcnQgZ2V0Q29udHJhY3QgZnJvbSBcImhvb2svZ2V0Q29udHJhY3RcIjtcbmltcG9ydCBnZXRBY2NvdW50IGZyb20gXCJob29rL2dldEFjY291bnRcIjtcbmltcG9ydCBWaWV3VHJhbnNsYWN0aW9uIGZyb20gXCJjb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvblwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gY29udGV4dD8udmFsdWVzPy5wcm92aWRlcjtcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlPE9iaj4oe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3JlYXRlQ29udHJhY3QoKTtcbiAgfSwgW3Byb3ZpZGVyXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjb250cmFjdCkge1xuICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuYXdhcmRJdGVtKGFjY291bnQsIHZhbHVlcy5uZnQpXG4gICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyICYmICFjb250cmFjdCkge1xuICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBnZXRDb250cmFjdChwcm92aWRlcik7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZ2V0QWNjb3VudChwcm92aWRlcik7XG4gICAgICBzZXRDb250cmFjdChjb250cmFjdCk7XG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTZcIj5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzZXRWYWx1ZXM9e3NldFZhbHVlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFZpZXdUcmFuc2xhY3Rpb24gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTGF5b3V0IiwiRm9ybSIsIkFwcENvbnRleHQiLCJnZXRDb250cmFjdCIsImdldEFjY291bnQiLCJWaWV3VHJhbnNsYWN0aW9uIiwiSG9tZSIsImNvbnRleHQiLCJwcm92aWRlciIsInZhbHVlcyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInNldFZhbHVlcyIsImNyZWF0ZUNvbnRyYWN0Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2RzIiwiYXdhcmRJdGVtIiwibmZ0Iiwic2VuZCIsImZyb20iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});