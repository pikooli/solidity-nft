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

/***/ "./components/navbar/NavLink.tsx":
/*!***************************************!*\
  !*** ./components/navbar/NavLink.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_link_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link/Link */ \"./components/link/Link.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar LinkPage = function(param) {\n    var href = param.href, text = param.text, active = param.active;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"nav-item\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_link_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            href: href,\n            text: text,\n            className: \"nav-link \".concat(active || \"\"),\n            \"aria-current\": \"page\"\n        }, void 0, false, {\n            fileName: \"/Users/pascal/test/solidity-nft/server/components/navbar/NavLink.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/navbar/NavLink.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = LinkPage;\nvar NavLink = function(param) {\n    var className = param.className;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var active = _defineProperty({}, router.pathname, \"active\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"lg:flex \".concat(className || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkPage, {\n                href: \"/nfts\",\n                text: \"nfts\",\n                active: active[\"/nfts\"]\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/navbar/NavLink.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"nav-item\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_link_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/transfers\",\n                    text: \"transfers\",\n                    className: \"nav-link \".concat(active[\"/transfers\"]),\n                    \"aria-current\": \"page\"\n                }, void 0, false, {\n                    fileName: \"/Users/pascal/test/solidity-nft/server/components/navbar/NavLink.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/navbar/NavLink.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/navbar/NavLink.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = NavLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLink);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkPage\");\n$RefreshReg$(_c1, \"NavLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXZMaW5rLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjO0FBQ0E7O0FBSXZDLEdBQUssQ0FBQ0csUUFBUSxHQUFHLFFBQ1osUUFPQyxDQUFDO1FBUExDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxJQUFJLFNBQUpBLElBQUksRUFDSkMsTUFBTSxTQUFOQSxNQUFNO0lBTU4sTUFBTSw2RUFDSEMsQ0FBRTtRQUFDQyxTQUFTLEVBQUMsQ0FBVTs4RkFDckJOLDREQUFJO1lBQ0hFLElBQUksRUFBRUEsSUFBSTtZQUNWQyxJQUFJLEVBQUVBLElBQUk7WUFDVkcsU0FBUyxFQUFHLENBQVMsV0FBZSxPQUFiRixNQUFNLElBQUksQ0FBRTtZQUNuQ0csQ0FBWSxlQUFDLENBQU07Ozs7Ozs7Ozs7O0FBSTNCLENBQUM7S0FuQktOLFFBQVE7QUFxQmQsR0FBSyxDQUFDTyxPQUFPLEdBQW9CLFFBQVEsUUFBVyxDQUFDO1FBQWpCRixTQUFTLFNBQVRBLFNBQVM7O0lBQzNDLEdBQUssQ0FBQ0csTUFBTSxHQUFHVixzREFBUztJQUN4QixHQUFLLENBQUNLLE1BQU0sdUJBQU1LLE1BQU0sQ0FBQ0MsUUFBUSxFQUFhLENBQVE7SUFFdEQsTUFBTSw2RUFDSEMsQ0FBRTtRQUFDTCxTQUFTLEVBQUcsQ0FBUSxVQUFrQixPQUFoQkEsU0FBUyxJQUFJLENBQUU7O3dGQUN0Q0wsUUFBUTtnQkFBQ0MsSUFBSSxFQUFDLENBQU87Z0JBQUNDLElBQUksRUFBRSxDQUFNO2dCQUFFQyxNQUFNLEVBQUVBLE1BQU0sQ0FBQyxDQUFPOzs7Ozs7d0ZBRTFEQyxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVTtzR0FDckJOLDREQUFJO29CQUNIRSxJQUFJLEVBQUMsQ0FBWTtvQkFDakJDLElBQUksRUFBRSxDQUFXO29CQUNqQkcsU0FBUyxFQUFHLENBQVMsV0FBdUIsT0FBckJGLE1BQU0sQ0FBQyxDQUFZO29CQUMxQ0csQ0FBWSxlQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7R0FsQktDLE9BQU87O1FBQ0lULGtEQUFTOzs7TUFEcEJTLE9BQU87QUFvQmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci9OYXZMaW5rLnRzeD80ZmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcImNvbXBvbmVudHMvbGluay9MaW5rXCI7XG5cbnR5cGUgUHJvcHMgPSB7IGNsYXNzTmFtZT86IHN0cmluZyB9O1xuXG5jb25zdCBMaW5rUGFnZSA9ICh7XG4gIGhyZWYsXG4gIHRleHQsXG4gIGFjdGl2ZSxcbn06IHtcbiAgaHJlZjogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFjdGl2ZTogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdGV4dD17dGV4dH1cbiAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHthY3RpdmUgfHwgXCJcIn1gfVxuICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgID48L0xpbms+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdkxpbms6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhY3RpdmUgPSB7IFtyb3V0ZXIucGF0aG5hbWUgYXMgc3RyaW5nXTogXCJhY3RpdmVcIiB9O1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17YGxnOmZsZXggJHtjbGFzc05hbWUgfHwgXCJcIn1gfT5cbiAgICAgIDxMaW5rUGFnZSBocmVmPVwiL25mdHNcIiB0ZXh0PXtcIm5mdHNcIn0gYWN0aXZlPXthY3RpdmVbXCIvbmZ0c1wiXX0gLz5cblxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi90cmFuc2ZlcnNcIlxuICAgICAgICAgIHRleHQ9e1widHJhbnNmZXJzXCJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHthY3RpdmVbXCIvdHJhbnNmZXJzXCJdfWB9XG4gICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXG4gICAgICAgID48L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiTGluayIsIkxpbmtQYWdlIiwiaHJlZiIsInRleHQiLCJhY3RpdmUiLCJsaSIsImNsYXNzTmFtZSIsImFyaWEtY3VycmVudCIsIk5hdkxpbmsiLCJyb3V0ZXIiLCJwYXRobmFtZSIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar/NavLink.tsx\n");

/***/ })

});