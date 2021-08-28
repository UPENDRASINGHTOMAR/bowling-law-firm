
jQuery(function($) {

	





$(document).ready(function(){
if($(window).width() > 767){
$(window).bind('scroll load', function() {
var navHeight = $("header").height();
($(window).scrollTop() > navHeight) ? $('header').addClass('show') : $('header').removeClass('show');
});
}
});
});

