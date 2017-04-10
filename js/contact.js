$(document).ready(function(){
	$('.address form #name,.address form #tel,.address form #code,.address form textarea').focus(function(){
		$(this).val('');
	});

	//姓名
	$('.address form #name').blur(function(){
		if($(this).val()==""){
			$(this).val('姓名');
		};
	});

	//电话
	$('.address form #tel').blur(function(){
		if($(this).val()==""){
			$(this).val('电话');
		};
	});

	//验证码
	$('.address form #code').blur(function(){
		if($(this).val()==""){
			$(this).val('验证码');
		};
	});

	//留言
	$('.address form textarea').blur(function(){
		if($(this).val()==""){
			$(this).val('留言');
		};
	});



	// $('form [type=submit]').click(function go(){
	// 	if(confirm('确定提交吗？')){
	// 		return true;
	// 	}
	// 	else{
	// 		return false;
	// 	}
	// });

	// $('form [type=reset]').click(function resetform(){
	// 	if(confirm('确定重置表单吗？')){
	// 		return true;
	// 	}
	// 	else{
	// 		return false;
	// 	}
	// });
})