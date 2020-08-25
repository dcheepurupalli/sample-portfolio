import fullpage from "fullpage.js"
import gsap from "gsap";


var fullPageInstance = new fullpage('#fullPage', {
  autoScrolling: true,
  navigation: true,
  anchors: ['home', 'about', 'portfolio', 'hello'],
  navigationTooltips: ['Home', 'About Me', 'Portfolio', 'Say Hello'],
  scrollingSpeed: 700,
});


var tl = gsap.timeline();
tl.from(".underline", { duration:0.5, x: 100, opacity:0 })
tl.from(".center-image-container", { duration: 0.5, y: 100, opacity: 0 }, "-=0.3")
tl.from(".hero-title", { duration: 0.5, x: 100, opacity: 0 }, "-=0.2")
tl.from(".hero-title-content", { duration: 0.5, x: 100, opacity: 0 }, "-=0.4")


// var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave',
//         duration: "200%" // this works just fine with duration 0 as well
//         // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//         // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//     }
// });

// var slides = document.querySelectorAll("section");

// // create scene for every slide
// for (var i = 0; i < slides.length; i++) {
//     new ScrollMagic.Scene({
//         triggerElement: slides[i]
//     })
//         .setPin(slides[i], { pushFollowers: false })
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
// }
