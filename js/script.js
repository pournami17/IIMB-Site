$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(200);
            $(this).removeClass("open");
            $('.banner').css('top','0px');
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(200);
            $(this).addClass("open");
            $('.banner').css('top','244px');
        }
    });

    $('.next').click(function() {
        clearInterval(autoSlide);
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
        }
        cycleItems(currentIndex);
    });

    $('.prev').click(function() {
        clearInterval(autoSlide);
        currentIndex -= 1;
        if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
        }
        cycleItems();
    });
    
    $('.thumbnail').find('.content-container:last').each(function() {
        $(this).css('border','none');
    });
    
    $('#mob-search-btn').click(function(){
        $('.head-search-show').toggle();
    });
});


var currentIndex = 0,
    items = $('.slider-container .slider-wrapper'),
    itemAmt = items.length;

function cycleItems() {
  var item = $('.slider-container .slider-wrapper').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 6000);