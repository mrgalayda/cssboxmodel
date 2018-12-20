		$(document).ready(function() {
			$(".sizes span").hover(
			  function () {
			    $(this).addClass("hover");
			  }, 
			  function () {
			    $(this).removeClass("hover");
			  
			 });

			$(".sizes span").click(function() {
		     $(".sizes span").removeClass("selected hover");
		     $(this).addClass("selected");
		     var value = $(this).attr('data');
		     $("#object-shirt").val(value);
		   });
		  });