const clock = document.querySelector(".clock");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const restartBtn = document.querySelector(".restart");
let seconds = 0;
let timer;

startBtn.addEventListener("click", (e) => {
  clock.classList.remove("pause");
  startClock();
});

stopBtn.addEventListener("click", (e) => {
  clock.classList.add("pause");
  stopClock();
});

restartBtn.addEventListener("click", (e) => {
  seconds = 0;
  clearInterval(timer);
  clock.classList.remove("pause");
  clock.innerHTML = "00:00:00";
});

function createSeconds(seconds) {
  let date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

function startClock() {
  clearInterval(timer);
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = createSeconds(seconds);
  }, 1000);
}

function stopClock() {
  setTimeout(() => {
    clearInterval(timer);
  });
}

// ACIMA TEM A MINHA RESOLUÇÃO!

// ABAIXO TEM OUTRA FORMA DE RESOLUÇÃO! == MAIS FACIL!

// EM VEZ DE FAZER UM EVENTO EM CADA BOTAO, É MAIS PRATICO FAZER UM CONDICIONAL NO EVENTO DO DOCUMENTO

// document.addEventListener('click', (e) => {
//     const el = e.target;
//
//     if (el.classList.contains('start')) {
//         clock.classList.remove('pause');
//         startClock();
//     }
//     if (el.classList.contains('stop')) {
//         clock.classList.add('pause');
//         stopClock();
//     }
//     if (el.classList.contains('restart')) {
//         seconds = 0;
//         clearInterval(timer);
//         clock.innerHTML = '00:00:00';
//     }
// });
