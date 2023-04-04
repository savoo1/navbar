$(".navbar .lines").click(function (e) {
    e.preventDefault();
    if($("body").hasClass("navbar_active")){
        $("body").removeClass("navbar_active");
        $("body").removeClass("disable_scroll");
    }else{
        $("body").addClass("navbar_active");
        $("body").addClass("disable_scroll");
    }
});


$(".dropdown_bigger .boxes h2").click(function (e) {
    e.preventDefault();
    if($(this).hasClass("down_opened")){
        $(this).removeClass("down_opened");
        $(this).next().css("max-height", "0px");

    }else{
        $(".down_opened").next().css("max-height", "0px");
        $(".down_opened").removeClass("down_opened");

        $(this).addClass("down_opened");
        var getheight = $(this).next().find("ul").height() + 50;
        $(this).next().css("max-height", getheight + "px");
    }
});

$(".navbar .for_mobile ul .dropdown_li a").click(function (e) {
    if(!$(this).parent().parent().parent().hasClass("ford")){
        e.preventDefault();
        $(".dropdown_smaller").css("max-height", "0px");
        $(".dropdown_active").removeClass("dropdown_active");
        $(this).next().addClass("dropdown_bigger_active")
    }
});
$(".dropdown_bigger .goback_mobile").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().removeClass("dropdown_bigger_active")
});

$(".navbar .for_mobile ul .dropdown_li_sm a").click(function (e) {
    if ($(window).width() < 900) {
        if(!$(this).parent().parent().parent().hasClass("ford")){
            e.preventDefault();
            
            if($(this).hasClass("dropdown_active")){
                $(this).removeClass("dropdown_active");
                $(this).next("").css("max-height", "0px");
            }else{
                $(this).addClass("dropdown_active");
                var getheight = $(this).next().find(".boxes").height() + 50;
                $(this).next("").css("max-height", getheight + "px");
            }
        }
    }
});
