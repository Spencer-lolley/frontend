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

/***/ "./components/Layout/Nav.js":
/*!**********************************!*\
  !*** ./components/Layout/Nav.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/kungu/Documents/frontend/components/Layout/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar navigation = [{\n  name: \"Barber\",\n  href: \"#\",\n  current: true\n}, {\n  name: \"Salon\",\n  href: \"#\",\n  current: false\n}, {\n  name: \"Beauty Services\",\n  href: \"#\",\n  current: false\n}, {\n  name: \"Products\",\n  href: \"#\",\n  current: false\n}, {\n  name: \"Register my Business\",\n  href: \"/serviceProvider/RegisterBusiness\",\n  current: false\n}];\nfunction Nav() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"nav\", {\n      className: \"sticky top-0 z-30 w-full bg-white shadow-lg\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"flex items-center w-full h-20\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between w-full ml-4 md:mx-16\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex items-center justify-center flex-shrink-1\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold cursor-pointer\",\n                children: \"Logo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"hidden md:block\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                className: \"flex items-baseline ml-10 space-x-4\",\n                children: navigation.map(function (item) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                    href: item.href,\n                    className: item.current ? \"text-OrangeText\" : \"px-3 py-2 rounded-md text-medium text-gray-500 hover:text-OrangeText\",\n                    smooth: true,\n                    offset: 50,\n                    duration: 500,\n                    \"aria-current\": item.current ? \"page\" : undefined,\n                    children: item.name\n                  }, item.name, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 34,\n                    columnNumber: 21\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"md:block\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"hidden uppercase text-white bg-OrangeText focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:bg-orange-500\",\n                children: \"Sign up/Login\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineShoppingCart, {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 15\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 26\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"flex mr-2 md:hidden\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              onClick: function onClick() {\n                return setIsOpen(!isOpen);\n              },\n              type: \"button\",\n              className: \"inline-flex items-center justify-center p-2 text-white rounded-md bg-OrangeText hover:bg-OrangeText focus:outline-none focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white\",\n              \"aria-controls\": \"mobile-menu\",\n              \"aria-expanded\": \"false\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                className: \"sr-only\",\n                children: \"Open main menu\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, this), !isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", {\n                className: \"block w-6 h-6\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  strokeWidth: \"2\",\n                  d: \"M4 6h16M4 12h16M4 18h16\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 21\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", {\n                className: \"block w-6 h-6\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  strokeWidth: \"2\",\n                  d: \"M6 18L18 6M6 6l12 12\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 100,\n                  columnNumber: 21\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n        show: isOpen,\n        enter: \"transition ease-out duration-100 transform\",\n        enterFrom: \"opacity-0 scale-95\",\n        enterTo: \"opacity-100 scale-100\",\n        leave: \"transition ease-in duration-75 transorm\",\n        leaveFrom: \"opacity-200 scale-100\",\n        leaveTo: \"opacity-0 scale-95\",\n        children: function children(ref) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"md:hidden\",\n            id: \"mobile-menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              ref: ref,\n              className: \"flex flex-col px-4 pt-2 pb-3 space-y-2 bg-white\",\n              children: [navigation.map(function (mobile) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                  href: mobile.href,\n                  smooth: true,\n                  offset: 50,\n                  duration: 500,\n                  className: mobile.current ? \"text-OrangeText\" : \"py-2 rounded-md text-medium text-gray-500 hover:text-OrangeText\",\n                  children: mobile.name\n                }, mobile.name, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 129,\n                  columnNumber: 19\n                }, _this);\n              }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n                  type: \"button\",\n                  className: \"uppercase text-white bg-OrangeText focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:bg-orange-500\",\n                  children: \"Sign up/Login\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 146,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 145,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Nav, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUZSO0FBR0UsaUJBQVMsRUFBQyxvQkFIWjtBQUlFLGVBQU8sRUFBQyx1QkFKVjtBQUtFLGFBQUssRUFBQyx5Q0FMUjtBQU1FLGlCQUFTLEVBQUMsdUJBTlo7QUFPRSxlQUFPLEVBQUMsb0JBUFY7QUFBQSxrQkFTRyxrQkFBQ0ssR0FBRDtBQUFBLDhCQUNDO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQTJCLGNBQUUsRUFBQyxhQUE5QjtBQUFBLG1DQUNFO0FBQ0UsaUJBQUcsRUFBRUEsR0FEUDtBQUVFLHVCQUFTLEVBQUMsaURBRlo7QUFBQSx5QkFJR1YsVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQ0ksTUFBRDtBQUFBLG9DQUNkLDhEQUFDLDhDQUFEO0FBRUUsc0JBQUksRUFBRUEsTUFBTSxDQUFDVCxJQUZmO0FBR0Usd0JBQU0sRUFBRSxJQUhWO0FBSUUsd0JBQU0sRUFBRSxFQUpWO0FBS0UsMEJBQVEsRUFBRSxHQUxaO0FBTUUsMkJBQVMsRUFDUFMsTUFBTSxDQUFDUixPQUFQLEdBQ0ksaUJBREosR0FFSSxpRUFUUjtBQUFBLDRCQVlHUSxNQUFNLENBQUNWO0FBWlYsbUJBQ09VLE1BQU0sQ0FBQ1YsSUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURjO0FBQUEsZUFBZixDQUpILGVBcUJFO0FBQUEsdUNBQ0U7QUFDRSxzQkFBSSxFQUFDLFFBRFA7QUFFRSwyQkFBUyxFQUFDLDhKQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQUFBO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTJJRDs7R0E5SXVCRzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2LmpzPzFmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5cbmNvbnN0IG5hdmlnYXRpb24gPSBbXG4gIHsgbmFtZTogXCJCYXJiZXJcIiwgaHJlZjogXCIjXCIsIGN1cnJlbnQ6IHRydWUgfSxcbiAgeyBuYW1lOiBcIlNhbG9uXCIsIGhyZWY6IFwiI1wiLCBjdXJyZW50OiBmYWxzZSB9LFxuICB7IG5hbWU6IFwiQmVhdXR5IFNlcnZpY2VzXCIsIGhyZWY6IFwiI1wiLCBjdXJyZW50OiBmYWxzZSB9LFxuICB7IG5hbWU6IFwiUHJvZHVjdHNcIiwgaHJlZjogXCIjXCIsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlZ2lzdGVyIG15IEJ1c2luZXNzXCIsXG4gICAgaHJlZjogXCIvc2VydmljZVByb3ZpZGVyL1JlZ2lzdGVyQnVzaW5lc3NcIixcbiAgICBjdXJyZW50OiBmYWxzZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTMwIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBoLTIwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbWwtNCBtZDpteC0xNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyXCI+TG9nbzwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogbGFyZ2UgbW9uaXRvcnMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG1sLTEwIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtT3JhbmdlVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtT3JhbmdlVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpdGVtLmN1cnJlbnQgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIGJnLU9yYW5nZVRleHQgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb250LW1lZGl1bSByb3VuZGVkLWZ1bGwgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBtci0zIG1kOm1yLTAgaG92ZXI6Ymctb3JhbmdlLTUwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiB1cC9Mb2dpblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPjxkaXY+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVTaG9wcGluZ0NhcnQgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBzbWFsbCBzY3JlZW5zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1yLTIgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgYmctT3JhbmdlVGV4dCBob3ZlcjpiZy1PcmFuZ2VUZXh0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LW9yYW5nZS04MDAgZm9jdXM6cmluZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgIHshaXNPcGVuID8gKFxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIHNob3c9e2lzT3Blbn1cbiAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwIHRyYW5zZm9ybVwiXG4gICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NSB0cmFuc29ybVwiXG4gICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0yMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgPlxuICAgICAgICAgIHsocmVmKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiIGlkPVwibW9iaWxlLW1lbnVcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtNCBwdC0yIHBiLTMgc3BhY2UteS0yIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgobW9iaWxlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBrZXk9e21vYmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXttb2JpbGUuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZS5jdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1PcmFuZ2VUZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJweS0yIHJvdW5kZWQtbWQgdGV4dC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LU9yYW5nZVRleHRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHttb2JpbGUubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC13aGl0ZSBiZy1PcmFuZ2VUZXh0IGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMyBtZDptci0wIGhvdmVyOmJnLW9yYW5nZS01MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTaWduIHVwL0xvZ2luXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIlRyYW5zaXRpb24iLCJBaU91dGxpbmVTaG9wcGluZ0NhcnQiLCJuYXZpZ2F0aW9uIiwibmFtZSIsImhyZWYiLCJjdXJyZW50IiwiTmF2IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibWFwIiwiaXRlbSIsInVuZGVmaW5lZCIsInJlZiIsIm1vYmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Nav.js\n");

/***/ })

});