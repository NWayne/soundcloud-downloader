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

console.log('soundcloud downloader');

window.fetch('https://api.soundcloud.com/resolve.json?url=' + escape(window.location.href) + '&client_id=a3e059563d7fd3372b49b37f00a00bcf').then(function (data) {
  console.log(chrome);
  console.log(data);
  if (data.url) {
    secondGetter(data.url, 'fileName');
  }
}).catch(function (error) {
  console.log(error);
});

var getFile = function getFile(trackID, fileName) {
  chrome.runtime.sendMessage({
    fileDownload: {
      url: trackID,
      fileName: fileName
    }
  });
};

// set url to "https://api.soundcloud.com/i1/tracks/" + a + "/streams?client_id=" + ext.ids.clientId
var secondGetter = function secondGetter(url, fileName) {
  window.fetch(url).then(function (data) {
    console.log(data);
    console.log(fileName);
    if (trackID.http_mp3_128_url) {
      getFile(trackID.http_mp3_128_url, fileName);
    }
  });
};

// function downloadClick(a) {
//   playListName = "";
//   var b = this;
//   $.ajax({
//     url: a.data.reqUrl
//   }).done(function (a) {
//     a.id && (trackId = a.id.toString(),
//       secondGetter(trackId, $(b).attr("fileName")))
//   })
// }

// function addDownloadButton(a) {
//   var b = $(a);
//   if (!($("button.extDownloadPlaylist").length > 0 || b.find("button.extDownload").length > 0)) {
//     if (b.find(".listenDetails__trackList").length > 0)
//       return void addDownloadPlaylistButton();
//     if (0 == b.find(".sc-button-download").length) {
//       var c = b.find("div.soundActions > div.sc-button-group").eq(0);
//       if (0 != $(c).closest('div[role="group"].playlist').length)
//         return;
//       if (0 != $(c).children('[title="Like Playlist"]').length || 0 != $(c).children('[title="Report Playlist"]').length || 0 != $(c).children('[title="Liked Playlist"]').length || 0 != $(c).children('[title="Repost Playlist"]').length)
//         return void addDownloadPlaylistButton();
//       if (0 == c.length || $(c).find("button").length < 1)
//         return void b.arrive("div.sound__soundActions > div.sc-button-group", function () {
//           setTimeout(function () {
//             addDownloadButton(a)
//           }, btnDelay)
//         });
//       var d = b.find("div.sc-button-group").hasClass("sc-button-group-medium") ? "sc-button-medium" : "sc-button-small";
//       if (b.find(".listenDetails__trackList").length > 0)
//         return void addDownloadPlaylistButton();
//       c.append("<button class='extDownload sc-button sc-button-download " + d + " sc-button-responsive'>Download </button>");
//       var e = b.find(".soundTitle__title").eq(0),
//         f = null;
//       f = b.is(".single") || !e.attr("href") ? document.location.href : "https://soundcloud.com" + e.attr("href");
//       var g = f.split("/"),
//         h = g.pop(),
//         i = "",
//         j = "https://api.soundcloud.com/resolve.json?url=" + escape(f) + "&client_id=" + ext.ids.clientId;
//       "s-" == h.substr(0, 2) && (i = h,
//         j = j + "&secret_token=" + i),
//         downloadFilename = "",
//         e.text.length > 1 ? downloadFilename = getCompatName(e.text()) : downloadFilename = getCompatName(b.parent().find(".soundTitle__title > span").eq(0).text());
//       var k = b.find("button.extDownload").eq(0),
//         l = $(k);
//       l.attr("fileName", downloadFilename),
//         l.on("click", {
//           reqUrl: j
//         }, downloadClick),
//         l.on("mouseenter", {
//           reqUrl: j
//         }, mouseEnter),
//         l.on("mouseleave", {
//           reqUrl: j
//         }, mouseLeave)
//     }
//   }
// }

// function addDownloadPlaylistButton() {
//   if ($(".extDownloadPlaylist").length > 0)
//     return void console.log("playlist download button already exists");
//   console.log("adding playlist download button");
//   var a = $(".l-listen-wrapper div.soundActions > div.sc-button-group").eq(0),
//     b = $("div.sc-button-group").hasClass("sc-button-group-medium") ? "sc-button-medium" : "sc-button-small";
//   a.append("<button class='extDownloadPlaylist sc-button sc-button-download " + b + " sc-button-responsive' title='Download Playlist'>Download </button>");
//   var c = $(".extDownloadPlaylist");
//   c.on("click", downloadPlaylist)
// }

// function downloadPlaylist() {
//   $.ajax({
//     statusCode: {
//       404: playlistDownloadError
//     },
//     url: "https://api.soundcloud.com/resolve.json?url=" + escape(window.location.href) + "&client_id=" + ext.ids.clientId2
//   }).done(gotPlaylistInfo)
// }

// function playlistDownloadError() {
//   alert("Set this playlist to public to download it.")
// }

// function gotPlaylistInfo(a) {
//   playListName = getCompatName(a.title);
//   for (var b = a.tracks, c = 0; c < b.length; c++) {
//     var d = b[c].user.permalink + " - " + b[c].title;
//     d = getCompatName(d),
//       secondGetter(b[c].id, d)
//   }
// }

// function getCompatName(a) {
//   var b = /\n|\  |\!|\#|\%|\{|\}|\\|\<|\>|\$|\'|\"|\||\=|\`|\~|\+|\:|\@|\?|\*/g,
//     c = a.trim().replace(b, "").replace(/\//g, "-");
//   return c
// }

// function secondGetter(a, b) {
//   $.ajax({
//     url: "https://api.soundcloud.com/i1/tracks/" + a + "/streams?client_id=" + ext.ids.clientId
//   }).done(function (a) {
//     a.http_mp3_128_url && getFile(a.http_mp3_128_url, b)
//   })
// }
//
// function downloadClick(a) {
//   playListName = "";
//   var b = this;
//   $.ajax({
//     url: a.data.reqUrl
//   }).done(function (a) {
//     a.id && (trackId = a.id.toString(),
//       secondGetter(trackId, $(b).attr("fileName")))
//   })
// }
//
// function mouseEnter(a) {
//   qrEnabled && (showPopupTimer = setTimeout(function () {
//     showPopup = !0,
//       $.ajax({
//         url: a.data.reqUrl
//       }).done(function (b) {
//         b.id && (trackId = b.id.toString(),
//           $.ajax({
//             url: "https://api.soundcloud.com/i1/tracks/" + trackId + "/streams?client_id=" + ext.ids.clientId
//           }).done(function (b) {
//             if (b.http_mp3_128_url) {
//               var c = {
//                   y: $(window).innerHeight(),
//                   x: $(window).innerWidth()
//                 },
//                 d = qrOptions.size,
//                 e = a.clientX + 10,
//                 f = a.clientY + 10;
//               f + d > c.y && (f = f - d - 10),
//               e + d > c.x && (e = e - d - 10),
//                 menu.css({
//                   left: e + "px",
//                   top: f + "px"
//                 }),
//                 showQRpopup(b.http_mp3_128_url)
//             }
//           }))
//       })
//   }, 100))
// }
//
// function showQRpopup(a) {
//   qrOptions.text = a,
//     $(".ext-con-menu > canvas").remove(),
//     menu.qrcode(qrOptions),
//   showPopup && menu.show()
// }
//
// function mouseLeave() {
//   showPopup = !1,
//     clearTimeout(showPopupTimer),
//     menu.hide()
// }
//
// function getOptions() {
//   chrome.storage.sync.get("qrEnable", function (a) {
//     void 0 == a.qrEnable && (a.qrEnable = !0,
//       chrome.storage.sync.set({
//         qrEnable: !0
//       })),
//       qrEnabled = a.qrEnable
//   })
// }
//
// function removeExistingButtons() {
//   var a = [];
//   a = $("a.sc-button-download"),
//   a.length > 0 && a.remove()
// }
//
// function forceCloseExtPopup() {
//   chrome.runtime.sendMessage({
//     closePopup: !0
//   })
// }
// var manu, btnDelay = 5,
//   playListName = "",
//   showPopupTimer, showPopup = !0,
//   qrEnabled, qrOptions = {
//     render: "canvas",
//     minVersion: 1,
//     maxVersion: 40,
//     ecLevel: "L",
//     left: 0,
//     top: 0,
//     size: 300,
//     fill: "#000",
//     background: null,
//     text: "",
//     radius: .1,
//     quiet: 1,
//     mode: 0,
//     mSize: .1,
//     mPosX: .5,
//     mPosY: .5,
//     label: "no label",
//     fontname: "sans",
//     fontcolor: "#000",
//     image: null
//   },
//   ext = {
//     ids: {
//       clientId: "a3e059563d7fd3372b49b37f00a00bcf",
//       clientId2: "b45b1aa10f1ac2941910a7f0d10f8e28"
//     }
//   };
// $(function () {
//   chrome.storage.onChanged.addListener(getOptions),
//     getOptions(),
//     $(".sound").each(function (a, b) {
//       setTimeout(function () {
//         addDownloadButton(b)
//       }, btnDelay)
//     }),
//   $(".listenDetails__trackList").length > 0 && addDownloadPlaylistButton(),
//     $(document).arrive(".listenDetails__trackList", function () {
//       addDownloadPlaylistButton()
//     }),
//     menu = $("<div class='ext-con-menu'><div></div></div>"),
//     $("body").append(menu),
//     $("#content").each(function (a, b) {
//       setTimeout(function () {
//         addDownloadButton(b)
//       }, btnDelay)
//     }),
//     $(document).arrive("a.sc-button-download", function () {
//       $(this).remove()
//     }),
//     removeExistingButtons(),
//     $(document).arrive(".sound", function () {
//       var a = this;
//       setTimeout(function () {
//         addDownloadButton(a)
//       }, btnDelay),
//         $(".sound").bind("DOMNodeRemoved", function (b) {
//           $(b.target).find("canvas.g-box-full.sceneLayer") && setTimeout(function () {
//             addDownloadButton(a)
//           }, btnDelay)
//         })
//     }),
//     $(document).arrive("div.l-listen-engagement", function () {
//       var a = this;
//       setTimeout(function () {
//         addDownloadButton(a)
//       }, btnDelay),
//         $(".sound").bind("DOMNodeRemoved", function (b) {
//           $(b.target).find("canvas.g-box-full.sceneLayer") && setTimeout(function () {
//             addDownloadButton(a)
//           }, btnDelay)
//         })
//     }),
//     $(document).bind("DOMNodeRemoved", function (a) {
//       $("#content").each(function (a, b) {
//         setTimeout(function () {
//           addDownloadButton(b)
//         }, btnDelay)
//       })
//     }),
//     $(document).arrive("#content", function () {
//       var a = this;
//       setTimeout(function () {
//         addDownloadButton(a)
//       }, btnDelay),
//         $(".sound").bind("DOMNodeRemoved", function (b) {
//           $(b.target).find("canvas.g-box-full.sceneLayer") && setTimeout(function () {
//             addDownloadButton(a)
//           }, btnDelay)
//         })
//     })
// });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ })
/******/ ]);