"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Contact/page",{

/***/ "(app-pages-browser)/./app/comp/Pop.js":
/*!*************************!*\
  !*** ./app/comp/Pop.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_header_header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/header/header.module.scss */ \"(app-pages-browser)/./app/pages/header/header.module.scss\");\n/* harmony import */ var _pages_header_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_header_header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MenuOptions = (param)=>{\n    let { closeMenu } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const menuItems = [\n        {\n            label: \"Home\",\n            link: \"/\"\n        },\n        {\n            label: \"Products\",\n            link: \"../../pages/products\"\n        },\n        {\n            label: \"About Us\",\n            link: \"../../pages/aboutus\"\n        },\n        {\n            label: \"Blogs\",\n            link: \"../../pages/blogs\"\n        },\n        {\n            label: \"Contact Us\",\n            link: \"../../pages/Contact\"\n        },\n        {\n            label: \"Log In\",\n            link: \"../../pages/login\"\n        },\n        {\n            label: \"Sign Up\",\n            link: \"../../pages/signup\"\n        }\n    ];\n    const handleMenuItemClick = (link)=>{\n        router.push(link);\n        closeMenu();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pages_header_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuOptionsOverlay),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_pages_header_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuOptions),\n            children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>handleMenuItemClick(item.link),\n                    children: item.label\n                }, index, false, {\n                    fileName: \"C:\\\\프론트엔드 공부\\\\upwork\\\\upwork-project\\\\app\\\\comp\\\\Pop.js\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\프론트엔드 공부\\\\upwork\\\\upwork-project\\\\app\\\\comp\\\\Pop.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\프론트엔드 공부\\\\upwork\\\\upwork-project\\\\app\\\\comp\\\\Pop.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MenuOptions, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MenuOptions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuOptions);\nvar _c;\n$RefreshReg$(_c, \"MenuOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wL1BvcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUM4QjtBQUNmO0FBRTVDLE1BQU1JLGNBQWM7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzlCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxZQUFZO1FBQ2Q7WUFBRUMsT0FBTztZQUFRQyxNQUFNO1FBQUk7UUFDM0I7WUFBRUQsT0FBTztZQUFZQyxNQUFNO1FBQXVCO1FBQ2xEO1lBQUVELE9BQU87WUFBWUMsTUFBTTtRQUFzQjtRQUNqRDtZQUFFRCxPQUFPO1lBQVNDLE1BQU07UUFBb0I7UUFDNUM7WUFBRUQsT0FBTztZQUFjQyxNQUFNO1FBQXNCO1FBQ25EO1lBQUVELE9BQU87WUFBVUMsTUFBTTtRQUFvQjtRQUM3QztZQUFFRCxPQUFPO1lBQVdDLE1BQU07UUFBcUI7S0FDbEQ7SUFFRCxNQUFNQyxzQkFBc0IsQ0FBQ0Q7UUFDekJILE9BQU9LLElBQUksQ0FBQ0Y7UUFDWko7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFXWCw0RkFBNEI7a0JBQ3hDLDRFQUFDVTtZQUFJQyxXQUFXWCxxRkFBcUI7c0JBQ2hDSyxVQUFVUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDTjtvQkFBZ0JPLFNBQVMsSUFBTVQsb0JBQW9CTyxLQUFLUixJQUFJOzhCQUN4RFEsS0FBS1QsS0FBSzttQkFETFU7Ozs7Ozs7Ozs7Ozs7OztBQU85QjtHQTVCTWQ7O1FBQ2FELHNEQUFTQTs7O0tBRHRCQztBQThCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcC9Qb3AuanM/ZmViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgaGVyYWRlclN0IGZyb20gJy4uL3BhZ2VzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgTWVudU9wdGlvbnMgPSAoeyBjbG9zZU1lbnUgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAgICAgICAgeyBsYWJlbDogJ0hvbWUnLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICAgIHsgbGFiZWw6ICdQcm9kdWN0cycsIGxpbms6IFwiLi4vLi4vcGFnZXMvcHJvZHVjdHNcIiB9LFxyXG4gICAgICAgIHsgbGFiZWw6ICdBYm91dCBVcycsIGxpbms6IFwiLi4vLi4vcGFnZXMvYWJvdXR1c1wiIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ0Jsb2dzJywgbGluazogXCIuLi8uLi9wYWdlcy9ibG9nc1wiIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ0NvbnRhY3QgVXMnLCBsaW5rOiBcIi4uLy4uL3BhZ2VzL0NvbnRhY3RcIiB9LFxyXG4gICAgICAgIHsgbGFiZWw6ICdMb2cgSW4nLCBsaW5rOiBcIi4uLy4uL3BhZ2VzL2xvZ2luXCIgfSxcclxuICAgICAgICB7IGxhYmVsOiAnU2lnbiBVcCcsIGxpbms6IFwiLi4vLi4vcGFnZXMvc2lnbnVwXCIgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTWVudUl0ZW1DbGljayA9IChsaW5rKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2gobGluayk7XHJcbiAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hlcmFkZXJTdC5tZW51T3B0aW9uc092ZXJsYXl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVyYWRlclN0Lm1lbnVPcHRpb25zfT5cclxuICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlTWVudUl0ZW1DbGljayhpdGVtLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbnM7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImhlcmFkZXJTdCIsInVzZVJvdXRlciIsIk1lbnVPcHRpb25zIiwiY2xvc2VNZW51Iiwicm91dGVyIiwibWVudUl0ZW1zIiwibGFiZWwiLCJsaW5rIiwiaGFuZGxlTWVudUl0ZW1DbGljayIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtZW51T3B0aW9uc092ZXJsYXkiLCJtZW51T3B0aW9ucyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/comp/Pop.js\n"));

/***/ })

});