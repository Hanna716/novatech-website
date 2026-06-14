function playMusic(){

const music = document.getElementById("bgm");

music.play();

alert(
"歡迎進入 NovaTech AI 體驗模式"
);

}
// navbar shrink on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// scroll reveal
const sections = document.querySelectorAll("section");

function reveal() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
