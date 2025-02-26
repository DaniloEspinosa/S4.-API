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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction fetchDatos() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const response = yield fetch('https://icanhazdadjoke.com/', {\n                headers: {\n                    Accept: 'application/json', // Para recibir JSON\n                },\n            });\n            const data = yield response.json();\n            console.log(data.joke);\n            return data.joke; // Devuelve el chiste\n        }\n        catch (error) {\n            console.error('Error al obtener el chiste:', error);\n            return null; // En caso de error, retorna null\n        }\n    });\n}\nconst chisteHtml = document.getElementById(\"chiste\");\nconst btnHtml = document.getElementById(\"btn\");\n(() => __awaiter(void 0, void 0, void 0, function* () {\n    chisteHtml.textContent = yield fetchDatos();\n}))();\nbtnHtml.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n    chisteHtml.textContent = yield fetchDatos();\n}));\n\n\n//# sourceURL=webpack://4.-api/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;