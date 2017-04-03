// $(document).ready(function() {
//   $('body').scrollspy({ target: '#navbar', offset: 51 });
//
//   $('[data-spy="scroll"]').each(function () {
//     var $spy = $(this).scrollspy('refresh');
//   });
//
//   $(function() {
//     $('a[href*="#"]:not([href="#"])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//         if (target.length) {
//           $('html, body').animate({
//             scrollTop: target.offset().top
//           }, 700);
//           return false;
//         }
//       }
//     });
//   });
//
//   $(function() {
//     if (screen.width < 800) {
//       // $(".navbar-default").css("border-radius", "1px solid #E0E0E0");
//       // $(".navbar-default .navbar-nav>li>a").css("color", "#2e2e2e");
//     } else {
//       $(window).scroll(function() {
//         if ($(document).scrollTop() > 50) {
//           $(".navbar-default").addClass("nav-shadow")
//         } else {
//           $(".navbar-default").removeClass("nav-shadow");
//         }
//       });
//     }
//   });
//
// });
