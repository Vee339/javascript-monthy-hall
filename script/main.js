var switchCounter = 0;
var stayCounter = 0;

for (var i = 0; i < 1000; i++) {
  // Setting the car in a door
  let car = Math.ceil(Math.random() * 3);
  document.write(`<h2>The car is in door number ${car}</h2>`);

  // Choosing a door
  let choice = Math.ceil(Math.random() * 3);
  document.write(`<h2>The contestant choose the door number ${choice}</h2>`);

  // Removing the random door number
  let remove = Math.ceil(Math.random() * 3);

  // Checking if remove is equal to car or choice
  while (remove === car || remove === choice) {
    remove = Math.ceil(Math.random() * 3);
  }

  document.write(`<h2>The host removes door number ${remove}.</h2>`);

  // Finding if the contestant should stay with their choice or switch
  if (car === choice) {
    document.write(`<h2 style='color:red;'>Stay with the choice</h2>`);
    stayCounter++;
  } else {
    document.write(`<h2 style='color:green;'>Switch the choice</h2>`);
    switchCounter++;
  }
}

document.write(`<h2>Stay was correct ${stayCounter} times.</h2>`);
document.write(`<h2>Switch was correct ${switchCounter} times.</h2>`);

var percentage = Math.round((switchCounter / 1000) * 100);
document.write(`<h2>Switch was correct ${percentage} times.</h2>`);
