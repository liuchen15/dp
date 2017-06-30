/**
 * Created by ¡ı≥ø on 2017/6/6.
 */

$(function(){
    var a=0;

    var pageCount=$(".page").length-1;
    $("body").swipeUp(
        function(){
            if(a<pageCount){
                $(".page").eq(a).addClass("pageUp");
                $(".page").eq(a).children().addClass("hide");
                a++;
                $(".page").eq(a).removeClass("pageDown");
                $(".page").eq(a).children().removeClass("hide");
            }
        }
    );
    $("body").swipeDown(
        function(){
            if(a>0){
                $(".page").eq(a).addClass("pageDown");
                $(".page").eq(a).children().addClass("hide");
                a--;
                $(".page").eq(a).removeClass("pageUp");
                $(".page").eq(a).children().removeClass("hide");

            }
        }
    );
    $(".page_2,.page_3,.page_4").swipeLeft(
        function(){
            $(this).children().eq(0).addClass("pageLeft");
            $(this).children().eq(1).removeClass("pageRight");
        }
    );
    $(".page_2,.page_3,.page_4").swipeRight(
        function(){
            $(this).children().eq(0).removeClass("pageLeft");
            $(this).children().eq(1).addClass("pageRight");
        }
    );
});