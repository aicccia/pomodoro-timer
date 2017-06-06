/**
 * Created by Nicholas on 5/31/2017.
 */

//event handlers for changing the Break Time
var decreaseSessionTimeInterval;
var decreaseBreakTimeInterval;

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
    decreaseSessionTimeInterval = window.setInterval(decreaseSessionTime, 1000);
});

$('#pause').click(function() {
    clearInterval(decreaseSessionTimeInterval);
});

$('#refresh').click(function() {
    clearInterval(decreaseSessionTimeInterval);
    var time = $('#sessionTime').text();
    $('#minutesSession').text(time);
    $('#secondsSession').text("00");
});

function decreaseSessionTime() {
    var minutesLeft = $('#minutesSession').text();
    var secondsLeft = $('#secondsSession').text();

    if (Number(secondsLeft >= 11)) {
        $('#secondsSession').text(Number(secondsLeft) - 1);
    }

    if (Number(secondsLeft > 0) && Number(secondsLeft < 11)) {
        $('#secondsSession').text("0" + String(Number(secondsLeft) - 1));
    }

    if((Number(minutesLeft) > 0) && (Number(secondsLeft) === 0)) {
        $('#minutesSession').text(Number(minutesLeft) - 1);
        $('#secondsSession').text(59);
    }

    if((Number(minutesLeft) === 0) && (Number(secondsLeft) === 0)) {
        var time = $('#sessionTime').text();
        $('#minutesSession').text(Number(time));
        $('#secondsSession').text("00");
        clearInterval(decreaseSessionTimeInterval);
        decreaseBreakTimeInterval = window.setInterval(decreaseBreakTime, 1000);
    }
}

function decreaseBreakTime() {
    var minutesLeft = $('#minutesBreak').text();
    var secondsLeft = $('#secondsBreak').text();

    if (Number(secondsLeft >= 11)) {
        $('#secondsBreak').text(Number(secondsLeft) - 1);
    }

    if (Number(secondsLeft > 0) && Number(secondsLeft < 11)) {
        $('#secondsBreak').text("0" + String(Number(secondsLeft) - 1));
    }

    if((Number(minutesLeft) > 0) && (Number(secondsLeft) === 0)) {
        $('#minutesBreak').text(Number(minutesLeft) - 1);
        $('#secondsBreak').text(59);
    }

    if((Number(minutesLeft) === 0) && (Number(secondsLeft) === 0)) {
        var time = $('#breakTime').text();
        $('#minutesBreak').text(Number(time));
        $('#secondsBreak').text("00");
        decreaseSessionTimeInterval = window.setInterval(decreaseSessionTime, 1000);
        clearInterval(decreaseBreakTimeInterval);
    }
}







