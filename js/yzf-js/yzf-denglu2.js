/**
 * Created by Administrator on 2017/5/22.
 */
$(document).ready(function(){
    //获取焦点value消失
    $('#user').on('focus',function(){
        $(this).attr("placeholder","");
        $('.yzf-oo').css('display','none');
    })
    $('#pass').on('focus',function(){
        $(this).attr("placeholder","");
    })
    //键盘按下
    $('#user').keydown(function(e){
        if(e.keyCode==16||e.keyCode==50){

        }
    })


    //失去焦点
    $('#user').on('blur',function(){
        var reg=/^1[3578]\d{9}/;
        var reg1=/^\w+@(qq|weixin|weibo)\.com$/;
        var value=$(this).val();
    if(!value.match(reg)&&!value.match(reg1)){
        $("<div class='yzf-oo'>请输入正确的邮箱地址或手机号</div>").insertBefore($('form')).css({
            width:'3.5rem',
            height:'0.5rem',
            position:'absolute',
            top:'4.5rem',
            left:'50%',
            "margin-left":'-1.75rem',
            "text-align":'center',
            color:'red',
        });
    }else{
        $("<div class='yzf-bb'>√</div>").insertBefore($('#user')).css({
            width:'0.2rem',
            height:'0.2rem',
            position:'absolute',
            top:'0.1rem',
            right:'0.2rem',
            'z-index':'1000',
            // "margin-left":'-1.75rem',
            // "text-align":'center',
            color:'red',
            'font-size':'0.24rem',
        });
    }
})
    // consoale.log($('form'));
    $("form").validate({
        rules: {
            pass: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            pass: {
                required: "请输入密码",
                minlength: "密码不能小于6个",
            }
        },
        errorPlacement: function(error, element) {
            $('<div id="box">').html(error).insertAfter(element);
            error.css({'width':'120px','height':'30px','color':'red',fontSize:'12px',position:'absolute',left:'165px',top:'-28px'});
        },
        success:function(val,element){
            val.html('√').insertAfter(element);
            val.css({'width':'100px','height':'30px','color':'red',fontSize:'12px',position:'absolute',left:'270px',top:'0px'});
        }
    })


})
