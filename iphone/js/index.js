$(document).ready(function(){
	
	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox=$('aside.loadBox');
	var articleBox=$('article');
	var windowScale=window.innerWidth/750;
	
	//----------------------------------------页面初始化----------------------------------------
	icom.init(init);//初始化
	icom.screenScrollUnable();//如果是一屏高度项目且在ios下，阻止屏幕默认滑动行为

	/**
	 * 微博授权拿用户信息
	 */
	// icom.weiboSign(function(weiboUserInfo){
	// 	console.log(weiboUserInfo)
	// 	$('article').html('<img src="'+weiboUserInfo.avatar+'"><div>'+weiboUserInfo.nickname+'<div>')
	// });

	/**
	 * android 页面键盘遮挡输入框BUG
	 * @param {scrollbox:div,type:'transform',space:50}
	 * scrollbox：滚动容器
	 * type：scroll|transform 滚动类型
	 * space：键盘弹出时键盘顶部与输入框之间的间距
	 */
	// icom.androidKeyboard({ scrollbox: $('#aaa'), type: 'scroll', space: 100 });
	
	/**
	 * 短信验证码倒计时方法， 在btn click方法中调用
	 */
	// icom.countdown($('#btn'), 60, '#s秒后重新获取');
	
	function init(){
		requestAnimationFrame(function(){
//			loadBox.show();
			icom.fadeIn(articleBox);
			load_handler();
		});
	}//edn func
	

	//----------------------------------------加载页面图片----------------------------------------
	function load_handler(){
		var loader = new PxLoader();
		loader.addImage('images/common/turn_phone.png');
		
		//实际加载进度
//		loader.addProgressListener(function(e) {
//			var per=Math.round(e.completedCount/e.totalCount*50);
//			loadPer.html(per+'%');
//		});
		
		loader.addCompletionListener(function() {
			init_handler();
//			load_timer(50);//模拟加载进度
			loader=null;
		});
		loader.start();	
	}//end func
	
	//模拟加载进度
	function load_timer(per){
		per=per||0;
		per+=imath.randomRange(1,3);
		per=per>100?100:per;
		loadPer.html(per+'%');
		if(per==100) setTimeout(init_handler,200);
		else setTimeout(load_timer,33,per);
	}//edn func
	
	//----------------------------------------页面逻辑代码----------------------------------------
	function init_handler(){
		console.log('init handler');
//		icom.fadeOut(loadBox,500);
		monitor_handler();		
	}//end func
	
	//----------------------------------------页面监测代码----------------------------------------
	function monitor_handler(){
//		imonitor.add({obj:$('a.btnTest'),action:'touchstart',category:'default',label:'测试按钮'});
	}//end func
});//end ready
