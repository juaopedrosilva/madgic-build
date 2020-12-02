webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/styles.js":
/*!*****************************************!*\
  !*** ./src/components/header/styles.js ***!
  \*****************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var C_Users_pedro_projects_site_madgic_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/grid/config */ "./src/styles/grid/config.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(C_Users_pedro_projects_site_madgic_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* height: 95vh; */\n  position: relative;\n  padding-bottom: 8rem;\n  padding-top: 6rem !important;\n  background-color: #212832;\n  background-image: linear-gradient(135deg, #0061f2 0%, rgba(105, 0, 199, 0.8) 100%);\n\n  & > div.container {\n    width: 80%;\n    margin: 0 auto;\n    padding-top: 6rem !important;\n    display: flex;\n\n    ", " {\n      width: 95%;\n    }\n\n    ", " {\n      width: 95%;\n    }\n\n    > div.quote {\n      padding-right: 1.5rem;\n      padding-left: 1.5rem;\n      flex: 0 0 50%;\n      max-width: 50%;\n\n      ", " {\n        flex: 0 0 100%;\n        max-width: 100%;\n      }\n\n      ", " {\n        flex: 0 0 100%;\n        max-width: 100%;\n      }\n\n      h1 {\n        font-size: 2.5rem;\n        color: #fff;\n        margin-bottom: 0.5rem;\n        font-weight: 500;\n        line-height: 1.2;\n      }\n\n      p {\n        font-size: 1.15rem;\n        color: rgba(255, 255, 255, 0.5);\n      }\n    }\n\n    > div.image {\n\n      ", " {\n        display: none;\n      }\n\n      ", " {\n        display: none;\n      }\n\n      img {\n        padding-right: 1.5rem;\n        padding-left: 1.5rem;\n        width: 498px;\n        height: 285px;\n      }\n    }\n  }\n\n  & > svg {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 1rem;\n    width: 100%;\n    height: 3rem;\n    fill: #fff;\n  }\n\n  ", " {\n    svg {\n      height: 0.5rem;\n    }\n  }\n\n  ", " {\n    svg {\n      height: 0.5rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].mobile, _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].tablet, _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].mobile, _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].tablet, _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].mobile, _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].tablet, _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].mobile, _styles_grid_config__WEBPACK_IMPORTED_MODULE_1__["device"].tablet);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiZGV2aWNlIiwibW9iaWxlIiwidGFibGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQWNkQywwREFBTSxDQUFDQyxNQWRPLEVBa0JkRCwwREFBTSxDQUFDRSxNQWxCTyxFQTRCWkYsMERBQU0sQ0FBQ0MsTUE1QkssRUFpQ1pELDBEQUFNLENBQUNFLE1BakNLLEVBc0RaRiwwREFBTSxDQUFDQyxNQXRESyxFQTBEWkQsMERBQU0sQ0FBQ0UsTUExREssRUFpRmhCRiwwREFBTSxDQUFDQyxNQWpGUyxFQXVGaEJELDBEQUFNLENBQUNFLE1BdkZTLENBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjM3ODZkOTM3NTI0NTIwYjJhOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRldmljZSB9IGZyb20gJ0BzdHlsZXMvZ3JpZC9jb25maWcnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgLyogaGVpZ2h0OiA5NXZoOyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcclxuICBwYWRkaW5nLXRvcDogNnJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI4MzI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjFmMiAwJSwgcmdiYSgxMDUsIDAsIDE5OSwgMC44KSAxMDAlKTtcclxuXHJcbiAgJiA+IGRpdi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDZyZW0gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgJHtkZXZpY2UubW9iaWxlfSB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJHtkZXZpY2UudGFibGV0fSB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYucXVvdGUge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICR7ZGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHtkZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IGRpdi5pbWFnZSB7XHJcblxyXG4gICAgICAke2RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAke2RldmljZS50YWJsZXR9IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICB3aWR0aDogNDk4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyODVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmaWxsOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJHtkZXZpY2UubW9iaWxlfSB7XHJcbiAgICBzdmcge1xyXG4gICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7ZGV2aWNlLnRhYmxldH0ge1xyXG4gICAgc3ZnIHtcclxuICAgICAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==