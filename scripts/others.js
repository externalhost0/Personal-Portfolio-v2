const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarMobile = document.getElementsByClassName('navbar')[0]


// TOGGLE BUTTON
toggleButton.addEventListener('click', () => {
    navbarMobile.classList.toggle('active')
    logoContainer.classList.toggle('active')
})


class gImage extends HTMLElement {
    connectedCallback() {
        var gimg = this.attributes.gimg.value
        this.innerHTML = `Hello ${gimg}`
        //this.style.backgroundColor = img
    }
}
customElements.define('gImage', gImage);