if ((location.pathname.split("/")[1]) !== ""){
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
} else {
$('nav #home').addClass('active');
}