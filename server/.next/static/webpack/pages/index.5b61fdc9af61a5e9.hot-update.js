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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var provider = param.provider;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), transactions = ref[0], setTransactions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), subscription = ref1[0], setSubscription = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, log));\n        }\n    });\n    // useEffect(() => {\n    //   if (subscription) {\n    //     console.log(\"subscribe\");\n    //     subscription\n    //       .subscribe((error, result) => {\n    //         console.log(error, result);\n    //       })\n    //       .on(\"data\", async (txHash) => {\n    //         console.log(txHash);\n    //       });\n    //   }\n    // }, [subscription]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Trasactions\"\n    }, void 0, false, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, _this);\n};\n_s(ViewTransaction, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDs7QUFLbEQsR0FBSyxDQUFDRyxlQUFlLEdBQW9CLFFBQVEsUUFBVSxDQUFDO1FBQWhCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ2xELEdBQUssQ0FBbUNGLEdBQW9CLEdBQXBCQSwrQ0FBUSxJQUF6Q0csWUFBWSxHQUFxQkgsR0FBb0IsS0FBdkNJLGVBQWUsR0FBSUosR0FBb0I7SUFDNUQsR0FBSyxDQUFtQ0EsSUFBZSxHQUFmQSwrQ0FBUSxJQUF6Q0ssWUFBWSxHQUFxQkwsSUFBZSxLQUFsQ00sZUFBZSxHQUFJTixJQUFlO0lBRXZERCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQUUsRUFBRUcsUUFBUSxLQUFLRyxZQUFZLEVBQUUsQ0FBQztZQUM5QkMsZUFBZSxDQUFDSixRQUFRLENBQUNLLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLENBQU0sT0FBRSxDQUFDLENBQUMsRUFBRUMsR0FBRyxFQUFFLENBQUM7UUFDM0QsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBb0I7SUFDcEIsRUFBd0I7SUFDeEIsRUFBZ0M7SUFDaEMsRUFBbUI7SUFDbkIsRUFBd0M7SUFDeEMsRUFBc0M7SUFDdEMsRUFBVztJQUNYLEVBQXdDO0lBQ3hDLEVBQStCO0lBQy9CLEVBQVk7SUFDWixFQUFNO0lBQ04sRUFBc0I7SUFFdEIsTUFBTSw2RUFBRUMsQ0FBRztrQkFBQyxDQUFXOzs7Ozs7QUFDekIsQ0FBQztHQXhCS1QsZUFBZTtLQUFmQSxlQUFlO0FBMEJyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlld1RyYW5zYWN0aW9uLnRzeD9hMWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuXG50eXBlIFByb3BzID0geyBwcm92aWRlcj86IFdlYjMgfTtcblxuY29uc3QgVmlld1RyYW5zYWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwcm92aWRlciB9KSA9PiB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbnMsIHNldFRyYW5zYWN0aW9uc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oKTtcbiAgY29uc3QgW3N1YnNjcmlwdGlvbiwgc2V0U3Vic2NyaXB0aW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm92aWRlciAmJiAhc3Vic2NyaXB0aW9uKSB7XG4gICAgICBzZXRTdWJzY3JpcHRpb24ocHJvdmlkZXIuZXRoLnN1YnNjcmliZShcImxvZ3NcIiwge30sIGxvZykpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcInN1YnNjcmliZVwiKTtcbiAgLy8gICAgIHN1YnNjcmlwdGlvblxuICAvLyAgICAgICAuc3Vic2NyaWJlKChlcnJvciwgcmVzdWx0KSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIHJlc3VsdCk7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC5vbihcImRhdGFcIiwgYXN5bmMgKHR4SGFzaCkgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHR4SGFzaCk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfSwgW3N1YnNjcmlwdGlvbl0pO1xuXG4gIHJldHVybiA8ZGl2PlRyYXNhY3Rpb25zPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlld1RyYW5zYWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJWaWV3VHJhbnNhY3Rpb24iLCJwcm92aWRlciIsInRyYW5zYWN0aW9ucyIsInNldFRyYW5zYWN0aW9ucyIsInN1YnNjcmlwdGlvbiIsInNldFN1YnNjcmlwdGlvbiIsImV0aCIsInN1YnNjcmliZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});