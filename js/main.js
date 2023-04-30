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
if ($("#example")[0]) {
  $(document).ready(function () {
    var table = $('#example').DataTable({
      rowReorder: {
        selector: 'td:nth-child(2)'
      },
      responsive: true
    });
    var table1 = $('#example1').DataTable({
      rowReorder: {
        selector: 'td:nth-child(2)'
      },
      responsive: true
    });
    var table2 = $('#example2').DataTable({
      rowReorder: {
        selector: 'td:nth-child(2)'
      },
      responsive: true
    });
  });
}





$('.tab li button').click(function () {
  $(this).parent().siblings().children().removeClass('border-[#0D2F3F] font-semibold');
  $(this).addClass('border-[#0D2F3F] font-semibold');
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

$(document).ready(function () {
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

  // Select2
  // location Select
  // $('.location-select').prepend('<option selected></option>').select2({
  //   dropdownParent: '.location-select-wrapper',
  //   // minimumResultsForSearch: -1,
  //   templateResult: addLocationIcon,
  //   placeholder: "Where are you going?",
  // });

  // Date range
  $('input[name="checkInOutRange"]').daterangepicker({
    opens: 'center',
    autoApply: true
  });

  // $('.guest-select-field').on('click', function () {
  //   $('.guest-select').toggleClass('show');
  // })

  // Increment, decrement
  var buttonPlus = $(".increment");
  var buttonMinus = $(".decrement");
  var buttonPlus = buttonPlus.click(function () {
    var $n = $(this)
      .parent(".select-actions")
      .find(".room-value");
    $n.val(Number($n.val()) + 1);
  });
  var buttonMinus = buttonMinus.click(function () {
    var $n = $(this)
      .parent(".select-actions")
      .find(".room-value");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount - 1);
    }
  });

  // Set guest Number
  $('#getGuestNumber').on('click', function() {
    let guestRooms = $('.guest-room-input').val();
    let guestAdults = $('.guest-adult-input').val();
    let guestChilds = $('.guest-child-input').val();

    $('.guest-rooms').text(guestRooms);
    $('.guest-adults').text(guestAdults);
    $('.guest-childs').text(guestChilds);
  });

   // Reset guest number
   $('#resetGuestNumber').on('click', function() {
    $('.guest-room-input').val(0);
    $('.guest-adult-input').val(0);
    $('.guest-child-input').val(0);

   $('.guest-rooms').text(0);
   $('.guest-adults').text(0);
   $('.guest-childs').text(0);
 });

  // Set room number
  $('#setRoomNumber').on('click', function() {
    let roomNumber = $('.room-number-input').val();
    $('.room-number').text(roomNumber);
  })

  // Reset Room number
  $('#resetRoomNumber').on('click', function() {
    $('.room-number-input').val(0);
    $('.room-number').text(0);
 });

  // Room select dropdown 
  $('.guest-select-box').on('click', function () {
    $('.guest-select').toggleClass('show');
    $('.guest-select-box').toggleClass('toggle-icon');
  })

  $('.room-select-box').on('click', function () {
    $('.room-select').toggleClass('show');
    $('.room-select-box').toggleClass('toggle-icon')
  })

  // Location select
  $('.location-select').prepend('<option selected></option>').select2({
    dropdownParent: '.location-select-wrapper',
    templateResult: addLocationIcon, 
    placeholder: "Where are you going?",
  });

  $('.location-select-2').prepend('<option selected></option>').select2({
    dropdownParent: '.location-select-wrapper',
    templateResult: addLocationIcon, 
    placeholder: "Where are you going?",
  });

  // Location icon
  function addLocationIcon(icon) {
    return $('<span class="location-icon"><img src="../images/icons/marker-icon.svg" /> ' + icon.text + '</span>');
  };



  // Hide on document click
  $(document).on('click', function (e) { // Hides the div by clicking any where in the screen
    if (!$(e.target).closest('.guest-select-btn').length) {
      $('.guest-select').removeClass('show');
      $('.guest-select-box').removeClass('toggle-icon')
    }
  });

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


