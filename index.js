$("button").on("click", function() {
  $("div").fadeTo("slow", 0);
  $("button").fadeOut("3000");


  $("body").addClass("gif").fadeIn(4000);
})
