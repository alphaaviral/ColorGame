let t = [document.getElementById("t1"), document.getElementById("t2"), document.getElementById("t3"), document.getElementById("t4"), document.getElementById("t5"), document.getElementById("t6")];
let x;
let correctColor;
let result = document.getElementById("result");
let counter = document.getElementById("counter");
let button = document.getElementById("refButton");
let y = 3;
let z;
let r = 0;
let m=0;
counter.innerHTML = "Lives Remaining : " + y;
document.getElementById("points").innerHTML = "Points : " + r;
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  for(i=0; i<6; i++){
      t[i].style.background = getRandomColor();
  }

  z = Math.floor(Math.random() * 6 + 1);

  correctColor = t[z-1].style.background;
  document.getElementById("header-clue").innerHTML = "Your color code is... " + correctColor;
}

for(let i=0; i<6; i++){
  t[i].addEventListener("click", function clickAction() {
    if(m == 0){
    if (t[i].style.background == correctColor) {
      newGame();
      r++;
      document.getElementById("points").innerHTML = "Points : " + r;
      alert("Great!! You got it right.");
    } 
    else {
      alert("Oops! You were wrong. You lost a life :(");
      t[i].style.background = getRandomColor();
      y--;
        counter.innerHTML = "Lives Remaining : " + y;
        if(y ==0){
          for(let p=0; p<6; p++){
            t[p].style.background = "transparent";
          }
          document.getElementById("header-clue").innerHTML = "Game Over. Click on New Game to start a new one.";
          m=1;
        }
      else {x = Math.floor(Math.random() * 6 + 1);
      correctColor = t[x-1].style.background;
      document.getElementById("header-clue").innerHTML = "Your color code is... " + correctColor;
      }
  }
  }
  })
  }
