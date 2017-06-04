/**
 * Created by Nicholas on 5/31/2017.
 */

//event handlers for changing the Break Time
var decreaseTimeInterval;

$('#breakDownArrow').click(function() {
    var time = $('#breakTime').text();
    $('#breakTime').text(Number(time) - 1);
    $('#minutesBreak').text(Number(time) - 1);
});

$('#breakUpArrow').click(function() {
    var time = $('#breakTime').text();
    $('#breakTime').text(Number(time) + 1);
    $('#minutesBreak').text(Number(time) + 1);
});

//event handlers for changing the Session Time
$('#sessionDownArrow').click(function() {
    var time = $('#sessionTime').text();
    $('#sessionTime').text(Number(time) - 1);
    $('#minutesSession').text(Number(time) - 1);
});

$('#sessionUpArrow').click(function() {
    var time = $('#sessionTime').text();
    $('#sessionTime').text(Number(time) + 1);
    $('#minutesSession').text(Number(time) + 1);
});

$('#play').click(function() {
    decreaseTimeInterval = window.setInterval(decreaseTime, 1000);
});

$('#pause').click(function() {
    clearInterval(decreaseTimeInterval);
});

$('#refresh').click(function() {
    clearInterval(decreaseTimeInterval);
    var time = $('#sessionTime').text();
    $('#minutes').text(time);
    $('#seconds').text("00");
});

function decreaseTime(secondsLeft, minutesLeft) {
    var minutesLeft = $('#minutes').text();
    var secondsLeft = $('#seconds').text();

    if (Number(secondsLeft >= 11)) {
        $('#seconds').text(Number(secondsLeft) - 1);
    }

    if (Number(secondsLeft > 0) && Number(secondsLeft < 11)) {
        $('#seconds').text("0" + String(Number(secondsLeft) - 1));
    }

    if((Number(minutesLeft) > 0) && (Number(secondsLeft) === 0)) {
        $('#minutes').text(Number(minutesLeft) - 1);
        $('#seconds').text(59);
    }

    if((Number(minutesLeft) === 0) && (Number(secondsLeft) === 0)) {
        clearInterval(decreaseTimeInterval);
    }
}







