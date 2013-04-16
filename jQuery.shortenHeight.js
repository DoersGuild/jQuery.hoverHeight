/*  jQuery.hoverHeight, version 1.0
 *  (c) Sathvik Ponangi, Doers' Guild
 * Licence: CC-By (http://creativecommons.org/licenses/by/3.0/)
 *--------------------------------------------------------------------------*/

(function($) {"use strict";
    // A nice closure for our definitions

    function hoverHeight(height) {
        // Shorten the selected node to the given height
        $(this).each(function() {
            // For multiple node support
            var $this = $(this), height;
            height = height || $this.attr("data-height") || 240;
            $this.css({
                "overflow" : "hidden",
                "height" : height
            }).hover(function() {
                // Allow the element to expand to full height
                $this.css({
                    "overflow" : "visible",
                    "height" : "auto"
                });
            }, function() {
                // Shorten the element again
                $this.css({
                    "overflow" : "hidden",
                    "height" : height
                });
            });
        });
    }

    //Add as a jQuery method
    $.fn.hoverHeight = hoverHeight;

})(jQuery);
