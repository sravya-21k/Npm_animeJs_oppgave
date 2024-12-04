import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import anime from "animejs/lib/anime.es.js";
anime({
  targets: "body", // Target the body element (background)
  backgroundColor: [
    "#2c3e50", // Starting dark background color
    "#34495e", // Lighter shade for transition
    "#e74c3c", // Red color
    "#8e44ad", // Purple color
    "#3498db", // Blue color
  ],
  duration: 5000, // Animation duration (5 seconds)
  easing: "linear", // Linear easing to transition smoothly between colors
  loop: true, // Keep looping the background color animation
});
anime({
  targets: ".box", // Use the correct class selector here (add the dot '.')

  translateY: () => anime.random(0, 300),
  scale: [1, 1.5],
  rotate: "1turn",
  duration: 2000,
  loop: true,
  direction: "alternate",
  easing: "easeInOutExpo",
  autoplay: true,
});
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
