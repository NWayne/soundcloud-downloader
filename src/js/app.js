import '../manifest.json';

// Get track data
const startDownload = () => {
  const url = `https://api.soundcloud.com/resolve.json?url=${escape(window.location.href)}&client_id=a3e059563d7fd3372b49b37f00a00bcf`;
  window.fetch(url).then(resp => {
    return resp.json();
  }).then(jsonResp => {
    if (jsonResp.id) {
      const fileName = 'SoundCloud/' +
        document.getElementsByClassName('fullHero__title')[0]
          .getElementsByClassName('soundTitle__title')[0]
          .getElementsByTagName('span')[0]
          .textContent + '.mp3';

      let trackID = jsonResp.id.toString();

      secondGetter(trackID, fileName);
    }
  });
}

// Get MP3
const secondGetter = (trackID, fileName) => {
  const url = `https://api.soundcloud.com/i1/tracks/${trackID}/streams?client_id=&client_id=a3e059563d7fd3372b49b37f00a00bcf`;
  window.fetch(url).then(resp => {
    return resp.json();
  }).then(jsonResp => {
    if (jsonResp.http_mp3_128_url) {
      requestDownloadFromBackground(jsonResp.http_mp3_128_url, fileName);
    }
  });
}

const requestDownloadFromBackground = (url, fileName) => {
  chrome.runtime.sendMessage({
    url: url,
    fileName: fileName,
  })
}

const createTrackDownloadButton = () => {
  const button = document.createElement('button');
  const text = document.createTextNode('Download');
  button.className = 'sc-button sc-button-medium sc-button-responsive sc-chrome-extension-download';

  let css = '.sc-chrome-extension-download {' +
    'text-indent: 20px;' +
  '}';
  css += '.sc-chrome-extension-download:before {' +
    '  display: block;\n' +
    '  position: absolute;\n' +
    '  background-repeat: no-repeat;\n' +
    '  background-position: center center;\n' +
    '  width: 20px;\n' +
    '  height: 20px;\n' +
    '  background-size: 14px 14px;\n' +
    '  top: 0;\n' +
    '  bottom: 0;\n' +
    '  margin: auto 0;\n' +
    '  left: 5px; content: "";' +
    '  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNDMzLjUgNDMzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMy41IDQzMy41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9ImZpbGUtZG93bmxvYWQiPgoJCTxwYXRoIGQ9Ik0zOTUuMjUsMTUzaC0xMDJWMGgtMTUzdjE1M2gtMTAybDE3OC41LDE3OC41TDM5NS4yNSwxNTN6IE0zOC4yNSwzODIuNXY1MWgzNTd2LTUxSDM4LjI1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);' +
  '}';

  const head = document.head;
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);

  button.appendChild(text);

  button.onclick = function(){
    startDownload();
  };

  document.getElementsByClassName('listenEngagement')[0].getElementsByClassName('sc-button-group')[0].appendChild(button);
}

const init = () => {
  window.onload = () => {
    createTrackDownloadButton();
  }
}

init();
