$(document).ready(function(){

    var controller = new ScrollMagic.Controller();


    $('.fade-in').each(function(){

        var tween = TweenMax.from($(this), 0.375, {autoAlpha: 0, sacale: 0.5, y: '+=30', ease:Linear.easeNone});

        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false,
            triggerHook: 0.7,
        })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);

     });
});