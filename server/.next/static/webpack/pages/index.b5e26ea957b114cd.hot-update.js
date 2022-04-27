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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\n/* harmony import */ var components_web3_Transfer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/web3/Transfer */ \"./components/web3/Transfer.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _throw(e) {\n    throw e;\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transaction1 = ref1[0], setTransaction = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subscription = ref2[0], setSubscription = ref2[1];\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    var provider = context === null || context === void 0 ? void 0 : (ref = context.values) === null || ref === void 0 ? void 0 : ref.provider;\n    var getLastTransaction = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var lastBlockNumber, lastBlock;\n        return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!provider) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    _ctx.next = 3;\n                    return provider.eth.getBlockNumber();\n                case 3:\n                    lastBlockNumber = _ctx.sent;\n                    _ctx.next = 6;\n                    return provider.eth.getBlock(lastBlockNumber);\n                case 6:\n                    lastBlock = _ctx.sent;\n                    provider.eth.getTransaction(lastBlock.transactions[0], function(error, transaction) {\n                        setTransaction(transaction);\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        provider\n    ]);\n    var setLog = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(error, log) {\n        setTransaction(log);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, setLog));\n            getLastTransaction();\n            return function() {\n                subscription && subscription.unsubscribe(setLog);\n            };\n        }\n    }, [\n        provider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-2/3 break-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: \"Last transaction :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_web3_Transfer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        transaction: transaction1\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: \"Information :\"\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"jfPGTNE24RVoi2uhIMFhZW/ovdY=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE2Q3JCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWV3VHJhbnNhY3Rpb24udHN4P2ExZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiY29tcG9uZW50cy9BcHBDb250ZXh0XCI7XG5pbXBvcnQgVHJhbnNmZXIgZnJvbSBcImNvbXBvbmVudHMvd2ViMy9UcmFuc2ZlclwiO1xuXG50eXBlIFByb3BzID0ge307XG5cbmNvbnN0IFZpZXdUcmFuc2FjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbc3Vic2NyaXB0aW9uLCBzZXRTdWJzY3JpcHRpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgcHJvdmlkZXIgPSBjb250ZXh0Py52YWx1ZXM/LnByb3ZpZGVyO1xuXG4gIGNvbnN0IGdldExhc3RUcmFuc2FjdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IGxhc3RCbG9ja051bWJlciA9IGF3YWl0IHByb3ZpZGVyLmV0aC5nZXRCbG9ja051bWJlcigpO1xuICAgICAgY29uc3QgbGFzdEJsb2NrID0gYXdhaXQgcHJvdmlkZXIuZXRoLmdldEJsb2NrKGxhc3RCbG9ja051bWJlcik7XG4gICAgICBwcm92aWRlci5ldGguZ2V0VHJhbnNhY3Rpb24oXG4gICAgICAgIGxhc3RCbG9jay50cmFuc2FjdGlvbnNbMF0sXG4gICAgICAgIChlcnJvciwgdHJhbnNhY3Rpb24pID0+IHtcbiAgICAgICAgICBzZXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKTtcblxuICBjb25zdCBzZXRMb2cgPSB1c2VDYWxsYmFjaygoZXJyb3IsIGxvZykgPT4ge1xuICAgIHNldFRyYW5zYWN0aW9uKGxvZyk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIgJiYgIXN1YnNjcmlwdGlvbikge1xuICAgICAgc2V0U3Vic2NyaXB0aW9uKHByb3ZpZGVyLmV0aC5zdWJzY3JpYmUoXCJsb2dzXCIsIHt9LCBzZXRMb2cpKTtcbiAgICAgIGdldExhc3RUcmFuc2FjdGlvbigpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZShzZXRMb2cpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtwcm92aWRlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBicmVhay1hbGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPkxhc3QgdHJhbnNhY3Rpb24gOjwvZGl2PlxuICAgICAgICA8VHJhbnNmZXIgdHJhbnNhY3Rpb249e3RyYW5zYWN0aW9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5JbmZvcm1hdGlvbiA6PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdUcmFuc2FjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiQXBwQ29udGV4dCIsIlRyYW5zZmVyIiwiVmlld1RyYW5zYWN0aW9uIiwiY29udGV4dCIsInRyYW5zYWN0aW9uIiwic2V0VHJhbnNhY3Rpb24iLCJzdWJzY3JpcHRpb24iLCJzZXRTdWJzY3JpcHRpb24iLCJwcm92aWRlciIsInZhbHVlcyIsImdldExhc3RUcmFuc2FjdGlvbiIsImxhc3RCbG9ja051bWJlciIsImxhc3RCbG9jayIsImV0aCIsImdldEJsb2NrTnVtYmVyIiwiZ2V0QmxvY2siLCJnZXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9ucyIsImVycm9yIiwic2V0TG9nIiwibG9nIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ }),

/***/ "./components/web3/Transfer.tsx":
/*!**************************************!*\
  !*** ./components/web3/Transfer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Transfer = function(param) {\n    var transfer = param.transfer, className = param.className;\n    if (!transfer) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"logIndex: \",\n                    transfer.logIndex\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"transferIndex: \",\n                    transfer.transactionIndex\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"blockHash: \",\n                    transfer.blockHash\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"blockNumber: \",\n                    transfer.blockNumber\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"address: \",\n                    transfer.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"type: \",\n                    transfer.type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"id: \",\n                    transfer.id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"returnValues: \",\n                    JSON.stringify(transfer.returnValues)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"event: \",\n                    transfer.event\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"signature: \",\n                    transfer.signature\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"raw: \",\n                    JSON.stringify(transfer.raw)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/web3/Transfer.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = Transfer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transfer);\nvar _c;\n$RefreshReg$(_c, \"Transfer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYjMvVHJhbnNmZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFJekIsR0FBSyxDQUFDQyxRQUFRLEdBQW9CLFFBQVEsUUFBcUIsQ0FBQztRQUEzQkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFNBQVMsU0FBVEEsU0FBUztJQUN0RCxFQUFFLEdBQUdELFFBQVEsRUFBRSxDQUFDO1FBQ2QsTUFBTTtJQUNSLENBQUM7SUFFRCxNQUFNLDZFQUNIRSxDQUFHO1FBQUNELFNBQVMsRUFBRUEsU0FBUzs7d0ZBQ3RCQyxDQUFHOztvQkFBQyxDQUFVO29CQUFDRixRQUFRLENBQUNHLFFBQVE7Ozs7Ozs7d0ZBQ2hDRCxDQUFHOztvQkFBQyxDQUFlO29CQUFDRixRQUFRLENBQUNJLGdCQUFnQjs7Ozs7Ozt3RkFDN0NGLENBQUc7O29CQUFDLENBQVc7b0JBQUNGLFFBQVEsQ0FBQ0ssU0FBUzs7Ozs7Ozt3RkFDbENILENBQUc7O29CQUFDLENBQWE7b0JBQUNGLFFBQVEsQ0FBQ00sV0FBVzs7Ozs7Ozt3RkFDdENKLENBQUc7O29CQUFDLENBQVM7b0JBQUNGLFFBQVEsQ0FBQ08sT0FBTzs7Ozs7Ozt3RkFDOUJMLENBQUc7O29CQUFDLENBQU07b0JBQUNGLFFBQVEsQ0FBQ1EsSUFBSTs7Ozs7Ozt3RkFDeEJOLENBQUc7O29CQUFDLENBQUk7b0JBQUNGLFFBQVEsQ0FBQ1MsRUFBRTs7Ozs7Ozt3RkFDcEJQLENBQUc7O29CQUFDLENBQWM7b0JBQUNRLElBQUksQ0FBQ0MsU0FBUyxDQUFDWCxRQUFRLENBQUNZLFlBQVk7Ozs7Ozs7d0ZBQ3ZEVixDQUFHOztvQkFBQyxDQUFPO29CQUFDRixRQUFRLENBQUNhLEtBQUs7Ozs7Ozs7d0ZBQzFCWCxDQUFHOztvQkFBQyxDQUFXO29CQUFDRixRQUFRLENBQUNjLFNBQVM7Ozs7Ozs7d0ZBQ2xDWixDQUFHOztvQkFBQyxDQUFLO29CQUFDUSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsUUFBUSxDQUFDZSxHQUFHOzs7Ozs7Ozs7Ozs7O0FBRzVDLENBQUM7S0FwQktoQixRQUFRO0FBc0JkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWIzL1RyYW5zZmVyLnRzeD8yNzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHsgdHJhbnNmZXI6IFRyYW5zZmVyOyBjbGFzc05hbWU6IHN0cmluZyB9O1xuXG5jb25zdCBUcmFuc2ZlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdHJhbnNmZXIsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGlmICghdHJhbnNmZXIpIHtcbiAgICByZXR1cm4gPD48Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGRpdj5sb2dJbmRleDoge3RyYW5zZmVyLmxvZ0luZGV4fTwvZGl2PlxuICAgICAgPGRpdj50cmFuc2ZlckluZGV4OiB7dHJhbnNmZXIudHJhbnNhY3Rpb25JbmRleH08L2Rpdj5cbiAgICAgIDxkaXY+YmxvY2tIYXNoOiB7dHJhbnNmZXIuYmxvY2tIYXNofTwvZGl2PlxuICAgICAgPGRpdj5ibG9ja051bWJlcjoge3RyYW5zZmVyLmJsb2NrTnVtYmVyfTwvZGl2PlxuICAgICAgPGRpdj5hZGRyZXNzOiB7dHJhbnNmZXIuYWRkcmVzc308L2Rpdj5cbiAgICAgIDxkaXY+dHlwZToge3RyYW5zZmVyLnR5cGV9PC9kaXY+XG4gICAgICA8ZGl2PmlkOiB7dHJhbnNmZXIuaWR9PC9kaXY+XG4gICAgICA8ZGl2PnJldHVyblZhbHVlczoge0pTT04uc3RyaW5naWZ5KHRyYW5zZmVyLnJldHVyblZhbHVlcyl9PC9kaXY+XG4gICAgICA8ZGl2PmV2ZW50OiB7dHJhbnNmZXIuZXZlbnR9PC9kaXY+XG4gICAgICA8ZGl2PnNpZ25hdHVyZToge3RyYW5zZmVyLnNpZ25hdHVyZX08L2Rpdj5cbiAgICAgIDxkaXY+cmF3OiB7SlNPTi5zdHJpbmdpZnkodHJhbnNmZXIucmF3KX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVHJhbnNmZXIiLCJ0cmFuc2ZlciIsImNsYXNzTmFtZSIsImRpdiIsImxvZ0luZGV4IiwidHJhbnNhY3Rpb25JbmRleCIsImJsb2NrSGFzaCIsImJsb2NrTnVtYmVyIiwiYWRkcmVzcyIsInR5cGUiLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXR1cm5WYWx1ZXMiLCJldmVudCIsInNpZ25hdHVyZSIsInJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/web3/Transfer.tsx\n");

/***/ })

});