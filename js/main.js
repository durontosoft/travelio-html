(function ($) {
  "use strict";
  var Traveli = {
    m: function (e) {
      Traveli.d();
      Traveli.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Traveli.mobileMenu();
      Traveli.accordion();
      Traveli.tabOne();
      Traveli.OTP();
    },
    // moblie method toggle button function
    mobileMenu: function () {
      $(window).on("load", function () {
        // menu toggle button
        const menuOpen = document.getElementById("menu-toggle-open-icon");
        const menuClose = document.getElementById("menu-toggle-close-icon");
        const navbar = document.getElementById("navbar");
        // const menuToggleBtnTwo = document.getElementById("menu-toggle-two");
        // const menuToggleBtn = document.getElementById("menu-toggle");

        menuOpen?.addEventListener("click", () => {
          navbar.classList.add("scale-x-1", "top-0");
          navbar.classList.remove("-top-[200%]", "scale-x-0");
        });
        menuClose?.addEventListener("click", () => {
          console.log("click");
          navbar.classList.remove("scale-x-1", "top-0");
          navbar.classList.add("scale-x-0", "-top-[200%]");

        });
      });
    },
    accordion: function () {
      $(window).on("load", function () {
        if ($("#accordion-example-heading-1")[0]) {
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
      })
    },
 
    tabOne: function () {
      $(window).on("load", function () {
        $('.tab li button').click(function () {
          $(this).parent().siblings().children().removeClass('border-[#0D2F3F] font-semibold');
          $(this).addClass('border-[#0D2F3F] font-semibold');
        });
      })
    },
    OTP: function () {
      $(window).on("load", function () {
        // Attach an event listener to all OTP input fields except the last one
        $('input[id^="otp-input"]').not(':last').on('input', function () {
          var digit = $(this).val();
          // If the input length is 1 and there is a next input field, move the focus to the next input field
          if (digit.length == 1 && $(this).next().length > 0) {
            $(this).next().focus();
          }
        });

        // Attach an event listener to the last OTP input field
        $('#otp-input-5').on('input', function () {
          var digit = $(this).val();
          // If the input length is greater than 1, restrict the input to one character
          if (digit.length > 1) {
            $(this).val(digit.slice(0, 1));
          }
        });
      })
    }



  };
  Traveli.m();
})(jQuery, window);

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


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});










if ($("#increment")[0]) {
  $(document).ready(function () {
    $('#increment').click(function () {
      var value = parseInt($('#quantity').val());
      if (value < 10) {
        $('#quantity').val(value + 1);
      }
    });
    $('#decrement').click(function () {
      var value = parseInt($('#quantity').val());
      if (value > 0) {
        $('#quantity').val(value - 1);
      }
    });
  });
}

if ($("#increment1")[0]) {
  $(document).ready(function () {
    $('#increment1').click(function () {
      var value = parseInt($('#quantity1').val());
      if (value < 10) {
        $('#quantity1').val(value + 1);
      }
    });
    $('#decrement1').click(function () {
      var value = parseInt($('#quantity1').val());
      if (value > 0) {
        $('#quantity1').val(value - 1);
      }
    });
  });
}

$(document).ready(function() {
         
  $('.image-popup').on('click', function(event) {
  event.preventDefault();
  
  var gallery = $(this).attr('href');
  
  $(gallery).magnificPopup({
  delegate: 'a',
  type:'image',
  gallery: {
      enabled: true
  }
  }).magnificPopup('open');
  });
  
  });
  
$('.selectInput').select2({
  placeholder: 'Select an option'
});
$('.selectInputCountry').select2({
  placeholder: 'Select an option'
});
$('.selectInputNumber').select2({
  placeholder: 'Select an option'
});


