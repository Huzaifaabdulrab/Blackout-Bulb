"use strict";
let body = document.querySelector("body");
let bulbAccess = document.querySelector(".bulb-container");
let mainBulb = document.querySelector(".bulb");
let baseBulb = document.querySelector(".base");
function getHTMLElement() {
    console.log(body);
    console.log(bulbAccess);
    console.log(mainBulb);
    console.log(baseBulb);
}
getHTMLElement();
let mood = "light";
mainBulb.addEventListener("click", () => {
    if (mood === "light") {
        mood = "dark";
        body.style.background = "black";
        baseBulb.innerText = "Light on";
    }
    else {
        mood = "light";
        body.style.background = "white";
        baseBulb.innerText = "Light off";
    }
    console.log(mood);
});
