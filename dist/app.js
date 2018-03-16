/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

// Todo: return a json promise, then the value
window.fetch('https://api.soundcloud.com/resolve.json?url=' + escape(window.location.href) + '&client_id=a3e059563d7fd3372b49b37f00a00bcf').then(function (data) {
  if (data.url) {
    var trackID = data.url.split('/')[4].split('.')[0];
    secondGetter(trackID, 'fileName');
  }
}).catch(function (error) {
  console.log('Oh No!');
  console.log(error);
});

var secondGetter = function secondGetter(trackID, fileName) {
  var url = 'https://api.soundcloud.com/i1/tracks/' + trackID + '/streams?client_id=&client_id=a3e059563d7fd3372b49b37f00a00bcf';
  window.fetch(url).then(function (resp) {
    return resp.json();
  }).then(function (jsonResp) {
    if (jsonResp.http_mp3_128_url) {
      getFile(jsonResp.http_mp3_128_url, fileName);
    }
  });
};

// We'll need to set up a background process that actually downloads the file,
// since content_scripts don't have access to the chrome downloads api
// See: https://stackoverflow.com/questions/42995426/trying-to-use-chrome-downloads-its-undefined-for-some-reason
var getFile = function getFile(url, fileName) {
  chrome.downloads.download({
    url: dataURL,
    filename: fileName,
    saveAs: true
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ })
/******/ ]);