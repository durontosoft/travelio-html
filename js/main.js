(function($) {
    "use strict";
    var bostami = {
        m: function(e) {
            bostami.d();
            bostami.methods();
        },

        d: function(e) {
            (this._window = $(window)),
            (this._document = $(document)),
            (this._body = $("body")),
            (this._html = $("html"));
        },
        methods: function(e) {
//             bostami.darkToLight();
//             bostami.darkToLightMobile();
//             bostami.preloader_load();
//             bostami.preloader_svg();
            bostami.mobileMenu();
//             bostami.setDark();
//             bostami.setDark1();
//             bostami.setLight();
//             bostami.setLight1();
//             bostami.preloader();
//             bostami.slickActive();
        },

//         // mobile view dark to light function

//         darkToLight: function() {
//             $(window).on("load", function() {
//                 var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
//                 var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
//                 var themeToggleBtn = document.getElementById("theme-toggle");
//                 // Change the icons inside the button based on previous settings
//                 if (
//                     localStorage.getItem("color-theme") === "dark" ||
//                     (!("color-theme" in localStorage) &&
//                         window.matchMedia("(prefers-color-scheme: dark)").matches)
//                 ) {
//                     themeToggleLightIcon ? .classList ? .remove("hidden");
//                 } else {
//                     themeToggleDarkIcon ? .classList ? .remove("hidden");
//                 }
//                 themeToggleBtn ? .addEventListener("click", function() {

//                     // toggle icons inside button

//                     themeToggleDarkIcon.classList.toggle("hidden");
//                     themeToggleLightIcon.classList.toggle("hidden");

//                     // if set via local storage previously

//                     if (localStorage.getItem("color-theme")) {
//                         if (localStorage.getItem("color-theme") === "light") {
//                             document.documentElement.classList.add("dark");
//                             localStorage.setItem("color-theme", "dark");
//                         } else {
//                             document.documentElement.classList.remove("dark");
//                             localStorage.setItem("color-theme", "light");
//                         }

//                         // if NOT set via local storage previously

//                     } else {
//                         if (document.documentElement.classList.contains("dark")) {
//                             document.documentElement.classList.remove("dark");
//                             localStorage.setItem("color-theme", "light");
//                         } else {
//                             document.documentElement.classList.add("dark");
//                             localStorage.setItem("color-theme", "dark");
//                         }
//                     }
//                 });
//             });
//         },

//         // preloader  function

//         preloader: function() {
//             $(window).on("load", function() {
//                 var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
//                         navigator.userAgent
//                     ) ?
//                     true :
//                     false;
//                 var preloader = $("#preloader");

//                 if (!isMobile) {
//                     setTimeout(function() {
//                         preloader.addClass("preloaded");
//                     }, 800);
//                     setTimeout(function() {
//                         preloader.remove();
//                     }, 2000);
//                 } else {
//                     preloader.remove();
//                 }
//             });
//         },

//         preloader_load: function() {
//             $(window).on("load", function() {
//                 var speed = 500;
//                 setTimeout(function() {
//                     preloader();
//                 }, speed);
//             });
//         },
//         preloader_svg: function() {
//             $(window).on("load", function() {
//                 jQuery("img.svg").each(function() {
//                     var jQueryimg = jQuery(this);
//                     var imgClass = jQueryimg.attr("class");
//                     var imgURL = jQueryimg.attr("src");

//                     jQuery.get(
//                         imgURL,
//                         function(data) {
//                             // Get the SVG tag, ignore the rest
//                             var jQuerysvg = jQuery(data).find("svg");

//                             // Add replaced image's classes to the new SVG
//                             if (typeof imgClass !== "undefined") {
//                                 jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
//                             }

//                             // Remove any invalid XML tags as per http://validator.w3.org
//                             jQuerysvg = jQuerysvg.removeAttr("xmlns:a");

//                             // Replace image with new SVG
//                             jQueryimg.replaceWith(jQuerysvg);
//                         },
//                         "xml"
//                     );
//                 });
//             });
//         },

//         // moblie method toggle button function

        mobileMenu: function() {
            $(window).on("load", function() {
                // menu toggle button
                const menuOpen = document.getElementById("menu-toggle-open-icon");
                const menuClose = document.getElementById("menu-toggle-close-icon");
                const navbar = document.getElementById("navbar");
                // const menuToggleBtnTwo = document.getElementById("menu-toggle-two");
                // const menuToggleBtn = document.getElementById("menu-toggle");

                menuOpen?.addEventListener("click", () => {
                    navbar.classList.add("scale-x-1","top-0");
                    navbar.classList.remove("-top-[200%]", "scale-x-0");
                });
                menuClose?.addEventListener("click", () => {
                    console.log("click");
                    navbar.classList.remove("scale-x-1", "top-0");
                    navbar.classList.add("scale-x-0", "-top-[200%]");

                });
            });
        },



//         // set dark theme for home one

//         setDark: function() {
//             $(window).on("load", function() {
//                 const darkButton = document.getElementById("dark");
//                 var themeToggleDarkIcon = document.getElementById(
//                     "theme-toggle-dark-icon"
//                 );
//                 var themeToggleLightIcon = document.getElementById(
//                     "theme-toggle-light-icon"
//                 );
//                 // set dark mode
//                 darkButton ? .addEventListener("click", () => {
//                     console.log("Dark clicked");
//                     themeToggleLightIcon ? .classList.remove("hidden");
//                     themeToggleDarkIcon ? .classList.add("hidden");
//                     // if set via local storage previously
//                     if (localStorage.getItem("color-theme")) {
//                         document.documentElement.classList.add("dark");
//                         localStorage.setItem("color-theme", "dark");

//                         // if NOT set via local storage previously
//                     } else {
//                         document.documentElement.classList.add("dark");
//                         localStorage.setItem("color-theme", "dark");
//                     }
//                 });
//             });
//         },

//         // set light theme for home one

//         setLight: function() {
//             $(window).on("load", function() {
//                 const lightButton = document.getElementById("light");
//                 var themeToggleDarkIcon = document.getElementById(
//                     "theme-toggle-dark-icon"
//                 );
//                 var themeToggleLightIcon = document.getElementById(
//                     "theme-toggle-light-icon"
//                 );
//                 lightButton ? .addEventListener("click", () => {
//                     console.log("light clicked");
//                     themeToggleDarkIcon ? .classList.remove("hidden");
//                     themeToggleLightIcon ? .classList.add("hidden");
//                     // if set via local storage previously
//                     if (localStorage.getItem("color-theme")) {
//                         document.documentElement.classList.remove("dark");
//                         localStorage.setItem("color-theme", "light");

//                         // if NOT set via local storage previously
//                     } else {
//                         document.documentElement.classList.remove("dark");
//                         localStorage.setItem("color-theme", "light");
//                     }
//                 });
//             });
//         },

//         // set dark theme for home two

//         setDark1: function() {
//             $(window).on("load", function() {
//                 const darkButton1 = document.getElementById("dark1");
//                 var themeToggleDarkIcon = document.getElementById(
//                     "theme-toggle-dark-icon"
//                 );
//                 var themeToggleLightIcon = document.getElementById(
//                     "theme-toggle-light-icon"
//                 );
//                 darkButton1 ? .addEventListener("click", () => {
//                     console.log("Dark clicked");
//                     themeToggleLightIcon ? .classList.remove("hidden");
//                     themeToggleDarkIcon ? .classList.add("hidden");
//                     // if set via local storage previously
//                     if (localStorage.getItem("color-theme")) {
//                         document.documentElement.classList.add("dark");
//                         localStorage.setItem("color-theme", "dark");

//                         // if NOT set via local storage previously
//                     } else {
//                         document.documentElement.classList.add("dark");
//                         localStorage.setItem("color-theme", "dark");
//                     }
//                 });
//             });
//         },

//         // set light theme for home two

//         setLight1: function() {
//             $(window).on("load", function() {
//                 const lightButton1 = document.getElementById("light1");
//                 var themeToggleDarkIcon = document.getElementById(
//                     "theme-toggle-dark-icon"
//                 );
//                 var themeToggleLightIcon = document.getElementById(
//                     "theme-toggle-light-icon"
//                 );
//                 lightButton1 ? .addEventListener("click", () => {
//                     console.log("light clicked");
//                     themeToggleDarkIcon ? .classList.remove("hidden");
//                     themeToggleLightIcon ? .classList.add("hidden");
//                     // if set via local storage previously
//                     if (localStorage.getItem("color-theme")) {
//                         document.documentElement.classList.remove("dark");
//                         localStorage.setItem("color-theme", "light");

//                         // if NOT set via local storage previously
//                     } else {
//                         document.documentElement.classList.remove("dark");
//                         localStorage.setItem("color-theme", "light");
//                     }
//                 });
//             });
//         },

//         // dark to light function for mobile devices

//         darkToLightMobile: function() {
//             $(window).on("load", function() {
//                 var themeToggleDarkIconMobile = document.getElementById(
//                     "theme-toggle-dark-icon-mobile"
//                 );
//                 var themeToggleLightIconMobile = document.getElementById(
//                     "theme-toggle-light-icon-mobile"
//                 );
//                 var themeToggleBtnMobile = document.getElementById(
//                     "theme-toggle-mobile"
//                 );
//                 // Change the icons inside the button based on previous settings
//                 if (
//                     localStorage.getItem("color-theme") === "dark" ||
//                     (!("color-theme" in localStorage) &&
//                         window.matchMedia("(prefers-color-scheme: dark)").matches)
//                 ) {
//                     themeToggleLightIconMobile ? .classList ? .remove("hidden");
//                 } else {
//                     themeToggleDarkIconMobile ? .classList ? .remove("hidden");
//                 }
//                 themeToggleBtnMobile ? .addEventListener("click", function() {
//                     // toggle icons inside button
//                     themeToggleDarkIconMobile.classList.toggle("hidden");
//                     themeToggleLightIconMobile.classList.toggle("hidden");

//                     // if set via local storage previously
//                     if (localStorage.getItem("color-theme")) {
//                         if (localStorage.getItem("color-theme") === "light") {
//                             document.documentElement.classList.add("dark");
//                             localStorage.setItem("color-theme", "dark");
//                         } else {
//                             document.documentElement.classList.remove("dark");
//                             localStorage.setItem("color-theme", "light");
//                         }

//                         // if NOT set via local storage previously
//                     } else {
//                         if (document.documentElement.classList.contains("dark")) {
//                             document.documentElement.classList.remove("dark");
//                             localStorage.setItem("color-theme", "light");
//                         } else {
//                             document.documentElement.classList.add("dark");
//                             localStorage.setItem("color-theme", "dark");
//                         }
//                     }
//                 });
//             });
//         },

//         // slick slider active function 

//         slickActive: function() {

//             if ($(".slickOne").length !== 0) {
//                 $(".slickOne").slick({
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                     autoplay: true,
//                     autoplaySpeed: 2000,
//                     dots: false,
//                     arrows: false,
//                     responsive: [{
//                             breakpoint: 1024,
//                             settings: {
//                                 slidesToShow: 4,
//                             },
//                         },
//                         {
//                             breakpoint: 600,
//                             settings: {
//                                 slidesToShow: 2,
//                             },
//                         },
//                         {
//                             breakpoint: 480,
//                             settings: {
//                                 slidesToShow: 2,
//                                 slidesToScroll: 1,
//                             },
//                         },
//                         // You can unslick at a given breakpoint now by adding:
//                         // settings: "unslick"
//                         // instead of a settings object
//                     ],
//                 });
//             }
//             if ($(".slickTwo").length !== 0) {
//                 $(".slickTwo").slick({
//                     slidesToShow: 5,
//                     slidesToScroll: 1,
//                     autoplay: true,
//                     autoplaySpeed: 2000,
//                     dots: false,
//                     arrows: false,

//                     responsive: [{
//                             breakpoint: 1024,
//                             settings: {
//                                 slidesToShow: 5,
//                             },
//                         },
//                         {
//                             breakpoint: 600,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 2,
//                             },
//                         },
//                         {
//                             breakpoint: 480,
//                             settings: {
//                                 slidesToShow: 2,
//                                 slidesToScroll: 1,
//                             },
//                         },
//                         // You can unslick at a given breakpoint now by adding:
//                         // settings: "unslick"
//                         // instead of a settings object
//                     ],
//                 });
//             }


//         },

//         // slick slider active function


    };
    bostami.m();
})(jQuery, window);

// import 'flowbite-datepicker';
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
// const dateRangePickerEl = document.getElementById('dateRangePickerId');
// new DateRangePicker(dateRangePickerEl, {
//     // options
// });


if ($("#accordion-example-heading-1")[0]){
  // create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1'),
        targetEl: document.querySelector('#accordion-example-body-1'),
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2'),
        targetEl: document.querySelector('#accordion-example-body-2'),
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3'),
        targetEl: document.querySelector('#accordion-example-body-3'),
        active: false
    },
    {
        id: 'accordion-example-heading-4',
        triggerEl: document.querySelector('#accordion-example-heading-4'),
        targetEl: document.querySelector('#accordion-example-body-4'),
        active: false
    },
    {
        id: 'accordion-example-heading-6',
        triggerEl: document.querySelector('#accordion-example-heading-6'),
        targetEl: document.querySelector('#accordion-example-body-6'),
        active: false
    }
];
/*
* accordionItems: array of accordion item objects
* options: optional
*/// options with default values
const options = {
    // alwaysOpen: true,
    activeClasses: 'bg-green text-white',
    inactiveClasses: 'text-red-600',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};


const accordion = new Accordion(accordionItems, options);
// open accordion item based on id
accordion.open('accordion-example-heading-2');

// close accordion item based on id
accordion.close('accordion-example-heading-2');

// toggle visibility of item based on id
accordion.toggle('accordion-example-heading-3');
}

$(document).ready(function() {
    $('select').niceSelect('update');
  });
 
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiperForTour = new Swiper(".mySwiperForOffers",
     {

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-ForOffers",
        prevEl: ".swiper-button-prev-ForOffers",
      },
    });
    var mySwiperForEventDetails = new Swiper(".mySwiperForEventDetails",
     {

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-event",
        prevEl: ".swiper-button-prev-event",
      },
    });
    var mySwiperForTourEvent = new Swiper(".mySwiperForTourEvent",
     {

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-TourEvent",
        prevEl: ".swiper-button-prev-TourEvent",
      },
    });
    var mySwiperForNewTravel = new Swiper(".mySwiperForNewTravel",
     {

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-NewTravel",
        prevEl: ".swiper-button-prev-NewTravel",
      },
    });
    if ($("#example")[0]){
        $(document).ready(function() {
            var table = $('#example').DataTable( {
                rowReorder: {
                    selector: 'td:nth-child(2)'
                },
                responsive: true
            } );
            var table1 = $('#example1').DataTable( {
                rowReorder: {
                    selector: 'td:nth-child(2)'
                },
                responsive: true
            } );
            var table2 = $('#example2').DataTable( {
                rowReorder: {
                    selector: 'td:nth-child(2)'
                },
                responsive: true
            } );
        } );
    }


   


    $('.tab li button').click( function() {
        $(this).parent().siblings().children().removeClass('border-[#0D2F3F] font-semibold');
        $(this).addClass('border-[#0D2F3F] font-semibold');
    });
  

    if ($("#increment")[0]){
      $(document).ready(function(){
        $('#increment').click(function(){
          var value = parseInt($('#quantity').val());
          if(value < 10){
            $('#quantity').val(value + 1);
          }
        });
        $('#decrement').click(function(){
          var value = parseInt($('#quantity').val());
          if(value > 0){
            $('#quantity').val(value - 1);
          }
        });
      });
    }

    if ($("#increment1")[0]){
      $(document).ready(function(){
        $('#increment1').click(function(){
          var value = parseInt($('#quantity1').val());
          if(value < 10){
            $('#quantity1').val(value + 1);
          }
        });
        $('#decrement1').click(function(){
          var value = parseInt($('#quantity1').val());
          if(value > 0){
            $('#quantity1').val(value - 1);
          }
        });
      });
    }
    
