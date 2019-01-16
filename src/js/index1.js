import 'bootstrap';
import WOW from 'wow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
require("../js/blog");
require("../js/features.js");
require("../js/nav");
require("../js/template");
new WOW().init();
import Typed from 'typed.js';
if($('.chang').length>0){
  var typed2 = new Typed('.chang', {
    strings: ['To sell my potter','To promote my restaurant', 'A blog about my travels', 'A photography portfolio'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: false,
    loop: true,
    cursorChar: '',
  });
}
import css from '../css/home.css';