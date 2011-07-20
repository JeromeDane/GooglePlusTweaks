$('body').ready(function() {
	

	
var hash = "lkjhgjmnghmh";
var unsafeWindow = {
	document:document,
	location:document.location
};

var injectCode = " \n\n function GM_getValue(key, def) {\
				key = '" + this.hash + "'.replace(/\\d/g, '') + key;\
				var val = null;\
				if(typeof(localStorage[key]) == 'undefined' && typeof(def) != 'undefined') val = def;\
			  		val = localStorage[key];\
				if(val && val.match(/^bcScriptHandlerBool_/))\
					return val.match(/true$/) ? true : false;\
				else return val;\
			  }\
		      function GM_setValue(key, val) {\
				  key = '" + this.hash + "'.replace(/\\d/g, '') + key;\
				  if(typeof(val) == 'boolean') val = 'bcScriptHandlerBool_' + val.toString();\
				  localStorage.setItem(key, val);\
			  }\
		      function GM_getResourceURL(key) {\
			  	if(typeof(" + hash.replace(/\d/g, '') + "resources[key]) != 'undefined') {\
					return " + hash.replace(/\d/g, '') + "resources[key];\
				} else {\
					GM_log('BC Script Handler error found in script: Unable to load resource for key \"' + key + '\"');\
					return '';\
				}\
			  }\
			  function GM_xmlhttpRequest(options) {\
				chrome.extension.sendRequest({name: 'ajax', options:options}, options.onload);\
			  }\
			  function GM_listValues() {\
				var pattern = new RegExp('^" + hash.replace(/\d/g, '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1") + "');\
				var values = [];\
			  	for(var name in localStorage)\
					if(pattern.test(name))\
						values.push(name.replace(pattern, ''));\
				return values;\
			  }\
			  function GM_deleteValue (key, def) {\
				key = '" + hash + "'.replace(/\\d/g, '') + key;\
				localStorage.removeItem(key);\
			  }\n\n"; 
eval(injectCode);

//------------ define GM_* functions -------------------------
function GM_log(txt) { console.log(txt); }
var bcUserScriptsStyles = null;
function GM_addStyle(css) {
	if(!bcUserScriptsStyles) {
		bcUserScriptsStyles = document.createElement('style');
		bcUserScriptsStyles.type = 'text/css';
			document.getElementsByTagName('head')[0].appendChild(bcUserScriptsStyles);
	}
	bcUserScriptsStyles.innerHTML += css + "\n";
}

function GM_registerMenuCommand() {}

function GM_openInTab(src) {
	chrome.extension.sendRequest({name: 'openInTab', src:src});
}
chrome.extension.sendRequest({name: 'getScript'}, function(script) {
	eval(script);	
});
	

});