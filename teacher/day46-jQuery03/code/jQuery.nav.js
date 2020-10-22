;
(function ($) {
    $.fn.extend({
        ani: function () {
            $(this).find("ul li")
                .mouseenter(function () {
                    $(this).find(".con").stop(true, false).show(1000)
                })
                .mouseleave(function () {
                    $(this).find(".con").stop(true, false).hide(1000)
                })

            return $(this);
        }
    });
})(jQuery);