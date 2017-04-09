
/* Initialise pop ups */
$(document).ready(function () {
    $('#openlogin').popup({
        offsettop: 100,
        offsetleft: -200,
        opacity: 0.3,
        transition: 'all 0.5s',
        outline: true
    });
});

$(document).ready(function () {
    $('#openNewUser').popup({
        offsettop: 100,
        offsetleft: -200,
        opacity: 0.3,
        transition: 'all 0.5s',
        outline: true
    });
});

/* Read form values for mainpage-loggedin */

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var username = getParameterByName('username');
var password = getParameterByName('password');
var email = getParameterByName('email');

$(document).ready(function () {
    if(username == "newuser" && password == "password123" && email != "") {
        document.getElementById('username-display').innerHTML = username;
        $('#openNewUser').popup('show');
    }
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

