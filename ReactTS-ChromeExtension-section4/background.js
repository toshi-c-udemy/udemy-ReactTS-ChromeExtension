chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: 'Test context Menu',
    id: 'contextMenu1',
    contexts: ['page', 'selection'],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    chrome.tabs.create({
      url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`,
    });
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  sendResponse('received message from background');
  chrome.tabs.sendMessage(sender.tab.id, 'Got your message from background!');
});
