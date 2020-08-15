
var time = document.querySelector('#time');
var birthdayDate = document.querySelector('.sep23');


function setDate() {
  var countdown = new Date('Sep 23, 2020 00:00:00').getTime();
  var today = new Date().getTime();

  var difference = countdown - today;

  // Calc converting ms to d, h, m & s
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  time.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;


  if (difference < 0) {
    clearTimeout(setDate);
    document.body.style.backgroundImage = "url('../img/birthday.jpeg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    birthdayDate.innerHTML = 'HAPPY BIRTHDAY SAED!!! ';
    birthdayDate.style.fontSize = '128px';
    birthdayDate.style.color = 'black';
  } 
  setTimeout(setDate, 1000);
}

setDate();

