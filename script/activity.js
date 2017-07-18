$(function () {
	var $body = $(document.body)
		$wrap = $('.wrap')
		screen_w = $(window).width()
		screen_h = $(window).height()
		currentTop = 0			//文档当前显示部分距离文档顶部的高度
		scrolledTop = 0			//滚动后文档显示部分距离文档顶部的高度


	// 判断设备并定义相应头尾高度，移动/PC
	if (screen_w < 768) {
		var navHeight = 65
			footerHeight = 280
			// wrap_h = screen_h	//移动端导航条不固定，每次滑动整屏，不用减去nav高度
	} else {
		var navHeight = 100
			footerHeight = 430
			// wrap_h = screen_h - navHeight
	}

	// 每类活动区域的高度都为屏幕高减去导航条高度
	var	wrap_h = screen_h - navHeight
	$wrap.css('height', screen_h - navHeight)

	// 向上滑动一屏（减去nav高度）
	function scrollUP() {
		scrolledTop = $(window).scrollTop()

		// 滑到底部后向上只滚动底部的高度
		if (scrolledTop > navHeight + 2*wrap_h) {
			$body.animate({scrollTop: scrolledTop - footerHeight}, 300)
		} else {
			$body.animate({scrollTop: scrolledTop - wrap_h}, 300)
		}
	} 
	// 向下滑动一屏（减去nav高度）
	function scrollDown() {
		scrolledTop = $(window).scrollTop()
	 	$body.animate({scrollTop: scrolledTop + wrap_h}, 300)
	}

	// 鼠标滚动事件
	$(document).on('mousewheel DOMMouseScroll', function (event) {
		var delta = (event.originalEvent.wheelDelta && event.originalEvent.wheelDelta > 0 ? 1 : -1)		//Chrome, IE
					|| (event.originalEvent.detail && event.originalEvent.detail > 0 ? -1 : 1)			//FireFox
		// 向下滚动
		if (delta < 0) {
			scrollDown()
		}
		// 向上滚动
		else {
			scrollUP()
		}
	})

	// 键盘上下键事件keypress对方向键没反应
	$(document).keydown(function (event) {
		var key = event.keyCode
		// 向下滚动
		if (key === 40) {
			scrollDown()
		} 
		// 向上滚动
		else if(key === 38) {
			scrollUP()
		}
	})
})