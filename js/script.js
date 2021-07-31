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


window.onload = () => {
    writeIntro1()
}