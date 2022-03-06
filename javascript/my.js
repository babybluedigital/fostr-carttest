$(document).ready(function() {

    function toggleSidebar() {
      $(".cart_button").toggleClass("active");
      $("main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
    }
  
    $(".cart_button").on("click tap", function() {
      toggleSidebar();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });
  
  });


  $(document).ready(function(){
  $(".cart_button").click(function(){
    $("body").toggleClass("transperent");
  });
});