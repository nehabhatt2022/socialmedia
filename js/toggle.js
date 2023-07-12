
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        header.classList.toggle("active");
        console.log("hellow")
})

console.log('hamburger')

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        header.classList.remove("active");
}))

window.addEventListener('scroll', function () {
        header.classList.remove('active');

});