$(window).load(function() {
    $("#status").fadeIn();
    $("#preloader").fadeIn();
    $.get(url, data, function () {
        $("#status").fadeOut();
        $("#preloader").fadeOut();
    });
})
