"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./api/handlers/movies.js":
/*!********************************!*\
  !*** ./api/handlers/movies.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies)\n/* harmony export */ });\nconst getMovies = async ()=>{\n    try {\n        const resp = await fetch(\"http://localhost:3000/api/movies\");\n        return resp.json();\n    } catch (error) {\n        return error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvaGFuZGxlcnMvbW92aWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxTQUFTLEdBQUcsVUFBWTtJQUNuQyxJQUFJO1FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztRQUU1RCxPQUFPRCxJQUFJLENBQUNFLElBQUksRUFBRSxDQUFDO0lBQ3ZCLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ1osT0FBT0EsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9ja2VyLWdyYXBocWwvLi9hcGkvaGFuZGxlcnMvbW92aWVzLmpzPzlhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbW92aWVzXCIpO1xuXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRNb3ZpZXMiLCJyZXNwIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/handlers/movies.js\n");

/***/ }),

/***/ "./pages/movies/index.js":
/*!*******************************!*\
  !*** ./pages/movies/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_handlers_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/handlers/movies */ \"./api/handlers/movies.js\");\n\n\nconst Movies = ({ movies  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Movies:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Title - \",\n                                movie.title,\n                                \"; Origin - \",\n                                movie.originCountry\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rostyslavsheketa/Desktop/pdp/docker-graphql/pages/movies/index.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, undefined)\n                    }, movie.id, false, {\n                        fileName: \"/Users/rostyslavsheketa/Desktop/pdp/docker-graphql/pages/movies/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/rostyslavsheketa/Desktop/pdp/docker-graphql/pages/movies/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rostyslavsheketa/Desktop/pdp/docker-graphql/pages/movies/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getServerSideProps() {\n    const movies = await (0,_api_handlers_movies__WEBPACK_IMPORTED_MODULE_1__.getMovies)();\n    return {\n        props: {\n            movies\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUV0RCxNQUFNQyxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUUsR0FBSztJQUM3QixxQkFDRSw4REFBQ0MsS0FBRzs7WUFBQyxTQUVIOzBCQUFBLDhEQUFDQyxJQUFFOzBCQUNBRixNQUFNLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBSyxpQkFDZiw4REFBQ0gsS0FBRztrQ0FDRiw0RUFBQ0ksTUFBSTs7Z0NBQUMsVUFBUTtnQ0FBQ0QsS0FBSyxDQUFDRSxLQUFLO2dDQUFDLGFBQVc7Z0NBQUNGLEtBQUssQ0FBQ0csYUFBYTs7Ozs7O3FDQUFRO3VCQUQxREgsS0FBSyxDQUFDSSxFQUFFOzs7O2lDQUVaLENBQ047Ozs7O3lCQUNDOzs7Ozs7aUJBQ0QsQ0FDUDtBQUNILENBQUM7QUFFTSxlQUFlQyxrQkFBa0IsR0FBRztJQUN6QyxNQUFNVCxNQUFNLEdBQUcsTUFBTUYsK0RBQVMsRUFBRTtJQUVoQyxPQUFPO1FBQ0hZLEtBQUssRUFBRTtZQUNMVixNQUFNO1NBQ1A7S0FDSjtBQUNILENBQUM7QUFFRCxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9ja2VyLWdyYXBocWwvLi9wYWdlcy9tb3ZpZXMvaW5kZXguanM/NTAyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb3ZpZXMgfSBmcm9tIFwiLi4vLi4vYXBpL2hhbmRsZXJzL21vdmllc1wiO1xuXG5jb25zdCBNb3ZpZXMgPSAoeyBtb3ZpZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBNb3ZpZXM6XG4gICAgICA8dWw+XG4gICAgICAgIHttb3ZpZXMubWFwKG1vdmllID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bW92aWUuaWR9PlxuICAgICAgICAgICAgPHNwYW4+VGl0bGUgLSB7bW92aWUudGl0bGV9OyBPcmlnaW4gLSB7bW92aWUub3JpZ2luQ291bnRyeX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG1vdmllc1xuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcbiJdLCJuYW1lcyI6WyJnZXRNb3ZpZXMiLCJNb3ZpZXMiLCJtb3ZpZXMiLCJkaXYiLCJ1bCIsIm1hcCIsIm1vdmllIiwic3BhbiIsInRpdGxlIiwib3JpZ2luQ291bnRyeSIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/index.js"));
module.exports = __webpack_exports__;

})();