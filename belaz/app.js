$(function(){
//    collapse
    $("[data-collapse]").on("click", function(event){
       event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('collapse');

        $this.toggleClass("active");

    });

//    question

    let slider = $("#ReviewsSlider");


     slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      fade:true,
      prevArrow:"<img src='img/refresh.png' class='prev' alt='1'>",
      nextArrow:"<p class='next'> Еще вопросы </p>"
     });

    let sliderWh = $("#WarehouseSlider");

    sliderWh.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      fade:false,
      autoplay:true,
      prevArrow:"<img src='img/back.png' class='back' alt='1'>",
      nextArrow:"<img src='img/sled.png' class='sled' alt='2'>"
    });



    $(document).ready(function() {
        $(".forma__phone").inputmask("+9(999)999-99-99")
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
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

});
