// VANILLA JAVASCRIPT

// TYPING

let i=0;
let text = "Hello everyone! I'm a software passionate, university student, self-taught, entrepreneur and CEO of FGM, a company with the ability to change your business and your life in a simple and fast way. Everything I do, I do with passion, love, hard work and effort. Are you ready?"
let textF = document.getElementById('text-founder');

function typing() {
    if (i<text.length) {
        textF.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,70)
    }
}

typing();

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


// SCROLL REVEAL

window.sr = ScrollReveal ();
        sr.reveal ('.img-header', {
            duration: 5000,
            distance: '300px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.img-me', {
            duration: 4000,
            origin: 'left',
            distance: '400px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.img-responsive', {
            duration: 4000,
            origin: 'left',
            distance: '400px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.number-m', {
            duration: 4000,
            origin: 'bottom',
            distance: '500px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.footer-item-1', {
            duration: 4000,
            origin: 'top',
            distance: '-20px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.footer-item-2', {
            duration: 4000,
            origin: 'top',
            delay: '1000',
            distance: '-20px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.footer-item-3', {
            duration: 4000,
            origin: 'top',
            delay: '2000',
            distance: '-20px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.footer-item-4', {
            duration: 4000,
            origin: 'top',
            delay: '3000',
            distance: '-20px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.i-2', {
            duration: 2000,
            origin: 'right',
            distance: '1000px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.i-1', {
            duration: 2000,
            origin: 'right',
            delay: '1000',
            distance: '1000px'
});

window.sr = ScrollReveal ();
        sr.reveal ('.i-3', {
            duration: 2000,
            origin: 'right',
            delay: '2000',
            distance: '1000px'
});

// SCROLL REVEAL