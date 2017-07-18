$(function () {
	var $imgs = $('.wrap img')
		// len = $imgs.length()
	$imgs.each(function () {
		$this = $(this)
		var $new_p = $('<p class="alt-text"></p>').text($this.attr('alt'))
		$this.after($new_p)
	})
	// for(var i = 0; i < len; i++){
	// 	var $new_p = $('<p></p>').text($imgs[i].attr('alt'))
	// 	$imgs[i].after($new_p)
	// }
})