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

/***/ "./components/BarChart.js":
/*!********************************!*\
  !*** ./components/BarChart.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarChart; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/kungu/Documents/frontend/components/BarChart.js\";\n\n\n\n\n\nfunction BarChart() {\n  // const months = [\"January\", \"February\", \"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"November\",\"December\"]\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n      data: {\n        labels: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"November\", \"December\"],\n        datasets: [{\n          label: \"Current Month\",\n          data: [65, 59, 80, 81, 56, 55, 40, 70, 80, 90, 100],\n          backgroundColor: \"#BE5050\"\n        }, {\n          label: \"Previous Month\",\n          data: [65, 59, 80, 81, 56, 55, 40, 70, 80, 90, 100],\n          backgroundColor: \"gray\"\n        }]\n      },\n      height: 300,\n      width: 300,\n      options: {\n        maintainAspectRation: true,\n        responsive: true\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n_c = BarChart;\n\nvar _c;\n\n$RefreshReg$(_c, \"BarChart\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhckNoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDZSxTQUFTRyxRQUFULEdBQW9CO0FBQ2pDO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxnREFBRDtBQUVFLFVBQUksRUFBRTtBQUNKQyxRQUFBQSxNQUFNLEVBQUUsQ0FDTixTQURNLEVBRU4sVUFGTSxFQUdOLE9BSE0sRUFJTixPQUpNLEVBS04sS0FMTSxFQU1OLE1BTk0sRUFPTixNQVBNLEVBUU4sUUFSTSxFQVNOLFdBVE0sRUFVTixVQVZNLEVBV04sVUFYTSxDQURKO0FBY0pDLFFBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VDLFVBQUFBLEtBQUssRUFBRSxlQURUO0FBRUVDLFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNEIsRUFBNUIsRUFBK0IsRUFBL0IsRUFBa0MsRUFBbEMsRUFBcUMsR0FBckMsQ0FGUjtBQUdFQyxVQUFBQSxlQUFlLEVBQUU7QUFIbkIsU0FEUSxFQU1SO0FBQ0lGLFVBQUFBLEtBQUssRUFBRSxnQkFEWDtBQUVJQyxVQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTRCLEVBQTVCLEVBQStCLEVBQS9CLEVBQWtDLEVBQWxDLEVBQXFDLEdBQXJDLENBRlY7QUFHSUMsVUFBQUEsZUFBZSxFQUFFO0FBSHJCLFNBTlE7QUFkTixPQUZSO0FBNkJFLFlBQU0sRUFBRSxHQTdCVjtBQThCRSxXQUFLLEVBQUUsR0E5QlQ7QUErQkUsYUFBTyxFQUFFO0FBQ1BDLFFBQUFBLG9CQUFvQixFQUFFLElBRGY7QUFFUEMsUUFBQUEsVUFBVSxFQUFDO0FBRko7QUEvQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBd0NEO0tBM0N1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXJDaGFydC5qcz9mMTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhckNoYXJ0KCkge1xuICAvLyBjb25zdCBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCYXIgXG4gICAgICBcbiAgICAgICAgZGF0YT17e1xuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICAgICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgICAgIFwiQXVndXN0XCIsXG4gICAgICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgXCJEZWNlbWJlclwiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ3VycmVudCBNb250aFwiLFxuICAgICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDAsNzAsODAsOTAsMTAwXSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCRTUwNTBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUHJldmlvdXMgTW9udGhcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDAsNzAsODAsOTAsMTAwXSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9fVxuICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW9uOiB0cnVlLFxuICAgICAgICAgIHJlc3BvbnNpdmU6dHJ1ZSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCYXIiLCJDaGFydCIsIkJhckNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWludGFpbkFzcGVjdFJhdGlvbiIsInJlc3BvbnNpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BarChart.js\n");

/***/ })

});