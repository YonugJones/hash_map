/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hashMap.js":
/*!************************!*\
  !*** ./src/hashMap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HashMap: () => (/* binding */ HashMap)\n/* harmony export */ });\nclass HashMap {\n  constructor() {\n    let initialCapacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;\n    let loadFactor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.75;\n    this.initialCapacity = initialCapacity;\n    this.loadFactor = loadFactor;\n    this.array = Array(this.initialCapacity);\n    this.capacity = initialCapacity;\n    this.size = 0;\n  }\n  hash(key) {\n    let hashCode = 0;\n    const primeNumber = 31;\n    for (let i = 0; i < key.length; i++) {\n      hashCode = primeNumber * hashCode + key.charCodeAt(i);\n    }\n    return hashCode % this.capacity;\n  }\n  set(key, value) {\n    const index = this.hash(key);\n    console.log(index);\n    let bucket = this.array[index];\n    if (!bucket) {\n      bucket = [];\n      this.array[index] = bucket;\n    }\n    for (let i = 0; i < bucket.length; i++) {\n      if (bucket[i][0] === key) {\n        bucket[i][1] = value;\n        return;\n      }\n    }\n    bucket.push([key, value]);\n    this.size++;\n    if (this.size / this.array.length >= this.loadFactor) {\n      this.rehash();\n    }\n  }\n  rehash() {\n    const newCapacity = this.array.length * 2;\n    const newArray = Array(newCapacity);\n    this.capacity = newCapacity;\n    this.size = 0;\n    for (let i = 0; i < this.array.length; i++) {\n      const bucket = this.array[i];\n      if (bucket) {\n        for (let j = 0; j < bucket.length; j++) {\n          const [key, value] = bucket[j];\n          const newIndex = this.hash(key) % newCapacity;\n          if (!newArray[newIndex]) {\n            newArray[newIndex] = [];\n          }\n          newArray[newIndex].push([key, value]);\n          this.size++;\n        }\n      }\n    }\n    this.array = newArray;\n  }\n  get(key) {\n    const index = this.hash(key);\n    const bucket = this.array[index];\n    if (bucket) {\n      for (let i = 0; i < bucket.length; i++) {\n        if (bucket[i][0] === key) {\n          console.log(bucket[i][1]);\n          return;\n        }\n      }\n      console.log('Key not found in hash map');\n    } else {\n      console.log('Key not found in hash map');\n    }\n  }\n  has(key) {\n    const index = this.hash(key);\n    const bucket = this.array[index];\n    if (bucket) {\n      for (let i = 0; i < bucket.length; i++) {\n        if (bucket[i][0] === key) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n  remove(key) {\n    const index = this.hash(key);\n    const bucket = this.array[index];\n    if (bucket) {\n      for (let i = 0; i < bucket.length; i++) {\n        if (bucket[i][0] === key) {\n          bucket.splice(i, 1);\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n  length() {\n    let count = 0;\n    for (let i = 0; i < this.array.length; i++) {\n      const bucket = this.array[i];\n      if (bucket) {\n        count += bucket.length;\n      }\n    }\n    console.log(count);\n    return count;\n  }\n  clear() {\n    for (let i = 0; i < this.array.length; i++) {\n      const bucket = this.array[i];\n      if (bucket) {\n        bucket.length = 0;\n      }\n    }\n  }\n  keys() {\n    let keysArray = [];\n    for (let i = 0; i < this.array.length; i++) {\n      const bucket = this.array[i];\n      if (bucket) {\n        for (let j = 0; j < bucket.length; j++) {\n          keysArray.push(bucket[j][0]);\n        }\n      }\n    }\n    console.log(keysArray);\n    return keysArray;\n  }\n  values() {\n    let valuesArray = [];\n    for (let i = 0; i < this.array.length; i++) {\n      const bucket = this.array[i];\n      if (bucket) {\n        for (let j = 0; j < bucket.length; j++) {\n          valuesArray.push(bucket[j][1]);\n        }\n      }\n    }\n    console.log(valuesArray);\n    return valuesArray;\n  }\n  entries() {\n    let entriesArry = [];\n    for (let i = 0; i < this.array.length; i++) {\n      const bucket = this.array[i];\n      if (bucket) {\n        for (let j = 0; j < bucket.length; j++) {\n          entriesArry.push([bucket[j][0], bucket[j][1]]);\n        }\n      }\n    }\n    console.log(entriesArry);\n    return entriesArry;\n  }\n}\n\n//# sourceURL=webpack://hash_maps/./src/hashMap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hashMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashMap */ \"./src/hashMap.js\");\n\nlet map = new _hashMap__WEBPACK_IMPORTED_MODULE_0__.HashMap();\nmap.set('keyOne', 'valueOne');\nmap.set('keyTwo', 'valueTwo');\nmap.set('keyThree', 'valueThree');\nmap.set('keyFour', 'valueFour');\nmap.remove('keyFour');\nmap.set('keyFive', 'valueFive');\nmap.set('keySix', 'valueSix');\nmap.set('keySeven', 'valueSeven');\nmap.set('keyEight', 'valueEight');\nmap.set('keyNine', 'valueNine');\nmap.set('keyTen', 'valueTen');\nmap.set('keyEleven', 'valueEleven');\nconsole.log(map);\nmap.set('keyTwelve', 'valueTwelve');\nmap.set('keyTwelve', 'newValue');\nmap.set('keyThirteen', 'valueThirteen');\nconsole.log(map);\nmap.get('keyTwo');\nmap.has('keyThree');\nconsole.log(map);\nmap.keys();\nmap.values();\nmap.entries();\n\n//# sourceURL=webpack://hash_maps/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;