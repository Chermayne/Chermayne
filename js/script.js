var dropdown = document.getElementById("dropdown");
var toggle = document.getElementById("nav-toggle");
var menu = document.getElementById("menu-expanded");
var current = document.querySelector("h1");
var active = document.getElementById("active");
var logo = document.getElementById("logo");

menu.style.display = "none";
current.style.display = "block";
logo.style.display = "none";

dropdown.addEventListener("click", function(){
    if (current.style.display == "block") {
        current.style.display = "none";
    } else {
        current.style.display = "block";
    }

    if (logo.style.display == "none") {
        logo.style.display = "block";
    } else {
        logo.style.display = "none";
    }

    if (toggle.style.transform == "") {
        toggle.style.transform = "rotate(90deg)";
        toggle.style.transition = "0.3s";
    } else {
        toggle.style.transform = "";
    }

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

document.addEventListener("click", function(){
    current.style.display = "block"
    logo.style.display = "none";
    toggle.style.transform = ""
    menu.style.display = "none";
});

dropdown.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
});
