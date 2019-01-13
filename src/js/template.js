if($('.chang').length>0){
var typed2 = new Typed('.chang', {
    strings: ['To sell my potter','To promote my restaurant', 'A blog about my travels', 'A photography portfolio'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: false,
    loop: true,
    cursorChar: '',
  });
$(document).ready(function(){
    var $grid =$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  },
});
$('.show2').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
        $(".show2 a").removeClass("active");
        $(this).addClass("active");
});
});
}
import css from '../css/template.css';
