/*global $, console*/
$(function () {
    'use strict';
    $('#navbar ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('.carousel').carousel({interval: 1000});
    
    var scrollBtn = $('#scroll-to-top');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 658) {
            $('.navbar').css("background-color", "black");
        } else {
            $('.navbar').css("background-color", "rgba(0,0,0,0.5)");
        }
	});
    
    $('.degree, .count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
        
});
    
