$(document).ready(function () {
    // ------ Global vars -----

    var defaultBreak = 5;
    var currentMin = parseInt($('#current-min').html()); // Get string val and parse.
    var currentSec = parseInt($('#current-sec').html());
    var currentBreak = parseInt($('#break-time').html());
    console.log(currentMin)

    // ------- Hide reset until timer starts ------ 
    $('#reset-time').hide();
    $('#pause-time').hide();

    // ------- Increase / decrease POMODORO TIME -----
    $('#decrease-time').click(function () {
        // Timer cannot be negative seconds
        if (currentMin > 0) {
            currentMin -= 5;
            console.log(currentMin);
            $('#current-min').html(currentMin);
        }
    })

    $('#increase-time').click(function () {
        currentMin += 5;
        console.log(currentMin);
        $('#current-min').html(currentMin);
    })

    // ------- Start timer (reset button will fade in) -----
    $('#start-time').click(function () {
        var updateSeconds = function (seconds) {
            $('#current-sec').html(seconds);
        }

        var counter = setInterval(function timer() {
            if (currentMin > 0) {
                currentSec = 60;
            }
            if (currentSec > 0) {
                currentSec--;
            }
            updateSeconds(currentSec);
        }, 1000)
    });

    // ------- Reset button will set time to default 20 ------
    $('#reset-time').click(function () {
        currentMin = "20";
        $('#current-min').html(currentMin);
    })


    // ------- Increase / decrease BREAK TIME -----
    $('#decrease-break').click(function () {
        // Timer cannot be negative seconds
        if (currentBreak > 0) {
            currentBreak -= 5;
            console.log(currentBreak);
            $('#break-time').html(currentBreak);
        }
    })

    $('#increase-break').click(function () {
        currentBreak += 5;
        console.log(currentBreak);
        $('#break-time').html(currentBreak);
    })

});