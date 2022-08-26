let lennyFace = document.getElementById("lennyFace");
let lennyFaceParagraph = document.getElementById("lennyParagraph");
let animation = true;

lennyFace.addEventListener("mouseover", lennyFaceAnimation);

function lennyFaceAnimation () {
    if (animation == true) {
        setTimeout(() => {
            console.log("test");
            winkLenny();
        }, 500) 
    }
    else if (!animation) {
        return
    }
}

function winkLenny () {
    lennyFaceParagraph.innerHTML ="Discover the easiest way to get your ( ͡~ ͜ʖ ͡°). <br> Buy, learn how to start, go deeper and get high as f*@k <br> all in the most discreet way in Latin America!"; 
    setTimeout(() => {
        console.log("1st wink");
        normalLenny();
    }, 500) 
}

function normalLenny () {
    lennyFaceParagraph.innerHTML ="Discover the easiest way to get your ( ͡° ͜ʖ ͡°). <br> Buy, learn how to start, go deeper and get high as f*@k  <br> all in the most discreet way in Latin America!";
    setTimeout(() => {
        winkLenny2();
    }, 500) 
}

function winkLenny2 () {
    lennyFaceParagraph.innerHTML ="Discover the easiest way to get your ( ͡~ ͜ʖ ͡°). <br> Buy, learn how to start, go deeper and get high as f*@k  <br> all in the most discreet way in Latin America!"; 
    setTimeout(() => {
        console.log("2nd wink");
        normalLenny2();
    }, 500) 
}
    
function normalLenny2 () {
    lennyFaceParagraph.innerHTML ="Discover the easiest way to get your ( ͡° ͜ʖ ͡°). <br> Buy, learn how to start, go deeper and get high as f*@k  <br> all in the most discreet way in Latin America!";
    setTimeout(() => {
        winkLenny3();
    }, 500) 
}

function winkLenny3 () {
    lennyFaceParagraph.innerHTML ="Discover the easiest way to get your ( ͡~ ͜ʖ ͡°). <br> Buy, learn how to start, go deeper and get high as f*@k  <br> all in the most discreet way in Latin America!"; 
    setTimeout(() => {
        console.log("3rd wink");
        normalLenny3();
    }, 500) 
}
        
function normalLenny3 () {
    lennyFaceParagraph.innerHTML ="Discover the easiest way to get your ( ͡° ͜ʖ ͡°). <br> Buy, learn how to start, go deeper and get high as f*@k  <br> all in the most discreet way in Latin America!";
    setTimeout(() => {
        animation = false;
        lennyFaceAnimation();
    }, 500) 
}