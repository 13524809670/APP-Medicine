$(document).ready(function(){
	// 弹出层导航
	$(".header .nav").click(function(){
		$(".box").fadeIn(500);
	});

	$("#fixed").click(function(){
		$(".box").fadeOut(500);
	});
})