$(document).ready(function () {
    var defaultTime = 20;
    var breakTime = parseInt($('#break-time').html());
    var clockTime = parseInt($('#clock-time').html());
    var minutes = defaultTime;
    var seconds = 0;
    var isPaused = false;
    var earlyTermination = false;
    // ---- Hide elemenets on load -----
    $('#reset-btn, #pause-btn, #continue-btn, #end-btn').hide();

    // ---- Increase/decrease breaktime  -----
    $('#decrease-break').click(function () {
        if (breakTime > 1) {
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

    // ---- Countdown / format ----
    function timerCountdown() {
        console.log('timerCountdown is running..')
        if (!isPaused) {
            if (minutes == 0 & seconds == 0) {
                format(minutes, seconds);
                // -- Timer continues --
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
        if (earlyTermination) {
            isPaused = false;
            clearInterval(timerCountdown);
            earlyTermination = false;
            minutes = defaultTime;
            seconds = 0;
            format(minutes, seconds);
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

    // ---- Start pomodoro countdown ----
    $('#start-btn').click(function () {
        console.log('Pomodoro timer started.')
        console.log('Pomodoro timer AGAIN.')
        $('.time-adjust').fadeOut();
        $('#start-btn, .breaktime').hide();
        $('#timer-text').html("Pomodoro clock in session:");
        $('#pause-btn').fadeIn()
        var counter = setInterval(timerCountdown, 1000);
    })

    // ---- Pause button ----
    $('#pause-btn').click(function () {
        isPaused = true;
        console.log('Pause button was clicked')
        $('#timer-text').html("Pomodoro clock has been paused.");
        $('#continue-btn, #reset-btn').show();
        $('#pause-btn').hide();
    })

    // ---- Continue/unpause button ----
    $('#continue-btn').click(function () {
        isPaused = false;
        $('#timer-text').html("Pomodoro clock is in session:");
        $('#continue-btn, #reset-btn').hide();
        $('#pause-btn').show();
    })

    // ---- Reset pomodoro clock ----
    $('#reset-btn').click(function () {
        earlyTermination = true;
        $('#pause-btn, #continue-btn, #reset-btn').fadeOut();
        $('#start-btn').fadeIn();
    })
});