$(function () {

	// 加载更多
	var more = $('#more');
		container = $('.container')

	more.click(function () {
		for(var i=0; i < 3; i++){
			var $wrap = $('<div class="wrap"></wrap>')
				$img = $(document.createElement('img'))
				$describe = $("<div class='describe'><h3>支教志愿者招募信息</h3><p>援发布日期：17/1/1</p><p>发布人：xxxx</p><p>招募人数：1/10</p><p>截至日期：17/1/1</p><p>信息简介：向xxx地区的xxx人提供xxx助</p><button>我要加入</button></div>")

			$img.attr('src', '../images/recruit/'+ (i+1) + '.jpg')
			$wrap.append($img)
			$wrap.append($describe)
			container.append($wrap)
		}
	})
})