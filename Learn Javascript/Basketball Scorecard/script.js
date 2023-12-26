let homeScoreEl = document.getElementById("home-score")
let homeCount = 0
let guestScoreEl = document.getElementById("guest-score")
let guestCount = 0

// HOME
function homeOne() {
  homeCount = homeCount + 1;
  homeScoreEl.textContent = homeCount;
}

function homeTwo() {
  homeCount = homeCount + 2;
  homeScoreEl.textContent = homeCount;
}

function homeThree() {
  homeCount = homeCount + 3;
  homeScoreEl.textContent = homeCount;
}

function homeReset() {
  homeCount = 0;
  homeScoreEl.textContent = homeCount;
}


// GUEST
function guestOne() {
  guestCount = guestCount + 1;
  guestScoreEl.textContent = guestCount;
}

function guestTwo() {
  guestCount = guestCount + 2;
  guestScoreEl.textContent = guestCount;
}

function guestThree() {
  guestCount = guestCount + 3;
  guestScoreEl.textContent = guestCount;
}

function guestReset() {
  guestCount = 0;
  guestScoreEl.textContent = guestCount;
}

