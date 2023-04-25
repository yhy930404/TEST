// JavaScript Document

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>40){
            $('nav').addClass('cc');
        } else{
            $('nav').removeClass('cc');
        }
    });
});

//指定robot 訊息框出現一千毫秒(1s) 在漸漸消失
$('#robot').delay(1000).fadeOut("slow"); 

//更換按鈕圖片
var r=false;  //定義r:false 叉號圖示   r:true 機器人圖示 
$('#ro').click(function(){  //圖示被點擊時執行
    //顯示訊息框，並切換按鈕圖示
    $('#robot').toggle(function(){
        if(r) $('#ro img').attr('src','img/ro.png');
        else $('#ro img').attr('src','img/ro2.png');
        r=!r; //在2者圖示間切換(更改下一次被點擊的圖片定義)
    });
})

//訊息送出後觸發keyin執行
function keyin(){
    var keyCode=event.which; //抓取使用者在鍵盤上按了什麼按鍵
    if(keyCode==13){  //keyCode等於13 為enter 
        //在訊息框內累加訊息。顯示使用者剛剛發送的訊息並顯示發送時間(getTime)input:text
        $('#rotalk').append('<div class="m2">'+$('roask').val()+'<br>'+getTime()+'</div><br>');
        //在訊息框內累加訊息。機器人回覆(ans)並顯示發送時間(getTime)
        $('#rotalk').append('<div class="m1">'+ans()+'<br>'+getTime()+'</div><br>');
        $('#roask').val(""); //清空使用者在'輸入訊息框'的內容
        event.preventDefault(); //輸入訊息框回到起始值
        $('#rotalk').scrollTop(9999999); //對話框自動移至於最新訊息位置
    }
}

//亂數產生機器人回覆訊息
function ans(){  
    var c=Math.floor(Math.random()*3);  //取得亂數0~2的小數並取最大整數
    if(c==0)return'很抱歉，客服端忙線中，請稍後再傳一次訊息，謝謝您～'
    if(c==1)return'我們已收到您的答覆，請稍待專人回覆您，謝謝！'
    if(c==2)return'客服端忙線中，請稍待專人為您服務，感恩～！'
}
//抓取現在時間
function getTime(){
    var today=new Date(); //抓取當前時間
    if (today.getHours<13){ //如果在下午1點前 就顯示'上午' 
        return'上午'+today.getHours()+':'+today.getMinutes(); //回傳時間
    } else{ //否則 顯示'下午'
        return'下午'+today.getHours()+':'+today.getMinutes(); //回傳時間
    }
}


$('.nav-link,a').click(function(){
    $(this).addClass('animate__animated animate__rubberBand');
}) .bind('animationend',function(){
    $(this).removeClass('animate__animated animate__rubberBand');
});

$('#top,#ro').click(function(){
    $(this).addClass('animate__animated animate__rubberBand');
}) .bind('animationend',function(){
    $(this).removeClass('animate__animated animate__rubberBand');
});

