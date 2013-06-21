/*  jQuery.hoverHeight, version 1.0.1
 *  (c) Sathvik Ponangi, Doers' Guild
 * Licence: CC-By (http://creativecommons.org/licenses/by/3.0/)
 *--------------------------------------------------------------------------*/

(function($) {"use strict";
    // A nice closure for our definitions

    function hoverHeight(height) {
        // Shorten the selected node to the given height
        return $(this).each(function() {
            // For multiple node support
            var $this = $(this);
            height = height || $this.attr("data-height") || 240;

            var compress = function() {
                // Shorten the element again
                $this.css({
                    "overflow" : "hidden",
                    "height" : height
                });
            };

            var expand = function() {
                // Allow the element to expand to full height
                $this.css({
                    "overflow" : "visible",
                    "height" : "auto"
                });
            };

            var toggle = function() {
                // Toggle the height
                if ($this.css("height") === "auto") {
                    compress.apply(this, arguments);
                } else {
                    expand.apply(this, arguments);
                }
            };

            $this.css({
                "overflow" : "hidden",
                "height" : height
            }).hover(expand, compress).focus(expand).blur(compress).on("tap", toggle);
        });
    }

    //Add as a jQuery method
    $.fn.hoverHeight = hoverHeight;

})(jQuery);
