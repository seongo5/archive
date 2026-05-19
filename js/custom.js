//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                    jQuery
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// =====================================
//    about_
// =====================================
$(function () {
  $("#work1 .work1_wrap .right .cod li").on("mouseenter", function () {
    $(this).find(".preview").animate({ opacity: "0" }, 500);
    $(this).find(".cod_img").addClass("active");
  });
  $("#work1 .work1_wrap .right .cod li").on("mouseleave", function () {
    $(this).find(".preview").animate({ opacity: "1" }, 500);
    $(this).find(".cod_img").removeClass("active");
  });
});

// =====================================
//    work1_Coding
// =====================================

// =====================================
//    work2_javaScript
// =====================================
$(function () {
  let total = $(".panel li").length;
  console.log(total);

  let i = 0;
  let stop;

  $(".panel li")
    .eq(i)
    .find(".txt_wrap")
    .stop()
    .animate({ top: "60%", opacity: 1 });

  start();

  function fade() {
    $(".panel li").fadeOut().removeClass("on");
    $(".panel li").eq(i).fadeIn().addClass("on");
    $(".navi li").find(".bar").removeClass("on");
    $(".navi li").eq(i).find(".bar").addClass("on");
    $(".panel li .txt_wrap").css({ top: "80%", opacity: 0 });
    $(".panel li")
      .eq(i)
      .find(".txt_wrap")
      .stop()
      .animate({ top: "60%", opacity: 1 });
  }

  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }

      fade();
    }, 5000);
  }

  $(".txt_wrap a").hover(
    function () {
      clearInterval(stop);
      $(".navi li .bar.on").addClass("paused");
    }, // 마우스 올리면 타이머 정지
    function () {
      $(".navi li .bar.on").removeClass("paused").removeClass("on");

      setTimeout(function () {
        $(".navi li").eq(i).find(".bar").addClass("on");
      }, 10);
      start();
    }, // 마우스 떼면 다시 타이머 시작
  );

  $(".navi li").on("click", function () {
    clearInterval(stop);
    i = $(this).index();
    fade();
    start();
  });
});

// =====================================
//    work3_Design
// =====================================
$(function () {
  $().on("", function () {
    $().css;
  });
});
//

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                      GSAP
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// =====================================
//    about
// =====================================
$(function () {
  const ab = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top top", // 시작 위치
      end: "bottom bottom", // 전체 애니메이션이 끝날 위치 (적절히 조절)
      scrub: 1.5,
      // markers: true,
    },
  });

  // 초기 상태 설정 (CSS에서 해도 되지만 JS에서 제어하는 것이 확실함)
  gsap.set("#about .name .simple, .shape_wrap, .desc_wrap .desc", {
    opacity: 0,
    y: 20,
  });

  ab.to("#about .name_wrap .name .full", { opacity: 0, y: -20, duration: 2 })

    // simple 나타남 (full이 사라질 때쯤 시작)
    .to(
      "#about .name_wrap .name .simple",
      { opacity: 1, y: 0, duration: 2 },
      "-=0.5",
    )

    // d1 설명 나타남
    .to("#about .desc_wrap .d1", {
      opacity: 1,
      y: 0,
      display: "block",
      duration: 2,
    })

    // simple 사라지면서 도형들 등장
    .to(
      "#about .name_wrap .name .simple",
      { opacity: 0, scale: 0.5, duration: 1 },
      "+=0.5",
    )
    .to("#about .shape_wrap", { opacity: 1, y: 0, duration: 1 }, "-=0.5")
    .to("#about .desc_wrap .d1", { opacity: 0, y: -20, duration: 1, delay: 1 })

    .to("#about .shape_wrap .tri", {
      marginLeft: "7rem",
      marginRight: "7rem",
      duration: 1.5,
    })

    // d2 설명과 간격 조정
    .to("#about .shape_wrap .squ", {
      scale: "1.5",
      duration: 1.5,
    })

    .to("#about .shape_wrap .squ img ", { animationPlayState: "running" })
    .to("#about .desc_wrap .d2", {
      opacity: 1,
      y: 0,
      display: "block",
      duration: 1,
    })
    .to("#about .desc_wrap .d2", { opacity: 0, y: -20, duration: 1, delay: 1 })
    .to("#about .shape_wrap .squ", {
      scale: "1",
      duration: 1.5,
    })

    // d3 설명
    .to("#about .shape_wrap .tri", {
      scale: "1.5",
      duration: 1.5,
    })

    .to("#about .shape_wrap .tri img ", { animationPlayState: "running" })

    .to("#about .desc_wrap .d3", {
      opacity: 1,
      y: 0,
      display: "block",
      duration: 1,
    })
    .to("#about .desc_wrap .d3", { opacity: 0, y: -20, duration: 1, delay: 1 })

    .to("#about .shape_wrap .tri", {
      scale: "1",
      duration: 1.5,
    })

    // d4 설명 및 마무리
    .to("#about .shape_wrap .cir", {
      scale: "1.5",
      duration: 1.5,
    })
    .to("#about .shape_wrap .cir img ", { animationPlayState: "running" })

    .to("#about .desc_wrap .d4", {
      opacity: 1,
      y: 0,
      display: "block",
      duration: 1,
    })
    .to("#about .desc_wrap .d4", { opacity: 0, y: -20, duration: 1, delay: 1 })
    .to("#about .shape_wrap .cir", {
      scale: "1",
      duration: 1.5,
    })

    .to("#about .shape_wrap .tri", {
      marginLeft: "1.5rem",
      marginRight: "1rem",
      duration: 1.5,
    })
    .to("#about .shape_wrap", { y: -100, scale: 0.8, duration: 1.5 }, "+=0.5")

    .to("#about .desc_wrap .d5", {
      opacity: 1,
      y: -180,
      display: "block",
      duration: 3,
    })
    .to("#about .desc_wrap .d5", { opacity: 0, y: -220, duration: 1, delay: 1 })
    .to("#about .shape_wrap", { y: 0, scale: 2, duration: 1.5 }, "+=0.5")

    .to("#about .scr", { y: 100, scale: 0, duration: 1.5, delay: 3 })
    .to("#about", { opacity: 0, duration: 1.5 });
});

//

// =====================================
//    profile
// =====================================

$(function () {
  const pr = gsap.timeline({
    scrollTrigger: {
      trigger: "#profile",
      start: "top top", // 시작 위치
      end: "bottom bottom", // 전체 애니메이션이 끝날 위치 (적절히 조절)
      scrub: 1.5,
      markers: true,
    },
  });
  gsap.set("#profile .pro1", { opacity: 0, x: -30 });
  gsap.set("#profile .pro2", { opacity: 0, y: 30 });
  gsap.set("#profile .pro3", { opacity: 0, x: 50 });
  gsap.set("#profile .pro3 .sec_wrap", { opacity: 0, y: 30 });
  gsap.set(".tran1", { opacity: 0, y: 1200 });

  pr.to("#profile .pro1", { opacity: 1, x: 0, duration: 1 })
    .to("#profile .pro2", { opacity: 1, y: 0, duration: 1 })
    .to("#profile .pro3", { opacity: 1, x: 0, duration: 1 })
    .to("#profile .pro3 .school .sec_wrap", { opacity: 1, y: 0, duration: 1 })
    .to("#profile .pro3 .license .sec_wrap", { opacity: 1, y: 0, duration: 1 })
    .to("#profile .pro3 .skill .sec_wrap", { opacity: 1, y: 0, duration: 1 })
    .to(".tran1", { opacity: 1, y: 0, duration: 3 })
    .to(".tran1", { scale: 25, duration: 1.5, ease: "power2.in" }, "-=0.2")
    .to(".tran1", { opacity: 1, duration: 2 });
});

//

// =====================================
//    work1_coding
// =====================================

$(function () {
  const work12 = gsap.timeline({
    scrollTrigger: {
      trigger: "#work_container",
      start: "top top", // 시작 위치
      end: "bottom bottom", // 전체 애니메이션이 끝날 위치 (적절히 조절)
      scrub: 1.5,
      markers: true,
    },
  });
  gsap.set("#work1_wrap, #work1 .left, #work1 .right ", { opacity: 0, x: -30 });
  gsap.set("#work2_wrap, #work2 .left", { opacity: 0, x: -30 });
  gsap.set("#work2 .right", { opacity: 0, x: 200 });

  // 코딩 sectionm
  work12
    .to("#work1_wrap", { opacity: 1, x: 0, duration: 0.1 })
    .to("#work1 .left", { opacity: 1, x: 0, duration: 1 }, "-=1")
    .to("#work1 .right", { opacity: 1, x: 0, duration: 1 }, "-=0.5")
    .to({}, { duration: 2 }); // 컨텐츠 잠시 머무는 시간

  // 코딩 sectionm -> 자바스크립트 section
  work12.to("#work2", {
    translateX: "0vw",
    ease: "none",
    duration: 3, // 숫자가 클수록 스크롤을 더 많이 내려야 부드럽게 덮어집니다.
  });

  // 자바스크립트 section
  work12
    .to("#work2 .left", { opacity: 1, x: 0, duration: 1 })
    .to("#work2 .work2_wrap", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "none",
      duration: 3, // 숫자가 클수록 스크롤을 더 많이 내려야 부드럽게 덮어집니다.
    });

  work12
    .to("#work2_wrap", { opacity: 1, x: 0, duration: 2 })
    .to("#work2 .right", { opacity: 1, x: 0, duration: 1 })
    .to({}, { duration: 4 }) // 컨텐츠 잠시 머무는 시간

    // ++
    .to(
      "#work2 .svg_line_layer .draw_line",
      {
        strokeDashoffset: 0,
        ease: "none",
        duration: 3,
      },
      "-=3",
    )
    .to({}, { duration: 4 });

  // ++
  work12
    // 자스 구경이 끝나고 스크롤을 더 내리면,
    // 그 사선(.draw_line)의 두께(strokeWidth)를 수백 배로 키워 사선 방향 그대로 화면을 집어삼킵니다!
    // 편법 장막을 안 썼기 때문에 위로 올릴 때도 굵어졌던 선이 다시 얇아지면서 위로 완벽하게 되감깁니다.
    .to("#work2 .svg_line_layer .draw_line", {
      strokeWidth: 300 /* 화면 전체를 여백 없이 완벽하게 채울 수 있는 거대한 두께 수치 */,
      ease: "power2.inOut" /* 묵직하고 고급스럽게 화면을 채우는 모션 */,
      duration: 3 /* 굵어지며 화면을 가득 채우는 여유 스크롤 시간 */,
    })

    // 화면이 완벽하게 가려진 이 타이밍에 아래 배치된 #work3 디자인 섹션을 개방합니다.
    .to({}, { duration: 1 });
});

//

// =====================================
//    work2_javaScript
// =====================================
// $(function () {
//   ScrollTrigger.create({
//     trigger: "#work2",
//     start: "center center", // #work2가 화면 중간쯤 올라왔을 때
//     end: "center center",
//     toggleClass: { targets: "#work2 .work2_wrap", className: "active" }, // 해당 구역에 머무는 동안 active 클래스를 붙여줌
//     markers: true,
//   });
// });
// =====================================
//    work3_Design
// =====================================

$(function () {
  const work3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#work3",
      start: "top top", // 시작 위치
      end: "bottom bottom", // 전체 애니메이션이 끝날 위치 (적절히 조절)
      scrub: 1.5,
      markers: true,
    },
  });
  gsap.set("#work3_wrap, #work3 .left, #work3 .right ", { opacity: 0, x: -30 });

  work3
    .to("#work3_wrap", { opacity: 1, x: 0 })
    .to("#work3 .left", { opacity: 1, x: 0 })
    .to("#work3 .right", { opacity: 1, x: 0 })
    .to({}, { duration: 3 });
});

//

// =====================================
//    footer_Contact
// =====================================

$(function () {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top top", // 시작 위치
      end: "bottom bottom", // 전체 애니메이션이 끝날 위치 (적절히 조절)
      scrub: 1.5,
      markers: true,
    },
  });
});

//
