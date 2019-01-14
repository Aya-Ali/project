var isotope = require('../../js/isotope.pkgd.js');
var jQBridget = require('jquery-bridget');
// make Isotope a jQuery plugin
var $ = require('jquery');
$.bridget( 'isotope', isotope );
if($('.chang').length>0){
  $( window ).on( 'load', function () {

    var $grid = $('.grid').isotope({
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
})
// $(document).ready(function(){
 
  
  

// });
}
import css from '../css/template.css';
