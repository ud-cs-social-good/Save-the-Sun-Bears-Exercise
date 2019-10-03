const FIRST_INITIAL = {
  'a' : 'Secretly',
  'b' : 'Enormously',
  'c' : 'Rarely',
  'd' : 'Quietly',
  'e' : 'Always',
  'f' : 'Deeply',
  'g' : 'Secretly',
  'h' : 'Badly',
  'i' : 'Painfully',
  'j' : 'Occasionally',
  'k' : 'Wishfully',
  'l' : 'Accidentally',
  'm' : 'Barely',
  'n' : 'Violently', 
  'o' : 'Terribly',
  'p' : 'Uselessly',
  'q' : 'Tenderly',
  'r' : 'Urgently',
  's' : 'Boldly',
  't' : 'Clearly',
  'u' : 'Exactly',
  'v' : 'Kindly',
  'w' : 'Lazily',
  'x' : 'Fatally',
  'y' : 'Irritably',
  'z' : 'Fully',
}

const FAVORITE_NUMBER = {
  0 : 'Fluffy',
  1 : 'Kind',
  2 : 'Hungry',
  3 : 'Distraught',
  4 : 'Selfish',
  5 : 'Soft',
  6 : 'Sleepy',
  7 : 'Ravenous',
  8 : 'Spiky',
  9 : 'Spiteful',
}

const FAVORITE_MONTH= {
  0 : 'Bear Cub',
  1 : 'Black Bear',
  2 : 'Poppa Bear',
  3 : 'Momma Bear',
  4 : 'Baby Bear',
  5 : 'Care Bear',
  6 : 'Koala Bear',
  7 : 'Panda Bear',
  8 : 'Sun Bear',
  9 : 'Moon Bear',
  10 : 'Brown Bear',
  11 : 'Bare Bear',
  12 : 'Cave Bear',
}

function ChooseBear(firstInitial, favNumber, favMonth) {
  return `${FIRST_INITIAL[firstInitial]} ${FAVORITE_NUMBER[favNumber]} ${FAVORITE_MONTH[favMonth]}`
}

function displayBear() {
  firstIntial = document.forms["bear-form"]["initial"].value;
  favoriteNumber = document.forms["bear-form"]["num"].value;
  favoriteMonth = document.forms["bear-form"]["month"].value;
  document.getElementById("bear-banner").innerHTML = `
   Your Bear Name:<br>
   <h2>${ChooseBear(firstIntial.toLowerCase()[0], favoriteNumber, favoriteMonth)}</h2>
  `;
}
