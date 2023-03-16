
var hr = 00;
var min = 00;
var sec = 00;
var timer = false;
count = 00;
function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;


     var hr=0;
     var sec=0;
    var min=0;
    count=0;
    document.getElementById("count").innerHTML = count;

     document.getElementById("hr").innerHTML = hr;
    document.getElementById("sec").innerHTML = sec;
      document.getElementById("min").innerHTML = min;



}
function stopwatch() {
    if (timer == true) {
        count = count + 1;
        document.getElementById("count").innerHTML = count;
    }
    if (count == 100) {
        sec = sec + 1;
        count = 0;
        document.getElementById("sec").innerHTML = sec;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
        document.getElementById("min").innerHTML = min;
    }
    if (min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
        document.getElementById("hr").innerHTML = hr;

    }
    setTimeout("stopwatch()", 10);
}



