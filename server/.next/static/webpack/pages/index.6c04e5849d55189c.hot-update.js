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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var provider = param.provider;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transaction = ref[0], setTransaction = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subscription = ref1[0], setSubscription = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transactionInformation = ref2[0], setTransactionInformation = ref2[1];\n    var getLastTransaction = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var lastBlock, lastTranslaction, info;\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return provider.eth.getBlockNumber();\n                    case 3:\n                        lastBlock = _ctx.sent;\n                        _ctx.next = 6;\n                        return provider.eth.getBlock(lastBlock);\n                    case 6:\n                        lastTranslaction = _ctx.sent;\n                        setTransaction(lastTranslaction);\n                        _ctx.next = 10;\n                        return provider.eth.getTransactionReceipt(lastTranslaction.hash);\n                    case 10:\n                        info = _ctx.sent;\n                        setTransactionInformation(info);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getLastTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, function(error, log) {\n                setTransaction(log);\n            }));\n            getLastTransaction();\n        }\n    }, [\n        provider\n    ]);\n    // useEffect(() => {\n    //   if (subscription) {\n    //     console.log(\"subscribe\");\n    //     subscription\n    //       .subscribe((error, result) => {\n    //         console.log(error, result);\n    //       })\n    //       .on(\"data\", async (txHash) => {\n    //         console.log(txHash);\n    //       });\n    //   }\n    // }, [subscription]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-2/3 break-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: \"Last transaction :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: JSON.stringify(transaction)\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: \"Information :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: JSON.stringify(transactionInformation)\n                    }, void 0, false, {\n                        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"o3ah021WtSoTA/spm0a25R2+0s4=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL2NvbXBvbmVudHMvVmlld1RyYW5zYWN0aW9uLnRzeD9hMWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuXG50eXBlIFByb3BzID0geyBwcm92aWRlcj86IFdlYjMgfTtcblxuY29uc3QgVmlld1RyYW5zYWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwcm92aWRlciB9KSA9PiB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbc3Vic2NyaXB0aW9uLCBzZXRTdWJzY3JpcHRpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25JbmZvcm1hdGlvbiwgc2V0VHJhbnNhY3Rpb25JbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG5cbiAgY29uc3QgZ2V0TGFzdFRyYW5zYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChwcm92aWRlcikge1xuICAgICAgY29uc3QgbGFzdEJsb2NrID0gYXdhaXQgcHJvdmlkZXIuZXRoLmdldEJsb2NrTnVtYmVyKCk7XG4gICAgICBjb25zdCBsYXN0VHJhbnNsYWN0aW9uID0gYXdhaXQgcHJvdmlkZXIuZXRoLmdldEJsb2NrKGxhc3RCbG9jayk7XG4gICAgICBzZXRUcmFuc2FjdGlvbihsYXN0VHJhbnNsYWN0aW9uKTtcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBwcm92aWRlci5ldGguZ2V0VHJhbnNhY3Rpb25SZWNlaXB0KFxuICAgICAgICBsYXN0VHJhbnNsYWN0aW9uLmhhc2hcbiAgICAgICk7XG4gICAgICBzZXRUcmFuc2FjdGlvbkluZm9ybWF0aW9uKGluZm8pO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvdmlkZXIgJiYgIXN1YnNjcmlwdGlvbikge1xuICAgICAgc2V0U3Vic2NyaXB0aW9uKFxuICAgICAgICBwcm92aWRlci5ldGguc3Vic2NyaWJlKFwibG9nc1wiLCB7fSwgKGVycm9yLCBsb2cpID0+IHtcbiAgICAgICAgICBzZXRUcmFuc2FjdGlvbihsb2cpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGdldExhc3RUcmFuc2FjdGlvbigpO1xuICAgIH1cbiAgfSwgW3Byb3ZpZGVyXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcInN1YnNjcmliZVwiKTtcbiAgLy8gICAgIHN1YnNjcmlwdGlvblxuICAvLyAgICAgICAuc3Vic2NyaWJlKChlcnJvciwgcmVzdWx0KSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIHJlc3VsdCk7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC5vbihcImRhdGFcIiwgYXN5bmMgKHR4SGFzaCkgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHR4SGFzaCk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfSwgW3N1YnNjcmlwdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBicmVhay1hbGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPkxhc3QgdHJhbnNhY3Rpb24gOjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj57SlNPTi5zdHJpbmdpZnkodHJhbnNhY3Rpb24pfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5JbmZvcm1hdGlvbiA6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e0pTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uSW5mb3JtYXRpb24pfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3VHJhbnNhY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZpZXdUcmFuc2FjdGlvbiIsInByb3ZpZGVyIiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsInN1YnNjcmlwdGlvbiIsInNldFN1YnNjcmlwdGlvbiIsInRyYW5zYWN0aW9uSW5mb3JtYXRpb24iLCJzZXRUcmFuc2FjdGlvbkluZm9ybWF0aW9uIiwiZ2V0TGFzdFRyYW5zYWN0aW9uIiwibGFzdEJsb2NrIiwibGFzdFRyYW5zbGFjdGlvbiIsImluZm8iLCJldGgiLCJnZXRCbG9ja051bWJlciIsImdldEJsb2NrIiwiZ2V0VHJhbnNhY3Rpb25SZWNlaXB0IiwiaGFzaCIsInN1YnNjcmliZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});