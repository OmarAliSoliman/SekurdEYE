// var layeranimation = gsap.timeline();
$(document).ready(function () {
  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }

  if ($(".our_services_cards_slider").length) {
    $(".our_services_cards_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true,
      speed: 900,
      infinite: true,
      cssEase: "ease-in-out",
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      responsive: [
        // {
        //   breakpoint: 1920,
        //   settings: {
        //     slidesToShow: 5,
        //     // centerMode: false,
        //   },
        // },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
            centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
          },
        },
      ],
    });
  }

  // products_section_slider
  if ($(".we_secure_slider").length) {
    $(".we_secure_slider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 4000,
      infinite: true,
      cssEase: "linear",
      autoplaySpeed: 0,
      centerMode: true,
      autoplay: true,
      // loop: true,
      focusOnSelect: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.8,
            // centerMode: false,
          },
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".category_slider_listing").length) {
    $(".category_slider_listing").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 200,
      infinite: true,
      css: "linear",
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      // nextArrow: $(".custom_category_arrow .next"),
      // prevArrow: $(".custom_category_arrow .prev"),
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 7,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".horizintal_slider").length) {
    $(".horizintal_slider").slick({
      asNavFor: ".linked_to_vertical_slider",
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      arrows: true,
      speed: 500,
      cssEase: "linear",
      nextArrow: $(".customeer_testemonials .next_arrow"),
      prevArrow: $(".customeer_testemonials .prev_arrow"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            vertical: false,
            verticalSwiping: false,
            centerMode: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // nextArrow: $(".customeer_testemonials .next_arrow"),
            // prevArrow: $(".customeer_testemonials .prev_arrow"),
          },
        },
        {
          breakpoint: 600,
          settings: {
            vertical: false,
            verticalSwiping: false,
            centerMode: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // nextArrow: $(".customeer_testemonials .next_arrow"),
            // prevArrow: $(".customeer_testemonials .prev_arrow"),
          },
        },
      ],
    });
    $(".linked_to_vertical_slider").slick({
      asNavFor: ".horizintal_slider",
      slidesToShow: 1,
      arrows: false,
      vertical: true,
      speed: 500,
      cssEase: "linear",
      verticalSwiping: true,
    });
  }

  if ($(".acwnologe_by_slider").length) {
    $(".acwnologe_by_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true,
      speed: 800,
      infinite: true,
      cssEase: "ease-in-out",
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      // nextArrow: $(".custom_category_arrow .next"),
      // prevArrow: $(".custom_category_arrow .prev"),
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".custonm_navbar").length) {
    $(".custonm_navbar .login_sign .backet_icon").on("click", function (e) {
      e.preventDefault();
      $(".your_cart_modal").addClass("active_your_cart_modal");
      $(".active_overlay").addClass("active_active_overlay");
    });
  }

  if ($(".your_cart_modal").length) {
    $(".your_cart_modal .head button").on("click", function (e) {
      e.preventDefault();
      $(".your_cart_modal").removeClass("active_your_cart_modal");
      $(".active_overlay").removeClass("active_active_overlay");
    });
  }

  if ($(".card-light").length) {
    const cardLight = document.querySelectorAll(".card-light");

    const UPDATE = ({ x, y }) => {
      cardLight.forEach((element) => {
        const BOUNDS = element.getBoundingClientRect();
        const posX = x - BOUNDS.x;
        const posY = y - BOUNDS.y;
        const ratioX = posX / BOUNDS.width;
        const ratioY = posY / BOUNDS.height;
        element.style.setProperty("--ratio-x", ratioX);
        element.style.setProperty("--ratio-y", ratioY);
      });
    };

    document.body.addEventListener("pointermove", UPDATE);
  }

  if ($(".typed_element").length) {
    var typed = new Typed(".typed_element", {
      strings: ["Protection", "Security", "Team"],
      typeSpeed: 100,
      smartBackspace: true,
      backSpeed: 80,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "_",
    });
  }

  if ($("#scene").length) {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  }

  if ($(".fact_body").length) {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    // Select all h5 elements inside .fact_body and observe each
    const elements = document.querySelectorAll(".fact_body h5");
    elements.forEach((el) => IO.observe(el));
  }

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  // layeranimation.play();
  setTimeout(() => {
    // animateFromLeft();
    $(".splach").addClass("splashscreen_none");
    $("html").removeClass("splach_loadin");
  }, 2000);
  var currentDir = $("a").css("direction");
  console.log(currentDir);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "left-front" : "right-front",
    },
    theme: "light",
  });
});
