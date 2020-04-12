(function($) {

    var options = {},
        fixedCss = {
            'position': 'fixed',
            'top': '0'
        },
        staticCss = {
            'position': 'absolute',
            'top': '0'
        };

    $.fn.fixedfloating = function(settings) {

        if (settings) {
            $.extend(options, settings);
        }

        this.each(function() {
            var element = $(this).wrap('<div class="fixedfloating-wrapper clearfix" style="position:relative;"/>'),
                wrapper = element.parent();

            element
                .css(staticCss)
                .css({
                    width: wrapper.width(),
                    height: wrapper.height()
                });

            $(window).scroll(function(event) {
                var wrapperStartsAt = wrapper.offset().top - parseFloat(element.css('margin-top').replace(/auto/, 0)),
                    viewportStartsAt = $(window).scrollTop();
                element.css(viewportStartsAt > wrapperStartsAt ? fixedCss : staticCss);
            });
        });

        return this;

    };

})(jQuery);
/*
     FILE ARCHIVED ON 21:12:34 Dec 13, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:57:26 Apr 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 336.518 (4)
  captures_list: 327.732
  exclusion.robots.policy: 0.247
  RedisCDXSource: 43.752
  CDXLines.iter: 38.055 (3)
  exclusion.robots: 0.266
  load_resource: 247.795
  esindex: 0.027
  LoadShardBlock: 240.491 (3)
  PetaboxLoader3.resolve: 117.931
*/