const charterBtns = document.querySelectorAll('.js-charter-btn')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-close')
const modalContainer = document.querySelector('.js-modal-container')

function showCharter(){
    modal.classList.add('open')
}

function hiddenCharter(){
    modal.classList.remove('open')
}
for(const charterBtn of charterBtns){
    charterBtn.addEventListener('click', showCharter)
}

modalClose.addEventListener('click', hiddenCharter)
modal.addEventListener('click', hiddenCharter)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})


// nav-modal

var navModal = document.querySelector('.nav-over')
var navBar = document.querySelector('.nav-bar')
var navCloseBar = document.querySelector('.close-mobile')
var navMobile = document.querySelector('.nav-mobile')
function shownavModal () {
    navModal.classList.add('open-nav')
    navMobile.style.transform = "translateX(0%)"
    navMobile.style.transition = "all linear 0.2s"
}

function hiddennavModal () {
    navModal.classList.remove('open-nav')
}

navBar.onclick = function (){
    shownavModal()
}

navCloseBar.onclick = function () {
    hiddennavModal()
}

navModal.onclick = function () {
    hiddennavModal()
}

