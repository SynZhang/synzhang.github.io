webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero-post */ \"./components/hero-post.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.ts\");\nvar _jsxFileName = \"/Users/synzhang/Workspace/portfolio/honk/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar __N_SSG = true;\nfunction Index(_ref) {\n  var _this = this;\n\n  var allPosts = _ref.allPosts;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, _constants__WEBPACK_IMPORTED_MODULE_5__[\"CMS_NAME\"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, allPosts.map(function (heroPost, index) {\n    return __jsx(_components_hero_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: index,\n      title: heroPost.title,\n      coverImage: heroPost.coverImage,\n      date: heroPost.date,\n      slug: heroPost.slug,\n      excerpt: heroPost.excerpt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsImFsbFBvc3RzIiwiQ01TX05BTUUiLCJtYXAiLCJoZXJvUG9zdCIsImluZGV4IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsInNsdWciLCJleGNlcnB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRWUsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMxQyxTQUNFLG1FQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUMsbURBQVIsQ0FERixDQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ1osTUFBQyw2REFBRDtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLFdBQUssRUFBRUQsUUFBUSxDQUFDRSxLQUZsQjtBQUdFLGdCQUFVLEVBQUVGLFFBQVEsQ0FBQ0csVUFIdkI7QUFJRSxVQUFJLEVBQUVILFFBQVEsQ0FBQ0ksSUFKakI7QUFLRSxVQUFJLEVBQUVKLFFBQVEsQ0FBQ0ssSUFMakI7QUFNRSxhQUFPLEVBQUVMLFFBQVEsQ0FBQ00sT0FOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURZO0FBQUEsR0FBYixDQURILENBSkYsQ0FERixDQURGO0FBcUJEO0tBdEJ1QlYsSyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IEhlcm9Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby1wb3N0J1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBhbGxQb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57Q01TX05BTUV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHthbGxQb3N0cy5tYXAoKGhlcm9Qb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17aGVyb1Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gICAgJ2F1dGhvcicsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICAgICdleGNlcnB0JyxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})