
// Automatic Slideshow - change image every 4 seconds
let index = 0;
carousel();

function carousel() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i+=1) {
        slides[i].style.display = "none";
    }
    index+=1;
    if (index > slides.length) {index = 1}
    slides[index-1].style.display = "block";
    setTimeout(carousel, 4000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleMenu() {
    let navSmall = document.getElementById("nav-sm-scr");
    if (navSmall.className.indexOf("show") === -1) {
        navSmall.className += " show";
    } else {
        navSmall.className = navSmall.className.replace(" show", "");
    }
}

const navLinks = document.querySelectorAll('#nav-sm-scr a');
for (const navLink of navLinks) {
    navLink.addEventListener('click', toggleMenu);
}

const barsMenu = document.querySelector('#bars-menu');
barsMenu.addEventListener('click', e => e.preventDefault());
barsMenu.addEventListener('click', toggleMenu);

// When the user clicks anywhere outside of the modal, close it
let modal = document.getElementById('ticket-modal');
window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};