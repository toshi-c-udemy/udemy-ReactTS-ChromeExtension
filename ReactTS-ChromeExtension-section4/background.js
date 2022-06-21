chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({ shows: [] });
  chrome.contextMenus.create({
    title: 'Search TV Show',
    id: 'contextMenu1',
    contexts: ['page', 'selection'],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${event.selectionText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        chrome.storage.local.set({
          shows: data,
        });
      });
  });
});
