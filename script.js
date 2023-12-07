function swapTheme() {
  // Get the main div and button by their IDs
  var appDiv = document.getElementById("app");
  var swapButton = document.getElementById("swap");

  // Toggle between 'day' and 'night' classes on the main div
  if (appDiv.classList.contains("day")) {
    appDiv.classList.remove("day");
    appDiv.classList.add("night");
  } else {
    appDiv.classList.remove("night");
    appDiv.classList.add("day");
  }

  // Toggle between 'button_day' and 'button_night' classes on the button
  swapButton.classList.toggle("button_day");
  swapButton.classList.toggle("button_night");
}
