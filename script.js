function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locomotive();

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",

    start: "top 30%",
    end: "top 0",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "aashik"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "aashik"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "aashik"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",

    start: "top -123%",
    end: "top -126%",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: " #fff",
});

var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x + 10,
    y: dets.y + 10,
  });
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",

    start: "top -490%",
    end: "top -500%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

var box = document.querySelectorAll(".box");
box.forEach(function (d) {
  d.addEventListener("mouseenter", function () {
    var atribute = d.getAttribute("data-img");
    console.log(atribute);
    (cursor.style.width = "330px"),
      (cursor.style.height = "250px"),
      (cursor.style.borderRadius = "0%");
    cursor.style.backgroundImage = `url(${atribute})`;
  });
  d.addEventListener("mouseleave", function () {
    var atribute = d.getAttribute("data-img");
    console.log(atribute);
    (cursor.style.width = "15px"),
      (cursor.style.height = "15px"),
      (cursor.style.borderRadius = "50%");
    cursor.style.backgroundImage = "none";
  });
});

var red = document.querySelector(".red");
var h4 = document.querySelectorAll(" .nav-part2 h4");
h4.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    (red.style.opacity = "1"), (red.style.display = "block");
    cursor.style.opacity = "99";
  });
  e.addEventListener("mouseleave", function () {
    (red.style.opacity = "0"), (red.style.display = "none");
  });
});
