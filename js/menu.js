$(document).ready(function() {
  $('body').scrollspy({ target: '#navbar', offset: 51 });

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 700);
          return false;
        }
      }
    });
  });

  // $(function() {
  //   if (screen.width < 800) {
  //     $(".navbar-default").css("background-color", "#fff");
  //     $(".navbar-default .navbar-nav>li>a").css("color", "#2e2e2e");
  //   } else {
  //     $(window).scroll(function() {
  //       if ($(document).scrollTop() > 150) {
  //         $(".navbar-default").css("background-color", "#fff");
  //         $(".navbar-default").css("border-bottom", "1px solid #E0E0E0");
  //         $(".navbar-default .navbar-nav>li>a").css("color", "#2e2e2e");
  //       } else {
  //         $(".navbar-default").css("background-color", "transparent");
  //         $(".navbar-default").css("border-bottom", "none");
  //         $(".navbar-default .navbar-nav>li>a").css("color", "#fff");
  //       }
  //     });
  //   }
  // });

});
