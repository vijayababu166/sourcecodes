let t1 = document.getElementById("t-1");
let t2 = document.getElementById("t-2");
let hs = document.getElementById("hourSet");
let ms = document.getElementById("minSet");
let ss = document.getElementById("secSet");
let hour = 0,
    min = 0,
    sec = 0;
let mode = "hr";
hs.addEventListener("click", () => {
    mode = "hr";
    event.target.style.backgroundColor = "#FFAE00";
    ms.style.backgroundColor = "#272727";
    ss.style.backgroundColor = "#272727";
    event.target.style.color = "black";
    ms.style.color = "#FFAE00";
    ss.style.color = "#FFAE00";
    event.target.style.border = "none";
});
ms.addEventListener("click", () => {
    mode = "mn";
    event.target.style.backgroundColor = "#FFAE00";
    hs.style.backgroundColor = "#272727";
    ss.style.backgroundColor = "#272727";
    event.target.style.color = "black";
    hs.style.color = "#FFAE00";
    ss.style.color = "#FFAE00";
    event.target.style.border = "none";
});
ss.addEventListener("click", () => {
    mode = "sc";
    event.target.style.backgroundColor = "#FFAE00";
    ms.style.backgroundColor = "#272727";
    hs.style.backgroundColor = "#272727";
    event.target.style.color = "black";
    ms.style.color = "#FFAE00";
    hs.style.color = "#FFAE00";
    event.target.style.border = "none";
});
ms.click();
function Padding(n) {
    if (("" + n).length < 2) {
        return "0" + n;
    }
    return "" + n;
}
t1.addEventListener("click", function() {
    if (mode === "hr") {
        hour += 1;
    } else if (mode === "mn") {
        min += 1;
    } else {
        sec += 1;
    }
    if (hour > 23) {
        hour = 0;
    }
    hs.textContent = Padding(hour);
    if (min > 59) {
        min = 0;
    }
    ms.textContent = Padding(min);
    if (sec > 59) {
        sec = 0;
    }
    ss.textContent = Padding(sec);
});
t2.addEventListener("click", function() {
    if (mode === "hr") {
        hour -= 1;
    } else if (mode === "mn") {
        min -= 1;
    } else {
        sec -= 1;
    }
    if (hour < 0) {
        hour = 23;
    }
    hs.textContent = Padding(hour);
    if (min < 0) {
        min = 59;
    }
    ms.textContent = Padding(min);
    if (sec < 0) {
        sec = 59;
    }
    ss.textContent = Padding(sec);
});
let counterInterface = document.getElementById("counterInterface");
let timerInterface = document.getElementById("timerInterface");
let start = document.getElementById("start");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let wrong = document.getElementById("wrong");
let hourCount = document.getElementById("hourCount");
let minCount = document.getElementById("minCount");
let secCount = document.getElementById("secCount");
let clock = document.getElementById("clock");
let hc = 0,
    mc = 0,
    sc = 0,
    p = 0;
let t_hc = 0,
    t_mc = 0,
    t_sc = 0,
    t_p = 0;
let id;
let tsec = 0;
function countdown() {
    if (id !== undefined) {
        clearInterval(id);
    }
    id = setInterval(function() {
        sc -= 1;
        if (sc === -1) {
            sc = 59;
            mc -= 1;
            if (mc === -1) {
                mc = 59;
                hc -= 1;
                if (hc === -1) {
                    hc = 0;
                    mc = 0;
                    sc = 0;
                    clearInterval(id);
                    play.style.display = "inline";
                    pause.style.display = "none";
                }
                hourCount.textContent = Padding(hc);
            }

            setTimeout(function() {
                minCount.textContent = Padding(mc);
            }, 650);
        }
        let per = (1 - (hc * 60 * 60 + mc * 60 + sc) / tsec) * 629 + "px";
        clock.style.strokeDashoffset = per;
        setTimeout(function() {
            secCount.textContent = Padding(sc);
        }, 650);
    }, 1000);
}
function counter() {
    hc = hour, mc = min, sc = sec;
    tsec = hour * 3600 + min * 60 + sec;
    hourCount.textContent = Padding(hc);
    minCount.textContent = Padding(mc);
    secCount.textContent = Padding(sc);
    timerInterface.style.display = "none";
    counterInterface.style.display = "flex";
    pause.style.display = "inline";
    play.style.display = "none";
    countdown();
    clock.style.transition = "1s linear";
}
let holder = document.getElementById("holder");
function pause_button() {
    clearInterval(id);
    console.log(hc, mc, sc);
    if (hc + mc + sc !== 0) {
        console.log("triggered");
        holder.classList.add("blink_blink");
    }
    play.style.display = "inline";
    pause.style.display = "none";
}
function play_button() {
    hourCount.textContent = Padding(hc);
    minCount.textContent = Padding(mc);
    secCount.textContent = Padding(sc);
    countdown();
    holder.classList.remove("blink_blink");
    play.style.display = "none";
    pause.style.display = "inline";
}
function cancel() {
    clock.style.strokeDashoffset = "0px";
    clearInterval(id);
    hc = 0, sc = 0, mc = 0;
    hourCount.textContent = Padding(hc);
    minCount.textContent = Padding(mc);
    secCount.textContent = Padding(sc);
    pause.style.display = "none";
    play.style.display = "inline";
    timerInterface.style.display = "flex";
    counterInterface.style.display = "none";
}
start.addEventListener("click", counter);
pause.addEventListener("click", pause_button);
play.addEventListener("click", play_button);
wrong.addEventListener("click", cancel)
