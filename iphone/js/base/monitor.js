//2017.12.19





var imonitor = importMonitor();
imonitor.add({action:'loading',category:'default',label:'loading'});
function importMonitor() {
	var monitor = {};

	monitor.add = function(options) {
		if(options) {
			var defaults = {
				action: 'touchend',
				category: 'default',
				label: ''
			};
			var opts = $.extend(defaults, options);
			if(opts.obj && opts.obj.length > 0) {
				opts.obj.each(function(i,n) {
					$(n).on(opts.action, {action:opts.action,category:opts.category,label:opts.label}, event_bind);
				});
			} //end if
			else {
				opts.action = 'script'
				event_bind(null, opts);
			} //end else
		} //end if
	} //end func

	function event_bind(e, data) {
		if(e) event_handler(e.data);
		else event_handler(data);
	} //end func

	function event_handler(data) {
		if(window._hmt) window._hmt.push(['_trackEvent', data.category, data.action, data.label]);
		if(window.ga) window.ga('send', 'event', data.category, data.action, data.label);
		if(window.gtag) window.gtag('event', data.action, {
			'event_category': data.category,
			'event_label': data.label
		});
		if(window.console) window.console.log('事件：' + ' | ' + '类别：' + data.category + ' | ' + '标签：' + data.label);
	} //end func

	


	return monitor;
} //end import