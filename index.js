
$(document).ready(function() {

	    $(".poemLink").click(function(){
					event.preventDefault();
					$(".poem").show();
					console.log("hi");
				});

				$(".poemLink").click(function(){
						event.preventDefault();
						$(".poem").show();
						console.log("hi");
					});




	    });




















		// Old sticky nav-a-thingy
		// var win = $(window);
		// var window_height = win.innerHeight();
		//
		// $('.nav-a-thingy').hide();
		//
		// win.resize(function() {
		// 	win = $(window);
		// 	window_height = win.innerHeight();
		// });
		//
		// function isScollLessThanWindowHeight() {
		// 	return win.scrollTop() > window_height;
		// }
		//
		// win.scroll(function() {
		// 	(isScollLessThanWindowHeight())
		// 			? $('.nav-a-thingy').show()
		// 			: $('.nav-a-thingy').hide();
		// });
		//
		// });
