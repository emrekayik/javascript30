const sounds = {
    65: new Howl({
        src: ['sounds/crash.wav']
    }),
    83: new Howl({
        src: ['sounds/hihat-close.wav']
    }),
    68: new Howl({
        src: ['sounds/hihat-open.wav']
    }),
    70: new Howl({
        src: ['sounds/kick.wav']
    }),
    71: new Howl({
        src: ['sounds/ride.wav']
    }),
    72: new Howl({
        src: ['sounds/snare.wav']
    }),
    74: new Howl({
        src: ['sounds/tom-high.wav']
    }),
    75: new Howl({
        src: ['sounds/tom-low.wav']
    }),
    76: new Howl({
        src: ['sounds/tom-mid.wav']
    }),
};
const a = document.getElementsByClassName("a");
const s = document.getElementsByClassName("s");
const d = document.getElementsByClassName("d");
const f = document.getElementsByClassName("f");
const g = document.getElementsByClassName("g");
const h = document.getElementsByClassName("h");
const j = document.getElementsByClassName("j");
const k = document.getElementsByClassName("k");
const l = document.getElementsByClassName("l");
document.addEventListener('keydown', function(event) {
    if (event.keyCode in sounds) {
        sounds[event.keyCode].stop();
        sounds[event.keyCode].play();
    }
    if(event.keyCode == 65) {
        a.classList.add("scale");
    }
});