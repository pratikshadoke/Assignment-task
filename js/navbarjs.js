$(document).ready(function () { 
    $(".menu-toggler").click(function () {
        $(".menu-toggler").toggleClass("active");
        $("nav").toggleClass("active");
      });
   });