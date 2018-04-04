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

// Get track data
var startDownload = function startDownload() {
  var url = 'https://api.soundcloud.com/resolve.json?url=' + escape(window.location.href) + '&client_id=a3e059563d7fd3372b49b37f00a00bcf';
  window.fetch(url).then(function (resp) {
    return resp.json();
  }).then(function (jsonResp) {
    if (jsonResp.id) {
      var fileName = 'SoundCloud/' + document.getElementsByClassName('fullHero__title')[0].getElementsByClassName('soundTitle__title')[0].getElementsByTagName('span')[0].textContent + '.mp3';

      var trackID = jsonResp.id.toString();

      secondGetter(trackID, fileName);
    }
  });
};

// Get MP3
var secondGetter = function secondGetter(trackID, fileName) {
  var url = 'https://api.soundcloud.com/i1/tracks/' + trackID + '/streams?client_id=&client_id=a3e059563d7fd3372b49b37f00a00bcf';
  window.fetch(url).then(function (resp) {
    return resp.json();
  }).then(function (jsonResp) {
    if (jsonResp.http_mp3_128_url) {
      requestDownloadFromBackground(jsonResp.http_mp3_128_url, fileName);
    }
  });
};

var requestDownloadFromBackground = function requestDownloadFromBackground(url, fileName) {
  chrome.runtime.sendMessage({
    url: url,
    fileName: fileName
  });
};

var createTrackDownloadButton = function createTrackDownloadButton() {
  var button = document.createElement('button');
  var text = document.createTextNode('Download');
  button.className = 'sc-button sc-button-medium sc-button-responsive sc-chrome-extension-download';

  var css = '.sc-chrome-extension-download {' + 'text-indent: 20px;' + '}';
  css += '.sc-chrome-extension-download:before {' + '  display: block;\n' + '  position: absolute;\n' + '  background-repeat: no-repeat;\n' + '  background-position: center center;\n' + '  width: 20px;\n' + '  height: 20px;\n' + '  background-size: 14px 14px;\n' + '  top: 0;\n' + '  bottom: 0;\n' + '  margin: auto 0;\n' + '  left: 5px; content: "";' + '  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNDMzLjUgNDMzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMy41IDQzMy41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9ImZpbGUtZG93bmxvYWQiPgoJCTxwYXRoIGQ9Ik0zOTUuMjUsMTUzaC0xMDJWMGgtMTUzdjE1M2gtMTAybDE3OC41LDE3OC41TDM5NS4yNSwxNTN6IE0zOC4yNSwzODIuNXY1MWgzNTd2LTUxSDM4LjI1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);' + '}';

  var head = document.head;
  var style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);

  button.appendChild(text);

  button.onclick = function () {
    startDownload();
  };

  document.getElementsByClassName('listenEngagement')[0].getElementsByClassName('sc-button-group')[0].appendChild(button);
};

var init = function init() {
  window.onload = function () {
    createTrackDownloadButton();
  };
};

init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ })
/******/ ]);