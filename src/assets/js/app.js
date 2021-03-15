window.onload = function () {
    setInterval(function () {
        $('body').addClass('loaded');
    }, 3000);
};
$('#home_slider_text').carousel({
    interval: false,
    ride: false,
    touch: true
});

$('#expand_menu_icon').click(function () {
    $('#expand_menu').hide();
    // document.getElementById("expand_menu").style.display = "none";
    $('.expand_menu').toggleClass('active');
});

$('.trash_icon').click(function () {
    $(this).closest('li').remove();
});
$(".sub-category-item-head .btn-group .btn").click(function () {
    //  $(".sub-category-item-head .btn-group .btn.active").removeClass("active");
    $(this).toggleClass("active");
});

$(".carousel-item .bookmark_icon a").click(function () {
    $(this).toggleClass("active");
});

/**********Pop-up**********/
$("a#open_popup").click(function () {
    $(".pop_up_form").show();
});
$(".close").click(function () {
    $(".pop_up_form").hide();
});
$('#numberPlateSlider').carousel({
    interval: false,
    pause: true
});
/************* Flash Card  **************/

var totalSteps = 3;
$('#flashcard-slider').carousel({
    interval: false,
    wrap: false
});
$('#flashcard-slider').on('slide.bs.carousel', function (e) {
    var step = $(e.relatedTarget).data('step');
    var percent = (parseInt(step) / totalSteps) * 100;

    $('.progress-bar').css({width: percent + '%'});
    $('.number span').text(step);

})

$('.flip').click(function () {
    $(this).find('.card').toggleClass('flipped');
    return true;
});


/*********time & Date*********** */


function showTime() {
    if (!$('#MyClockDisplay').get(0))
        return;
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;

    $('#MyClockDisplay').get(0).innerText = time;
    $('#MyClockDisplay').get(0).textContent = time;


    // document.getElementById("MyClockDisplay").innerText = time;
    // document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();

