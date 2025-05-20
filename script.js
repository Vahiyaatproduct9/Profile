window.addEventListener('scroll', () => {
    const background = document.querySelector(".background");
    const scrollPosition = window.scrollY;
    background.style.backgroundPositionY = `${scrollPosition * 0.7}px`;
});

const navbar = document.querySelector(".navbox");
const mover = document.querySelector(".mover")
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        mover.style.transform = 'translateY(-130px)';
    } else {
        mover.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});

const dot = document.querySelector(".dot");

dot.addEventListener('click', () => {
    if (dot.innerHTML === "⁝"){
        dot.innerHTML = "&times;";
        dot.style.transform = "rotate(0)";
        navbar.classList.toggle("navbox");
        navbar.classList.toggle("mobilenav");
        // document.querySelector(".box").style.position =;
    }
    else{
        dot.innerHTML = "⁝";
        dot.style.transform = "rotate(45deg)";
        navbar.classList.toggle("navbox");
        navbar.classList.toggle("mobilenav");

    }
})
const backtotop = document.querySelector(".backtotop");

    window.addEventListener("scroll", () => {
    if(window.scrollY>100){
        backtotop.style.animationName = "reappear";
    }
    else{
        backtotop.style.animationName = "disappear";
    }
});
backtotop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

function displayNone(){
    document.getElementById("medias").style.display = "none";
}
function displayBlock(){
    document.getElementById("medias").style.display = "block";
}