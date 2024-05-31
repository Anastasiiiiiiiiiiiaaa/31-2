// первый экран : движение заднего плана 
$(document).ready(function() {
	$('body').mousemove(function(event) {
    $(document).mousemove(function(e) {
      $('.moveback2, .moveback2port').css({
        left: 10 - e.pageX / 9,
        top: 10 - e.pageY / 9
      })
    })
  })


});

