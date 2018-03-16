import '../manifest.json';

// Todo: return a json promise, then the value
window.fetch(`https://api.soundcloud.com/resolve.json?url=${escape(window.location.href)}&client_id=a3e059563d7fd3372b49b37f00a00bcf`).then(function(data) {
  if (data.url) {
    let trackID = data.url.split('/')[4].split('.')[0];
    secondGetter(trackID, 'fileName');
  }
}).catch(function(error) {
  console.log('Oh No!');
  console.log(error);
});

const secondGetter = (trackID, fileName) => {
  const url = `https://api.soundcloud.com/i1/tracks/${trackID}/streams?client_id=&client_id=a3e059563d7fd3372b49b37f00a00bcf`;
  window.fetch(url).then(resp => {
    return resp.json();
  }).then(jsonResp => {
    if (jsonResp.http_mp3_128_url) {
      getFile(jsonResp.http_mp3_128_url, fileName);
    }
  });
}

// We'll need to set up a background process that actually downloads the file,
// since content_scripts don't have access to the chrome downloads api
// See: https://stackoverflow.com/questions/42995426/trying-to-use-chrome-downloads-its-undefined-for-some-reason
const getFile = (url, fileName) => {
  chrome.downloads.download({
    url:      dataURL,
    filename: fileName,
    saveAs:   true
  });
}
