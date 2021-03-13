// Your code here


document.addEventListener("keydown", function(e) {

let gameWidth = document.getElementById('game').offsetWidth;
let gameHeight= document.getElementById('game').offsetHeight;
let dodgerWidth = document.getElementById('dodger').offsetWidth;
let dodgerHeight = document.getElementById('dodger').offsetHeight;

  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight(gameWidth, dodgerWidth);
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp(gameHeight, dodgerHeight);
  }

  if (e.key === "Enter") {
    alert ('Yeehaw!!!!');
  }

});


function moveDodgerLeft () {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  //If dodger moves outside the bounds of the game area
  if (left < 0) {
    alert('Slow down there, cowboy!');
  }

  dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight (gameWidth, dodgerWidth) {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  //If dodger moves outside the bounds of the game area taking dodger width into account
  if (left >= gameWidth - dodgerWidth) {
    alert('Slow down there, cowboy!');
  }
  dodger.style.left = `${left + 1}px`;
}



function moveDodgerDown () {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);

    //If dodger moves outside the bounds of the game area
    if (bottom < 0) {
      alert('Slow down there, cowboy!');
    }

    dodger.style.bottom = `${bottom - 1}px`;
}

function moveDodgerUp (gameHeight, dodgerHeight) {
let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);

    //If dodger moves outside the bounds of the game area taking dodger height into account
    if (bottom >= (gameHeight - dodgerHeight)) {
      alert('Slow down there, cowboy!');
    }

    console.log(bottom);

    dodger.style.bottom = `${bottom + 1}px`;
  }