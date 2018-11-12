/*
Working on adding functionality for 'break time' :)
*/
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
    });

    $('#increase-clock').click(function () {
        clockTime += 1;
        $('#clock-time').html(clockTime + ":00");
        minutes = clockTime;
    });

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
        $('.time-adjust').fadeOut();
        $('#start-btn, .breaktime').hide();
        $('#timer-text').html("Pomodoro clock is in session. <br/> Time to work 💃");
        $('#pause-btn').fadeIn()
        var counter = setInterval(timerCountdown, 1000);

        // ---- Countdown / format ----
        function timerCountdown() {
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
                clearInterval(counter)
                isPaused = false;
                earlyTermination = false;
                minutes = defaultTime;
                seconds = 0;
                format(minutes, seconds);
            }
        }
    })

    // ---- Pause button ----
    $('#pause-btn').click(function () {
        isPaused = true;
        $('#timer-text').html("Pomodoro clock has been paused. </br> Continue to get back to work or reset to start fresh 👊 ");
        $('#pause-btn').hide();
        $('#continue-btn, #reset-btn').fadeIn();
    })

    // ---- Continue/unpause button ----
    $('#continue-btn').click(function () {
        isPaused = false;
        $('#timer-text').html("Pomodoro clock is in session. <br/>Time to work 💃");
        $('#continue-btn, #reset-btn').hide();
        $('#pause-btn').fadeIn();
    })

    // ---- Reset pomodoro clock ----
    $('#reset-btn').click(function () {
        earlyTermination = true;
        $('#pause-btn, #continue-btn, #reset-btn').hide();
        $('#start-btn, .time-adjust').fadeIn();
        $('#timer-text').html("Let's get productive! Start the timer and get ready to work 🎯");

    })
});