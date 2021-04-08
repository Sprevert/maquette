webpackHotUpdate_N_E("pages/admin/home",{

/***/ "./layouts/Admin.js":
/*!**************************!*\
  !*** ./layouts/Admin.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Code_React_plumeo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Navbars/AdminNavbar.js */ "./components/Navbars/AdminNavbar.js");
/* harmony import */ var components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footers/AdminFooter.js */ "./components/Footers/AdminFooter.js");
/* harmony import */ var components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Sidebar/Sidebar.js */ "./components/Sidebar/Sidebar.js");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! routes.js */ "./routes.js");




var _jsxFileName = "C:\\Code\\React\\plumeo\\layouts\\Admin.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Code_React_plumeo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // reactstrap components

 // core components






function Admin(props) {
  _s();

  // used for checking current route
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var mainContentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);

  var getBrandText = function getBrandText() {
    for (var i = 0; i < routes_js__WEBPACK_IMPORTED_MODULE_8__["default"].length; i++) {
      if (router.route.indexOf(routes_js__WEBPACK_IMPORTED_MODULE_8__["default"][i].layout + routes_js__WEBPACK_IMPORTED_MODULE_8__["default"][i].path) !== -1) {
        return routes_js__WEBPACK_IMPORTED_MODULE_8__["default"][i].name;
      }
    }

    return "Accueil";
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
      routes: routes_js__WEBPACK_IMPORTED_MODULE_8__["default"],
      logo: {
        innerLink: "/admin/index",
        imgSrc: __webpack_require__(/*! assets/img/plumeo/Logo-plumeo.svg */ "./assets/img/plumeo/Logo-plumeo.svg"),
        imgAlt: "..."
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main-content",
      ref: mainContentRef,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Admin, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Admin;
/* harmony default export */ __webpack_exports__["default"] = (Admin);

var _c;

$RefreshReg$(_c, "Admin");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9BZG1pbi5qcyJdLCJuYW1lcyI6WyJBZG1pbiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpbkNvbnRlbnRSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsaW5nRWxlbWVudCIsImN1cnJlbnQiLCJnZXRCcmFuZFRleHQiLCJpIiwicm91dGVzIiwibGVuZ3RoIiwicm91dGUiLCJpbmRleE9mIiwibGF5b3V0IiwicGF0aCIsIm5hbWUiLCJpbm5lckxpbmsiLCJpbWdTcmMiLCJyZXF1aXJlIiwiaW1nQWx0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNyQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxjQUFjLGdCQUFHQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQXJCO0FBQ0FELDhDQUFLLENBQUNFLFNBQU4sQ0FBZ0IsWUFBTTtBQUNyQkMsWUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixHQUFxQyxDQUFyQztBQUNBRixZQUFRLENBQUNHLGdCQUFULENBQTBCRCxTQUExQixHQUFzQyxDQUF0QztBQUNBTixrQkFBYyxDQUFDUSxPQUFmLENBQXVCRixTQUF2QixHQUFtQyxDQUFuQztBQUNBLEdBSkQsRUFJRyxFQUpIOztBQUtBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUIsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHQyxpREFBTSxDQUFDQyxNQUEzQixFQUFtQ0YsQ0FBQyxFQUFwQyxFQUF3QztBQUN2QyxVQUFJWixNQUFNLENBQUNlLEtBQVAsQ0FBYUMsT0FBYixDQUFxQkgsaURBQU0sQ0FBQ0QsQ0FBRCxDQUFOLENBQVVLLE1BQVYsR0FBbUJKLGlEQUFNLENBQUNELENBQUQsQ0FBTixDQUFVTSxJQUFsRCxNQUE0RCxDQUFDLENBQWpFLEVBQW9FO0FBQ25FLGVBQU9MLGlEQUFNLENBQUNELENBQUQsQ0FBTixDQUFVTyxJQUFqQjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBTyxTQUFQO0FBQ0EsR0FQRDs7QUFRQSxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHFFQUFELGtDQUNLcEIsS0FETDtBQUVDLFlBQU0sRUFBRWMsaURBRlQ7QUFHQyxVQUFJLEVBQUU7QUFDTE8saUJBQVMsRUFBRSxjQUROO0FBRUxDLGNBQU0sRUFBRUMsbUJBQU8sQ0FBQyw4RUFBRCxDQUZWO0FBR0xDLGNBQU0sRUFBRTtBQUhIO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBVUM7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUE4QixTQUFHLEVBQUVyQixjQUFuQztBQUFBLGdCQUNFSCxLQUFLLENBQUN5QjtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRCxlQWNDLHFFQUFDLG9EQUFEO0FBQVcsV0FBSyxNQUFoQjtBQUFBLDZCQUNDLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQ7QUFBQSxrQkFERDtBQW9CQTs7R0FyQ1ExQixLO1VBRU9HLHFEOzs7S0FGUEgsSztBQXVDTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vaG9tZS4yMDljYjExODM1MjdhOGZiNWUwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgQWRtaW5OYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9BZG1pbk5hdmJhci5qc1wiO1xyXG5pbXBvcnQgQWRtaW5Gb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9BZG1pbkZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanNcIjtcclxuXHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcInJvdXRlcy5qc1wiO1xyXG5cclxuZnVuY3Rpb24gQWRtaW4ocHJvcHMpIHtcclxuXHQvLyB1c2VkIGZvciBjaGVja2luZyBjdXJyZW50IHJvdXRlXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0bGV0IG1haW5Db250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG5cdFx0ZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG5cdFx0bWFpbkNvbnRlbnRSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xyXG5cdH0sIFtdKTtcclxuXHRjb25zdCBnZXRCcmFuZFRleHQgPSAoKSA9PiB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAocm91dGVyLnJvdXRlLmluZGV4T2Yocm91dGVzW2ldLmxheW91dCArIHJvdXRlc1tpXS5wYXRoKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4gcm91dGVzW2ldLm5hbWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBcIkFjY3VlaWxcIjtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8U2lkZWJhclxyXG5cdFx0XHRcdHsuLi5wcm9wc31cclxuXHRcdFx0XHRyb3V0ZXM9e3JvdXRlc31cclxuXHRcdFx0XHRsb2dvPXt7XHJcblx0XHRcdFx0XHRpbm5lckxpbms6IFwiL2FkbWluL2luZGV4XCIsXHJcblx0XHRcdFx0XHRpbWdTcmM6IHJlcXVpcmUoXCJhc3NldHMvaW1nL3BsdW1lby9Mb2dvLXBsdW1lby5zdmdcIiksXHJcblx0XHRcdFx0XHRpbWdBbHQ6IFwiLi4uXCIsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIiByZWY9e21haW5Db250ZW50UmVmfT5cclxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PENvbnRhaW5lciBmbHVpZD5cclxuXHRcdFx0XHQ8QWRtaW5Gb290ZXIgLz5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==