$(document).ready(function(){
  $("#nav a").click(function(e) {
    e.preventDefault();

    anchorScroll( $(this), $($(this).attr("href")), 500 );
  });
});

function anchorScroll(this_obj, that_obj, base_speed) {
  var this_offset = this_obj.offset();
  var that_offset = that_obj.offset();
  var offset_diff = Math.abs(that_offset.top - this_offset.top);

  var speed       = (offset_diff * base_speed) / 1000;

  $("html,body").animate({
    scrollTop: that_offset.top
  }, speed);
}
