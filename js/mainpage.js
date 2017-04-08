
/* Initialise login pop up */
$(document).ready(function () {
    $('#openlogin').popup({
        //type: 'tooltip',
        offsettop: 100,
        offsetleft: -200,
        opacity: 0.3,
        transition: 'all 0.5s',
        outline: true
    });
});

/* Back top
-----------------------------------------------*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
});   

// Animate the scroll to top
$(document).ready(function(){
    $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    });
});

$(document).ready(function(){
    $('.home').parallax("50%", 0.3); 
});

