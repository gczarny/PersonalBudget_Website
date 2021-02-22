$(document).ready(function() {
    /* Scroll on buttons */
    $('.js--scroll-to-reg').click(function() {
        /* when we click on the button, then we make animation which scroll to the top of 
         section with plans with speed of 100ms (1s) */
        $('html, body').animate({scrollTop: $('.js--section-reg').offset().top}, 1000);
    });
    
    $('.js--scroll-to-about').click(function() {
        /* when we click on the button, then we make animation which scroll to the top of 
         section with plans with speed of 100ms (1s) */
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });
    
    /* Animations on scroll */
    $('.js--waypoint-1').waypoint(function(direction) {
        $('.js--waypoint-1').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });
    
    $('.js--waypoint-2').waypoint(function(direction) {
        $('.js--waypoint-2').addClass('animated fadeInUp');
    }, {
      offset: '50%'
    });
    
    /* Navigation scroll */
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* For the sticky navigation */
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    document.getElementById('btn-signin').addEventListener('click', function(){
        $('html, body').animate({scrollTop: $('.js--header').offset().top}, 1000);
        if (($('html').innerHeight() + $('html').scrollTop()) >= $("body").height()){
                
                document.querySelector('.bg-modal').style.display = 'flex';  
        }
    });
    

    document.querySelector('.btn-close').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'none';
    });
    
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");
    document.getElementById("login-form-submit").addEventListener('click', (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        if(username == "user" && password == "web") {
            alert("You have successfully logged in.");
            location.reload();
         } else {
            document.getElementById("login-error-msg").style.opacity = 1;
        }
    });  

});
    
    