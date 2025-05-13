window.addEventListener('scroll', () => {
    const background = document.querySelector(".background");
    const scrollPosition = window.scrollY;
    background.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

const navbar = document.querySelector(".navbox");

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-130px)';
    } else {
        navbar.style.transform = 'translateY(0)';
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
    }
    else{
        dot.innerHTML = "⁝";
        dot.style.transform = "rotate(45deg)";
        navbar.classList.toggle("navbox");
        navbar.classList.toggle("mobilenav");

    }
})