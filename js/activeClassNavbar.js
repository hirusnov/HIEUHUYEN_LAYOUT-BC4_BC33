if ((location.pathname.split("/")[1]) !== ""){
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    if ($('.dropdown-item').hasClass('active')) {
        $('#navbarDropdown').addClass('active');
    }
} else {
    $('nav #home').addClass('active');
}