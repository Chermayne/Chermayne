var dropdown = document.getElementById("dropdown");
var toggle = document.getElementById("nav-toggle");
var menu = document.getElementById("menu-expanded");

menu.style.display = "none";

dropdown.addEventListener("click", function(){
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
    menu.style.display = "none";
    toggle.style.transform = ""
});

dropdown.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
});
