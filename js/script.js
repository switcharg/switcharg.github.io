$(document).ready(function() {
	$('.button').on('click', function(){
  		var colorSelected = $(this).data("color");
  		$('.button, .img').removeClass('selected');
   		$(this).addClass('selected');
    	$(".img[data-color='" + colorSelected + "']").addClass("selected");
	});
});
