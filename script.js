document.ready($(function() {

  var inWrapper = $('.inner-wrapper');

  $('.prev').on('click', function() {

    inWrapper.animate({left: '0%'}, 300, function(){

      inWrapper.css('left', '-100%');

      $('.slide').first().before($('.slide').last());

    });


  });



  $('.next').on('click', function() {

    inWrapper.animate({left: '-100%'}, 300, function(){

      inWrapper.css('left', '0%');

      $('.slide').last().after($('.slide').first());

    });


  });


}));
