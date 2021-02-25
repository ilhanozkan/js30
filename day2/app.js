const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  function addRemoveTransition(hand) {
    if (hand.style.transform == 'rotate(90deg)') {
      hand.classList.add('no-transition');
    } else if (hand.style.transform == 'rotate(96deg)') {
      hand.classList.remove('no-transition');
    }
  }

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours(); 
  const hoursDegree = ((hours / 12) * 360) + ((mins / 60) * 30) + 90; 
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  hands.forEach((hand) => {
    addRemoveTransition(hand)
  });
};

setDate();
setInterval(setDate, 1000);