const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let timer;
let hours = 0;
let min = 0;
let sec = 0;
let count = 0;

startBtn.addEventListener("click", () => {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", () => {
  timer = false;
});

resetBtn.addEventListener("click", () => {
  timer = false;
  hours = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("sec").innerText = "00";
  document.getElementById("count").innerText = "00";
});

const stopWatch = () => {
  if (timer) {
    count++;

    if (count === 100) {
      sec++;
      count = 0;
    }

    if (sec === 60) {
      min++;
      sec = 0;
    }

    if (min === 60) {
      hours++;
      min = 0;
    }

    let hrTimer = hours;
    let minTimer = min;
    let secTimer = sec;
    let countTimer = count;
    // bcz single digit number will show 1,2,3 but we want 01,02,03....
    if (hours < 10) {
      hrTimer = "0" + hrTimer;
    }
    if (min < 10) {
      minTimer = "0" + minTimer;
    }
    if (sec < 10) {
      secTimer = "0" + secTimer;
    }
    if (count < 10) {
      countTimer = "0" + countTimer;
    }

    document.getElementById("hr").innerText = hrTimer;
    document.getElementById("min").innerText = minTimer;
    document.getElementById("sec").innerText = secTimer;
    document.getElementById("count").innerText = countTimer;
    setTimeout(stopWatch, 10);
  }
};
