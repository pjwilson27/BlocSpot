// var animatePoints = function() {
//         forEach(points, revealPoint);
//         };
// var revealPoint = function() {
//     $(this).css({
//         opacity: 1,
//         transform: 'scaleX(1) translateY(0)'
//     });
// }
//
// $.each($('.point'), revealPoint);
//
// $(window).load(function() {
//     if($(window).height() >950){
//     animatePoints();
//     }

var animatePoints = function() {
  $.each($('.point'), function() {
    $(this).css({
      opacity: 1,
      transform: 'scaleX(1) translateY(0)'
    });
  });
};

$(window).load(function() {
  if($(window).height() > 950) {
    animatePoints();
  }

  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

  $(window).scroll(function(event) {
    if($(window).scrollTop() >= scrollDistance) {
      animatePoints();
    }
  });
});
