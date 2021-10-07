/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("// Task 1:\n\n// const stringLength = (string) => {\n// return string.length;\n// }\n\nconst stringLength = (string) => {\n  let charCount = 0;\n  for (let i = 0; i <= string.length; i += 1) {\n    charCount = i;\n  }\n  try {\n    if (charCount < 1) {\n      throw new Error('Condition does not meet: Less than 1');\n    }\n    if (charCount > 10) {\n      throw new Error('Condition does not meet: Greater than 10');\n    }\n  } finally {\n    //   something\n  }\n  return charCount;\n};\n\n// console.log(stringLength('lucky'));\n\n// Task 2:\n\n// const reverseString = (string) => {\n//     const splitString = string.split(\"\");\n//     const reverseArray = splitString.reverse();\n//     const joinArray = reverseArray.join(\"\");\n//     return joinArray;\n// }\n\n// or\n// const reverseString = (string) => {\n//     return string.split(\"\").reverse().join(\"\");\n// }\n\nconst reverseString = (string) => {\n  let newString = '';\n  for (let i = string.length - 1; i >= 0; i -= 1) {\n    newString += string[i];\n  }\n  return newString;\n};\n\n// console.log(reverseString('Lucky'));\n\n// Task 3:\n\nclass Calculator {\n  constructor(a, b) {\n    this.a = a;\n    this.b = b;\n  }\n\n    add = (a, b) => a + b;\n\n    subtract = (a, b) => a - b;\n\n    divide = (a, b) => a / b;\n\n    multiply = (a, b) => a * b;\n}\n\nconsole.log(Calculator.add(7, 9));\n\nmodule.exports = { stringLength, reverseString };\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;