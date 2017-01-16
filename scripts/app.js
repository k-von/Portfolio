
$(document).ready( function() {
  $menu = $("#sidebar-wrapper");

  $("#hamburger").on("click", $(".js-menu-open"), function(event) {
    $menu.addClass("open");
   return event.target.nodeName === "A";
  })
  $menu.on("click", $(".js-menu-close"), function(event) {
      $menu.removeClass("open");
     return event.target.nodeName === "A";
   });
});
