
$(document).ready(function() {

		var win = $(window);
		var window_height = win.innerHeight();

		$('.nav-a-thingy').hide();

		win.resize(function() {
			win = $(window);
			window_height = win.innerHeight();
		});

		function isScollLessThanWindowHeight() {
			return win.scrollTop() > window_height;
		}

		win.scroll(function() {
			(isScollLessThanWindowHeight())
					? $('.nav-a-thingy').show()
					: $('.nav-a-thingy').hide();
		});

	});

  // $(".main").onepage_scroll();
  //
  //
  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 100) {
  //     //show navigation
  //     //do an animation to slide down
  //   } else {
  //
  //     //hide my navigation
  //     //do animation to slide up
  //
  //   }
  // });
