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


});
