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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var components_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AppContext */ \"./components/AppContext.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar NFT = function() {\n    var ref, ref1;\n    _s();\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(components_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    var contract = context === null || context === void 0 ? void 0 : (ref = context.values) === null || ref === void 0 ? void 0 : ref.contract;\n    var account = context === null || context === void 0 ? void 0 : (ref1 = context.values) === null || ref1 === void 0 ? void 0 : ref1.account;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (contract && account) {\n            contract.methods.getPastEvents(\"Transfer\", {\n                filter: {\n                    _from: \"0xeb24b99972c36AAF5c257ce756aA4E2dd7378A38\"\n                }\n            }).then(function(event) {\n                console.log(event);\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/pascal/test/solidity-nft/server/pages/nft.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/pages/nft.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(NFT, \"wqnYpdjMkT3eDhbBjwDmfBO/TFg=\");\n_c = NFT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFT);\nvar _c;\n$RefreshReg$(_c, \"NFT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM2QztBQUNQO0FBQ1E7O0FBRTlDLEdBQUssQ0FBQ0ksR0FBRyxHQUFhLFFBQ3RCLEdBRDRCLENBQUM7UUFFVkMsR0FBZSxFQUNoQkEsSUFBZTs7SUFGL0IsR0FBSyxDQUFDQSxPQUFPLEdBQUdMLGlEQUFVLENBQUNHLDZEQUFVO0lBQ3JDLEdBQUssQ0FBQ0csUUFBUSxHQUFHRCxPQUFPLGFBQVBBLE9BQU8sY0FBUEEsSUFBSSxDQUFKQSxDQUFlLElBQWZBLEdBQWUsR0FBZkEsT0FBTyxDQUFFRSxNQUFNLGNBQWZGLEdBQWUsY0FBZkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLEdBQWUsQ0FBRUMsUUFBUTtJQUMxQyxHQUFLLENBQUNFLE9BQU8sR0FBR0gsT0FBTyxhQUFQQSxPQUFPLGNBQVBBLElBQUksQ0FBSkEsQ0FBZSxJQUFmQSxJQUFlLEdBQWZBLE9BQU8sQ0FBRUUsTUFBTSxjQUFmRixJQUFlLGNBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxJQUFlLENBQUVHLE9BQU87SUFDeENQLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFSyxRQUFRLElBQUlFLE9BQU8sRUFBRSxDQUFDO1lBQ3hCRixRQUFRLENBQUNHLE9BQU8sQ0FDYkMsYUFBYSxDQUFDLENBQVUsV0FBRSxDQUFDO2dCQUMxQkMsTUFBTSxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUE0QztnQkFBQyxDQUFDO1lBQ2pFLENBQUMsRUFDQUMsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7Z0JBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLDZFQUNIWix5REFBTTs4RkFDSmUsQ0FBRzs7Ozs7Ozs7OztBQUdWLENBQUM7R0FwQktiLEdBQUc7S0FBSEEsR0FBRztBQXNCVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25mdC50c3g/ODMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJjb21wb25lbnRzL0FwcENvbnRleHRcIjtcblxuY29uc3QgTkZUOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IGNvbnRyYWN0ID0gY29udGV4dD8udmFsdWVzPy5jb250cmFjdDtcbiAgY29uc3QgYWNjb3VudCA9IGNvbnRleHQ/LnZhbHVlcz8uYWNjb3VudDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuZ2V0UGFzdEV2ZW50cyhcIlRyYW5zZmVyXCIsIHtcbiAgICAgICAgICBmaWx0ZXI6IHsgX2Zyb206IFwiMHhlYjI0Yjk5OTcyYzM2QUFGNWMyNTdjZTc1NmFBNEUyZGQ3Mzc4QTM4XCIgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTkZUO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJBcHBDb250ZXh0IiwiTkZUIiwiY29udGV4dCIsImNvbnRyYWN0IiwidmFsdWVzIiwiYWNjb3VudCIsIm1ldGhvZHMiLCJnZXRQYXN0RXZlbnRzIiwiZmlsdGVyIiwiX2Zyb20iLCJ0aGVuIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/nft.tsx\n");

/***/ })

});