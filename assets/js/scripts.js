$(document).ready(function() {
			//Initialize Magnific Popup
			$('.gallery').magnificPopup({
  				delegate: 'a', // child items selector, by clicking on it popup will open
 				type: 'image',
 				gallery: {
    					enabled: true
  				},
  				image: {
    				titleSrc: function(item) {
                        return item.el.attr('title')
                    }
  				}
			});

			//Initialize Filterizr
			if ($('').filterizr) {
	  			var filterizd = $('.filtr-container').filterizr({});
			}
});