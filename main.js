$(document).ready(function () {
    // ------ Global vars -----

    var defaultBreak = 5;
    var currentMin = parseInt($('#current-min').html());
    console.log(currentMin)

    // ------- Hide reset until timer starts ------ 
    $('#reset-time').hide();

    $('#decrease-time').click(function() {
        currentMin -= 5;
        console.log(currentMin);
        $('#current-min').html(currentMin);
    })

    $('#increase-time').click(function() {
        currentMin += 5;
        console.log(currentMin);
        $('#current-min').html(currentMin);
    })


    // When user clicks add time button
    // $('#decrease-time').click(function () {

    // })

});