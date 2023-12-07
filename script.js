//your code here

function swapTheme() {
  // Get the main div and button by their IDs
  var appDiv = document.getElementById("app");
  var swapButton = document.getElementById("swap");

  // Toggle between 'day' and 'night' classes on the main div
  appDiv.classList.toggle("day");
  appDiv.classList.toggle("night");

  // Toggle between 'button_day' and 'button_night' classes on the button
  swapButton.classList.toggle("button_day");
  swapButton.classList.toggle("button_night");
}
