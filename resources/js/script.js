$(document).ready(function() {

   //nav background change
    $('.js--learning-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('grey-bg');
        }
        else {
            $('nav').removeClass('grey-bg');
        }
    }, {
      offset: '200px'
    });

    //smooth scrolling
    $('.js--scroll-to-header').click(function() {
        console.log('scroll to header')
        $('html, body').animate({scrollTop: $('.js--header-section').offset().top}, 1000);
    })
    $('.js--scroll-to-bio').click(function() {
        $('html, body').animate({scrollTop: $('.js--bio-section').offset().top}, 1000);
    })
    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('.js--projects-section').offset().top}, 1000);
    })
    $('.js--scroll-to-learning').click(function() {
        $('html, body').animate({scrollTop: $('.js--learning-section').offset().top}, 1000);
    })
    $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js--contact-section').offset().top}, 1000);
    })


});