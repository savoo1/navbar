// js for navbar
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

$(".root").scroll(function() {
    if ($(this).scrollTop() > 100) {
        $("body").addClass("navbar_scrolled");
    }else{
        $("body").removeClass("navbar_scrolled");
    }
});
// js for navbar end




// js for header
$('.slick_slide_imgs').slick({
    cssEase: 'cubic-bezier(0.600, -0.400, 0.735, 0.045)',
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$("#typed").typed({
    strings: ["great.", "something.", "everything."],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    cursorChar: "|",
    contentType: "html"
});
// js for header


// js for testimonials
$(".testimonialSlider").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    speed: 900,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          variableWidth: false,
        },
      },
    ],
  });
  $( window ).resize(function() {
    $('.testimonialSlider').slick('resize');
  });
// js for testimonials end
  
  