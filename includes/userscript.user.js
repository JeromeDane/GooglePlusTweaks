// ==UserScript==
// @name           Google+ Tweaks
// @description    Tweaks to the layout and features of Google+
// @author         Jerome Dane
// @website        http://userscripts.org/scripts/show/106166
// @version        0.33
//
// License        Creative Commons Attribution 3.0 Unported License http://creativecommons.org/licenses/by/3.0/
//
// Copyright (c) 2011 Jerome Dane
//
// Permission is hereby granted, free of charge, to any person obtaining 
// a copy of this software and associated documentation files (the "Software"), 
// to deal in the Software without restriction, including without limitation the 
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
// sell copies of the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all 
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
// OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// @include        http://plus.google.com/*
// @include        https://plus.google.com/*
//
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @require        http://userscripts.org/scripts/source/106368.user.js
// @require        http://userscripts.org/scripts/source/106223.user.js
// @require        http://userscripts.org/scripts/source/112968.user.js
//
// @history        0.033 Fixed mute button due to change in G+ DOM 
// @history        0.033 Removed a redundant polling option for slight improvement in performance 
// @history        0.033 Fixed detection of current post, so post shortcuts should work again (M, C, T etc.) 
// @history        0.033 Fixed tweaks menu not showing up after enabling post previews 
// @history        0.033 Readability no longer enabled by default for installs 
// @history        0.033 Fixed profile name position when using full width 
// @history        0.033 Fixed share box on stream being pushed off to the right making it impossible to close it with the "X" 
// @history        0.033 Fixed layout of photo albums when using full width
// @history        0.033 Fixed comment and post edit boxes having grey background in Firefox
// @history        0.033 Fixed Google+ copyright to bottom of window instead of stuck over stream
// @history        0.033 Added option to hide Google+ copyright completely
// @history        0.033 Fixed extra space above stream when using fixed navigation in Chrome
// @history        0.033 Added option to parse Markdown in posts
// @history        0.032 Fixed easy mentions
// @history        0.032 Fixed inability to disable inlune plusses and shares
// @history        0.032 Fixed inability plusses not showing up
// @history        0.032 Fixed background color occasionally switching back to white when using visibility tweaks
// @history        0.032 Updated posts muted class to fix hiding/fading of mute notices
// @history        0.031 Fixed a glitch in the options script that was causing the whole thing to fail
// @history        0.030 Fixed comments collapsing even when turned off
// @history        0.030 Fixed easy mentions not linking in comments
// @history        0.029 Fixed mute button
// @history        0.029 Fixed left column of photos not staying in place with fixed navigation
// @history        0.029 Fixed layout of new incoming shares notice when using full width
// @history        0.028 Implemented agressive auto selector dection to combat DOM and class changes  
// @history        0.028 Fixed image previews of images across top of profile pages  
// @history        0.027 Fixed muted posts not hiding correctly  
// @history        0.026 Fixes for another G+ DOM change  
// @history        0.026 Changed primary selector method to relative rather than relying on constantly changing class names  
// @history        0.026 Greatly improved stability and simplicity of full width code  
// @history        0.026 Fixed full width of stream when hiding entire right column
// @history        0.026 Removed dynamic external Flattr script inclusion to increase security. Used simple link instead.
// @history        0.025 Yet another massive update of classes to fix G+ DOM changes  
// @history        0.025 Pressing "M" on the keyboard now mutes the current post if mute button is enabled  
// @history        0.025 Pressing "C" on the keyboard now toggled comments if toggle comments is enabled  
// @history        0.025 The document will now scroll back to the top of a post when collapsing long comment threads  
// @history        0.025 Added readability tweak (enabled by default)  
// @history        0.025 Fixed "add comment" box flickering when new comments are added while collapsed
// @history        0.025 Full width and fixed navigation now apply to games section  
// @history        0.025 Fixed options dialog showing up under bad when using fixed navigation  
// @history        0.025 Fixed image for most images  
// @history        0.025 Changed default for image previews to .5 second delay instead of none  
// @history        0.025 Updated info in about tab in options 
// @history        0.025 Moved donate button to the footer of the options dailog and added Flattr button   
// @history        0.024 Easy mentions enabled by default once again 
// @history        0.024 Fixed easy mentions not linking to profiles in comments 
// @history        0.024 Fixed hide right column, hide invites, and hide go mobile 
// @history        0.023 Fixed easy mentions and simplified its code 
// @history        0.022 Fixed circles editor not visible when using full width
// @history        0.021 Fixes to handle change in Google Plus code
// @history        0.021 Fixed stream not jumping to top when clicking stream links with fixed navigation
// @history        0.021 Added ability to hide notice of new people sharing with you
// @history        0.021 Added collapse comments button to end of post comment lists
// @history        0.021 Number of comments now auto-updates when comments are collapsed
// @history        0.021 Increased polling interval to 3 seconds from 1 to reduce resource usage
// @history        0.021 Fixed Sparks layout in full width mode
// @history        0.021 Replaced "mute this post" in incoming feed with mute button when using fast mute
// @history        0.020 Added check for /h#/ image resize format for previews
// @history        0.020 Imposed max height and width on preview images of window size - 40px
// @history        0.019 Quick attempt to fix persistent "all images to preview image" bug
// @history        0.019 Fixed preview images stretching off the window to the right
// @history        0.018 Fixed broken/buggy image preview
// @history        0.018 You can now choose the delay before showing image previews
// @history        0.018 Avatars in "added you to circles" notifications now use image previews
// @history        0.018 Profile pictures in left column of profiles now use image previews
// @history        0.018 Photos in profile pages now use image previews
// @history        0.018 Fixed left column width on notifications feed when using full width
// @history        0.017 Improve stability of mute button 
// @history        0.016 Started refactoring all code to make it easier to maintain 
// @history        0.016 Removed hide post button options (not really used anymore) 
// @history        0.016 Better control of hiding/fading mute notices  
// @history        0.016 Ability to fix just the google bar or all navigation  
// @history        0.016 Attempted to fix posts out of view when using J/K key navigation  
// @history        0.016 Attempted to fix some fixed navigation issues  
// @history        0.016 Clicking on streams now auto scrolls back to top when using fixed navigation  
// @history        0.016 Clicking on buttons in top bar now auto scrolls back to top when using fixed navigation  
// @history        0.016 Added inline +1 and shares option to clean up the page
// @history        0.016 Added toggle comments option
// @history        0.015 Improved positioning and stability of image previews 
// @history        0.015 Increased max size of previews to window height - 40 pixels 
// @history        0.015 Fixed circles view being unusable with fixed navigation enabled 
// @history        0.015 Added easy mentioning [+] symbol after profile names (enabled by default) 
// @history        0.015 "Add to circles" and "in circles" button now fixed on profile pages for fixed nav (thanks Matt Kruse) 
// @history        0.015 Fixed inability to scroll profile columns when using fixed navigation and small windows (thanks Terry May)
// @history        0.014 Added fast mute option to add a mute button and remove muted notice 
// @history        0.014 Removed post buttons option 
// @history        0.013 Added favicon badge to show number of new notices 
// @history        0.012 Added option to fix navigation elements 
// @history        0.011 Fixed stretching of images in previews to 400px when the original is smaller
// @history        0.011 Preview images now work on hangout notice avatars
// @history        0.010 Prevented execution of script within iFrames such as notifications preview popup
// @history        0.010 Increased the width of rollover previews to 400 from 300 (may be a setting eventually)
// @history        0.010 Image rollover preview will now reposition itself to stay within the viewable window
// @history        0.010 Image rollover preview now works on avatars in posts
// @history        0.010 Image rollover preview now works on avatars in vCards (little person previews)
// @history        0.010 Fixed handling of preview images with sz=## in the source
// @history        0.009 Added rollover previews to images in posts
// @history        0.009 Added MIT license to source
// @history        0.008 Display post actions as buttons instead of a dropdown menu (disabled by default)
// @history        0.008 Added a "Hide" tab to the options window to allow hiding Google+ elements
// @history        0.008 Added a donate button to the about tab of the options window
// @history        0.007 Yellow "post muted" notices will now fade out after a few seconds
// @history        0.006 Fixes to Thumbnails Only feature
// @history        0.005 Images in posts can now forced to thumbnails
// @history        0.004 Added options dialog with link in Google settings menu
// @history        0.004 Full width feature can now be disabled
// @history        0.003 Fixed header not left aligned in Google Chrome
// @history        0.003 Notifications view is now full width
// @history        0.003 Included jQuery UI in anticipation of next version 
// @history        0.003 Included Script Options in anticipation of next version 
// @history        0.002 Profiles are now full width as well
// @history        0.001 Initial release
//
// ==/UserScript==

var version = 0.33;

var debugSelectors = false;
var debugAlign = 'right';		// 'left' or 'right'


var selectors = {
		content: '#content',
		contentPane: '#contentPane',
		googleBar: '#gb',
		toolBar: '#notify-widget-pane + div + div + div'
	};
var s = selectors;
var dynamicSelectors = {};

function detectWidthRestrictor() {
	var widthInhibiterWidthPattern = /574/;
	// selectorWidthRestrictor
	var inhibiterSelctor = '';
	$(s.contentPane + ' div').each(function() {
		if($(this).css('width').match(widthInhibiterWidthPattern)) {
			// determine classes of width inhibitor
			var classes = this.className.split(" ");
			// test for specific width inhibitor class
			for(var i = 0; i < classes.length; i++) {
				var selector = '.' + classes[i];
				if($(selector).css('width').match(widthInhibiterWidthPattern))
					inhibiterSelctor += selector + ', ';
			}
		}
	});
	if(inhibiterSelctor != '') {
		Config.set('selectorWidthRestrictor', inhibiterSelctor.replace(/,\s*$/, ''));
		document.location = document.location;
	}
}

function detectIncomingWrapper() {
	var incomingNotice = $('a[href*="/stream/incoming"]', s.streamContent);
	if(incomingNotice.size() > 0) {
		var noticeWrapper = incomingNotice.parent().parent();
		var str = '.' + noticeWrapper.attr('class').replace(/\s+/g, '.');
		compareAndSaveSelector('selectorStreamIncomingNotice', str);
	}
}

function compareAndSaveSelector(key, val) {
	if(val.match(/\.[^\.]+\./) && Config.get(key) != val) {
		Config.set(key, val);						// save the new selector
		// update width inhibiter 
		if(key == 'selectorStreamContent') {
			detectWidthRestrictor();
			detectIncomingWrapper();
		}
		document.location = document.location;		// refresh the page
	}
}

function updateSelectors() {
	if($(s.contentPane).size() == 1) {
		var str = '.' + $(s.content + ' > div:first-child').attr('class').replace(/\s+/g, '.');
		compareAndSaveSelector('selectorMainWrapper', str);
		// main stream
		if(document.location.toString().match(/plus\.google\.com\/(stream)?$/)) {
			var str = '.' + $(s.contentPane).attr('class').replace(/\s+/g, '.');
			compareAndSaveSelector('selectorStreamContent', str);
			if(!Config.get('selectorWidthRestrictor').match(/^\./)) detectWidthRestrictor();
			if(!Config.get('selectorStreamIncomingNotice').match(/^\./)) detectIncomingWrapper();
		}
		// notifications
		if(document.location.toString().match(/\/notifications\//)) {
	 		var str = '.' + $(s.contentPane).attr('class').replace(/\s+/g, '.');
	 		compareAndSaveSelector('selectorStreamNotificationCol', str);
		}
		// photos
		if(document.location.toString().match(/plus\.google\.com\/photos/)) {
			var str = '.' + $(s.contentPane).attr('class').replace(/\s+/g, '.');
			compareAndSaveSelector('selectorPhotos', str);
		}
		// user profile
		if(document.location.toString().match(/plus\.google\.com\/\d+\//)) {
			var str = '.' + $(s.contentPane).attr('class').replace(/\s+/g, '.');
			compareAndSaveSelector('selectorProfile', str);
		}
	}
}

function populateSelectors() {
	// class used to restrict content width when viewing stream after another section like a profile or photos. Usually a 2 character code
	s.widthRestrictor = Config.get('selectorWidthRestrictor');				
	s.chatRoster = '#oz-chat-roster';
	
	s.postCommentEditorMention = 'f-IE';
	
	s.gamesWrapper = s.content + ' .d7';
		s.gamesLeftCol = s.gamesWrapper + ' .vZ';
		s.gamesContent = s.gamesWrapper + ' .PP';
		s.gamesStream = s.gamesContent + ' .BZ';
		s.gamesAllGamesWrapper = s.gamesContent + ' .rZ';
		s.gamesAllGamesGameWrapper = s.gamesAllGamesWrapper + ' .b7';
	s.stream = s.content + ' ' + Config.get('selectorMainWrapper');
		s.streamLeftCol = s.stream + ' > div:first-child';
		s.streamContent = s.stream + ' ' + Config.get('selectorStreamContent');				// #contentPane *class only* when in stream view (don't include ID)
			s.streamShareWrapper = '.h-ZA-da-o';
			s.streamIncomingNotice = s.streamContent + ' ' + (Config.get('selectorStreamIncomingNotice') != '' ? Config.get('selectorStreamIncomingNotice') : '.nope');
		s.streamRightCol = s.streamContent + ' + div'
			s.streamLinksWrapper = s.streamLeftCol + ' > div:first-child > div:first-child + div > div:first-child';
				s.streamWelcomeLink = s.streamLinksWrapper + ' > h2 + div > a:first-child';
		s.streamRightColSuggestions = s.streamRightCol + ' > div:first-child > div:nth-child(2)';
			s.streamRightColSendInvites = s.streamRightCol + ' > div:first-child > div:nth-child(3)';
		s.streamNotificationCol = s.stream + ' ' + (Config.get('selectorStreamNotificationCol') != '' ? Config.get('selectorStreamNotificationCol') : '.nope');		// When in notifications: #contentPane *class only* > div:first-child
		s.incomingPostedBy = ' .Ov.GB';
			s.incomingPostedByAddToCircles = s.incomingPostedBy + ' > div:first-child > div:first-child';
			s.incomingPostedByMutePostButton = s.incomingPostedBy + ' > div:first-child > div:first-child + [role="button"]';
		s.sparksSearchButton = s.streamNotificationCol + ' .d-q-p.j-e.j-e-Y.l2.e1';
		s.sparksAddInterestButton = s.streamNotificationCol + ' .b-o-l.g-d.g-d-R.Oba.B9';
	s.profile = s.content + ' ' + (Config.get('selectorProfile') != '' ? Config.get('selectorProfile') : '.nope');
		s.profileContent = s.profile + ' .vcard > div:first-child'; 
		s.profileLeftCol = s.profile + ' .a-e-b-Ob-ac.a-b-Ob-ac';
	s.post = 'div[id^="update"]';
		s.postSelected = s.post + '.rh';		// you just have to figure out what class they're using
		dynamicSelectors.postBody = s.post + ' > div:first-child > div:nth-child(2)';						// dynamically detected
			dynamicSelectors.postCommentButton = s.post + ' > div:first-child > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)';
			dynamicSelectors.postShareButton = s.post + ' > div:first-child > div:nth-child(2) > div:nth-child(2) > span:nth-child(3)';
			dynamicSelectors.postPlussesAndShares = s.post + ' > div:first-child > div:nth-child(2) > div:nth-child(3)'; // wrapper for the plusses and shares
			dynamicSelectors.postPlussesWrapper = s.post + ' > div:first-child > div:nth-child(2) > div:nth-child(3) > div:first-child'; 
				dynamicSelectors.postPlusses = s.post + ' > div:first-child > div:nth-child(2) > div:nth-child(3) > div:first-child > span:first-child '; 	
			dynamicSelectors.postSharesWrapper = s.post + ' > div:first-child > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)'; 
				dynamicSelectors.postShares = s.post + ' > div:first-child > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span:first-child'; 
		dynamicSelectors.postCommentsWrapper = s.post + ' > div:first-child > div:nth-child(3)';						 
			dynamicSelectors.postCommentsNumBar = s.post + ' > div:first-child > div:nth-child(3) > div:first-child';						 
	
			dynamicSelectors.postButton = s.post + ' > div:first-child > div:first-child > span';
			s.postMuteButton = Config.get('selectorMuteButton') != '' ? Config.get('selectorMuteButton') : '.nope';
			
			s.postMutedNotice = '.En';//s.post + (Config.get('selectorPostMutedNotice') != '' ? Config.get('selectorPostMutedNotice') : '.nope');
	
	s.postPlusOneButton =  ' button[g\\:entity^="buzz"]';
	
	s.postImages = 'img[src*="googleusercontent"]';
	s.photosWrapper = (Config.get('selectorPhotos') != '' ? Config.get('selectorPhotos') : '.nope');
	s.photosLeftCol = s.photosWrapper + ' > div:first-child > div:first-child';
	s.photosContent = s.photosWrapper + ' > div:first-child > div:first-child';
	s.photosRightCol = s.photosWrapper + ' > div:first-child > div:nth-child(3)';
	s.sendFeedback = 'a[onclick*="appfeedback"]';
	s.profileLink = 'a[oid]';
	s.userContentImages = 'img[src*="googleusercontent.com"]';
	
	if(debugSelectors && $(s.content).size() > 0) {
		var possibleColors = ['pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'brown', 'red'];
		var colors = {};
		setTimeout(function() {
			var html = '<div id="bcGPTksSelectorDebug" style="opacity:.9; position:absolute; top:100px; ' + debugAlign + ':0; font-weignt:normal; padding:1em; border:1px solid #000; background:#333; z-index:100;">';
			html += '</div>';
			function debugSelectors() {
				var html = '<p>Selectors Found:</p>';
				for(var x in selectors) {
					var elem = $(selectors[x])
					var numFound = elem.size();
					// generate a random color to identify the element
					if(typeof(colors[x]) == 'undefined') colors[x] = possibleColors[Math.floor(Math.random() * possibleColors.length)]; 
					var color = colors[x];
					elem.css('background', color);
					elem.attr('title', x);
					html += '<span style="color:' + (numFound == 0 ? 'black' : color + '; font-weight:bold') + ';">' + x + ' ' + numFound + '</span><br/>';
					
					
				}
				$('#bcGPTksSelectorDebug').html(html);
			}
			debugSelectors();
			setInterval(debugSelectors, 3000);
			$('body').append(html);
		}, 2000);
	}
}
	

var playVideoIconSelector = '.ea-S-ei';

var profileColumnSelector = '.a-b-c-ka-Mc.a-c-ka-Mc'
var profileLinkSelector = 'a[oid]';
var rightColSelector = '.a-b-Cs-T.a-Cs-T.d-s-r';
var suggestionsSelector = '.a-b-j-lc-Rd-A';
var sharedByIncomingNoticeSelector = '.a-f-i-Jf-Om.a-b-f-i-Jf-Om';
var vCardSelector = 'table.a-ia-ta';
var vcardAvatarSelector = vCardSelector + ' img.a-ia-tk[src*="googleusercontent"]';
var vcardAvatarInCommonSelector = vCardSelector + ' img.a-ia-Bq[src*="googleusercontent"]';

var previewHeightMax = $(window).height() - 40;
var previewWidthMax = previewHeightMax;
var currentPreviewTarget = false;

function eventIsFromTyping(e) {
	if(e.target.nodeName.match(/input/i)) return true;
	if(e.target.className.match(/editable/)) return true;
	return false;
}

function GTweaks() {
	var self = this;
	this.css = '';
	this.donateButtonsHtml = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=773DHSKBK7PXQ" title="Donate through PayPal to support Google+ Tweaks"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" /></a> &nbsp; ' +
		'<a href="http://flattr.com/thing/371262/Google-Tweaks" target="_blank"><img src="http://api.flattr.com/button/flattr-badge-large.png" alt="Flattr Google+ Tweaks" title="Flattr this" border="0" /></a>';
	this.pollInterval = 3000;		// in milliseconds
	this.pollFuncions = [];
	this.version = version;
	this.muteButtonClassFound = false;
	this.options = {
		"General":{
			"faviconBadge":{
				label:'Favicon Badge',
				type:'checkbox',
				description:'See the number of new alerts in your favicon',
				'default':true
			},
			"fullWidth":{
				label:'Full Width',
				type:'checkbox',
				description:'View Google+ in the full width of your browser',
				'default':true
			},
			"readability":{
				label:'Readability',
				type:'checkbox',
				description:'Improve readibility by shifting the focus to posts',
				'default':false
			},
			"postPreviews":{
				label:'Post Previews',
				type:'checkbox',
				description:'Show posts as previews. Click or press "T" to expand',
				'default':false
			},
			"muteButton":{
				label:'Mute Button',
				type:'checkbox',
				description:'Add button to posts for one click muting',
				'default':true
			},
			"muteNotices":{
				label:'Mute Notices',
				type:'select',
				options:{
					none:'Do nothing',
					fade:'Fade out',
					hide:'Hide'
				},
				description:'Treatment of "post muted" notices',
				'default':'none'
			},
			"easyMentions":{
				label:'Easy Mentions',
				type:'checkbox',
				description:'Add links next to names in posts to easily mention them',
				'default':true
			},
			"markdown":{
				label:'Parse Markdown',
				type:'checkbox',
				description:'Parse <a href="http://en.wikipedia.org/wiki/Markdown" target="_blank">markdown</a> in posts and comments',
				'default':true
			},
			"imagePreviews":{
				label:'Image Previews',
				type:'select',
				options:{
					'none':'Disabled',
					'0':'No delay',
					'500': '0.5 second delay',
					'1000': '1 second delay',
					'2000': '2 second delay'
				},
				description:'Show image preview on rollover',
				'default':'500'
			},
			"comments":{
				label:'Toggle Comments',
				type:'checkbox',
				description:'Collapse post comments with click to expand',
				'default':false
			},
			"inlinePlusShare":{
				label:'Inline +1/shares',
				type:'checkbox',
				description:'Show the number of +1s and shares inline',
				'default':true
			},
			"thumbsOnly":{
				label:'Thumbnails Only',
				type:'checkbox',
				description:'Force all images in posts to thumbnails',
				'default':false
			},
			"fixedNav":{
				label:'Fixed Navigation',
				type:'select',
				options:{
					none: 'None',
					gBar: 'Google Bar',
					all: 'All Navigation'
				},
				description:'Pin elements so they stay visible',
				'default':'none'
			},
			'seeAbout':{
				type:'html',
				text:'<div><br/></div>' +
					'<p>More features coming soon. See <strong>About</strong> tab for more details information.</p>'
			}
		},
		"Hide":{
			"hideWelcomeLink":{
				label:'Welcome Link',
				type:'checkbox',
				description:'Hide the welcome link in the left column'
			},
			"hideChatRoster":{
				label:'Chat List',
				type:'checkbox',
				description:'Hide the chat list in the left column'
			},
			"hideIncomingNotice":{
				label:'Incoming Notice',
				type:'checkbox',
				description:'Hide "# new people are sharing with you" notice'
			},
			"hideSendFeedback":{
				label:'Send Feedback',
				type:'checkbox',
				description:'Hide the send feedback link in the borrom right'
			},
			"hidePlusMention":{
				label:'Mention Prefix',
				type:'checkbox',
				description:'Hide the "+" symbol before mentions in posts'
			},
			"hideRightColLabel":{
				type:'html',
				text:'<p"> </p>'
			},
			"hideRightCol":{
				label:'Right Column',
				type:'checkbox',
				description:'Hide the entire right column'
			},
			"hideSuggestions":{
				label:'Suggestions',
				type:'checkbox',
				description:'Hide suggestions of people to follow'
			},
			"hideSendInvites":{
				label:'Send Invites',
				type:'checkbox',
				description:'Hide the "Send Invites" section'
			},
			"hideCopyrightLabel":{
				type:'html',
				text:'<p"> </p>'
			},
			"hideCopyright":{
				label:'Copyright',
				type:'checkbox',
				description:'Hide Google+ copyright footer'
			}
		},
		"Selectors":{
			"selectorsIntroHtml":{
				type:'html',
				text:'<p>This tab is for advanced users only. The Google+ DOM and element classes are constantly changing. These settings are an attempt to combat these changes and create some stability for end-users.</p>' +
					''
			},
			"selectorAutoUpdate":{
				label:'Auto Update',
				type:'checkbox',
				description:'Automatically detect and update selectors below',
				'default':true
			},			
			"selectorWidthRestrictor":{
				label:'Width Restrictors',
				type:'text',
				description:'Classes that restrict width',
				'default':''
			},			
			"selectorMainWrapper":{
				label:'Main Wrapper',
				type:'text',
				description:'Contains main content',
				'default':'.a-o-I-R.a-o-I-R-jk-Yb'
			},			
			"selectorStreamContent":{
				label:'Content',
				type:'text',
				description:'Main stream content wrapper',
				'default':'.a-o-I-R.a-o-I-R-jk-Yb'
			},			
			"selectorStreamIncomingNotice":{
				label:'Incoming Notice',
				type:'text',
				description:'New incoming wrapper',
				'default':''
			},			
			"selectorStreamNotificationCol":{
				label:'Notifications',
				type:'text',
				description:'Notifications content wrapper',
				'default':''
			},			
			"selectorPhotos":{
				label:'Photos',
				type:'text',
				description:'Photos wrapper',
				'default':''
			},			
			"selectorProfile":{
				label:'Profile',
				type:'text',
				description:'Profile wrapper',
				'default':''
			},			
			"selectorMuteButton":{
				label:'Mute Button',
				type:'text',
				description:'Post menu mute item',
				'default':'.a-Q-j.b-O.a-Q-j-xd.Fj.cg'
			},			
			"selectorManualNoticeHtml":{
				type:'html',
				'text':'<p>The following must be updated manually for now.</p>'
			},
			"selectorCurrentPost":{
				label:'Current Post',
				type:'text',
				description:'Highlighted/active post',
				'default':'.ki'
			},			
			"selectorPostMutedNotice":{
				label:'Muted Notice',
				type:'text',
				description:'Post muted notice',
				'default':'.Un'
			}	
		},
		"About":{
			'about':{
				type:'html',
				text:'' +
					'<p style="margin-top:0;"><strong><a href="http://userscripts.org/scripts/show/106166">' +
					'Google+ Tweaks</a></strong> v' + self.version + ' by <a href="http://jeromedane.com">Jerome Dane</a></p>' +
					'<p>Tweaks to the layout and features of Google+</p>' +
					'<p>This project is maintained as a hobby. All real-life obligations take precedence. Take it or leave it.</p>' +
					'<p>I don\'t get paid for this, and do all of this in what little free time I have. If you like these tweaks, show your support by buying me a cup of coffee ☺.</p>' +
					'<p>' +
						'<a href="https://plus.google.com/107905455800180378660/posts">' +
							'<img style="display:inline-block; vertical-align:middle;" src="https://lh3.googleusercontent.com/-IvtEWk93sCM/ThitYp1QudI/AAAAAAAAAGY/piLimw2CogM/google_plus_badge_32.png"/>' +
						'</a>' +
						' For updates, <a href="https://plus.google.com/107905455800180378660/posts">follow me on Google+</a>' +
					'</p>'
			}
		}
	};
	this.features = {
		markdown:{
			
			processPost:function(post) {
				if(Config.get('markdown') && !post.className.match(/mdParsed/) && !document.location.toString().match(/\/sparks\//)) {
	 				post.className += ' mdParsed';
	 				
	 				function parseMarkdown(elem) {
	 					if(!elem.className.match(/mdParsed/)) {
		 					elem.className = "mdParsed";
		 		 			var converter = new Showdown.converter();
		 					
		 		 			// return Google+ translated links back to plain text
		 		 			$('a', elem).each(function() {
		 		 				if(this.className != 'proflink') {
			 		 				$(this).after($(this).text());
			 		 				$(this).remove();
		 		 				}
		 		 			});
		 		 			
		 		 			
		 		 			elem.innerHTML = elem.innerHTML
		 		 							.replace(/<\/?i><\/?b>/g, "***")
		 		 							.replace(/<\/?b><\/?i>/g, "***")
		 		 							.replace(/<\/?b>/g, "__")
		 		 							.replace(/<\/?i>/g, "*")
		 		 							.replace(/<br>/g, "\n")
		 		 							
		 		 							//.replace(/"http/g, '"_ttp')
		 		 							
		 		 			
		 					//var text = this.innerHTML;
		 					var text = elem.innerHTML;
		 					text = text.replace(/&gt;/g, '>');//.replace(/>/g, '&gt;');
//		 					text = text.replace(/</g, '&lt;');//.replace(/>/g, '&gt;');
		 					
		 					text = converter.makeHtml(text);
		 					
		 					// reparse unparsed URLs to links
		 					var startingLinks = /^(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
		 					text = text.replace(startingLinks, '<a href="$1">$1</a>');
		 					var embeddedLinks = /([^"])(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
		 					text = text.replace(embeddedLinks, '$1<a href="$2">$2</a>');
		 					var quotedLinks = /"(\b(_ttps?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
		 					text = text.replace(quotedLinks, '"<a href="$1">$1</a>')
		 						.replace(/"_ttp/g, '"http')
		 						.replace(/>_ttp/g, '>http');
		 					
		 					elem.innerHTML = text;
	 					}
	 				}
	 				
	 				$('div:first-child > div:first-child + div > div:first-child > div:first-child > div:first-child', post).each(function() {
	 				//	parseMarkdown($(this).parent().next());
	 					parseMarkdown(this);
	 					
	 					
	 					$('span[role="button"]', $(this).parent()).click(function() {
	 						var parent = $(this).parent();
	 						var targetOne = $('div:first-child', $(this).parent().parent());
	 						function check() {
	 							if(targetOne.text() != '') {
	 								parseMarkdown($('div:first-child', parent.next())[0]);
	 							} else {
	 								setTimeout(check, 100);
	 							}
	 						}
	 						setTimeout(check, 100);
	 					});
		 			});
	 			}
	 			
			}
		},
		favicon: {
			src: 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AJubm3guLi7/Ly8v/zExMf8yMjL/MjIy/zMzM/8yMjL/MjIy/zExMf8vLy//Li4u/y0tLf+enp50////AP///wAvLy//MTEx/zMzM/80NDT/NTU1/zY2Nv8mJib/JiYm/zU1Nf80NDT/MjIy/zAwMP8uLi7/LS0t/////wD///8AMjIy/zQ0NP82Njb/ODg4/zo6Ov87Ozv/09HR/9PR0f86Ojr/ODg4/zY2Nv80NDT/MjIy/y8vL/////8A////ADU1Nf84ODj/Ozs7/z09Pf8/Pz//QEBA/+Pi4v/j4uL/Pz8//z09Pf87Ozv/ODg4/zU1Nf8yMjL/////AP///wA5OTn/PDw8/z8/P/8tLS3/Ly8v/y8vL//o5+f/6Ofn/y8vL/8tLS3/LCws/zw8PP85OTn/NTU1/////wD///8APDw8/0BAQP9CQkL/7ezs/+3s7P/t7Oz/7ezs/+3s7P/t7Oz/7ezs/+3s7P8/Pz//Ozs7/zg4OP////8A////AD8/P/9CQkL/RUVF//Hx8f/x8fH/8fHx//Hx8f/x8fH/8fHx//Hx8f/x8fH/QkJC/z4+Pv86Ojr/////AP///wBAQED/RERE/0dHR/9JSUn/SUlJ/0lJSf/29fX/9vX1/0lJSf9JSUn/R0dH/0RERP9AQED/PDw8/////wD///8AQkJC/0ZGRv9ISEj/SUlJ/0lJSf9JSUn/+fn5//n5+f9ISEj/SEhI/0dHR/9GRkb/QkJC/z4+Pv////8A////AENDQ/9HR0f/SUlJ/0lJSf9JSUn/SUlJ//39/f/9/f3/SUlJ/0lJSf9JSUn/R0dH/0NDQ/8/Pz//////AP///wBERET/R0dH/0lJSf9JSUn/SUlJ/0lJSf9JSUn/SUlJ/0lJSf9JSUn/SUlJ/0dHR/9DQ0P/Pz8//////wD///8ANzc3/zo6Ov88PDz/PDw8/zw8PP88PDz/PDw8/zw8PP88PDz/PDw8/zw8PP86Ojr/Nzc3/zQ0NP////8A////AA8P1f8PD9X/Dw/V/+hpM//oaTP/6Gkz/+hpM/8lmQD/JZkA/yWZAP8mkwP/EbLu/xGy7v8Rsu7/////AP///wCHh+p+Dw/V/w8P1f/oaTP/6Gkz/+hpM//oaTP/JZkA/yWZAP8lmQD/JpQE/xGy7v8Rsu7/jNr2ef///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAMADAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAADAAwAA//8AAA%3D%3D', 
			icon: null,
			init: function() {
				var icon = new FavIcon(self.features.favicon.src);
				icon.foreground = '#fef4ac'; 
				icon.background = '#bb0000'; 
				self.features.favicon.icon = icon;
				self.features.favicon.checkForNotices();
			},
			checkForNotices: function() {
				var numNotices = $('#gbgs1').text();
				if(numNotices.toString().match(/^\d+$/) && numNotices.toString() != '0') {
					self.features.favicon.icon.set(numNotices);
				} else {
					self.features.favicon.icon.set();
				}
				setTimeout(self.features.favicon.checkForNotices, 5000);
			}
		},
		fixedNavigation: {
			init: function() {
				var leftWidth = $(selectors.streamLeftCol).width();
				var rightColOffset = ($(window).width() / 2) + 280;
				
				function fixGbar(height) {
					self.addStyle(selectors.googleBar + ' { position:fixed; top:0; width:100%; } #content { position:absolute; top:90px; }');
					//$(selectors.googleBar).parent().after('<div style="height:' + height + 'px;">&nbsp;<div>');
				}
				switch(Config.get('fixedNav')) {
					case 'gBar':
						fixGbar(0);
						break;
					case 'all':
						fixGbar(navigator.userAgent.match(/chrome/i) ? 0 : 29);
						self.addStyle(selectors.toolBar + ' { position:fixed; top:30px; z-index:1000; }' +
							selectors.googleBar + ' { z-index:1200; }' +
							// stream view
							selectors.streamLeftCol + ' { position:fixed; top:90px; width:' + (leftWidth + 20) + 'px; height:' + ($(window).height() - 90) + 'px; overflow-y:auto; overflow-x:hidden; }' +
							selectors.streamRightCol  + ' { position:fixed !important; top:90px; ' + 
								(Config.get('fullWidth') ? 'right:0;' : 'left:' + rightColOffset + 'px;') + 
							' }' +
							selectors.streamNotificationCol + ', ' + selectors.streamContent + ' { position:relative; left:' + ($(selectors.streamLeftCol).width() + 20) + 'px; }' +
							// games view
							selectors.gamesLeftCol + ' { position:fixed; top:90px; }' +
							selectors.gamesContent + ' { position:absolute; left:190px; }' +
							// pictures view
							selectors.photosLeftCol + ' { position:fixed; top:90px; }' +
							// profile view
							selectors.profileLeftCol + ' { position:fixed; top:90px; ' + 
								(Config.get('fullWidth') ? '' : 'left:' + (rightColOffset - 760) + 'px;') +
							' }' 
						);
						// make the doc scroll to the top on top grey bar button click
						$(selectors.streamLinksWrapper).click(function() {
							$(document).scrollTop(0);
						});
						break;
				}
			}
		},
		fullWidth: {
			init: function() {
				if(Config.get('fullWidth')) {
					// hide Google+ footer/copyright 
					$('#content').next().attr('style', 'position:fixed; bottom:0; background-color:#' + (Config.get('readability') ? 'f1f1f1' : 'fff') + '; line-height:15px;');
					$('*', $('#content').next()).attr('style', 'line-height:15px; margin:0; ');
					
					var s = selectors;
					//var streamLeftColWidth = $(s.streamLeftCol).width() + 20; alert(streamLeftColWidth);
					var streamLeftColWidth = 188;
					//var streamRightColWidth = $(s.streamRightCol).width() + 10; alert(streamRightColWidth);
					var streamRightColWidth = Config.get('hideRightCol') ? 0 : 205;
					
					var streamNotificationWidth = $(window).width() - streamLeftColWidth; 
					var streamContentWidth = streamNotificationWidth - streamRightColWidth;
					
					var contentWidth = $(window).width() - streamLeftColWidth - $(selectors.streamRightCol).width();
					var notificationWidth = $(window).width() - streamLeftColWidth - 25;
					
					var profileLeftColWidth = 232;
					var profileWidth = $(window).width() - profileLeftColWidth - 5;
					
					var gameContentWidth = $(window).width() - 190;
					
					self.addStyle(
						// global and general
						selectors.stream + ', ' + selectors.content + ', ' + s.widthRestrictor + ' { width:100% !important; }' +
						selectors.stream + ' { width:' + $(window).width() + 'px !important; }' +
						selectors.contentPane + ' { width:100%; }' +
						selectors.contentPane + ' > div { width:100% !important; }' +
						selectors.contentPane + ' > div > div { width:100% !important; }' +
						selectors.contentPane + ' > div > div > div { width:100% !important; margin-left:0 !important; }' +
						
						// all direct discendants of content pane should be 100% with no margins
						s.contentPane + ' > div:first-child > div { width:100%; margin:0 !important; }' +
						
						// stream
						s.streamLeftCol + ', ' + s.streamNotificationCol + ' { float:left; width:' + (streamLeftColWidth - 20) + 'px !important; }' +				
						s.streamRightCol + ' { position:absolute; right:10px; }' +				
						s.streamContent + ' { width:' + streamContentWidth + 'px !important; position:absolute; left:' + streamLeftColWidth + 'px; }' +
						s.streamIncomingNotice + ' { width:' + (streamContentWidth - 42) + 'px !important; }' +
						s.streamIncomingNotice + ' > div { width:32px !important; }' +
						s.streamIncomingNotice + ' > span:first-child + div { width:100% !important; }' +
						s.streamIncomingNotice + ' > div[data-promo-type] { width:100% !important; }' +
						s.streamNotificationCol + ' { width:' + streamNotificationWidth + 'px !important; float:left; }' +
						// notificatio contents
						s.streamNotificationCol + ' > div:first-child > div:first-child > div:first-child + div > div > div { width:100%; margin:0; padding:0; }' +
						s.streamNotificationCol + ' > div:first-child > div:first-child > div:first-child + div > div > div > div { margin-left:20px; margin-right:20px; }' +
						
						// stream title and share wrapper margins
						s.streamContent + ' > div:first-child > div:first-child > span { display:block; padding:15px 20px 10px 0; }' +
						s.streamShareWrapper + ' { width:100% !important; }' +
						s.streamShareWrapper + ' > div:first-child  { margin:0 20px; }' +
						
						// profile
						s.profile + ', ' +  s.profileContent + ' { width:' + profileWidth +'px !important; }' +
						s.profileContent + ' { margin-left:' + profileLeftColWidth + 'px !important; }' +
						// profile name
						s.profileContent + ' > div:first-child > div:first-child + div { margin-left:0px !important; }' +
						
						// photos
						'#content ' + s.photosLeftCol + ' { width:192px !important; }' +
						'#content ' + s.photosRightCol + ' { width:180px !important; }' +
						'#contentPane div[token^="photos"] > div:first-child { width:100% !important; }' +
						// photos left column for individual
						'#contentPane div[token^="photos"] > div:first-child + div { width:180px !important; }' +
						
						'');
				}
			}
		},
		inlinePlusShare: {
			init: function() {
				if(Config.get('inlinePlusShare')) {
					self.addStyle(
						selectors.postPlusOneButton + ' { margin-right:.5em; } ' +
						selectors.postPlussesAndShares + ' { display:none !important; position:absolute; top:0; left:0; visibility:hidden; }'
					);
				}
			},
			processPost:function(post) {
				if(Config.get('inlinePlusShare')) {	
					$(selectors.postPlussesAndShares, post).each(function() {
						$(this).css('display', 'none');
//						$(this).css('height', '1px');
//						$(this).css('overflow', 'hidden');
						// plusses
						$(selectors.postPlussesWrapper, this).each(function() {
							var plusses = $(selectors.postPlusses, this);
							
							if(plusses.size() == 1) {
								plusses.attr('name', 'inlinePlusHack');
								$(selectors.postPlusOneButton, post).after(plusses);
								if(plusses.next().text().match(/\d/)) {
									plusses.remove();
								}
								$(this).remove();
							}
						});
						// shares
						$(selectors.postSharesWrapper, this).each(function() {
							$('.inlineSharesHack:eq(0)', post).next().remove();			// strip any existing hacks
							$('.inlineSharesHack', post).remove();			// strip any existing hacks
							var shares = $(selectors.postShares, this);
							$(selectors.postShareButton, post).after(shares);
							$(selectors.postShareButton, post).after(' <span class="inlineSharesHack">(</span>');
							$(shares).after('<span class="inlineSharesHack">)</span>');
							$(shares).html($(shares).html().replace(/[^\d]/g, '') + '');
							$(this).remove();
						});
						$(this).html('');
					});
				}
			}
		},
		imagePreviews: {
			wrapper: null,
			init: function() {
				if(Config.get('imagePreviews') != 'none' && $('#gb').size() > 0) {
					var previewDiv = document.createElement('div');
					previewDiv.id = 'bcGplusTweaksPreview';
					previewDiv.innerHTML = '<div class="loading">&nbsp;</div><img id="bcGPTwksPrvImg" src=""/>';
					$(previewDiv).mousemove(self.features.imagePreviews.reposition);
					$('body').append(previewDiv);
					self.features.imagePreviews.wrapper = previewDiv;
					
					self.addStyle( '#bcGplusTweaksPreview { ' +
							'border:2px solid red; position:absolute; z-index:5000; top:0; left:0; display:none;' + 
							'max-width:' + previewWidthMax + 'px; border:4px double #333; background:#fff; box-shadow: 0 5px 8px rgba(0, 0, 0, 0.6);' +
						'}' +
							'#bcGplusTweaksPreview img { ' +
							'margin-bottom:-3px; max-width:' + previewWidthMax + 'px; display:none; ' +
							'max-height:' + ($(window).height() - 40) + 'px; ' +
							'max-width:' + ($(window).width() - 40) + 'px; ' +
						'}' +
						'#bcGplusTweaksPreview .loading { ' +
							'background:url(https://lh4.googleusercontent.com/-6CrxAryPl6o/TigTcQV2HmI/AAAAAAAAAQg/tFbeZcP4Mro/loading.gif) no-repeat center; height:50px; width:50px; }'
					);
					self.addPolling(self.features.imagePreviews.processPosts);
				}
			},
			loaded:{},
			mousePos: null,
			reposition: function() {
				var previewDiv = self.features.imagePreviews.wrapper;
				var e = self.features.imagePreviews.mousePos;
				$(previewDiv).css('left', e.pageX + 30);
				$(previewDiv).css('top', e.pageY - 30);
				
				var isLoading = $('.loading', previewDiv).css('display') == 'block';
				
				var h = isLoading ? 50 : $('#bcGPTwksPrvImg').height();
				var w = isLoading ? 50 : $('#bcGPTwksPrvImg').width();
				
				var bottom = parseInt($(previewDiv).css('top').replace(/[^\d]/, '')) + h - $(document).scrollTop();
				var right = parseInt($(previewDiv).css('left').replace(/[^\d]/, '')) + w;
				if(right > $(window).width()) {
					if(e.pageX - w - 30 > 10) {
						$(previewDiv).css('left', e.pageX - w - 30);
					} else {
						$('#bcGPTwksPrvImg').width($(window).width() - e.pageX - 60);
					}
				}
				if(bottom > $(window).height()) {
					$(previewDiv).css('top', $(window).height() - 20 - h + $(document).scrollTop());
				}
			},
			enableTarget: function(selector) {
				var maxHeight = $(window).height() - 40;
				var previewDiv = self.features.imagePreviews.wrapper;
				$(selector).each(function() { 
					if($(playVideoIconSelector, $(this).parent()).size() == 0) {	// no preview for videos
						var img = this;
						if($(img).attr('rel') != 'bcGplusTwImgPrvw') {
							$(img).attr('rel', 'bcGplusTwImgPrvw');
							if($(img).width() < 500 && $(img).height() < 400) {						// no preview for images that are already large
								$(img).mouseover(function(e) {
									self.features.imagePreviews.mousePos = e;
									self.features.imagePreviews.reposition();
									currentPreviewTarget = img;
									setTimeout(function() {
										if(currentPreviewTarget) {
											$('.loading', previewDiv).show();
											$('#bcGPTwksPrvImg').hide();
											$(previewDiv).fadeIn('fast');
											var src = currentPreviewTarget.src.replace(/\/w\d+[^\/]+\//, '/w' + previewWidthMax + '/');
											src = src.replace(/\/s\d+[^\/]+\//, '/');
											src = src.replace(/\/h\d+[^\/]+\//, '/h' + maxHeight + '/');
											src = src.replace(/resize_w=\d+/, '');
											src = src.replace(/sz=\d+/, '');
											src = src.replace(/resize_h=\d+/, '');
											src = src.replace(/&$/, '');
											$('#bcGPTwksPrvImg').load(function() {
												if(currentPreviewTarget) {
													function showImage() {
														$('.loading', previewDiv).hide();
														$('#bcGPTwksPrvImg').show();
														self.features.imagePreviews.reposition();
														self.features.imagePreviews.loaded[src] = true;
													}
													if(typeof(self.features.imagePreviews.loaded[src]) != 'undefined') 
														showImage();
													else 
														setTimeout(showImage, 500);
												}
											});
											$('img', previewDiv).attr('src', src);
										}
									}, parseInt(Config.get('imagePreviews')));
								});
								$(img).mouseout(function() {
									currentPreviewTarget = false;
									$(previewDiv).fadeOut('fast', function() {
										$('#bcGPTwksPrvImg').attr('src', '');
									});
								});
								$(img).mousemove(function(e) {
									self.features.imagePreviews.mousePos = e;
									currentPreviewTarget = this;
									self.features.imagePreviews.reposition(e);
								});
							}
						}
					}
				});
			},
			processPosts: function() {
				self.features.imagePreviews.enableTarget(selectors.userContentImages);
			}
		},
		comments: {
			init: function() {
				if(Config.get('comments')) {
					self.addStyle(
							selectors.post + ' .bcGTweaksNumComments { margin-left:.5em; cursor:pointer; }' +
							'.bcGTweaksNumComments:hover { text-decoration:underline; }' +
							'.bcGPlusTwCollapseComments { cursor:pointer; height:20px; border:1px solid #ccc; background:#FBFBFB url(https://lh5.googleusercontent.com/-rHmDn0yOCqw/TjxKkh6qsnI/AAAAAAAAAVs/IXdBYIlby2k/bullet-arrow-up-icon.png) center no-repeat; margin-bottom:10px; }' +
							'.bcGPlusTwCollapseComments:hover { background-color:#eee; }' +
							'.bcTweaksHiddenComments + div { display: none; }'
					);
					// press "M" to mute the current post
					$('body').keyup(function(e) {
						if(!eventIsFromTyping(e)) {
							switch(e.which.toString()) {
								case '67':	// "C"
									var currentPost = $(selectors.postSelected);
									var numCommentsButton = $('.bcGTweaksNumComments', currentPost);
									if(numCommentsButton.size() > 0) {
										simulateClick(numCommentsButton[0]);
									}
									break;
							}
						}
					});
				}
			},
			processPost: function(post) {
				if(Config.get('comments')) {
					var hasBeenCollapsed = false;
					$(selectors.postCommentsWrapper, post).each(function() {
						var _comments = this;
						function getNumComments() {
							return ($(selectors.postCommentsNumBar, _comments).text().replace(/[^\d]/g, ''));
						}
						function showComments() {
							if(parseInt($(_comments).css('height').replace(/[^\d]/g, '')) < 5) {
								$(_comments).css('height', 'auto');
								$(_comments).css('visibility', 'visible');
								
								_comments.className = _comments.className.replace(/bcTweaksHiddenComments/, '');
							}
						}
						function hideComments() {
							_comments.className += ' bcTweaksHiddenComments';
							$(_comments).css('height', '0');
							$(_comments).css('overflow', 'hidden');
							$(_comments).css('visibility', 'hidden');
							// scroll to top of post
							if(hasBeenCollapsed) {
								var postTop = $(post).offset().top - 120;
								//alert(postTop);
								$(document).scrollTop(postTop);
							}
							hasBeenCollapsed = true;
						}
						numTotal = getNumComments();
						if($('.bcGTweaksNumComments', post).size() == 0) {
							if(numTotal > 0) {
								var commentsButton = document.createElement('span');
								commentsButton.className = 'bcGTweaksNumComments';
								commentsButton.innerHTML = '(' + numTotal + ')';
								var postComment = $(selectors.postCommentButton, $(this).parent().parent());
								postComment.after(commentsButton);
								postComment.click(function() {
									showComments(_comments);
								});
								function toggleComments() {
									if(parseInt($(_comments).css('height').replace(/[^\d]/g, '')) < 5) {
										showComments(_comments);
									} else {
										hideComments(_comments);
									}
								}
								$(commentsButton).click(toggleComments);
								$(_comments).append('<div class="bcGPlusTwCollapseComments" title="Collapse comments">&nbsp;</div>');
								$('.bcGPlusTwCollapseComments', _comments).click(toggleComments);
								hideComments(_comments);
							} else {
								showComments(_comments);
							}
						} else {
							var oldNum = parseInt($('.bcGTweaksNumComments', post).text().replace(/[^\d]/g, ''));
							if(numTotal != oldNum) {
								$('.bcGTweaksNumComments', post).html('(' + numTotal + ')');
								if(parseInt($(_comments).css('height').replace(/[^\d]/g, '')) < 5) {
									$(_comments).next().hide(); // hide the "add comments" box
								}
							}
						}
					});
				}
			}
		},
		mention: {
			init: function() {
				if(Config.get('easyMentions')) {
					self.addStyle(s.post + ' .bcGTweakEzMntn { cursor:pointer; opacity:0.5; font-size:8px; position:relative; top:-1px; ' +
						'margin:0 5px 0 3px; white-space: nowrap; background-color: rgb(238, 238, 238); border:1px solid rgb(221, 221, 221);' +
						'display: inline-block; padding:0 4px; color: rgb(51, 102, 204); }' +
						s.post + ' .bcGTweakEzMntn:hover { opacity:1; }' +
						// don't display in shares dropdown
						'.TQ0zYb .bcGTweakEzMntn { display:none !important; }'
					);
				}
			},
			processPost: function(post) {
				$(selectors.profileLink, post).each(function() {
					var link = this;
					if(link.rel != 'bcGTweakEzMntn' && $('img', link).size() == 0) {
						link.rel = 'bcGTweakEzMntn';
						var mention = document.createElement('span');
						mention.innerHTML = "+";
						mention.title = "Mention " + link.innerHTML + " in your comment";
						mention.className = 'bcGTweakEzMntn';
						$(mention).click(function() {
							// find post wrapper
							var addCommentLink = $(selectors.postCommentButton, post)[0];
							simulateClick(addCommentLink);
							
							function insertMentionRef(name, id) {
								var editor = $('.editable', post); 
								if(editor.size() > 0) {
									var editorMentionClass = selectors.postCommentEditorMention.replace(/^\./, '');
									
									if(navigator.userAgent.match(/chrome/i)) {
										var html = ' <span> </span><button contenteditable="false" tabindex="-1" style="white-space: nowrap; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(238, 238, 238); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(221, 221, 221); border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221); border-left-color: rgb(221, 221, 221); border-top-left-radius: 2px 2px; border-top-right-radius: 2px 2px; border-bottom-right-radius: 2px 2px; border-bottom-left-radius: 2px 2px; display: inline-block; font: normal normal normal 13px/1.4 Arial, sans-serif; margin-top: 0px; margin-right: 1px; margin-bottom: 0px; margin-left: 1px; padding-top: 0px; padding-right: 1px; padding-bottom: 0px; padding-left: 1px; vertical-align: baseline; color: rgb(51, 102, 204); background-position: initial initial; background-repeat: initial initial; " class="' + editorMentionClass + '" data-token-entity="@' + id + '" oid="' + id + '"><span style="color: rgb(136, 136, 136); ">+</span>' + name + '</button><span>&nbsp;</span>';
									} else {
										var html = ' <span> </span><input type="button" tabindex="-1" value="+' + name + '" style="white-space: nowrap; background: none repeat scroll 0% 0% rgb(238, 238, 238); border: 1px solid rgb(221, 221, 221); border-radius: 2px 2px 2px 2px; display: inline-block; font: 13px/1.4 Arial,sans-serif; margin: 0pt 1px; padding: 0pt 1px; vertical-align: baseline; color: rgb(51, 102, 204);" class="' + editorMentionClass + '" data-token-entity="@' + id + '" oid="' + id + '"><span>&nbsp;</span>';
										
									}
									
									editor.attr('tabfocus', '0');
									//editor.focus();
									
									if($('iframe', editor).size() > 0) {
										editor = $('iframe', editor).contents().find("body");
									}
									
									var existingHtml = editor.html().replace(/^(\n|\s)*<\/*br>(\n|\s)*/, '').replace(/(\n|\s)*<\/*br>(\n|\s)*$/, '');
									editor.html(existingHtml +  html);
									editor.focus();
									editor.attr('');
									setTimeout(function() {
										placeCaretAtEnd( editor[0]);
									}, 100);
								} else {
									setTimeout(function() {
										insertMentionRef(name, id);
									}, 200);
								}
							}
							
							// http://stackoverflow.com/questions/4233265/contenteditable-set-caret-at-the-end-of-the-text-cross-browser
							function placeCaretAtEnd(el) {
								el.focus();
								if (typeof window.getSelection != "undefined"
									&& typeof document.createRange != "undefined") {
									var range = document.createRange();
									range.selectNodeContents(el);
									range.collapse(false);
									var sel = window.getSelection();
									sel.removeAllRanges();
									sel.addRange(range);
								} else if (typeof document.body.createTextRange != "undefined") {
									var textRange = document.body.createTextRange();
									textRange.moveToElementText(el);
									textRange.collapse(false);
									textRange.select();
								}
							}
							insertMentionRef(link.innerHTML, $(link).attr('oid'));
						});
						$(link).after(mention);
					}
				});
			}
		},
		postPreviews: {
			init: function() {
				if(Config.get('postPreviews')) {
					self.addStyle(
						selectors.post + ' { display:none; }' +
						'.bcTweaksMiniPostCollapsed { display:block !important; padd }' +
						'.bcTweaksMiniPostExpanded { display:block !important; }' +
						'.bcTweaksMiniPostCollapsed { display:block !important; padd }' +
						'.bcTweaksMiniPostCollapsed { height:32px; overflow:hidden; padding:0; position:relative; }' +
						'.bcTweaksMiniPostCollapsed img { display:none; }' +
						'.bcTweaksMiniPostCollapsed:hover { border-color:#333 !important; }' +
						'.bcTweaksMiniPostCollapsed br { display:none; }' +
						'.bcTweaksMiniPostCollapsed span { margin:0 .5em; }' +
						'.bcTweaksMiniPostCollapsed * { line-height:32px; background:none; margin:0 !important; padding:0 !important; text-align:left; }' +
						'.bcTweaksMiniPostCollapsed > div:first-child { width:100%; }' +
						'.bcTweaksMiniPostCollapsed > div { position:absolute; left:40px; top:0; }' +
						// post time, public, etc.
						'.bcTweaksMiniPostCollapsed > div:first-child > div:first-child > h3 + span + a + div > span:first-child + span { display:none !important;  }' +
						'.bcTweaksMiniPostCollapsed ' + selectors.incomingPostedBy + ' { display:none; }' +
						'.bcTweaksMiniPostCollapsed .bcTweaksMiniPostCollapse { display:none; }' +
						'.bcTweaksMiniPostCollapsed .bcGTweakEzMntn{ display:none !important;}' + 
						'.bcTweaksMiniPostCollapsed .bcGTweaksMute { display:none; }' +
						// post avatar
						'.bcTweaksMiniPostCollapsed > div:first-child > div:first-child > h3:first-child + span + a img { display:block !important; height:32px; width:32px; position:absolute; top:0; left:-40px; }' +
						// post body
						'.bcTweaksMiniPostCollapsed > div:first-child > div:first-child + div { position:absolute; top:0; left:130px; }' + 
						'.bcTweaksMiniPostCollapsed ' + selectors.postCommentsMoreButtonWrapper + ' { position:absolute; top:0; right:45px; background:#fff; z-index:3000; }' + 
						'.bcTweaksMiniPostCollapse { position:absolute; top:0; cursor:pointer; right:0; width:15px; background:#eee; border-left:1px solid #d2d2d2; height:100%; }' +
					'');
					self.addPolling(self.features.postPreviews.processPosts);
					// press "T" to mute the current post
					$('body').keyup(function(e) {
						if(!eventIsFromTyping(e)) {
							switch(e.which.toString()) {
								case '84':	// "T"
									var currentPost = $(selectors.postSelected);
									if(currentPost.size() > 0) {
										self.features.postPreviews.togglePost(currentPost[0]);
									}
									break;
								case '74':	// "J"
									var currentPost = $(selectors.postSelected);
									if(currentPost.size() > 0) {
										self.features.postPreviews.collapsePost(currentPost[0]);
									}
									break;
							}
						}
					});
				}
			},
			processPost: function(post) {
				if(!post.className.match(/bcTweaksMiniPost/)) {
					post.className += ' bcTweaksMiniPostCollapsed';
					$(post).click(function() {
						if(this.className.match(/bcTweaksMiniPostCollapsed/)) {
							self.features.postPreviews.expandPost(post);
						}
					});
					$(post).append('<div class="bcTweaksMiniPostCollapse" title="Collapse this post">&nbsp;</div>');
					$('.bcTweaksMiniPostCollapse', post).click(function(e) {
						e.stopPropagation();
						self.features.postPreviews.collapsePost(post);
					});
				}
			},
			collapsePost:function(post) {
				post.className = post.className.replace(/bcTweaksMiniPostExpanded/, 'bcTweaksMiniPostCollapsed');
			},
			expandPost:function(post) {
				post.className = post.className.replace(/bcTweaksMiniPostCollapsed/, 'bcTweaksMiniPostExpanded');
			},
			togglePost:function(post) {
				if(post.className.match(/bcTweaksMiniPostCollapsed/)) {
					self.features.postPreviews.expandPost(post);
				} else {
					self.features.postPreviews.collapsePost(post);
				}
			}
		},
		muteButton: {
			init: function() {
				if(Config.get('muteButton')) {
					self.addStyle('.bcGTweaksMute { ' +
						'background:url(https://lh3.googleusercontent.com/-lZDyA7RaVHQ/Thw6SRRp-lI/AAAAAAAAAI0/qRIid0xFWJs/sound_mute_desaturated.png) center no-repeat;' +
						'padding:1px 15px; opacity:.5;' +
						'position:absolute; right:50px; top:11px; border:1px solid #aaa; border-radius:2px; }' +
						'.bcGTweaksMute:hover { opacity:1;' +
							'background-image:url(https://lh4.googleusercontent.com/-5NYOXadhJOs/Thw5O1SYBoI/AAAAAAAAAIs/zOvmkFAcrks/ound_mute.png); background-color:#eee;' +
						'}' +
						selectors.incomingPostedByMutePostButton + ' { display:none; }' + 
						selectors.incomingPostedBy + ' + .bcGTweaksMute { top:26px; }' +
						selectors.incomingPostedByAddToCircles + ' { margin-right:55px; }'
					);
					// press "M" to mute the current post
					$('body').keyup(function(e) {
						if(!eventIsFromTyping(e)) {
							switch(e.which.toString()) {
								case '77':	// "M"
									var postToMute = $(selectors.postSelected);
									var muteButton = $(selectors.postMuteButton, postToMute).css('background', 'red');
									if(muteButton.size() > 0) {
										simulateClick(muteButton[0]);
										simulateClick(postToMute.next()[0]);
									}
									break;
							}
						}
					});
				}
			},
			processPost: function(post) {
				try {
					$(selectors.postButton, post).each(function() {
						try {
							if($('.bcGTweaksMute', post).size() == 0) {
								var _this = this;
								setTimeout(function() {
									var m = document.createElement('div');
									m.className = 'bcGTweaksMute';
									m.innerHTML = '&nbsp;';
									m.style.cursor = 'pointer';
									var mb = $(selectors.postMuteButton, post)[0];
									if(mb) {
										$(_this).before(m);
										m.title = $(mb).text();
										$(m).click(function() {
											var mb = $(selectors.postMuteButton, post)[0];
											if(mb) simulateClick(mb);
										});
									}
								}, 500);
							}
						} catch(e) { console.log(e); }
					});
				} catch(e) {
					console.log(e);
				}
			}
		},
		muteNotices: {
			init: function() {
				switch(Config.get('muteNotices')) {
					case 'fade':
						self.addPolling(self.features.muteNotices.fadeNewNotices);
						break;
					case 'hide':
						self.addStyle(selectors.postMutedNotice + ' { display:none !important; }');
						break;
				}
			},
			fadeNewNotices: function() {
				$(selectors.postMutedNotice).each(function() {
					var _this = this;
					setTimeout(function() {
						$(_this).fadeOut(1000, function() {
							$(this).remove();
						});
					}, 3000);
				});
			}
		},
		readability: {
			init: function() {
				if(Config.get('readability') && $('#content').size() == 1) {
					var bgColor = '#f1f1f1';
					self.addStyle(
							'body { background:' + bgColor + ' !important; }' +
							'body { background-color:' + bgColor + ' !important; }' +
							selectors.toolBar + ' { border-bottom:none; }' +
							selectors.content + ' { border-top:none; }' +
							selectors.content + ' > div:first-child { background:' + bgColor + '; }' +
							selectors.profileContent + ', #contentPane { background:' + bgColor + '; border:none; }' +
							selectors.post + ' { margin-top:4px; border:1px solid #d2d2d2; border-top:1px solid #d2d2d2 !important; padding-bottom:0; }' +
							selectors.postSelected + '{ border-color:#cc3333 !important; }'
					);
				}
			}
		},
		thumbnailsOnly: {
			init: function() {
				if(Config.get('thumbsOnly')) self.addPolling(self.features.thumbnailsOnly.processThumbs);
			},
			processThumbs: function() {
				var maxHeight = 46;
				var maxWidth = 62;
				$(selectors.post + ' ' + selectors.postImages).each(function() {
					if($(this).height() > maxHeight && $(this).width() > maxHeight) {
						var parentWrapper = $(this).parent();
						function shrinkParentWrapper() {
							parentWrapper.height(maxHeight);		// reduce height of container
							parentWrapper.width(maxWidth);		// reduce width of container
						}
						if(this.src.match(/(jpg|jpeg|png|gif)$/i)) {
							var file = this.src.match(/[^\/]+$/)[0];	
							var newSrc = this.src.replace(/[^\/]+\/[^\/]+$/, '') + 'w' + maxWidth + '-h' + maxHeight + '-p/' + file;
							this.src = newSrc;
							shrinkParentWrapper();
						} else if($(playVideoIconSelector, parentWrapper).size() == 0) {
							$(this).css('max-height', maxHeight);
							$(this).css('max-width', maxWidth);
							shrinkParentWrapper();
						}
					}
				});
			}
		}
	};
	this.construct = function() {
		Config.scriptName = 'Google+ Tweaks';
		Config.footer = '<span style="position:relative; top:5px">' + self.donateButtonsHtml + '</span>';
		Config.options = this.options;
		populateSelectors();
		self.initFeatures();
		self.applyStyle();
		self.startPolling();
		self.insertOptionsLink();
		$(selectors.streamShareWrapper).click(function() {
			typing = true;
		});
		
		if(!document.location.toString().match(/frame/)) {

			var css = '';
			
			
			
//			if(Config.get('postButtons')) stylePostButtons();
			
			
			
			
			if(Config.get('hideCopyright')) css += '#content + div { display:none !important; }';
			if(Config.get('hideIncomingNotice')) css += selectors.streamIncomingNotice + ' { display:none; }';
			if(Config.get('hideWelcomeLink')) css += selectors.streamWelcomeLink + ', ' + selectors.streamWelcomeLink + ' + div { display:none; }';
			if(Config.get('hideChatRoster')) css += selectors.chatRoster + ' { display:none !important; }';
			if(Config.get('hideSendFeedback')) css += selectors.sendFeedback + ' { display:none !important; }';
			if(Config.get('hidePlusMention')) css += '.proflinkPrefix { display:none !important; }';
			
			// right column
			if(Config.get('hideRightCol')) css += selectors.streamRightCol + ' { display:none; }';
			if(Config.get('hideSuggestions')) css += selectors.streamRightColSuggestions + ' { display:none; }';
			if(Config.get('hideSendInvites')) css += selectors.streamRightColSendInvites + ' { display:none; }';
			
			
			// implement CSS
			if(css != '') {
				if(typeof(GM_addStyle) == 'function') {
					GM_addStyle(css);
				} else {
					var sheet = document.createElement('style') ;
					sheet.innerHTML = css;
					document.body.appendChild(sheet);
				}
			}
		}
		
		return true;
	};
	this.addPolling = function(fnct) {
		self.pollFuncions.push(fnct);
	};
	this.addStyle = function(code) {
 		self.css += code;
 	};
 	this.applyStyle = function() {
 		// implement CSS
		if(self.css != '') {
			if(typeof(GM_addStyle) == 'function') {
				GM_addStyle(self.css);
			} else {
				var sheet = document.createElement('style') ;
				sheet.innerHTML = self.css;
				document.body.appendChild(sheet);
			}
		}
 	};
	this.initFeatures = function() {
		for(var ftr in self.features) {
			if(typeof(self.features[ftr].init) == 'function') self.features[ftr].init();
		}
	};
	this.insertOptionsLink = function() {
 		$('a[href*="preferences"].gbgt + div ol.gbmcc li:eq(1)').after(
 				'<li class="gbkc gbmtc"><a class="gbmt" href="javascript:void(0)" id="bcGTweaksOptLnk">Google+ tweaks</a></li>'
 		);
 		$('#bcGTweaksOptLnk').click(function() {
			
 			Config.open();
 			$('.ui-dialog').css('top', '100px');
 			$(document).scrollTop(0);
 		});
 	}; 
 	this.detectElementClass = function(selectorKey, path) {
 		var s = selectors;
 		// detect missing selector classes
 		if(typeof(s[selectorKey]) == 'undefined' || s[selectorKey] == null) {
 			var elems = $(path);
 			if(elems.size() > 0) {
 				s[selectorKey] = '.' + elems.attr('class').replace(/\s+/g, '.');
 			}
 		}
 	};
 	this.startPolling = function() {
 		
 		
 		
 		// auto detect main classes
 		if(Config.get('selectorAutoUpdate')) updateSelectors();
 		
 		// auto detect any missing class names using relative DOM paths
 		for(var x in dynamicSelectors) {
 			self.detectElementClass(x, dynamicSelectors[x]);
 		}
 		
 		
 		
 		// poll posts
 		$(selectors.post).each(function() {
 			var post = this; 
 			
 			// detect mute button class
 			if(!self.muteButtonClassFound && $('div[role="menuitem"]', post).size() == 3) {
 				var muteButtonSelector = '.' + $('div[role="menuitem"]', post).eq(1).attr('class').replace(/\s+/g, '.');
 				self.muteButtonClassFound = true;
 				if(Config.get('selectorMuteButton') != muteButtonSelector) {
 					Config.set('selectorMuteButton', muteButtonSelector);
 					document.location = document.location;
 				}
 			}
 			
 			// launch feature processPost functions
 			for(var k in self.features) {
 				var feature = self.features[k];
 				if(typeof(feature.processPost) == 'function') {
 					feature.processPost(post);
 				}
 			}
 		});
 		
 		// fire feature polls
 		for(var i = 0; i < self.pollFuncions.length; i++) {
 			if(typeof(self.pollFuncions[i]) == 'function')
 				self.pollFuncions[i]();
 		}
 		setTimeout(self.startPolling, self.pollInterval);
 	};
	return this.construct();
}

// much of the code for this section originated at http://userscripts.org/scripts/show/24430
// and is used here in a modified form with Peter Wooley's consent
function FavIcon(gPlusIcon) {
	var self = this;
	this.self = this;
	this.src = gPlusIcon;
	this.foreground = "#2c3323";
	this.background = "#fef4ac";
	this.borderColor = "#fef4ac";
	this.construct = function() {				
		this.head = document.getElementsByTagName('head')[0];
		this.pixelMaps = {
			numbers: [
				[
					[0,1,1,0],
					[1,0,0,1],
					[1,0,0,1],
					[1,0,0,1],
					[0,1,1,0]
				],
				[
					[0,1,0],
					[1,1,0],
					[0,1,0],
					[0,1,0],
					[1,1,1]
				],
				[
					[1,1,1,0],
					[0,0,0,1],
					[0,1,1,0],
					[1,0,0,0],
					[1,1,1,1]
				],
				[
					[1,1,1,0],
					[0,0,0,1],
					[0,1,1,0],
					[0,0,0,1],
					[1,1,1,0]
				],
				[
					[0,0,1,0],
					[0,1,1,0],
					[1,0,1,0],
					[1,1,1,1],
					[0,0,1,0]
				],
				[
					[1,1,1,1],
					[1,0,0,0],
					[1,1,1,0],
					[0,0,0,1],
					[1,1,1,0]
				],
				[
					[0,1,1,0],
					[1,0,0,0],
					[1,1,1,0],
					[1,0,0,1],
					[0,1,1,0]
				],
				[
					[1,1,1,1],
					[0,0,0,1],
					[0,0,1,0],
					[0,1,0,0],
					[0,1,0,0]
				],
				[
					[0,1,1,0],
					[1,0,0,1],
					[0,1,1,0],
					[1,0,0,1],
					[0,1,1,0]
				],
				[
					[0,1,1,0],
					[1,0,0,1],
					[0,1,1,1],
					[0,0,0,1],
					[0,1,1,0]
				],
			]
		};
		return true;
	};
	this.getIconCanvas = function(callback) {
		if(!self.iconCanvas) {
			self.iconCanvas = document.createElement('canvas');
			self.iconCanvas.height = self.iconCanvas.width = 16;
			
			var image = new Image();
			$(image).load(function() {
				// fill the canvas with the background favicon's data
				var ctx = self.iconCanvas.getContext('2d');
				ctx.drawImage(image, 0, 2, 14, 14);
				callback(self.iconCanvas);
			});
			image.src = self.src;
		} else {
			callback(self.iconCanvas);
		}
	};
	this.getBadgedIcon = function(unread, callback) {
		if(!self.textedCanvas) {
			self.textedCanvas = [];
		}
		if(!self.textedCanvas[unread]) {
			
			self.getIconCanvas(function(iconCanvas) {
				
				var textedCanvas = document.createElement('canvas');
				textedCanvas.height = textedCanvas.width = iconCanvas.width;
				var ctx = textedCanvas.getContext('2d');
				ctx.drawImage(iconCanvas, 0, 0);
				
				ctx.fillStyle = self.background;
				ctx.strokeStyle = self.border ? self.border : '#000000';
				ctx.strokeWidth = 1;
				
				var count = unread.length;
				var bgHeight = self.pixelMaps.numbers[0].length;
				var bgWidth = 0;
				var padding = count > 2 ? 0 : 1;
				
				for(var index = 0; index < count; index++) {
					bgWidth += self.pixelMaps.numbers[unread[index]][0].length;
					if(index < count-1) {
						bgWidth += padding;
					}
				}
				bgWidth = bgWidth > textedCanvas.width-4 ? textedCanvas.width-4 : bgWidth;
				
				ctx.fillRect(textedCanvas.width-bgWidth-4,1,bgWidth+4,bgHeight+4);
				
				var digit;
				var digitsWidth = bgWidth;
				for(var index = 0; index < count; index++) {
					digit = unread[index];
					if (self.pixelMaps.numbers[digit]) {
						var map = self.pixelMaps.numbers[digit];
						var height = map.length;
						var width = map[0].length;
						
						ctx.fillStyle = self.foreground;
						
						for (var y = 0; y < height; y++) {
							for (var x = 0; x < width; x++) {
								if(map[y][x]) {
									ctx.fillRect(14- digitsWidth + x, y+3, 1, 1);
								}
							}
						}
						
						digitsWidth -= width + padding;
					}
				}	
				if(self.border) {
					ctx.strokeRect(textedCanvas.width-bgWidth-3.5,1.5,bgWidth+3,bgHeight+3);
				}
				self.textedCanvas[unread] = textedCanvas;
				callback(self.textedCanvas[unread].toDataURL('image/png'));
			});
		} else {
			callback(self.textedCanvas[unread].toDataURL('image/png'));
		}
	};
	this.setIcon = function(icon) {
		var links = self.head.getElementsByTagName("link");
		for (var i = 0; i < links.length; i++)
			if ((links[i].rel == "shortcut icon" || links[i].rel=="icon") &&
			   links[i].href != icon)
				self.head.removeChild(links[i]);
			else if(links[i].href == icon)
				return;

		var newIcon = document.createElement("link");
		newIcon.type = "image/png";
		newIcon.rel = "shortcut icon";
		newIcon.href = icon;
		
		self.head.appendChild(newIcon);
		
		var shim = document.createElement('iframe');
		shim.width = shim.height = 0;
		document.body.appendChild(shim);
		shim.src = "icon";
		document.body.removeChild(shim);
	};
	this.set = function(num) {
		if(typeof(num) == 'undefined' || (!num && num.toString() != '0')) num = '';
		if(num != '') {
			self.getBadgedIcon(num.toString(), function(src) {
				self.setIcon(src);
			});
		} else {
			self.setIcon(this.src);
		}
	};
	this.toString = function() { return '[object FavIconAlerts]'; };
	
	return this.construct();
}

function simulateClick(element) {
    var clickEvent;
    clickEvent = document.createEvent("MouseEvents")
    clickEvent.initEvent("mousedown", true, true)
    element.dispatchEvent(clickEvent);
    
    clickEvent = document.createEvent("MouseEvents")
    clickEvent.initEvent("click", true, true)
    element.dispatchEvent(clickEvent);
    
    clickEvent = document.createEvent("MouseEvents")
    clickEvent.initEvent("mouseup", true, true)
    element.dispatchEvent(clickEvent);
}


new GTweaks();