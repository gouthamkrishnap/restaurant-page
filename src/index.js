import "./styles.css";

import homeTab from "./home.js";
import menuTab from "./menu.js";
import aboutTab from "./about.js";

homeTab();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", homeTab);
menuBtn.addEventListener("click", menuTab);
aboutBtn.addEventListener("click", aboutTab);
