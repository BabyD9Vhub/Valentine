const loveBtn = document.querySelector('.love-btn');
const noloveBtn = document.querySelector('.no-love-btn');
const love = document.querySelector('.do-you-love');
const why = document.querySelector('.why');


noloveBtn.addEventListener("click", movehover);
loveBtn.addEventListener("click", myClick);
function myClick() {
    document.querySelector('.do-you-love').innerHTML = "เค้าก็รักเธอค้าบบี๋";
}

function movehover() {
    document.querySelector('.why').innerHTML = 'กดมันเข้าไป';
    const i = Math.floor(Math.random() * 250) + 1;
    const j = Math.floor(Math.random() * 250) + 1;

    noloveBtn.style.left = i + "px";
    noloveBtn.style.top = j + "px";

}

