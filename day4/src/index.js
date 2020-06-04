// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const colorlist = ["yellow", "purple", "blue"];

function bgcolorChange() {
  if (window.innerWidth > 700) {
    body.style.backgroundColor = colorlist[0];
  } else if (window.innerWidth < 500) {
    body.style.backgroundColor = colorlist[2];
  } else {
    body.style.backgroundColor = colorlist[1];
  }
}

function init() {
  body.style.width = 600;
  body.style.height = 600;
  body.style.backgroundColor = colorlist[1];
  window.addEventListener("resize", bgcolorChange);
}
init();
