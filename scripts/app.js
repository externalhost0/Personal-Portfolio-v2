const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarMobile = document.getElementsByClassName('navbar')[0]
const welcometext = document.getElementById('welcomeID')
var r = document.querySelector(':root');
const headerbox = document.getElementsByClassName('header')[0]
const logoContainer = document.getElementsByClassName('logo_container')[0]


window.onload = function(){
    document.getElementById('GalleryVideo').style.opacity = "0"
    document.getElementById('ProjectVideo').style.opacity = "0"
    
};


// DELETES ONPAGE LOAD ANIMATION

setTimeout(function() {
    document.getElementById("LOAD").remove();
}, 2800);

document.getElementById("M").addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#ffe100";
    welcometext.style.color = '#202121';
    r.style.setProperty('--linecolor', '#202121');
    document.getElementById('undertext').style.color = '#202121';
    document.getElementsByClassName('circular-text')[0].style.filter = 'none';
    document.getElementsByClassName('icons')[0].style.color = '#202121';
    document.getElementsByClassName('icons')[1].style.color = '#202121';

});

document.getElementById("M").addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#202121";
    welcometext.style.color = '#ffffff';
    r.style.setProperty('--linecolor', '#ffe100');
    document.getElementById('undertext').style.color = '#ffffff';
    document.getElementsByClassName('circular-text')[0].style.filter = 'invert(100%) brightness(1000%) contrast(1000%)';
    document.getElementsByClassName('icons')[0].style.color = 'white';
    document.getElementsByClassName('icons')[1].style.color = 'white';
});

// VIDEO FUNCTIONS

document.getElementById("GalleryOption").addEventListener("mouseover", () => {
    document.getElementById('GalleryVideo').style.opacity = "0.7"
})

document.getElementById("ProjectOption").addEventListener("mouseover", () => {
    document.getElementById('ProjectVideo').style.opacity = "0.7"
})


document.getElementById("GalleryOption").addEventListener("mouseout", () => {
    document.getElementById('GalleryVideo').style.opacity = "0"
})

document.getElementById("ProjectOption").addEventListener("mouseout", () => {
    document.getElementById('ProjectVideo').style.opacity = "0"
})


// TOGGLE BUTTON
toggleButton.addEventListener('click', () => {
    navbarMobile.classList.toggle('active')
    logoContainer.classList.toggle('active')

})

