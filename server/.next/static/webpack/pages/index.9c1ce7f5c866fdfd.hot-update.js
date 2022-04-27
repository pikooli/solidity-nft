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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var provider = param.provider;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transaction1 = ref[0], setTransaction = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subscription = ref1[0], setSubscription = ref1[1];\n    var getLastTransaction = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var lastBlockNumber, lastBlock;\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return provider.eth.getBlockNumber();\n                    case 3:\n                        lastBlockNumber = _ctx.sent;\n                        _ctx.next = 6;\n                        return provider.eth.getBlock(lastBlockNumber);\n                    case 6:\n                        lastBlock = _ctx.sent;\n                        provider.eth.getTransaction(lastBlock.transactions[0], function(error, transaction) {\n                            setTransaction(transaction);\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getLastTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, function(error, log) {\n                setTransaction(log);\n            }));\n            getLastTransaction();\n        }\n    }, [\n        provider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-2/3 break-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: \"Last transaction :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: JSON.stringify(transaction1)\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: \"Information :\"\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUtsRCxHQUFLLENBQUNHLGVBQWUsR0FBb0IsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbEQsR0FBSyxDQUFpQ0YsR0FBZSxHQUFmQSwrQ0FBUSxJQUF2Q0csWUFBVyxHQUFvQkgsR0FBZSxLQUFqQ0ksY0FBYyxHQUFJSixHQUFlO0lBQ3JELEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsSUFBekNLLFlBQVksR0FBcUJMLElBQWUsS0FBbENNLGVBQWUsR0FBSU4sSUFBZTtJQUV2RCxHQUFLLENBQUNPLGtCQUFrQjt1TEFBRyxRQUFRLFdBQUksQ0FBQztnQkFFOUJDLGVBQWUsRUFDZkMsU0FBUzs7Ozs2QkFGYlAsUUFBUTs7Ozs7K0JBQ29CQSxRQUFRLENBQUNRLEdBQUcsQ0FBQ0MsY0FBYzs7d0JBQW5ESCxlQUFlLFlBWDNCLENBV2lFOzsrQkFDbkNOLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDRSxRQUFRLENBQUNKLGVBQWU7O3dCQUF2REMsU0FBUyxZQVpyQixDQVlvRTt3QkFDOURQLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDRyxjQUFjLENBQ3pCSixTQUFTLENBQUNLLFlBQVksQ0FBQyxDQUFDLEdBQ3hCLFFBQVFYLENBQVBZLEtBQUssRUFBRVosV0FBVyxFQUFLLENBQUM7NEJBQ3ZCQyxjQUFjLENBQUNELFdBQVcsQ0FBQyxDQUFDO3dCQUM5QixDQUFDLENBQ0YsQ0FBQzs7Ozs7O1FBRU4sQ0FBQzt3QkFYS0ksa0JBQWtCOzs7O0lBWXhCUixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQUUsRUFBRUcsUUFBUSxLQUFLRyxZQUFZLEVBQUUsQ0FBQztZQUM5QkMsZUFBZSxDQUNiSixRQUFRLENBQUNRLEdBQUcsQ0FBQ00sU0FBUyxDQUFDLENBQU0sT0FBRSxDQUFDLENBQUMsRUFBRSxRQUFRQyxDQUFQRixLQUFLLEVBQUVFLEdBQUcsRUFBSyxDQUFDO2dCQUNsRGIsY0FBYyxDQUFDYSxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDLEVBQ0YsQ0FBQztZQUNGVixrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0w7UUFBQUEsUUFBUTtJQUFBLENBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTSw2RUFDSGdCLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWlCOzt3RkFDN0JELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFROztnR0FDcEJELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFNO2tDQUFDLENBQWtCOzs7Ozs7Z0dBQ3ZDRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTTtrQ0FBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNsQixZQUFXOzs7Ozs7Ozs7Ozs7d0ZBRWxEZSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBUTtzR0FDcEJELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFNOzhCQUFDLENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNDLENBQUM7R0F0Q0tsQixlQUFlO0tBQWZBLGVBQWU7QUF3Q3JCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWV3VHJhbnNhY3Rpb24udHN4P2ExZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuY29uc3QgVmlld1RyYW5zYWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwcm92aWRlciB9KSA9PiB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbc3Vic2NyaXB0aW9uLCBzZXRTdWJzY3JpcHRpb25dID0gdXNlU3RhdGU8YW55PigpO1xuXG4gIGNvbnN0IGdldExhc3RUcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IGxhc3RCbG9ja051bWJlciA9IGF3YWl0IHByb3ZpZGVyLmV0aC5nZXRCbG9ja051bWJlcigpO1xuICAgICAgY29uc3QgbGFzdEJsb2NrID0gYXdhaXQgcHJvdmlkZXIuZXRoLmdldEJsb2NrKGxhc3RCbG9ja051bWJlcik7XG4gICAgICBwcm92aWRlci5ldGguZ2V0VHJhbnNhY3Rpb24oXG4gICAgICAgIGxhc3RCbG9jay50cmFuc2FjdGlvbnNbMF0sXG4gICAgICAgIChlcnJvciwgdHJhbnNhY3Rpb24pID0+IHtcbiAgICAgICAgICBzZXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm92aWRlciAmJiAhc3Vic2NyaXB0aW9uKSB7XG4gICAgICBzZXRTdWJzY3JpcHRpb24oXG4gICAgICAgIHByb3ZpZGVyLmV0aC5zdWJzY3JpYmUoXCJsb2dzXCIsIHt9LCAoZXJyb3IsIGxvZykgPT4ge1xuICAgICAgICAgIHNldFRyYW5zYWN0aW9uKGxvZyk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgZ2V0TGFzdFRyYW5zYWN0aW9uKCk7XG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgYnJlYWstYWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5MYXN0IHRyYW5zYWN0aW9uIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+e0pTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+SW5mb3JtYXRpb24gOjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3VHJhbnNhY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZpZXdUcmFuc2FjdGlvbiIsInByb3ZpZGVyIiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsInN1YnNjcmlwdGlvbiIsInNldFN1YnNjcmlwdGlvbiIsImdldExhc3RUcmFuc2FjdGlvbiIsImxhc3RCbG9ja051bWJlciIsImxhc3RCbG9jayIsImV0aCIsImdldEJsb2NrTnVtYmVyIiwiZ2V0QmxvY2siLCJnZXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9ucyIsImVycm9yIiwic3Vic2NyaWJlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});