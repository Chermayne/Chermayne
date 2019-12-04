var dropdown = document.getElementById("dropdown");
var toggleIcon = document.getElementById("nav-toggle");
var menu = document.getElementById("menu-expanded");
var h1 = document.querySelectorAll("h1")


let opened = null;
let changed = null;
const toggleVisibility = e => e.classList.toggle('show');
const toggleHeader = e => {
    for(let i = 0; i < e.length; i++){
        e[i].classList.toggle('show-header');
        }
};

const handleDropdown = e => {
    const clickedItem = menu;

    toggleVisibility(clickedItem);

    if (!opened) {
        opened = clickedItem;
    } else if (opened == clickedItem) {
        opened = null;
    } else {
        toggleVisibility(opened);
        opened = clickedItem;
    }

    const clickedHeader = h1;

    toggleHeader(clickedHeader);

    if (!changed) {
        changed = clickedHeader;
    } else if (changed == clickedHeader) {
        changed = null;
    } else {
        toggleHeader(changed);
        changed = clickedHeader;
    }
    
    if (toggleIcon.style.transform == "") {
        toggleIcon.style.transform = "rotate(90deg)";
        toggleIcon.style.transition = "0.3s";
    } else {
        toggleIcon.style.transform = "";
    }
};

const handleClick = e => {
    if (e.target.className.includes('dropDown')) {
        handleDropdown(e.target);
    } else if (opened || changed) {
        toggleVisibility(opened)
        opened = null
        toggleHeader(changed)
        changed = null
        toggleIcon.style.transform = "";
    }

}

document.addEventListener("click", handleClick);
