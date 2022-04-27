"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nft",{

/***/ "./pages/nft.tsx":
/*!***********************!*\
  !*** ./pages/nft.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\n/* harmony import */ var services_contractService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/contractService */ \"./services/contractService.ts\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NFT = function() {\n    var ref, ref1;\n    _s();\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    var contract = context === null || context === void 0 ? void 0 : (ref = context.values) === null || ref === void 0 ? void 0 : ref.contract;\n    var account = context === null || context === void 0 ? void 0 : (ref1 = context.values) === null || ref1 === void 0 ? void 0 : ref1.account;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), transfers = ref2[0], setTransfers = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (contract && account) {\n            services_contractService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getPastTransfer(contract, account).then(function(event) {\n                return setTransfers(event);\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-2/3 break-all\",\n            children: transfers && transfers.map(function(transfer) {\n                return JSON.stringify(transfer);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/pascal/test/solidity-nft/server/pages/nft.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/pages/nft.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(NFT, \"ED5ya6pBRUU197uQe/Bjjuy1gG4=\");\n_c = NFT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFT);\nvar _c;\n$RefreshReg$(_c, \"NFT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDdUQ7QUFDakI7QUFDUTtBQUNROztBQUV0RCxHQUFLLENBQUNNLEdBQUcsR0FBYSxRQUN0QixHQUQ0QixDQUFDO1FBRVZDLEdBQWUsRUFDaEJBLElBQWU7O0lBRi9CLEdBQUssQ0FBQ0EsT0FBTyxHQUFHUCxpREFBVSxDQUFDSSw2REFBVTtJQUNyQyxHQUFLLENBQUNJLFFBQVEsR0FBR0QsT0FBTyxhQUFQQSxPQUFPLGNBQVBBLElBQUksQ0FBSkEsQ0FBZSxJQUFmQSxHQUFlLEdBQWZBLE9BQU8sQ0FBRUUsTUFBTSxjQUFmRixHQUFlLGNBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxHQUFlLENBQUVDLFFBQVE7SUFDMUMsR0FBSyxDQUFDRSxPQUFPLEdBQUdILE9BQU8sYUFBUEEsT0FBTyxjQUFQQSxJQUFJLENBQUpBLENBQWUsSUFBZkEsSUFBZSxHQUFmQSxPQUFPLENBQUVFLE1BQU0sY0FBZkYsSUFBZSxjQUFmQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBZSxDQUFFRyxPQUFPO0lBQ3hDLEdBQUssQ0FBNkJSLElBQWUsR0FBZkEsK0NBQVEsSUFBbkNTLFNBQVMsR0FBa0JULElBQWUsS0FBL0JVLFlBQVksR0FBSVYsSUFBZTtJQUNqREQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUVPLFFBQVEsSUFBSUUsT0FBTyxFQUFFLENBQUM7WUFDeEJMLGdGQUNrQixDQUFDRyxRQUFRLEVBQUVFLE9BQU8sRUFDakNJLElBQUksQ0FBQyxRQUFRLENBQVBDLEtBQUs7dUJBQUtILFlBQVksQ0FBQ0csS0FBSztjQUFFLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSw2RUFDSFoseURBQU07OEZBQ0phLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWlCO3NCQUM3Qk4sU0FBUyxJQUFJQSxTQUFTLENBQUNPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFFBQVE7dUJBQUtDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFROzs7Ozs7Ozs7Ozs7QUFJekUsQ0FBQztHQXBCS2IsR0FBRztLQUFIQSxHQUFHO0FBc0JULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmZ0LnRzeD84MzJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJjb21wb25lbnRzL0FwcENvbnRleHRcIjtcbmltcG9ydCBjb250cmFjdFNlcnZpY2UgZnJvbSBcInNlcnZpY2VzL2NvbnRyYWN0U2VydmljZVwiO1xuXG5jb25zdCBORlQ6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgY29udHJhY3QgPSBjb250ZXh0Py52YWx1ZXM/LmNvbnRyYWN0O1xuICBjb25zdCBhY2NvdW50ID0gY29udGV4dD8udmFsdWVzPy5hY2NvdW50O1xuICBjb25zdCBbdHJhbnNmZXJzLCBzZXRUcmFuc2ZlcnNdID0gdXNlU3RhdGU8YW55PigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250cmFjdCAmJiBhY2NvdW50KSB7XG4gICAgICBjb250cmFjdFNlcnZpY2VcbiAgICAgICAgLmdldFBhc3RUcmFuc2Zlcihjb250cmFjdCwgYWNjb3VudClcbiAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiBzZXRUcmFuc2ZlcnMoZXZlbnQpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgYnJlYWstYWxsXCI+XG4gICAgICAgIHt0cmFuc2ZlcnMgJiYgdHJhbnNmZXJzLm1hcCgodHJhbnNmZXIpID0+IEpTT04uc3RyaW5naWZ5KHRyYW5zZmVyKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5GVDtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJBcHBDb250ZXh0IiwiY29udHJhY3RTZXJ2aWNlIiwiTkZUIiwiY29udGV4dCIsImNvbnRyYWN0IiwidmFsdWVzIiwiYWNjb3VudCIsInRyYW5zZmVycyIsInNldFRyYW5zZmVycyIsImdldFBhc3RUcmFuc2ZlciIsInRoZW4iLCJldmVudCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRyYW5zZmVyIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nft.tsx\n");

/***/ })

});