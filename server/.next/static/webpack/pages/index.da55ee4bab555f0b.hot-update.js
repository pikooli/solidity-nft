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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var provider = param.provider;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transaction = ref[0], setTransaction = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subscription = ref1[0], setSubscription = ref1[1];\n    var getLastTransaction = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var lastBlock, lastTranslaction;\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return provider.eth.getBlockNumber();\n                    case 3:\n                        lastBlock = _ctx.sent;\n                        _ctx.next = 6;\n                        return provider.eth.getBlock(lastBlock);\n                    case 6:\n                        lastTranslaction = _ctx.sent;\n                        setTransaction(lastTranslaction);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getLastTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, function(error, log) {\n                setTransaction(log);\n            }));\n            getLastTransaction();\n        }\n    }, [\n        provider\n    ]);\n    // useEffect(() => {\n    //   if (subscription) {\n    //     console.log(\"subscribe\");\n    //     subscription\n    //       .subscribe((error, result) => {\n    //         console.log(error, result);\n    //       })\n    //       .on(\"data\", async (txHash) => {\n    //         console.log(txHash);\n    //       });\n    //   }\n    // }, [subscription]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-1/11 break-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: \"Last transaction :\"\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-40\",\n                children: JSON.stringify(transaction)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUtsRCxHQUFLLENBQUNHLGVBQWUsR0FBb0IsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbEQsR0FBSyxDQUFpQ0YsR0FBZSxHQUFmQSwrQ0FBUSxJQUF2Q0csV0FBVyxHQUFvQkgsR0FBZSxLQUFqQ0ksY0FBYyxHQUFJSixHQUFlO0lBQ3JELEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsSUFBekNLLFlBQVksR0FBcUJMLElBQWUsS0FBbENNLGVBQWUsR0FBSU4sSUFBZTtJQUV2RCxHQUFLLENBQUNPLGtCQUFrQjt1TEFBRyxRQUFRLFdBQUksQ0FBQztnQkFFOUJDLFNBQVMsRUFDVEMsZ0JBQWdCOzs7OzZCQUZwQlAsUUFBUTs7Ozs7K0JBQ2NBLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDQyxjQUFjOzt3QkFBN0NILFNBQVMsWUFYckIsQ0FXMkQ7OytCQUN0Qk4sUUFBUSxDQUFDUSxHQUFHLENBQUNFLFFBQVEsQ0FBQ0osU0FBUzs7d0JBQXhEQyxnQkFBZ0IsWUFaNUIsQ0FZcUU7d0JBQy9ETCxjQUFjLENBQUNLLGdCQUFnQixDQUFDLENBQUM7Ozs7OztRQUVyQyxDQUFDO3dCQU5LRixrQkFBa0I7Ozs7SUFPeEJSLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFRyxRQUFRLEtBQUtHLFlBQVksRUFBRSxDQUFDO1lBQzlCQyxlQUFlLENBQ2JKLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDRyxTQUFTLENBQUMsQ0FBTSxPQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsR0FBRyxFQUFLLENBQUM7Z0JBQ2xEVixjQUFjLENBQUNVLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsRUFDRixDQUFDO1lBQ0ZQLGtCQUFrQixFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDTDtRQUFBQSxRQUFRO0lBQUEsQ0FBQyxDQUFDLENBQUM7SUFFZixFQUFvQjtJQUNwQixFQUF3QjtJQUN4QixFQUFnQztJQUNoQyxFQUFtQjtJQUNuQixFQUF3QztJQUN4QyxFQUFzQztJQUN0QyxFQUFXO0lBQ1gsRUFBd0M7SUFDeEMsRUFBK0I7SUFDL0IsRUFBWTtJQUNaLEVBQU07SUFDTixFQUFzQjtJQUV0QixNQUFNLDZFQUNIYyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrQjs7d0ZBQzlCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTTswQkFBQyxDQUFrQjs7Ozs7O3dGQUN2Q0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU07MEJBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDaEIsV0FBVzs7Ozs7Ozs7Ozs7O0FBR3ZELENBQUM7R0F6Q0tGLGVBQWU7S0FBZkEsZUFBZTtBQTJDckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbi50c3g/YTFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxudHlwZSBQcm9wcyA9IHsgcHJvdmlkZXI/OiBXZWIzIH07XG5cbmNvbnN0IFZpZXdUcmFuc2FjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcHJvdmlkZXIgfSkgPT4ge1xuICBjb25zdCBbdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW3N1YnNjcmlwdGlvbiwgc2V0U3Vic2NyaXB0aW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICBjb25zdCBnZXRMYXN0VHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICBjb25zdCBsYXN0QmxvY2sgPSBhd2FpdCBwcm92aWRlci5ldGguZ2V0QmxvY2tOdW1iZXIoKTtcbiAgICAgIGNvbnN0IGxhc3RUcmFuc2xhY3Rpb24gPSBhd2FpdCBwcm92aWRlci5ldGguZ2V0QmxvY2sobGFzdEJsb2NrKTtcbiAgICAgIHNldFRyYW5zYWN0aW9uKGxhc3RUcmFuc2xhY3Rpb24pO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIgJiYgIXN1YnNjcmlwdGlvbikge1xuICAgICAgc2V0U3Vic2NyaXB0aW9uKFxuICAgICAgICBwcm92aWRlci5ldGguc3Vic2NyaWJlKFwibG9nc1wiLCB7fSwgKGVycm9yLCBsb2cpID0+IHtcbiAgICAgICAgICBzZXRUcmFuc2FjdGlvbihsb2cpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGdldExhc3RUcmFuc2FjdGlvbigpO1xuICAgIH1cbiAgfSwgW3Byb3ZpZGVyXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcInN1YnNjcmliZVwiKTtcbiAgLy8gICAgIHN1YnNjcmlwdGlvblxuICAvLyAgICAgICAuc3Vic2NyaWJlKChlcnJvciwgcmVzdWx0KSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIHJlc3VsdCk7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC5vbihcImRhdGFcIiwgYXN5bmMgKHR4SGFzaCkgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHR4SGFzaCk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfSwgW3N1YnNjcmlwdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMTEgYnJlYWstYWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5MYXN0IHRyYW5zYWN0aW9uIDo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00MFwiPntKU09OLnN0cmluZ2lmeSh0cmFuc2FjdGlvbil9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3VHJhbnNhY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZpZXdUcmFuc2FjdGlvbiIsInByb3ZpZGVyIiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsInN1YnNjcmlwdGlvbiIsInNldFN1YnNjcmlwdGlvbiIsImdldExhc3RUcmFuc2FjdGlvbiIsImxhc3RCbG9jayIsImxhc3RUcmFuc2xhY3Rpb24iLCJldGgiLCJnZXRCbG9ja051bWJlciIsImdldEJsb2NrIiwic3Vic2NyaWJlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});