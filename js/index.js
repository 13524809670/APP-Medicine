window.onload= function(){

	// 轮播图
	var swiper = new Swiper('.banner .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });


    // 产品滑动(2张2组)
    var swiper = new Swiper('.con2 .swiper-container', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 5
    });


    // 新闻无限单张循环
    var swiper = new Swiper('.news .swiper-container', {
        paginationClickable: true,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    


    // 获取当前时间
    var day_a = document.querySelectorAll('#time #day');
	var year_a = document.querySelectorAll('#time #year');
	var a = new Date();
	var year = a.getFullYear();
	var month = a.getMonth() + 1;
	var dt = a.getDate();
	var today = year + "-" + month;
	for(var i = 0;i < year_a.length;i++){
		year_a[i].innerHTML = today;
	}
	for(var j = 0;j < day_a.length;j++){
		day_a[j].innerHTML = dt;
	}
}




// $(document).ready(function(){

	// // 轮播图
	// $(".banner_img li").eq(0).show();//显示第一张

	// var num = 0; //图片及底部按钮的 序列号
	// var timer;	 //定时器

	// var fn1 = function(){
	// 	// 第一张图片以3s的速度淡出，然后再出现下一张
	// 	$('.banner_img li').eq(num).stop().fadeOut(2000);
	// 	num++;

	// 	// 如果图片播放到第 3 张，那么就接着从第 1 张开始循环轮播
	// 	if(num > 2){num = 0;}

	// 	// 图片的第 num 张淡入
	// 	$('.banner_img li').eq(num).stop().fadeIn(2000);

	// 	// 按钮的颜色随着图片轮换
	// 	$('.banner_btn li').eq(num).addClass('cur').siblings('li').removeClass('cur');
	// }


	// var fn2 = function(){
	// 	$('.banner_img li').eq(num).stop().fadeOut(2000);

	// 	$(this).addClass('cur').siblings('li').removeClass('cur');

	// 	var i = $(this).index();

	// 	$('banner_btn li').eq(i).stop().fadeIn(2000);

	// 	num = i;
	// }

	// // 轮播时间间隔
	// timer = setInterval(fn1,2000);

	// // 当鼠标悬浮在banner时，取消定时器
	// $('.banner').hover(function(){
	// 	clearInterval(timer);
	// },function(){
	// 	//取消定时器 2s 后继续轮播 
	// 	clearInterval(timer);
	// 	timer = setInterval(fn1,2000)
	// });

	// // 点击按钮时，触发 fn2 的执行函数
	// $('.banner_btn li').click(fn2);
// })


