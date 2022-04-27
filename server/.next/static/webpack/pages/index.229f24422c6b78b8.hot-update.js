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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _throw(e) {\n    throw e;\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transaction1 = ref1[0], setTransaction = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subscription = ref2[0], setSubscription = ref2[1];\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    var provider = context === null || context === void 0 ? void 0 : (ref = context.values) === null || ref === void 0 ? void 0 : ref.provider;\n    console.log(provider);\n    var getLastTransaction = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var lastBlockNumber, lastBlock;\n        return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!provider) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    _ctx.next = 3;\n                    return provider.eth.getBlockNumber();\n                case 3:\n                    lastBlockNumber = _ctx.sent;\n                    _ctx.next = 6;\n                    return provider.eth.getBlock(lastBlockNumber);\n                case 6:\n                    lastBlock = _ctx.sent;\n                    provider.eth.getTransaction(lastBlock.transactions[0], function(error, transaction) {\n                        setTransaction(transaction);\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        provider\n    ]);\n    var setLog = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(error, log) {\n        setTransaction(log);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, setLog));\n            getLastTransaction();\n            return function() {\n                return subscription.unsubscribe(setLog);\n            };\n        }\n    }, [\n        provider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-2/3 break-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: \"Last transaction :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: JSON.stringify(transaction1)\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: \"Information :\"\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"jfPGTNE24RVoi2uhIMFhZW/ovdY=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7R0ExQ0t2QixlQUFlO0tBQWZBLGVBQWU7QUE0Q3JCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWV3VHJhbnNhY3Rpb24udHN4P2ExZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcImNvbXBvbmVudHMvQXBwQ29udGV4dFwiO1xuXG50eXBlIFByb3BzID0ge307XG5cbmNvbnN0IFZpZXdUcmFuc2FjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbc3Vic2NyaXB0aW9uLCBzZXRTdWJzY3JpcHRpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgcHJvdmlkZXIgPSBjb250ZXh0Py52YWx1ZXM/LnByb3ZpZGVyO1xuICBjb25zb2xlLmxvZyhwcm92aWRlcik7XG4gIGNvbnN0IGdldExhc3RUcmFuc2FjdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IGxhc3RCbG9ja051bWJlciA9IGF3YWl0IHByb3ZpZGVyLmV0aC5nZXRCbG9ja051bWJlcigpO1xuICAgICAgY29uc3QgbGFzdEJsb2NrID0gYXdhaXQgcHJvdmlkZXIuZXRoLmdldEJsb2NrKGxhc3RCbG9ja051bWJlcik7XG4gICAgICBwcm92aWRlci5ldGguZ2V0VHJhbnNhY3Rpb24oXG4gICAgICAgIGxhc3RCbG9jay50cmFuc2FjdGlvbnNbMF0sXG4gICAgICAgIChlcnJvciwgdHJhbnNhY3Rpb24pID0+IHtcbiAgICAgICAgICBzZXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKTtcblxuICBjb25zdCBzZXRMb2cgPSB1c2VDYWxsYmFjaygoZXJyb3IsIGxvZykgPT4ge1xuICAgIHNldFRyYW5zYWN0aW9uKGxvZyk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm92aWRlciAmJiAhc3Vic2NyaXB0aW9uKSB7XG4gICAgICBzZXRTdWJzY3JpcHRpb24ocHJvdmlkZXIuZXRoLnN1YnNjcmliZShcImxvZ3NcIiwge30sIHNldExvZykpO1xuICAgICAgZ2V0TGFzdFRyYW5zYWN0aW9uKCk7XG4gICAgICByZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKHNldExvZyk7XG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgYnJlYWstYWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5MYXN0IHRyYW5zYWN0aW9uIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+e0pTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+SW5mb3JtYXRpb24gOjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3VHJhbnNhY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsIkFwcENvbnRleHQiLCJWaWV3VHJhbnNhY3Rpb24iLCJjb250ZXh0IiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsInN1YnNjcmlwdGlvbiIsInNldFN1YnNjcmlwdGlvbiIsInByb3ZpZGVyIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImdldExhc3RUcmFuc2FjdGlvbiIsImxhc3RCbG9ja051bWJlciIsImxhc3RCbG9jayIsImV0aCIsImdldEJsb2NrTnVtYmVyIiwiZ2V0QmxvY2siLCJnZXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9ucyIsImVycm9yIiwic2V0TG9nIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJkaXYiLCJjbGFzc05hbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});