/**
 * @file
 * itc.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $(document).ready(function() {

    // var hex = $('.field--name-field-bg-color .field--item').text();
    // var colorfield = $('.field--name-field-bg-color');

    $('.field--name-field-bg-color').each(function () {
    	var container = $(this).parent().parent();
    	var hex = $(this).find('.field--item').text();
    	console.log(hex);
    	if (hex !== null) {
    		$(container).css('background-color', hex);
    	}
    });
  })

}(jQuery);
