// Smooth scrolling for navigation links
$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Scroll to Top Button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
scrollToTopBtn.addEventListener('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});



// Animated Statistics Counter
$(window).scroll(function () {
    var hT = $('#skills').offset().top,
        hH = $('#skills').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
        $('.progress-bar').each(function () {
            $(this).css('width', $(this).attr('aria-valuenow') + '%');
        });
    }
});


// Lightbox Gallery initialization
$(document).on('click', '[data-lightbox]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


