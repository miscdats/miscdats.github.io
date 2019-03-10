$(function(){

  // show div in main when click on nav button
  $( '#nav_bar a' ).click(function() {
    var target = $(this).attr('rel');
    $("#" + target).show().siblings("div").hide();
  });

  // banner fx
  $( '.glitch-img' ).mgGlitch({
    destroy: false,
    glitch: true,
    scale: true,
    blend: true,
    blendModeType: 'hue',
    glitch1TimeMin: 200,
    glitch1TimeMax: 400,
    glitch2TimeMin: 10,
    glitch2TimeMax: 100,
    zIndexStart: 5
  });

});

function thx() {
  document.getElementById( '#thxMsg' ).innerHTML = 'I\'ve got mail! Thanks, you\'ll be hearing back from me soon.';
};
