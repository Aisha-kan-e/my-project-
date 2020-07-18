//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var mermaidScore = 0;
var fairyScore = 0;
var centarScore = 0;
var dragonScore = 0;
var questioncount = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//#TODO: Add Event Listeners to your answer choice variables.

q1a1.addEventListener("click", fairy);
q1a2.addEventListener("click", centar);
q1a3.addEventListener("click", mermaid);
q1a4.addEventListener("click", dragon);
q2a1.addEventListener("click", centar);
q2a2.addEventListener("click", fairy);
q2a3.addEventListener("click", dragon);
q2a4.addEventListener("click", mermaid);
q3a1.addEventListener("click", dragon);
q3a2.addEventListener("click", fairy);
q3a3.addEventListener("click", centar);
q3a4.addEventListener("click", mermaid);

//#TODO: Define quiz functions here
function fairy() {
  fairyScore += 1;
  questioncount += 1;
  if (questioncount >= 3) {
    updateresult();
  }
}

function mermaid() {
  mermaidScore += 1;
  questioncount += 1;
  if (questioncount >= 3) {
    updateresult();
  }
}

function dragon() {
  dragonScore += 1;
  questioncount += 1;
  if (questioncount >= 3) {
    updateresult();
  }
}

function centar() {
  centarScore += 1;
  questioncount += 1;
  if (questioncount >= 3) {
    updateresult();
  }
}

var result = document.getElementById("result");

function updateresult() {
  if (fairyScore >= 2) {
    result.innerHTML = "fairy";
  } else if (dragonScore >= 2) {
    result.innerHTML = "dragon";
  } else if (mermaidScore >= 2) {
    result.innerHTML = "mermaid";
  } else if (centarScore >= 2) {
    result.innerHTML = "centar";
  } else {
    innerHTMl = "Wow! i guess you're a multi-mystical being, cool.";
  }
}
