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

/***/ "./components/ViewTransaction.tsx":
/*!****************************************!*\
  !*** ./components/ViewTransaction.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _throw(e) {\n    throw e;\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transaction1 = ref1[0], setTransaction = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subscription = ref2[0], setSubscription = ref2[1];\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    var provider = context === null || context === void 0 ? void 0 : (ref = context.values) === null || ref === void 0 ? void 0 : ref.provider;\n    var getLastTransaction = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var lastBlockNumber, lastBlock;\n        return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!provider) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    _ctx.next = 3;\n                    return provider.eth.getBlockNumber();\n                case 3:\n                    lastBlockNumber = _ctx.sent;\n                    _ctx.next = 6;\n                    return provider.eth.getBlock(lastBlockNumber);\n                case 6:\n                    lastBlock = _ctx.sent;\n                    provider.eth.getTransaction(lastBlock.transactions[0], function(error, transaction) {\n                        setTransaction(transaction);\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        provider\n    ]);\n    var setLog = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(error, log) {\n        setTransaction(log);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, setLog));\n            getLastTransaction();\n            return function() {\n                subscription && subscription.unsubscribe(setLog);\n            };\n        }\n    }, [\n        provider\n    ]);\n    console.log(transaction1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-2/3 break-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: \"Last transaction :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    JSON.stringify(transaction1)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: \"Information :\"\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"jfPGTNE24RVoi2uhIMFhZW/ovdY=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STNDLENBQUM7R0EzQ0t2QixlQUFlO0tBQWZBLGVBQWU7QUE2Q3JCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWV3VHJhbnNhY3Rpb24udHN4P2ExZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiY29tcG9uZW50cy9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gXCJjb21wb25lbnRzL3dlYjNcIjtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBWaWV3VHJhbnNhY3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW3N1YnNjcmlwdGlvbiwgc2V0U3Vic2NyaXB0aW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gY29udGV4dD8udmFsdWVzPy5wcm92aWRlcjtcblxuICBjb25zdCBnZXRMYXN0VHJhbnNhY3Rpb24gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICBjb25zdCBsYXN0QmxvY2tOdW1iZXIgPSBhd2FpdCBwcm92aWRlci5ldGguZ2V0QmxvY2tOdW1iZXIoKTtcbiAgICAgIGNvbnN0IGxhc3RCbG9jayA9IGF3YWl0IHByb3ZpZGVyLmV0aC5nZXRCbG9jayhsYXN0QmxvY2tOdW1iZXIpO1xuICAgICAgcHJvdmlkZXIuZXRoLmdldFRyYW5zYWN0aW9uKFxuICAgICAgICBsYXN0QmxvY2sudHJhbnNhY3Rpb25zWzBdLFxuICAgICAgICAoZXJyb3IsIHRyYW5zYWN0aW9uKSA9PiB7XG4gICAgICAgICAgc2V0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSwgW3Byb3ZpZGVyXSk7XG5cbiAgY29uc3Qgc2V0TG9nID0gdXNlQ2FsbGJhY2soKGVycm9yLCBsb2cpID0+IHtcbiAgICBzZXRUcmFuc2FjdGlvbihsb2cpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyICYmICFzdWJzY3JpcHRpb24pIHtcbiAgICAgIHNldFN1YnNjcmlwdGlvbihwcm92aWRlci5ldGguc3Vic2NyaWJlKFwibG9nc1wiLCB7fSwgc2V0TG9nKSk7XG4gICAgICBnZXRMYXN0VHJhbnNhY3Rpb24oKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoc2V0TG9nKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKTtcbiAgY29uc29sZS5sb2codHJhbnNhY3Rpb24pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgYnJlYWstYWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5MYXN0IHRyYW5zYWN0aW9uIDo8L2Rpdj5cbiAgICAgICAge0pTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+SW5mb3JtYXRpb24gOjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3VHJhbnNhY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsIkFwcENvbnRleHQiLCJWaWV3VHJhbnNhY3Rpb24iLCJjb250ZXh0IiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsInN1YnNjcmlwdGlvbiIsInNldFN1YnNjcmlwdGlvbiIsInByb3ZpZGVyIiwidmFsdWVzIiwiZ2V0TGFzdFRyYW5zYWN0aW9uIiwibGFzdEJsb2NrTnVtYmVyIiwibGFzdEJsb2NrIiwiZXRoIiwiZ2V0QmxvY2tOdW1iZXIiLCJnZXRCbG9jayIsImdldFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25zIiwiZXJyb3IiLCJzZXRMb2ciLCJsb2ciLCJzdWJzY3JpYmUiLCJ1bnN1YnNjcmliZSIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});