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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var provider = param.provider;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), transactions = ref[0], setTransactions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), subscription = ref1[0], setSubscription = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, function(error, log) {\n                setTransactions(log);\n            }));\n        }\n    }, [\n        provider\n    ]);\n    // useEffect(() => {\n    //   if (subscription) {\n    //     console.log(\"subscribe\");\n    //     subscription\n    //       .subscribe((error, result) => {\n    //         console.log(error, result);\n    //       })\n    //       .on(\"data\", async (txHash) => {\n    //         console.log(txHash);\n    //       });\n    //   }\n    // }, [subscription]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: \"Last transactions\"\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDs7QUFLbEQsR0FBSyxDQUFDRyxlQUFlLEdBQW9CLFFBQVEsUUFBVSxDQUFDO1FBQWhCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ2xELEdBQUssQ0FBbUNGLEdBQWUsR0FBZkEsK0NBQVEsSUFBekNHLFlBQVksR0FBcUJILEdBQWUsS0FBbENJLGVBQWUsR0FBSUosR0FBZTtJQUN2RCxHQUFLLENBQW1DQSxJQUFlLEdBQWZBLCtDQUFRLElBQXpDSyxZQUFZLEdBQXFCTCxJQUFlLEtBQWxDTSxlQUFlLEdBQUlOLElBQWU7SUFFdkRELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFRyxRQUFRLEtBQUtHLFlBQVksRUFBRSxDQUFDO1lBQzlCQyxlQUFlLENBQ2JKLFFBQVEsQ0FBQ0ssR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBTSxPQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsR0FBRyxFQUFLLENBQUM7Z0JBQ2xETCxlQUFlLENBQUNLLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsRUFDRixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDUDtRQUFBQSxRQUFRO0lBQUEsQ0FBQyxDQUFDLENBQUM7SUFFZixFQUFvQjtJQUNwQixFQUF3QjtJQUN4QixFQUFnQztJQUNoQyxFQUFtQjtJQUNuQixFQUF3QztJQUN4QyxFQUFzQztJQUN0QyxFQUFXO0lBQ1gsRUFBd0M7SUFDeEMsRUFBK0I7SUFDL0IsRUFBWTtJQUNaLEVBQU07SUFDTixFQUFzQjtJQUV0QixNQUFNLDZFQUNIUyxDQUFHOzt3RkFDREEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU07MEJBQUMsQ0FBaUI7Ozs7Ozt3RkFDdENELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7QUFHdkIsQ0FBQztHQWpDS1gsZUFBZTtLQUFmQSxlQUFlO0FBbUNyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlld1RyYW5zYWN0aW9uLnRzeD9hMWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuXG50eXBlIFByb3BzID0geyBwcm92aWRlcj86IFdlYjMgfTtcblxuY29uc3QgVmlld1RyYW5zYWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwcm92aWRlciB9KSA9PiB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbnMsIHNldFRyYW5zYWN0aW9uc10gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtzdWJzY3JpcHRpb24sIHNldFN1YnNjcmlwdGlvbl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIgJiYgIXN1YnNjcmlwdGlvbikge1xuICAgICAgc2V0U3Vic2NyaXB0aW9uKFxuICAgICAgICBwcm92aWRlci5ldGguc3Vic2NyaWJlKFwibG9nc1wiLCB7fSwgKGVycm9yLCBsb2cpID0+IHtcbiAgICAgICAgICBzZXRUcmFuc2FjdGlvbnMobG9nKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwic3Vic2NyaWJlXCIpO1xuICAvLyAgICAgc3Vic2NyaXB0aW9uXG4gIC8vICAgICAgIC5zdWJzY3JpYmUoKGVycm9yLCByZXN1bHQpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgcmVzdWx0KTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICAgLm9uKFwiZGF0YVwiLCBhc3luYyAodHhIYXNoKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2codHhIYXNoKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9LCBbc3Vic2NyaXB0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+TGFzdCB0cmFuc2FjdGlvbnM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3VHJhbnNhY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZpZXdUcmFuc2FjdGlvbiIsInByb3ZpZGVyIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwic3Vic2NyaXB0aW9uIiwic2V0U3Vic2NyaXB0aW9uIiwiZXRoIiwic3Vic2NyaWJlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});