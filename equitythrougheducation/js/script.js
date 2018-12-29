$(document).ready(function() {
    if ($(window).width() < 700) {
     $('.quotes').insertBefore('.social-media-1');   
     $('.quotes').css({
       'display' : 'block',
       'float' : 'left',
       'width' : '100%'
    });
    }
});
