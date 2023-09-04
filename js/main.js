$(document).ready(function(){

    // bxSlider 스크립트 설정
    $(".bxslider").bxSlider({
       mode:'horizontal',
       slideWidth:600,
       captions:false,
       auto:true,
       autoControls:true,
       stopAutoOnclick:true,
   });


   $(".btn1").on("mouseover",function(){
    $(".frame img").attr({"src":"img/3.jpg","alt":"사진3"});
});
$(".btn2").on("mouseover",function(){
    $(".frame img").attr({"src":"img/4.jpg","alt":"사진4"});
});
$(".btn3").on("mouseover",function(){
    $(".frame img").attr({"src":"img/5.jpg","alt":"사진5"});
});
$(".btn4").on("mouseover",function(){
    $(".frame img").attr({"src":"img/6.jpg","alt":"사진6"});
});
$(".btn5").on("mouseover",function(){
    $(".frame img").attr({"src":"img/7.jpg","alt":"사진7"});
});
});