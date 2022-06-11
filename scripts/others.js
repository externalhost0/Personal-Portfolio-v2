const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarMobile = document.getElementsByClassName('navbar')[0]
const logoContainer = document.getElementsByClassName('logo_container')[0]


// TOGGLE BUTTON
toggleButton.addEventListener('click', () => {
    navbarMobile.classList.toggle('active')
    logoContainer.classList.toggle('active')
})

