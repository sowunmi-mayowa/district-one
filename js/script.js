const button = document.querySelector("#button");
const mobileNav = document.querySelector(".mobile-nav");
const cancel = document.querySelector(".fa-window-close");

mobileNav.style.top = "96vh"

button.addEventListener("click", showMenu);

function showMenu(){
    if(mobileNav.style.top == "96vh"){
        mobileNav.style.top = "50vh"
    }
    else{
        mobileNav.style.top == "96vh"
    }
}

cancel.addEventListener("click", removeMenu);

function removeMenu() {
    if(mobileNav.style.top == "50vh"){
        mobileNav.style.top = "96vh"
    }
}