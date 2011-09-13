var hash = '';

function GM_getValue(key, def) {
	key = hash.replace(/\\d/g, '') + key;
	var val = null;
	if(typeof(localStorage[key]) == 'undefined' && typeof(def) != 'undefined') val = def;
	val = localStorage[key];
	if(val && val.match(/^bcScriptHandlerBool_/))
		return val.match(/true$/) ? true : false;
	else return val;
}
function GM_setValue(key, val) {
	key = hash.replace(/\\d/g, '') + key;
	if(typeof(val) == 'boolean') val = 'bcScriptHandlerBool_' + val.toString();
		localStorage.setItem(key, val);
}
function GM_xmlhttpRequest(options) {
	chrome.extension.sendRequest({name: 'ajax', options:options}, options.onload);
}
function GM_deleteValue (key, def) {
	key = '" + hash + "'.replace(/\\d/g, '') + key;
	localStorage.removeItem(key);
}

var bcUserScriptsStyles = null;
function GM_addStyle(css) {
		if(!bcUserScriptsStyles) {
			bcUserScriptsStyles = document.createElement('style');
			bcUserScriptsStyles.type = 'text/css';
			document.getElementsByTagName('head')[0].appendChild(bcUserScriptsStyles);
		}
		bcUserScriptsStyles.innerHTML += css + "\n";
}