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

  if ($(".mySwiper").length) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1, // Show 1 full slide and a portion of the next
      spaceBetween: 1, // Spacing between slides
      centeredSlides: false, // Center the active slide
      grabCursor: false,
      effect: "cards",
      initialSlide: 2,
      allowTouchMove: false,
      lazy: true,
    });

    // Function to go to the target slide
    function goToSlide(index, e) {
      swiper.slideTo(index);
      $(e).addClass("dotactive");
      $(e).siblings().removeClass("dotactive");
    }
    $(".industries li").on("click", function () {
      var index = $(this).index();
      goToSlide(index, this);
      $(".industries video").each(function () {
        $(this).get(0).pause();
      });
      // console.log(
      //   $($($(".swiper-wrapper .swiper-slide")[index]).get(0)).find("video")[0]
      // );
      $($($(".swiper-wrapper .swiper-slide")[index]).get(0))
        .find("video")[0]
        .play();
    });
  }

  if ($(".industries").length) {
    $(".industries video").each(function () {
      $(this).get(0).pause();
    });
    console.log($($($(".industries video")[2]).get(0))[0]);
    $($(".dotactivevideo").get(0)).find("video")[0].play();
  }

  if ($(".scheduleButton").length) {
    document.querySelectorAll(".scheduleButton").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        Calendly.initPopupWidget({
          url: "https://calendly.com/sekurd?primary_color=1a43f7",
        });
        return false;
      });
    });
  }

  if ($(".certificate_proffesional_slider").length) {
    $(".certificate_proffesional_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 7,
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

  if ($(".team_certificate_slider").length) {
    $(".team_certificate_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 7,
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

  if($(".aknowlged_by_slider").length){
    $(".aknowlged_by_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
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

  AOS.init();
});

window.onload = function () {
  Calendly.initBadgeWidget({
    url: "https://calendly.com/sekurd?primary_color=1a43f7",
    text: "Talk to us",
    color: "#0069ff",
    textColor: "#ffffff",
    branding: false,
  });
};

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
