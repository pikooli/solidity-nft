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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ViewTransaction = function(param) {\n    var provider = param.provider;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), transaction = ref[0], setTransaction = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subscription = ref1[0], setSubscription = ref1[1];\n    var getLastTransaction = function() {\n        var _ref = _asyncToGenerator(_Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_pascal_test_solidity_nft_server_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.t0 = console;\n                        _ctx.next = 3;\n                        return provider.eth.getBlockNumber();\n                    case 3:\n                        _ctx.t1 = _ctx.sent;\n                        _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                        provider.eth.getBlock(34).then(function(blocks) {\n                            console.log(blocks);\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getLastTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (provider && !subscription) {\n            setSubscription(provider.eth.subscribe(\"logs\", {}, function(error, log) {\n                setTransaction(log);\n            }));\n            test();\n        }\n    }, [\n        provider\n    ]);\n    // useEffect(() => {\n    //   if (subscription) {\n    //     console.log(\"subscribe\");\n    //     subscription\n    //       .subscribe((error, result) => {\n    //         console.log(error, result);\n    //       })\n    //       .on(\"data\", async (txHash) => {\n    //         console.log(txHash);\n    //       });\n    //   }\n    // }, [subscription]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-46\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: \"Last transaction :\"\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: JSON.stringify(transaction)\n            }, void 0, false, {\n                fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pascal/test/solidity-nft/server/components/ViewTransaction.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewTransaction, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = ViewTransaction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewTransaction);\nvar _c;\n$RefreshReg$(_c, \"ViewTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUtsRCxHQUFLLENBQUNHLGVBQWUsR0FBb0IsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbEQsR0FBSyxDQUFpQ0YsR0FBZSxHQUFmQSwrQ0FBUSxJQUF2Q0csV0FBVyxHQUFvQkgsR0FBZSxLQUFqQ0ksY0FBYyxHQUFJSixHQUFlO0lBQ3JELEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsSUFBekNLLFlBQVksR0FBcUJMLElBQWUsS0FBbENNLGVBQWUsR0FBSU4sSUFBZTtJQUV2RCxHQUFLLENBQUNPLGtCQUFrQjt1TEFBRyxRQUFRLFdBQUksQ0FBQzs7OztrQ0FDdENDLE9BQU87OytCQUFXTixRQUFRLENBQUNPLEdBQUcsQ0FBQ0MsY0FBYzs7O2dDQUFyQ0MsR0FBRyx1QkFWZixDQVVvRDt3QkFDaERULFFBQVEsQ0FBQ08sR0FBRyxDQUFDRyxRQUFRLENBQUMsRUFBRSxFQUFFQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQzs0QkFDMUNOLE9BQU8sQ0FBQ0csR0FBRyxDQUFDRyxNQUFNLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQyxDQUFDLENBQUM7Ozs7OztRQUNMLENBQUM7d0JBTEtQLGtCQUFrQjs7OztJQU14QlIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUVHLFFBQVEsS0FBS0csWUFBWSxFQUFFLENBQUM7WUFDOUJDLGVBQWUsQ0FDYkosUUFBUSxDQUFDTyxHQUFHLENBQUNNLFNBQVMsQ0FBQyxDQUFNLE9BQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUUosQ0FBUEssS0FBSyxFQUFFTCxHQUFHLEVBQUssQ0FBQztnQkFDbERQLGNBQWMsQ0FBQ08sR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUNGLENBQUM7WUFDRk0sSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNmO1FBQUFBLFFBQVE7SUFBQSxDQUFDLENBQUMsQ0FBQztJQUVmLEVBQW9CO0lBQ3BCLEVBQXdCO0lBQ3hCLEVBQWdDO0lBQ2hDLEVBQW1CO0lBQ25CLEVBQXdDO0lBQ3hDLEVBQXNDO0lBQ3RDLEVBQVc7SUFDWCxFQUF3QztJQUN4QyxFQUErQjtJQUMvQixFQUFZO0lBQ1osRUFBTTtJQUNOLEVBQXNCO0lBRXRCLE1BQU0sNkVBQ0hnQixDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFNOzt3RkFDbEJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFNOzBCQUFDLENBQWtCOzs7Ozs7d0ZBQ3ZDRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBRTswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNsQixXQUFXOzs7Ozs7Ozs7Ozs7QUFHbkQsQ0FBQztHQXhDS0YsZUFBZTtLQUFmQSxlQUFlO0FBMENyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlld1RyYW5zYWN0aW9uLnRzeD9hMWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuXG50eXBlIFByb3BzID0geyBwcm92aWRlcj86IFdlYjMgfTtcblxuY29uc3QgVmlld1RyYW5zYWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwcm92aWRlciB9KSA9PiB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbc3Vic2NyaXB0aW9uLCBzZXRTdWJzY3JpcHRpb25dID0gdXNlU3RhdGU8YW55PigpO1xuXG4gIGNvbnN0IGdldExhc3RUcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhd2FpdCBwcm92aWRlci5ldGguZ2V0QmxvY2tOdW1iZXIoKSk7XG4gICAgcHJvdmlkZXIuZXRoLmdldEJsb2NrKDM0KS50aGVuKChibG9ja3MpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGJsb2Nrcyk7XG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyICYmICFzdWJzY3JpcHRpb24pIHtcbiAgICAgIHNldFN1YnNjcmlwdGlvbihcbiAgICAgICAgcHJvdmlkZXIuZXRoLnN1YnNjcmliZShcImxvZ3NcIiwge30sIChlcnJvciwgbG9nKSA9PiB7XG4gICAgICAgICAgc2V0VHJhbnNhY3Rpb24obG9nKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICB0ZXN0KCk7XG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwic3Vic2NyaWJlXCIpO1xuICAvLyAgICAgc3Vic2NyaXB0aW9uXG4gIC8vICAgICAgIC5zdWJzY3JpYmUoKGVycm9yLCByZXN1bHQpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgcmVzdWx0KTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICAgLm9uKFwiZGF0YVwiLCBhc3luYyAodHhIYXNoKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2codHhIYXNoKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9LCBbc3Vic2NyaXB0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPkxhc3QgdHJhbnNhY3Rpb24gOjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj57SlNPTi5zdHJpbmdpZnkodHJhbnNhY3Rpb24pfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlld1RyYW5zYWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJWaWV3VHJhbnNhY3Rpb24iLCJwcm92aWRlciIsInRyYW5zYWN0aW9uIiwic2V0VHJhbnNhY3Rpb24iLCJzdWJzY3JpcHRpb24iLCJzZXRTdWJzY3JpcHRpb24iLCJnZXRMYXN0VHJhbnNhY3Rpb24iLCJjb25zb2xlIiwiZXRoIiwiZ2V0QmxvY2tOdW1iZXIiLCJsb2ciLCJnZXRCbG9jayIsInRoZW4iLCJibG9ja3MiLCJzdWJzY3JpYmUiLCJlcnJvciIsInRlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ViewTransaction.tsx\n");

/***/ })

});