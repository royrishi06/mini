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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Quiz */ \"./components/Quiz.js\");\n/* harmony import */ var _components_Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Score */ \"./components/Score.js\");\n// pages/index.js\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), url = ref[0], setUrl = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), quiz = ref1[0], setQuiz = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), userAnswers = ref2[0], setUserAnswers = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), score = ref3[0], setScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref4[0], setLoading = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref5[0], setError = ref5[1];\n    var handleGenerateQuiz = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var response, data, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        setError(null);\n                        setQuiz([]);\n                        setScore(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            5,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"/api/generate-quiz\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify({\n                                    url: url\n                                })\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        if (response.ok) {\n                            setQuiz(data.quiz);\n                            setUserAnswers(new Array(data.quiz.length).fill(null)); // Initialize user answers\n                        } else {\n                            setError(data.detail || \"Failed to generate quiz\");\n                        }\n                        return [\n                            3,\n                            6\n                        ];\n                    case 4:\n                        err = _state.sent();\n                        setError(\"Error fetching quiz\");\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleGenerateQuiz() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmitQuiz = function() {\n        var correctScore = userAnswers.filter(function(answer, index) {\n            return answer && answer.is_correct;\n        }).length;\n        var incorrectScore = userAnswers.length - correctScore;\n        setScore({\n            correctScore: correctScore,\n            incorrectScore: incorrectScore\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Mini Quiz Generator\"\n            }, void 0, false, {\n                fileName: \"/home/raichuboy/Projects/mini/frontend/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: url,\n                onChange: function(e) {\n                    return setUrl(e.target.value);\n                },\n                placeholder: \"Enter URL\"\n            }, void 0, false, {\n                fileName: \"/home/raichuboy/Projects/mini/frontend/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGenerateQuiz,\n                disabled: loading,\n                children: loading ? \"Generating...\" : \"Generate Quiz\"\n            }, void 0, false, {\n                fileName: \"/home/raichuboy/Projects/mini/frontend/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"/home/raichuboy/Projects/mini/frontend/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, this),\n            quiz && !score && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Quiz__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                quiz: quiz,\n                userAnswers: userAnswers,\n                setUserAnswers: setUserAnswers,\n                handleSubmitQuiz: handleSubmitQuiz\n            }, void 0, false, {\n                fileName: \"/home/raichuboy/Projects/mini/frontend/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this),\n            score && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Score__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                correctScore: score.correctScore,\n                incorrectScore: score.incorrectScore\n            }, void 0, false, {\n                fileName: \"/home/raichuboy/Projects/mini/frontend/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/raichuboy/Projects/mini/frontend/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"sDOlpfoqOkoL8ItgQw4mdOzNvPM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0osQ0FBQztHQW5FdUJuQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC5qc1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVpeiBmcm9tICcuLi9jb21wb25lbnRzL1F1aXonO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcXVpeiwgc2V0UXVpel0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyQW5zd2Vycywgc2V0VXNlckFuc3dlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlR2VuZXJhdGVRdWl6ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgc2V0UXVpeihbXSk7XG4gICAgc2V0U2NvcmUobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2VuZXJhdGUtcXVpeicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVybCB9KVxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHNldFF1aXooZGF0YS5xdWl6KTtcbiAgICAgICAgc2V0VXNlckFuc3dlcnMobmV3IEFycmF5KGRhdGEucXVpei5sZW5ndGgpLmZpbGwobnVsbCkpOyAvLyBJbml0aWFsaXplIHVzZXIgYW5zd2Vyc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5kZXRhaWwgfHwgJ0ZhaWxlZCB0byBnZW5lcmF0ZSBxdWl6Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeicpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0UXVpeiA9ICgpID0+IHtcbiAgICBjb25zdCBjb3JyZWN0U2NvcmUgPSB1c2VyQW5zd2Vycy5maWx0ZXIoKGFuc3dlciwgaW5kZXgpID0+IGFuc3dlciAmJiBhbnN3ZXIuaXNfY29ycmVjdCkubGVuZ3RoO1xuICAgIGNvbnN0IGluY29ycmVjdFNjb3JlID0gdXNlckFuc3dlcnMubGVuZ3RoIC0gY29ycmVjdFNjb3JlO1xuICAgIHNldFNjb3JlKHsgY29ycmVjdFNjb3JlLCBpbmNvcnJlY3RTY29yZSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+TWluaSBRdWl6IEdlbmVyYXRvcjwvaDE+XG4gICAgICBcbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXt1cmx9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVUkxcIlxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlR2VuZXJhdGVRdWl6fSBkaXNhYmxlZD17bG9hZGluZ30+XG4gICAgICAgIHtsb2FkaW5nID8gJ0dlbmVyYXRpbmcuLi4nIDogJ0dlbmVyYXRlIFF1aXonfVxuICAgICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XG4gICAgICBcbiAgICAgIHtxdWl6ICYmICFzY29yZSAmJiAoXG4gICAgICAgIDxRdWl6XG4gICAgICAgICAgcXVpej17cXVpen1cbiAgICAgICAgICB1c2VyQW5zd2Vycz17dXNlckFuc3dlcnN9XG4gICAgICAgICAgc2V0VXNlckFuc3dlcnM9e3NldFVzZXJBbnN3ZXJzfVxuICAgICAgICAgIGhhbmRsZVN1Ym1pdFF1aXo9e2hhbmRsZVN1Ym1pdFF1aXp9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgXG4gICAgICB7c2NvcmUgJiYgPFNjb3JlIGNvcnJlY3RTY29yZT17c2NvcmUuY29ycmVjdFNjb3JlfSBpbmNvcnJlY3RTY29yZT17c2NvcmUuaW5jb3JyZWN0U2NvcmV9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUXVpeiIsIlNjb3JlIiwiSG9tZSIsInVybCIsInNldFVybCIsInF1aXoiLCJzZXRRdWl6IiwidXNlckFuc3dlcnMiLCJzZXRVc2VyQW5zd2VycyIsInNjb3JlIiwic2V0U2NvcmUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVHZW5lcmF0ZVF1aXoiLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJvayIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsImRldGFpbCIsImhhbmRsZVN1Ym1pdFF1aXoiLCJjb3JyZWN0U2NvcmUiLCJmaWx0ZXIiLCJhbnN3ZXIiLCJpbmRleCIsImlzX2NvcnJlY3QiLCJpbmNvcnJlY3RTY29yZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});