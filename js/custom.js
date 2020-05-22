/*global $, window, WOW*/

$(function () {
    
    "use strict";
    
    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        progressCheck = false,
        factsCheck = false;
        
    
    /*========== Loading  ==========*/
    $('.preloader').delay(200).fadeOut(700, function () {
        $(this).remove();
    });
    
    /*========== Mobile Menu  ==========*/
    $(".control-bar .menu-toggle").on("click", function () {
        $(this).toggleClass("active");
        $(".slide-menu").toggleClass("active");
    });
    
    /*========== Smooth Scroll  ==========*/
    $(".slide-menu .menu-list li a").on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600);
    });
    
    /*========== Add Class Active to Menu Links on Scrolling  ==========*/
    $("section").each(function () {
        if (win.scrollTop() >= $(this).offset().top - 1) {
            $(".slide-menu .menu-list li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
        }
    });
    win.on("scroll", function () {
        $("section").each(function () {
            if (win.scrollTop() >= $(this).offset().top - 1) {
                $(".slide-menu .menu-list li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });
    
    /*========== Skills Progress  ==========*/
    function skillsPogress() {
        $('.chart').easyPieChart({
            size: 140,
            barColor: '#dca52e',
            trackColor: '#313131',
            scaleColor: false,
            lineWidth: 2,
            scaleLength: 4,
            lineCap: 'circle',
            animate: {
                duration: 2000,
                enabled: true
            }
        });
    }
    
    if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
        skillsPogress();
        progressCheck = true;
    }
    
    win.on("scroll", function () {
        
        if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
            skillsPogress();
            progressCheck = true;
        }
        
    });
    
    /*========== Start Portfolio Trigger Filterizr Js  ==========*/
    $("#control li").on('click', function () {
        $(this).addClass('active').siblings("li").removeClass('active');
    });
    // The Filterizr
    $('#filtr-container').filterizr({
        animationDuration: 0.4
    });
    
    /*========== Start Magnigic Popup Js ==========*/
    if ($('.portfolio-content .item')[0]) {

        $('.portfolio-content .item').magnificPopup({
            delegate: '.icon-img',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    
    /*========== Facts Counter  ==========*/
    if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
        $(".facts .fact-number").countTo();
        factsCheck = true;
    }
    
    win.on("scroll", function () {
        if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
            $(".facts .fact-number").countTo();
            factsCheck = true;
        }
    });
    
 
    
    /*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1200) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }
    
    scrollUp();
    
    win.on("scroll", function () {
        scrollUp();
    });
    
    scrollToTop.on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });
    
    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();
    
});