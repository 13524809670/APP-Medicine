window.onload= function(){
	var form = document.getElementsByTagName('form')[0];
	var name = /^[a-zA-Z]([A-Za-z0-9]{3,15})$/;
	var tel = /^1(3|4|5|7|8)([0-9]{9})$/;
	var text = document.getElementById('txt');

	form.onsubmit = function(){

		var nameA = form.username.value;
		var nameB = name.test(nameA);
		if(nameB == false){
			alert("输入格式不正确");
			return false;
		}

		var telA = form.tela.value;
		var telB = tel.test(telA);
		if(telB == false){
			alert("手机号不正确");
			return false;
		}

		if(text.value == ""){
			text.style.borderColor="#ccc";
		}
		else{
			text.style.borderColor = "red";
		}
	}
}