// check storage for domain / route

// chrome.storage.sync.set('website', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

console.log(document.domain); //It outputs id of extension to console

chrome.tabs.query(
  {
    //This method output active URL
    active: true,
    currentWindow: true,
    status: "complete",
    windowType: "normal"
  },
  function(tabs) {
    for (tab in tabs) {
      chrome.storage.sync.set({ website: tabs[tab].url }, function(data) {
        message("Settings saved");
      });
      console.log(tabs[tab].url);
    }
  }
);
