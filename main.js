$(document).ready(function () {
    var breakTime = parseInt($('#break-time').html());
    var clockTime = parseInt($('#clock-time').html());
    var minutes = clockTime;
    var seconds = 0;
    var isPaused = false;
    var timerInProgress = false;

    // ---- Hide elemenets on load -----
    $('#reset-btn').hide();
    $('#pause-btn').hide();
    $('#continue-btn').hide();

    // ---- Increase/decrease breaktime  -----
    $('#decrease-break').click(function () {
        if (breakTime > 0) {
            breakTime -= 1;
            console.log('break decrease')
            $('#break-time').html(breakTime);
        }
    });
    $('#increase-break').click(function () {
        breakTime += 1;
        $('#break-time').html(breakTime);
    });

    // ---- Increase/decrease clock time ----
    $('#decrease-clock').click(function () {
        console.log(clockTime)
        if (clockTime > 1) {
            clockTime -= 1;
            $('#clock-time').html(clockTime + ":00");
        }
        minutes = clockTime;
    })
    $('#increase-clock').click(function () {
        clockTime += 1;
        $('#clock-time').html(clockTime + ":00");

    })

    // ---- Start the timer ----
    function timerCountdown() {
        console.log('breaktiem', breakTime)
        if (!isPaused) {
            if (minutes == 0 & seconds == 0) {
                format(minutes, seconds);
                // Timer continues
            } else {
                if (minutes > 0 && seconds === 0) {
                    minutes--;
                    seconds = 59;
                    format(minutes, seconds)
                } else {
                    seconds--;
                    format(minutes, seconds);
                }
            }
        }
        // ---- Format elapsed time ----
        function format(min, sec) {
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            $('#clock-time').html(min + ":" + sec)
        }
    }

    // ---- Clock timer countdown ----
    $('#start-btn').click(function () {
        console.log('Pomodoro timer started.')
        $('#adjust-clock').hide();
        $('#start-btn').hide();
        $('#timer-text').html("Pomodoro clock in session:");
        // $('.controls').fadeOut();
        $('#pause-btn').fadeIn()
        var counter = setInterval(timerCountdown, 1000);
    })

    // ---- Pause button ----
    $('#pause-btn').click(function () {
        isPaused = true;
        console.log('Pause button was clicked')
        $('#timer-text').html("Pomodoro clock has been paused.");
        $('#continue-btn').show();
        $('#pause-btn').hide();
    })

    // ---- Continue button ----
    $('#continue-btn').click(function () {
        isPaused = false;
        console.log('continue button clicked')
        $('#continue-btn').hide();
        $('#pause-btn').show();
    })
});