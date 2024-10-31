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
exports.id = "pages/api/generate-quiz";
exports.ids = ["pages/api/generate-quiz"];
exports.modules = {

/***/ "(api)/./pages/api/generate-quiz.js":
/*!************************************!*\
  !*** ./pages/api/generate-quiz.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/generate-quiz.js\nasync function handler(req, res) {\n    const response = await fetch(\"http://localhost:8000/generate-quiz\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(req.body)\n    });\n    const data = await response.json();\n    res.status(response.status).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtcXVpei5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQTZCO0FBQ2QsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFO1FBQ2xFQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFBRSxjQUFjLEVBQUUsa0JBQWtCO1NBQUU7UUFDL0NDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO0tBQy9CLENBQUM7SUFDRixNQUFNRyxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFJLEVBQUU7SUFDbENULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDVCxRQUFRLENBQUNTLE1BQU0sQ0FBQyxDQUFDRCxJQUFJLENBQUNELElBQUksQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLXF1aXotZnJvbnRlbmQvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtcXVpei5qcz85ZDZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9nZW5lcmF0ZS1xdWl6LmpzXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dlbmVyYXRlLXF1aXonLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihkYXRhKTtcbiAgfVxuICAiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-quiz.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate-quiz.js"));
module.exports = __webpack_exports__;

})();