
$(function(){
//	帐号
	var inputName=$('.X-reg .cons form input[type="text"]');
	var dui=$('.X-reg .cons form section .dui');
	var check=$('.X-reg .cons form section h5');
	var yan=$('.X-reg .cons form section .yan');
	inputName.focus(function(){
		yan.hide();
		check.hide();
	});
	inputName.blur(function(){
		var str=inputName.val();
		var reg=/^1[3587]\d{9}/;
		var reg1=/^\w+@(qq|web|weichat)\.com$/;
		if(reg.exec(str)||reg1.exec(str)){
			dui.show();
		}else{
			check.show();
		}
	});
	
//	密码
	var inputPass=$('#app input[type="password"]');
	var tiao=$('.lnu_container');
	inputPass.focus(function(){
		yan.hide();
		check.hide();
	});
	inputPass.blur(function(){
		if(inputPass.val()){
			tiao.css("opacity","1");
		};
		var strs=inputPass.val();
		if(strs.length==6){
			yan.show();
		}else{
			check.show();
		}
	});
	
	

	
//	let str1='18234077610';
//	let reg1=/^1[3587]\d{9}/;
//	
//	let str='2584392431@163.com';
//	let reg=/^\w+@(qq|163)\.com$/;
//	console.log(reg.exec(str));
});
