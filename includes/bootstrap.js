// grab the latest content script changes and inject them
chrome.extension.sendRequest({name: 'getContentScript'}, function(data) {
	eval(data);
});
