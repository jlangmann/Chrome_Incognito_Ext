chrome.browserAction.onClicked.addListener(function(activeTab){
  var url = activeTab.url;
  chrome.windows.create({"url": url, "incognito": true});
});
