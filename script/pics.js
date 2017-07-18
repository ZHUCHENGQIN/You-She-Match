$(function () {

	// 瀑布流加载图片
	var more = $('#more');
		container = $('.container')
		flag = false  // true表示图片放大展示

	// 加载更多
	more.click(function () {
		var container = $('.container')
		for(var i=0; i < 9; i++){
			var $wrap = $('<div class="img-wrap"></div>')
				$img = $(document.createElement('img'))
				$describe = $("<div class='describe'><h3>支  教</h3><p>教育是人类永远的话题</p><p>作为一名大学生，支教无疑是一个非常棒的选择</p></div>")

			$img.attr('src', '../images/pics/'+ (i+1) + '.jpg')
			$wrap.append($img)
			$wrap.append($describe)
			container.append($wrap)
		}
	})

	// 事件委托——点击图片放大展示
	$(document.body).click(function (e) {
		var e = e || e.scrElement
			target = e.target || window.target
			url = target.src

		// 1. 图片已经放大，点击任何位置收起遮罩
		if (flag == true) {
			$('.mask').remove()
			$(document.body).css('overflow-y','auto')
			flag = false
		} 
		// 2. 初始状态，点击图片放大展示
		else if (url && url.indexOf('images/pics') !== -1) {
			var	$mask = $("<div class='mask' style='cursor: zoom-out'></div>")
				$img = $("<img src=" + url + ">")

			// 添加图片
			$(document.body).append($mask)
			$mask.append($img)

			// 禁用滚动条
			$(document.body).css('overflow-y','hidden')
			flag = true
		}
			
	})

})