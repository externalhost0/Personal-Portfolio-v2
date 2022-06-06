const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarMobile = document.getElementsByClassName('navbar')[0]
const welcometext = document.getElementById('welcomeID')
var r = document.querySelector(':root');
const headerbox = document.getElementsByClassName('header')[0]
const logoContainer = document.getElementsByClassName('logo_container')[0]


window.onload = function(){
    document.getElementById('AboutVideo').style.opacity = "0"
    document.getElementById('GalleryVideo').style.opacity = "0"
    document.getElementById('ProjectVideo').style.opacity = "0"
    document.body.style.backgroundColor = "#202121";
    document.getElementById("H").style.backgroundColor = "#ffe100";

};

const text = document.getElementById('circular-text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
const ele = document.querySelectorALL('span');
for(var i = 1; i<ele.length;i++){
    ele[1].style.transform="rotate("+i*200+"deg)";
}

// DELETES ONPAGE LOAD ANIMATION

setTimeout(function() {
    document.getElementById("LOAD").remove();
}, 2800);

document.getElementById("M").addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#ffe100";
    welcometext.style.color = '#202121';
    r.style.setProperty('--linecolor', '#202121');
    document.getElementById('undertext').style.color = '#202121';
            

});

document.getElementById("M").addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#202121";
    welcometext.style.color = '#ffffff';
    r.style.setProperty('--linecolor', '#ffe100');
    document.getElementById('undertext').style.color = '#ffffff';

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
