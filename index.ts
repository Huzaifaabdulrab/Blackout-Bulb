let body = document.querySelector("body") as HTMLElement;
let bulbAccess = document.querySelector(".bulb-container") as HTMLElement;
let mainBulb = document.querySelector(".bulb") as HTMLElement;
let baseBulb = document.querySelector(".base") as HTMLElement;

function getHTMLElement() {
    console.log(body);
    console.log(bulbAccess);
    console.log(mainBulb);
    console.log(baseBulb);
}
getHTMLElement();

let mood: string = "light";

mainBulb.addEventListener("click", () => {
    if (mood === "light") {
        mood = "dark";
        body.style.background = "black";
        baseBulb.innerText = "Light on";
    } else {
        mood = "light";
        body.style.background = "white";
        baseBulb.innerText = "Light off";
    }
    console.log(mood);
});
