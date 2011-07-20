function loadScript(callback) {
	$.ajax({
		url:'http://userscripts.org/scripts/source/106166.user.js',
		dataType:'text',
		success:function(script) {
			var ver = script.match(/@version\s+([^\s]+)/)[1].toString();
			localStorage.setItem('version', ver);
			localStorage.setItem('script', script);
			localStorage.setItem('installedVersion', ver);
			$.ajax({
				url:'http://userscripts.org/scripts/source/106368.user.js',
				dataType:'text',
				success:function(jQueryUI) { 
					localStorage.setItem('jQueryUI', jQueryUI); 
					$.ajax({
						url:'http://userscripts.org/scripts/source/106683.user.js',
						dataType:'text',
						success:function(scriptUpdater) {  
							localStorage.setItem('scriptUpdater', scriptUpdater); 
							$.ajax({
								url:'http://userscripts.org/scripts/source/106223.user.js',
								dataType:'text',
								success:function(scriptOptions) {  
									localStorage.setItem('scriptOptions', scriptOptions); 
									if(typeof(callback) == 'function') callback();
								},
								error:function(msg) {
									console.log('Error including required Script Option Tools. Please visit Google+ Tweaks extension options page and click re-install scripts.');
								}
							});
						},
						error:function() {
							console.log('Error including required Script Updater. Please visit Google+ Tweaks extension options page and click re-install scripts.');
						}
					});
				},
				error:function() {
					console.log('Error including required jQuery UI script. Please visit Google+ Tweaks extension options page and click re-install scripts.');
				}
			});
		},
		error:function(msg) {
			console.log('Error loading Google+ Tweaks Greasemonkey script. Please visit Google+ Tweaks extension options page and click re-install scripts.');
		}
	});
}
