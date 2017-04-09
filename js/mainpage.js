
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
    $('#openForce').popup({
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

$(document).ready(function(){
    $('#login-nav').on('submit', function(e){
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        if(email == "petlover500@gmail.com" && password == "password"){
            this.submit();
        } else {
            $('#error-msg').empty().append("The email address or the password you entered is incorrect. Please try again or register an account.");
        }
    });
});

$(document).ready(function(){
    $('#login-pop').on('submit', function(e){
        e.preventDefault();
        var email = $('#email-pop').val();
        var password = $('#password-pop').val();
        if(email == "petlover500@gmail.com" && password == "password"){
            this.submit();
        } else {
            $('#replace-msg').empty().append("The email address or the password you entered is incorrect. Please try again or register an account.");
        }
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

var password = getParameterByName('password');
var email = getParameterByName('email');
var i = -1;
if(email != null){
    i = email.indexOf('@');
}

$(document).ready(function () {
    if(i > 0) {
        var id = email.substring(0, i);
        document.getElementById('username-display').innerHTML = id;
    }
    /*if(password == "password123" && email == "newuser@gmail.com") {
        document.getElementById('username-prompt').innerHTML = ;
        $('#openNewUser').popup('show');
    }*/
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

