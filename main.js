// tady je místo pro náš program

let nadpis = document.querySelector ("h1");
nadpis.classList.add("zluty");
//nadpis.classList.remove("zluty");

function naKlikTucne() {
    document.querySelector("p").style.fontWeight = "bold";
}

function priOdchodu() {
    document.querySelector("p").style.fontWeight = "normal";
}

function zcervena() {
    document.querySelector("p").style.color = "red";
}

function zcerna() {
    document.querySelector("p").style.color = "black";
}

function vetsiOPixel() {
    document.querySelector("p").style.fontSize = "17px";
}

//Fukce, která zahraje písničku 
function prehraj() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.play();
}

//Funkce, která písničku zastaví
function zastav() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.pause();
}

//Funkce, která písničku ztiší
function ztisit() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.volume()=0.1;
}

//Funkce, která písničku dát na akorát hlasitost
function stredniHlasitost() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.volume()=0.5;
}

//Funkce, která písničku dát na maximální hlasitost
function maxHlasitost() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.volume()=1;
}

//Funkce, která písničku vrátí na začátek
function zpatkyNaZacatek() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.loop();
}

