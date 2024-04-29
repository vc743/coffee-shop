// Mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
})

//Theme toggle
const toggleThemeBtn = document.querySelector(".toggle-theme-btn");
const htmlElement = document.querySelector("html");
const icon = document.querySelector(".toggle-theme-btn i");
const modalContent = document.querySelector(".modal-content");

toggleThemeBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("theme-dark");
    icon.classList.toggle("fa-moon");
    modalContent.classList.toggle(".has-background-dark")
})

//Tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(item => item.classList.remove("is-active"))
        tab.classList.add("is-active");

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if(box.getAttribute("id") === target){
                box.classList.remove("is-hidden");
            }else{
                box.classList.add("is-hidden");
            }
        })
    })
})

//Modal
const signupButton = document.querySelector("#signup");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signupButton.addEventListener("click", () => {
    modal.classList.add("is-active");
})

modalBg.addEventListener("click", () => {
    modal.classList.remove("is-active");
})