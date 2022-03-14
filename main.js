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

