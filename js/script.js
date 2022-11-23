let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active")
    menu.classList.toggle("active")
});