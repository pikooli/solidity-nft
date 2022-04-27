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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Form */ \"./components/Form.tsx\");\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\n/* harmony import */ var services_getWeb3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/getWeb3 */ \"./services/getWeb3.ts\");\n/* harmony import */ var hook_getContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hook/getContract */ \"./hook/getContract.tsx\");\n/* harmony import */ var hook_getAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hook/getAccount */ \"./hook/getAccount.tsx\");\n/* harmony import */ var components_ViewTransaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/ViewTransaction */ \"./components/ViewTransaction.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    var provider = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(value === null || value === void 0 ? void 0 : value.provider);\n    var setProvider = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(value === null || value === void 0 ? void 0 : value.setProvider);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), account1 = ref[0], setAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), contract = ref1[0], setContract = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), values = ref2[0], setValues = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,services_getWeb3__WEBPACK_IMPORTED_MODULE_6__[\"default\"])().then(function(web3) {\n            if (setProvider) setProvider(web3);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        createContract();\n    }, [\n        provider\n    ]);\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!contract) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return contract.methods.awardItem(account1, values.nft).send({\n                            from: account1\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createContract = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract1, account;\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(provider && !contract)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return (0,hook_getContract__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(provider);\n                    case 3:\n                        contract1 = _ctx.sent;\n                        _ctx.next = 6;\n                        return (0,hook_getAccount__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(provider);\n                    case 6:\n                        account = _ctx.sent;\n                        setContract(contract1);\n                        setAccount(account);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createContract() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-56\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onSubmit: onSubmit,\n                    setValues: setValues\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_ViewTransaction__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                provider: provider\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/pages/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"H7U5nsDUHcqZ2QuNdlnjyW2q0NI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFKQSxJQUFJO0FBOENWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcImNvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcImNvbXBvbmVudHMvQXBwQ29udGV4dFwiO1xuaW1wb3J0IGdldFdlYjMgZnJvbSBcInNlcnZpY2VzL2dldFdlYjNcIjtcbmltcG9ydCBnZXRDb250cmFjdCBmcm9tIFwiaG9vay9nZXRDb250cmFjdFwiO1xuaW1wb3J0IGdldEFjY291bnQgZnJvbSBcImhvb2svZ2V0QWNjb3VudFwiO1xuaW1wb3J0IFZpZXdUcmFuc2xhY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvVmlld1RyYW5zYWN0aW9uXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlU3RhdGUodmFsdWU/LnByb3ZpZGVyKTtcbiAgY29uc3Qgc2V0UHJvdmlkZXIgPSB1c2VTdGF0ZSh2YWx1ZT8uc2V0UHJvdmlkZXIpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGU8T2JqPih7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRXZWIzKCkudGhlbigod2ViMykgPT4ge1xuICAgICAgaWYgKHNldFByb3ZpZGVyKSBzZXRQcm92aWRlcih3ZWIzKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3JlYXRlQ29udHJhY3QoKTtcbiAgfSwgW3Byb3ZpZGVyXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjb250cmFjdCkge1xuICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuYXdhcmRJdGVtKGFjY291bnQsIHZhbHVlcy5uZnQpXG4gICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyICYmICFjb250cmFjdCkge1xuICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBnZXRDb250cmFjdChwcm92aWRlcik7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZ2V0QWNjb3VudChwcm92aWRlcik7XG4gICAgICBzZXRDb250cmFjdChjb250cmFjdCk7XG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTZcIj5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzZXRWYWx1ZXM9e3NldFZhbHVlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFZpZXdUcmFuc2xhY3Rpb24gcHJvdmlkZXI9e3Byb3ZpZGVyfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJMYXlvdXQiLCJGb3JtIiwiQXBwQ29udGV4dCIsImdldFdlYjMiLCJnZXRDb250cmFjdCIsImdldEFjY291bnQiLCJWaWV3VHJhbnNsYWN0aW9uIiwiSG9tZSIsInZhbHVlIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInZhbHVlcyIsInNldFZhbHVlcyIsInRoZW4iLCJ3ZWIzIiwiY3JlYXRlQ29udHJhY3QiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJhd2FyZEl0ZW0iLCJuZnQiLCJzZW5kIiwiZnJvbSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});