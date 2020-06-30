let color1 = '#191919';
let color2 = '#fff';
let color3 = '#cf0';

// VANILLA JAVASCRIPT


// let btnShow = document.getElementById('btn-show');
// let textParrafo = document.getElementById('parrafo');

// function changeText () {
//     textParrafo.innerHTML = '"Si tu negocio no está en internet, no existe". Bill Gates.';
//     btnShow.remove();
// }

// btnShow.onclick = changeText;


// TYPING

let i=0;
let text = 'website development to boost your business.'

function typing() {
    if (i<text.length) {
        document.getElementById('text-h').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,75)
    }
}

typing();

// TYPING

// VANILLA JAVASCRIPT

// SHADOW NUMBER

// let num1 = document.getElementById('number-m1');
// let num2 = document.getElementById('number-m2');
// let num3 = document.getElementById('number-m3');
// let num4 = document.getElementById('number-m4');
// let num5 = document.getElementById('number-m5');

// let shadow = '';

// for (let i=0; i < 750; i++) {
//     shadow +=(shadow? ',' : '')+i*1+'px '+ i*1+'px 1px #698300'
// }

// num1.style.textShadow = shadow;
// num2.style.textShadow = shadow;
// num3.style.textShadow = shadow;
// num4.style.textShadow = shadow;
// num5.style.textShadow = shadow;

// SHADOW NUMBER



// Ejemplo de addEventListener
// btnShow.addEventListener('mouseover', function () {
//     textHero.style.color = color2});

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