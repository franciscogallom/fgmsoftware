// VANILLA JAVASCRIPT

// TYPING

// let i=0;
// let text = 'website development to boost your business.'

// function typing() {
//     if (i<text.length) {
//         document.getElementById('text-h').innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typing,75)
//     }
// }

// typing();

// TYPING


// VANILLA JAVASCRIPT


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

const reveal = gsap.utils.toArray('.title-me');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%"
    })
})

const reveal2 = gsap.utils.toArray('.p-me');
reveal2.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%"
    })
})

const reveal3 = gsap.utils.toArray('.title-m');
reveal3.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%"
    })
})

const reveal4 = gsap.utils.toArray('.text-m');
reveal4.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%"
    })
})

const reveal5 = gsap.utils.toArray('.text-responsive');
reveal5.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%"
    })
})

const reveal6 = gsap.utils.toArray('.p-responsive');
reveal6.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%"
    })
})

// SCROLL TRIGER