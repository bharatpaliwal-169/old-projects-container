$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }  // End if
  });

  $(window).scroll(function() { 
    if ($(document).scrollTop() > 30) { 
      $(".fixed-top").css("background-color", "#FFFFFF"); 
    } else {
      $(".fixed-top").css("background-color", "transparent");
    }
  });
});