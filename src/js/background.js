chrome.runtime.onMessage.addListener(function(payload) {
  chrome.downloads.download({
    url: payload.url,
    filename: payload.fileName
  });
});
