Function.prototype.extend = function(fn) {
    var self = this;
    return function() {
        self.apply(this, arguments);
        fn.apply(this, arguments);
    };
};

// Homepage Typed.js
const introText = "TOBI SAMUEL"
const introText2 = "A Frontend Web Developer."

let i = 0;
let j = 0
const speed = 80;

const writeIntro1 = () => {
    if (i < introText.length) {
        document.querySelector("#intro1").innerHTML += introText.charAt(i);
        i++
        setTimeout(writeIntro1, speed)
    } else {
        setTimeout(writeIntro2, 60)
    }
}


const writeIntro2 = () => {
    if (j < introText2.length) {
        document.querySelector("#intro2").innerHTML += introText2.charAt(j);
        j++
        setTimeout(writeIntro2, speed)
    }
}

// About Typed.js

const introAbout = "about me"
const introAbout2 = "Meticulous web developer with over 2 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. W3C certified. Implemented new responsive website approach which increased mobile traffic by 20%. ."

let m = 0;
let n = 0
const fast = 80;

const writeAbout1 = () => {
    if (m < introAbout.length) {
        document.querySelector("#about1").innerHTML += introAbout.charAt(m);
        m++
        setTimeout(writeAbout1, fast)
    } else {
        setTimeout(writeAbout2, 60)
    }
}


const writeAbout2 = () => {
    if (n < introAbout2.length) {
        document.querySelector("#about2").innerHTML += introAbout2.charAt(n);
        n++
        setTimeout(writeAbout2, fast)
    }
}
window.onload = () => {
    writeIntro1()
}
window.onload = window.onload.extend(writeAbout1())

$(document.function() {


})