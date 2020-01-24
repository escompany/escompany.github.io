$(function(){


//    fixed header
    let intro = $("#intro");
    let header = $("#header");
    let introH;
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resize",function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH) {
            header.addClass("fixed");
        }  else {
            header.removeClass("fixed");
        }
    });


   //    smooth scroll

   $("[data-scroll]").on("click", function(event){
        event.preventDefault();

       var $this = $(this),
           blockId = $(this).data('scroll'),
           blockOffset = $(blockId).offset().top;

       $("#nav a").removeClass("active");
       $this.addClass("active");

      $("html,body").animate({
          scrollTop: blockOffset +5
      },700);
   });

 $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='img/back-2.png' class='back-2' alt='1'>",
        nextArrow: "<img src='img/next-2.png' class='next-2' alt='2'>",
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false
 });


    AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
$('#element').typeIt({
     strings: ["ПЕРЕВЕЗЕМ"],
     speed: 100,
     autoStart: true,
     cursor:false
});
    $('#element2').typeIt({
     strings: ["ЛЮБОЙ ГРУЗ"],
     speed: 150,
     autoStart: true,
     startDelay:1500,
     cursor:false

});
    $('#element3').typeIt({
     strings: ["НАШИ УСЛУГИ"],
     speed: 250,
     autoStart: false,
     cursor:false

});
     $('#element4').typeIt({
     strings: ["СОВРЕМЕННЫЙ"],
     speed: 150,
     autoStart: false,
     cursor:false

});
     $('#element5').typeIt({
     strings: ["АВТОПАРК"],
     speed: 150,
     autoStart: false,
     startDelay:1500,
     cursor:false

});
     $('#element6').typeIt({
     strings: ["НАШИ ПРЕИМУЩЕСТВА"],
     speed: 150,
     autoStart: false,
     startDelay:1500,
     cursor:false

});
     $('#element7').typeIt({
     strings: ["СОБЛЮДЕНИЕ ТЕМПЕРАТУРНОГО РЕЖИМА"],
     speed: 150,
     autoStart: false,
     cursor:false

});
    $('#element8').typeIt({
     strings: ["ЭТАП РАБОТЫ"],
     speed: 150,
     autoStart: false,
     cursor:false

});



    $("#myform-1").validate({
  // правила для полей с именем и паролем
       rules:{

            login:{
                required: true, // поле для имени обязательное для заполнения
                minlength: 2, // в поле для имени должно быть не меньше 4 символов
                maxlength: 24, // в поле для имени должно быть не больше 16 символов
            },

            phone:{
                required: true, // поле для пароля обязательное для заполнения
            },
       },
  // сообщение для поля с именем и пароля, если что-то было не по правилам
       messages:{

            login:{
                required: "* Это поле обязательно для заполнения", // сообщение для имени, если поле не заполнено
                minlength: " * Имя должно иметь минимум 2 символа", // сообщение для имени, если в поле меньше 4 символов
                maxlength: " * Максимальное число символов для имени - 24", // сообщение для имени, если в поле больше 16 символов
            },

            phone:{
                required: " * Это поле обязательно для заполнения", // сообщение для пароля, если поле не заполнено
            },

       }

    });

});


