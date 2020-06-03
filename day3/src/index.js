// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");
const superEventHandler = {
  mouseEnter: function() {
    h2.innerHTML = "The mouse ia here! (^o^)";
    h2.style.color = colors[0];
  },
  mouseLeave: function() {
    h2.innerHTML = "The mouse ia gone.. (;o;)";
    h2.style.color = colors[1];
  },
  windowResize: function() {
    h2.innerHTML = "the Window is just resized! ~('-')~";
    h2.style.color = colors[2];
  },
  mouseRightClick: function() {
    h2.innerHTML = "That was a right click! (/'o')/";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
document.addEventListener("contextmenu", superEventHandler.mouseRightClick);

/*
windowResize
mouseRichtClick*/
/*
function mouseOver() {
  h2.innerHTML = "The mouse ia here! XD Welcome!";
  h2.style.color = colors[0];
}

function mouseClick() {
  h2.innerHTML = "The mouse ia there! :O ";
  h2.style.color = colors[1];
}
function mouseGone() {
  h2.innerHTML = "The mouse ia gone.. :'(";
  h2.style.color = colors[2];
}


h2.addEventListener("mouseover", mouseOver);
h2.addEventListener("click", mouseClick);
h2.addEventListener("mouseout", mouseGone);
*/
