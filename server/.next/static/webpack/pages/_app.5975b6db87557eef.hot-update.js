"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\n/* harmony import */ var services_getWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/getWeb3 */ \"./services/getWeb3.ts\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var setProvider = context === null || context === void 0 ? void 0 : context.setProvider;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (setProvider) (0,services_getWeb3__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().then(function(web3) {\n            setProvider(web3);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: \"/Users/pascal/test/solidity-nft/server/pages/_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/pages/_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(MyApp, \"wqnYpdjMkT3eDhbBjwDmfBO/TFg=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFDTTtBQUNMO0FBQ1I7QUFDUDs7QUFTL0IsR0FBSyxDQUFDSyxLQUFLLEdBQUcsUUFBUSxRQUFnQyxDQUFDO1FBQXRDQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsU0FBUyxTQUFUQSxTQUFTOztJQUNuQyxHQUFLLENBQUNDLE9BQU8sR0FBR1AsaURBQVUsQ0FBQ0UsNkRBQVU7SUFDckMsR0FBSyxDQUFDTSxXQUFXLEdBQUdELE9BQU8sYUFBUEEsT0FBTyxjQUFQQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxPQUFPLENBQUVDLFdBQVc7SUFFeENULGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFUyxXQUFXLEVBQ2JMLDREQUFPLEdBQUdNLElBQUksQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1lBQ3hCRixXQUFXLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxNQUFNLDZFQUNIVCw4REFBVzs4RkFDVEksU0FBUyxvQkFBS0MsU0FBUzs7Ozs7Ozs7OztBQUc5QixDQUFDO0dBaEJLRixLQUFLO0tBQUxBLEtBQUs7QUFrQlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tIFwiY29tcG9uZW50cy9BcHBDb250ZXh0XCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiY29tcG9uZW50cy9BcHBDb250ZXh0XCI7XG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwic2VydmljZXMvZ2V0V2ViM1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGV0aGVyZXVtPzogYW55O1xuICAgIHdlYjM/OiBhbnk7XG4gIH1cbn1cblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3Qgc2V0UHJvdmlkZXIgPSBjb250ZXh0Py5zZXRQcm92aWRlcjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXRQcm92aWRlcilcbiAgICAgIGdldFdlYjMoKS50aGVuKCh3ZWIzKSA9PiB7XG4gICAgICAgIHNldFByb3ZpZGVyKHdlYjMpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0FwcFByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwiQXBwQ29udGV4dCIsImdldFdlYjMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnRleHQiLCJzZXRQcm92aWRlciIsInRoZW4iLCJ3ZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});