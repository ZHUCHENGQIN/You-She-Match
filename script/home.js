$(function () {
	var $carousel = $('.carousel')		//轮播容器
		$imgList = $('.img-list')		//图片容器
		$circles = $('.circles span')	//指示当前图片索引的小圈圈们
		$prev = $('#prev')				//前一页
		$next = $('#next')				//后一页
		index = 1			//当前显示图片的索引
		len = 3				//图片总数
		interval = 3000		//轮播间隔
		timer = null		//定时器
		$screen_w = $(document.body).width()	//屏幕宽度
		$screen_h = $(document.body).height()	//屏幕高度
		$alter = $('.package span')		//往期活动小圆按钮
		flag = false					//小圆按钮是否被点击过
		$content = $('.package .content')//小圆按钮控制的文字描述容器
		$details = $('.package .content p')//小圆按钮控制的文字描述

	// $carousel.css('height', $screen_h)
	// $imgList.css('height', $screen_h)
	// $('.img-list img').css('height', $screen_h)

	/* ============================ 焦点图轮播 =================================*/
	$('.img-list img').css('width', $screen_w)
	// 动画，水平滑动offset宽度
	function animate(offset) {
		var left = parseFloat($imgList.css('left')) + offset
		$imgList.animate({'left':left}, 300, function () {
			// 切换到第一页
			if (left > 200) {
				$imgList.css('left', -$screen_w*len)
			}
			// 从第一页切换到第二页
			if (left < (-$screen_w*len )) {
				$imgList.css('left', -$screen_w)
			}
		})
	}

	// 当前显示图片索引对应小圈圈高亮
	function showActive() {
		$circles.eq(index - 1).addClass('on').siblings().removeClass('on')
	}

	// 轮播
	function play() {
		timer = setTimeout(function () {
			$next.trigger('click')
			play()
		}, interval)
	}

	// 停止轮播
	function stop() {
		clearTimeout(timer);
	}

	// 向右翻页
	$next.bind('click', function () {
		// 若正在动画中，忽略此次点击
		if ($imgList.is(':animated')) {
			return
		}
		// 从最后一页跳到第一页，先把left属性调节到衔接图片再动画会比较自然
		if (index == len) {
			index = 1
			$imgList.animate({'left': 0}, 300)
		} else {
			index += 1
			animate( -$screen_w )
		}

		// 向右滑动一张图片，同时更新高亮的小圈圈
		showActive()
	})

	// 向左翻页
	$prev.bind('click', function () {
		if ($imgList.is(':animated')) {
			return
		}
		// 从第一页跳到最后一页，先把left属性调节到衔接图片再动画会比较自然
		if (index == 1) {
			index = len
			$imgList.css('left', -$screen_w*(len))
			$imgList.animate({'left': -$screen_w*(len-1)}, 300)
		} else {
			index -= 1
			animate( $screen_w )
		}

		// 向左滑动一张图片，同时更新高亮的小圈圈
		showActive()
	})

	// 每个小圈圈点击跳到对应图片
	$circles.each(function () {
		$(this).bind('click', function () {
			// 若正在动画中或当前活跃，忽略此次点击
			if ($imgList.is(':animated') || $(this).attr('class') == 'on') {
				return
			}
			var myIndex = parseInt( $(this).attr('data-idx'))
				offset = -$screen_w * (myIndex - index)

			animate(offset)
			index = myIndex
			showActive()
		})
	})

	$carousel.hover(stop, play)
	play()

/* ============================ 往期精彩点击显示详情 =================================*/
	$alter.each(function (i) {
		$(this).click(function (e) {
			var e = e || window.event
				target = e.target || e.srcElement

			if (flag) {
				flag = false
				$(target).attr('src','../images/home/item.png')
				$details.eq(i).css('display','none')
				$content.eq(i).animate({
					'left': '300px',
					'width': '80px'
				}, 300)
			} else {
				flag = true;
				$(target).attr('src','../images/home/about.png')
				$details.eq(i).css('display','block')
				$content.eq(i).animate({
					'left': '0px',
					'width': '380px'
				}, 300)
			}
		})
	})

})