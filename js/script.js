function updateTime(){
  const now = new Date();
  const horas = now.getHours().toString().padStart(2, '0');
  const minutos = now.getMinutes().toString().padStart(2, '0');
  const segundos = now.getSeconds().toString().padStart(2, '0');
  const data = now.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
  document.getElementById('data').textContent = data;
}


setInterval(updateTime, 1000);

let horascronometro = 0;
let minutoscronometro = 0;
let segundoscronometro = 0;
let milisegundoscronometro = 0;
let timer;

function start() {
  clearInterval(timer);
  timer = setInterval(updateStopwatch, 1);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  horascronometro = 0;
  minutoscronometro = 0;
  segundoscronometro = 0;
  milisegundoscronometro = 0;
  updateStopwatch();
}

function updateStopwatch() {
  milisegundoscronometro += 4;
  if (milisegundoscronometro == 1000) {
    segundoscronometro++;
    milisegundoscronometro = 0;
  }
  if (segundoscronometro == 60) {
    minutoscronometro++;
    segundoscronometro = 0;
  }
  if (minutoscronometro == 60) {
    horascronometro++;
    minutoscronometro = 0;
  }
  
  const displayhorascronometro = horascronometro < 10 ? '0' + horascronometro : horascronometro;
  const displayminutoscronometro = minutoscronometro < 10 ? '0' + minutoscronometro : minutoscronometro;
  const displaysegundoscronometro = segundoscronometro < 10 ? '0' + segundoscronometro : segundoscronometro;
  const displaymilisegundoscronometro = milisegundoscronometro < 100 ? (milisegundoscronometro < 10 ? '00' : '0') + milisegundoscronometro : milisegundoscronometro;
  
  document.querySelector('.horascronometro').textContent = displayhorascronometro;
  document.querySelector('.minutoscronometro').textContent = displayminutoscronometro;
  document.querySelector('.segundoscronometro').textContent = displaysegundoscronometro;
  document.querySelector('.milisegundoscronometro').textContent = displaymilisegundoscronometro;
}
