$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
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
}, 3000);