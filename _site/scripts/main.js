$(function(){

  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7; // between 7pm and 7am
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function() {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });
  
  // show div in main when click on nav button
  $( '#nav_bar a' ).click(function() {
    var target = $(this).attr('rel');
    $("#" + target).show().siblings("div").hide();
  });

  // contact form success
  function thx() {
    document.getElementById( '#thxMsg' ).innerHTML = 'I\'ve got mail! Thanks, you\'ll be hearing back from me soon.';
  };

  // SPLASH ANIMATIONS
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
    // Do not show splash if can't or already seen
    if (typeof(Storage) !== "undefined") {
      console.log("Already shown" + sessionStorage.getItem('splashShown'));

      // Display splash, timeout to main
      if( !sessionStorage.getItem('splashShown') || sessionStorage.getItem('splashShown') === null ) {  
        $( '.glitch-img-splash' ).mgGlitch({
          destroy: false,
          glitch: true,
          scale: true,
          blend: true,
          blendModeType: 'hue',
          glitch1TimeMin: 200,
          glitch1TimeMax: 400,
          glitch2TimeMin: 10,
          glitch2TimeMax: 200,
          zIndexStart: 5
        });
        document.getElementById('wrap').style.display = 'none';
        document.getElementById('splashscreen').style.display = 'inline';

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
        }, 4000);
        
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
