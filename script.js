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

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Thank you for your message, " + name + "!");
        document.getElementById('contactForm').reset();
    }
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


