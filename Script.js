function setClock() {
  const date = new Date();
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const secondDegrees = (seconds / 60) * 360;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setClock, 1000);
