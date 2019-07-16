/* eslint-disable no-undef */
$(document).ready(() => {
  // nav background change
  $('.js--learning-section').waypoint(
    direction => {
      if (direction === 'down') {
        $('nav').addClass('grey-bg');
      } else {
        $('nav').removeClass('grey-bg');
      }
    },
    {
      offset: '200px'
    }
  );

  // smooth scrolling
  $('.js--scroll-to-header').click(() => {
    $('html, body').animate({ scrollTop: $('.js--header-section').offset().top }, 1000);
  });
  $('.js--scroll-to-bio').click(() => {
    $('html, body').animate({ scrollTop: $('.js--bio-section').offset().top }, 1000);
  });
  $('.js--scroll-to-projects').click(() => {
    $('html, body').animate({ scrollTop: $('.js--projects-section').offset().top }, 1000);
  });
  $('.js--scroll-to-learning').click(() => {
    $('html, body').animate({ scrollTop: $('.js--learning-section').offset().top }, 1000);
  });
  $('.js--scroll-to-contact').click(() => {
    $('html, body').animate({ scrollTop: $('.js--contact-section').offset().top }, 1000);
  });
});
