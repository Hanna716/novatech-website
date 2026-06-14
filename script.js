// 🎵 音樂播放（防瀏覽器阻擋優化）
function playMusic(){
    const music = document.getElementById("bgm");

    if (!music) return;

    music.play().catch(err => {
        console.log("音樂播放被瀏覽器阻擋:", err);
    });

    alert("歡迎進入 NovaTech AI 體驗模式");
}


// 📌 navbar 滾動縮放效果
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ✨ scroll reveal 動畫
const sections = document.querySelectorAll("section");

function reveal() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {

        if (sec.classList.contains("show")) return;

        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
