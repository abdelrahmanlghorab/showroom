
$(window).on('load', function () {
$('#loading').delay(1000).fadeOut('slow');
});
$(document).ready(function () {
var $scrolltop = $('.car-top');

$scrolltop.on('click', function () {
$('html,body').animate({
scrollTop: 0
}, 800);
$(this).addClass("car-run");
setTimeout(function () {
$scrolltop.removeClass('car-run');
}, 1000);
return false;
});
$(window).on('scroll', function () {
if ($(window).scrollTop() >= 200) {
$scrolltop.addClass("show");
$scrolltop.addClass("car-down");
} else {
$scrolltop.removeClass("show");
setTimeout(function () {
$scrolltop.removeClass('car-down');
}, 300);
}
});
});
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
