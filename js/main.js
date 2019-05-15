
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

// Gallery Images 

// Get the modal
const gallery = document.getElementById('gallery');
gallery.addEventListener('click', openPhoto);
gallery.addEventListener('click', closePhoto);

function openPhoto(e) {
// Get the image and insert it inside the modal
    if(e.target.classList.contains('myImg')) {
        const img = e.target;
        const modal = img.nextElementSibling;
        modal.style.display = 'block';
    }
}

function closePhoto(e) {
    if(e.target.classList.contains('close')) {
        const btnClose = e.target;
        const modal = btnClose.parentElement;
        modal.style.display = 'none';
    }
}

// Lightbox Effect
let photoIndex = 1;

gallery.addEventListener('click', showPrevPhoto);
gallery.addEventListener('click', showNextPhoto);

function showPrevPhoto(e) {
    if(e.target.classList.contains('prev')) {
        showPhotos(photoIndex += -1);
    }
}

function showNextPhoto(e) {
    if(e.target.classList.contains('next')) {
        showPhotos(photoIndex += 1);
    }
}

function showPhotos(n) {

  const photos = document.getElementsByClassName("modal");

  if (n > photos.length) {photoIndex = 1}
  if (n < 1) {photoIndex = photos.length}
  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  photos[photoIndex - 1].style.display = "block";
}
