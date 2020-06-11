// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// SMOOTH SCROLLING


// CHANGE NAVBAR

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass ('change-color');
    }
    else {
        $('nav').removeClass ('change-color');
    }
}) 

// CHANGE NAVBAR


// SCROLL TRIGER

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".header",
//         start: "center center", // La animacion empieza en este punto
//         end: "bottom top", // La animacion termina en este punto
//         markers: false,
//         scrub : true
//     }
// })
// .from(".title-me", {y : innerWidth * 1})
// .from(".p-me", {y : innerWidth * 1})
// .from(".imagen", {x : innerWidth * -1})


// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".me",
//         start: "top top", // La animacion empieza en este punto
//         end: "center bottom", // La animacion termina en este punto
//         markers: true,
//         scrub : true
//     }
// })
// .from(".i-1", {y : innerWidth * 1})
// .from(".i-2", {y : innerWidth * 1})
// .from(".i-3", {y : innerWidth * 1})

// SCROLL TRIGER