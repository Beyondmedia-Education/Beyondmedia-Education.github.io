(function($) {

    var options = {
        image: undefined
    };
    
    function isImageLoaded(element) {
        var img = new Image();
        img.src = element.attr('src');
        return img.complete;
    }

    function calculateFullHeight(imgElement) {
        var img = new Image();
        img.src = imgElement.attr('src');
        var x = [
            imgElement.css('margin-top'),
            imgElement.css('border-top-width'),
            imgElement.css('padding-top'),
            img.height,
            imgElement.css('padding-bottom'),
            imgElement.css('border-bottom-width'),
            imgElement.css('margin-bottom')
        ];
        var y = 0;
        for (var i = 0 ; i < x.length ; i++) {
            y = y + parseInt(x[i], 10);
        }
        return y;
    }
    
    function calculateFullWidth(imgElement) {
        var img = new Image();
        img.src = imgElement.attr('src');
        var x = [
            imgElement.css('margin-left'),
            imgElement.css('border-left-width'),
            imgElement.css('padding-left'),
            img.width,
            imgElement.css('padding-right'),
            imgElement.css('border-right-width'),
            imgElement.css('margin-right')
        ];
        var y = 0;
        for (var i = 0 ; i < x.length ; i++) {
            y = y + parseInt(x[i], 10);
        }
        return y;
    }

    function centerOverlayIfPossible() {
    
        var container = $(this).parent('.overlay-container'),
            image = $('img.overlay-image', container),
            overlay = $('img.overlay-overlay', container),
            location;
        
        if (!isImageLoaded(image) || !isImageLoaded(overlay)) {
            return;
        }
        
        location = {};
        location.top = (calculateFullHeight(image) - calculateFullHeight(overlay)) / 2;
        location.left = (calculateFullWidth(image) - calculateFullWidth(overlay)) / 2;
        overlay.css(location).show();
    }

    $.fn.overlay = function(settings) {

        if (settings) {
            $.extend(options, settings);
        }
        
        if (!options.image) {
            throw 'You must specify the "image" option when calling the overlay plugin';
        }
        
        this.each(function() {
        
             if (!$(this).is('img')) {
                return;
            }
            
            var container,
                overlay,
                isImageLoaded,
                isOverlayLoaded;
            
            $(this).addClass('overlay-image')
                .wrap('<span class="overlay-container" style="position: relative;"></span>')
                .after('<img class="overlay-overlay" src="' + options.image + '" alt="" style="position: absolute; display: none;" />');
            
            container = $(this).parent();
            overlay = $('img.overlay-overlay', container);

            centerOverlayIfPossible.apply(this);
            $(this).load(centerOverlayIfPossible);
            overlay.load(centerOverlayIfPossible);
            
        });

        return this;

    };

})(jQuery);
/*
     FILE ARCHIVED ON 01:51:37 May 22, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:32:25 Apr 11, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.013
  exclusion.robots.policy: 0.316
  RedisCDXSource: 113.026
  captures_list: 618.736
  LoadShardBlock: 490.203 (3)
  exclusion.robots: 0.332
  PetaboxLoader3.datanode: 337.054 (4)
  load_resource: 512.828
  PetaboxLoader3.resolve: 629.56 (2)
  CDXLines.iter: 12.442 (3)
*/