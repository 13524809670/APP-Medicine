$(document).ready(function(){
	// 弹出层导航
	$(".header .nav").click(function(){
		$(".box").fadeIn(500);
	});

	$("#fixed").click(function(){
		$(".box").fadeOut(500);
	});



	// 首页导航tab切换
	$('.box ul li').mouseover(function(){
		$('.box ul li').eq($(this).index()).addClass('on').siblings().removeClass('on');
	});
})