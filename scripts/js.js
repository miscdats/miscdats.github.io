$(function(){

  // show div in main when click on nav button
  $( '#nav_bar a' ).click(function() {
    var target = $(this).attr('rel');
    $("#" + target).show().siblings("div").hide();
  });

  // contact form success
  function thx() {
    document.getElementById( '#thxMsg' ).innerHTML = 'I\'ve got mail! Thanks, you\'ll be hearing back from me soon.';
  };

  // splash screen enter link
  // $('.enter_link').click(function () {
  //   $(this).parent('#splashscreen').fadeOut(500);
  //   // $(this).parent('#wrap').style.display = 'inline';
  // });
  

  function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);

            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
  }

  setTimeout(function(){ 

    if(typeof(Storage) !== "undefined") {
      console.log("Already shown" + sessionStorage.getItem('splashShown'));

      if( !sessionStorage.getItem('splashShown') || sessionStorage.getItem('splashShown') === null ) {  
        document.getElementById('wrap').style.display = 'none';
        document.getElementById('splashscreen') .style.display = 'inline';
        //Display splash
        setTimeout(function(){   
          fade(document.getElementById('splashscreen'));
          // document.getElementById('splash').style.display = 'none'
          // window.location = "https://taupier.dev";
          sessionStorage.setItem('splashShown', true  );
          $( '.glitch-img-splash' ).mgGlitch({
            destroy: true,
            glitch: false,
            scale: false,
            blend: false
          });
          document.getElementById('wrap').style.display = 'inline';
          
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
        }, 3000);
        
      } else {
        //Display Main Content
        document.getElementById('splashscreen').style.display = 'none';
        document.getElementById('wrap').style.display = 'inline';
        console.log("Already shown");
      }

    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }, 0);

});
