// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// SMOOTH SCROLLING //


// CHANGE NAVBAR //

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass ('change-color');
    }
    else {
        $('nav').removeClass ('change-color');
    }
}) 

// CHANGE NAVBAR //