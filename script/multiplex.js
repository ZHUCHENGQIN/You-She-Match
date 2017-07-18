//定时器
function run(startdate){
    // 如果enddate为后台传入的Date类型，这里直接转化为毫秒数
    // startdate=new Date(startdate.getTime());
    startdate=startdate.getTime();
    //以500毫秒的速度执行（可以避免方法执行速度慢会影响展示效果的情况）0
    var time = 1000; 
    setInterval("dateDif('"+startdate+"')",time);
}
//计算时间相差
function dateDif(startdate){
    var date = new Date().getTime() - startdate; 
    var days    = date / 1000 / 60 / 60 / 24;
    var daysRound   = Math.floor(days);
    var hours    = date/ 1000 / 60 / 60 - (24 * daysRound);
    var hoursRound   = Math.floor(hours);
    var minutes   = date / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
    var minutesRound  = Math.floor(minutes);
    var seconds   = date/ 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    var secondsRound  = Math.floor(seconds);
    // var time = "倒计时"+(daysRound+"天"+hoursRound +"时"+minutesRound+"分"+secondsRound+"秒");
   
    // 日
    var d = Math.floor((daysRound/365) * 360)
    if(daysRound <= (365/2)){  // 一半的角度
		// $(".game_time1 .pie1").css("-o-transform","rotate(" + d + "deg)");
		// $(".game_time1 .pie1").css("-moz-transform","rotate(" + d + "deg)");
		$(".game_time1 .pie2").css("backgroundColor", "#666");
		$(".game_time1 .pie1").css("-webkit-transform","rotate(" + d + "deg)");
	}else{
		$(".game_time1 .pie2").css("backgroundColor", "#FB5353");
		$(".game_time1 .pie2").css("-webkit-transform","rotate(" + d + "deg)");
	}
	$(".game_time1 .num").html(daysRound);

	// 时
    var h = Math.floor((hoursRound/24) * 360)
    if(hoursRound <= (12)){  // 一半的角度
		$(".game_time2 .pie2").css("backgroundColor", "#666");
		$(".game_time2 .pie1").css("-webkit-transform","rotate(" + h + "deg)");
	}else{
		$(".game_time2 .pie2").css("backgroundColor", "#DFF973");
		$(".game_time2 .pie2").css("-webkit-transform","rotate(" + h + "deg)");
	}
	$(".game_time2 .num").html(hoursRound);

	// 分
    var m = Math.floor((minutesRound/60) * 360)
    if(minutesRound <= (30)){  // 一半的角度
		$(".game_time3 .pie2").css("backgroundColor", "#666");
		$(".game_time3 .pie1").css("-webkit-transform","rotate(" + m + "deg)");
	}else{
		$(".game_time3 .pie2").css("backgroundColor", "#56FBF1");
		$(".game_time3 .pie2").css("-webkit-transform","rotate(" + m + "deg)");
	}
	$(".game_time3 .num").html(minutesRound);

	// 秒
    var s = Math.floor((secondsRound/60) * 360)
    if(secondsRound <= (30)){  // 一半的角度
		$(".game_time4 .pie2").css("backgroundColor", "#666");
		$(".game_time4 .pie1").css("-webkit-transform","rotate(" + s + "deg)");
	}else{
		$(".game_time4 .pie2").css("backgroundColor", "#F86CFF");
		$(".game_time4 .pie2").css("-webkit-transform","rotate(" + s + "deg)");
	}
	$(".game_time4 .num").html(secondsRound);
}

// 单选框选中与取消逻辑
function radio() {
	var flag = false			//默认未选中
	var $radioBox = $('#agree')

	$radioBox.click(function () {
		if (flag == false) {
			flag = true
			$radioBox[0].checked=true
		} else {
			flag = false
			$radioBox[0].checked=false
		}
	})
}

$(function () {

	// 招募页面单选框逻辑
	radio()

	// 打开底部计时器
	startdate = new Date(2017,1,1)
	run(startdate);

/* ============================ 移动端导航栏动效 =================================*/
	$screen_w = $(document.body).width()
	if ($screen_w <= 767) {
		var $searchIcon = $('.search-box img')		//搜索按钮
			$searchInput = $('.search-box input')	//搜索框
			$showNav = $('.click-to-show')			//点击显示nav的图标
			$nav = $('nav ul')						//导航栏
			$searchFlag = false 					//搜索框未显示
			$navhFlag = false 						//nav未显示

		// 点击显示或隐藏搜索框
		$searchIcon.click(function () {
			if ($searchFlag === false) {
				$searchFlag = true
				$searchInput.css('display', 'block')
				$searchInput.animate({'height': '30px'}, 300)
			} else {
				$searchFlag = false
				$searchInput.animate({'height': '0'}, 300)
				setTimeout(function () {
					$searchInput.css('display', 'none')
				}, 300)
			}
		})

		// 点击显示或隐藏导航组件
		$showNav.click(function () {
			if ($navhFlag === false) {
				$navhFlag = true
				$nav.css('display', 'block')
				$nav.animate({'height': '180px'}, 300)
			} else {
				$navhFlag = false
				$nav.animate({'height': '0'}, 300)
				setTimeout(function () {
					$nav.css('display', 'none')
				}, 300)
			}
		})
	}
	
})
	