const modalWindow = document.querySelector('.modal-age-wrapper');
const closeModalWindowButton = document.querySelector('.close-modal-js');
const body = document.querySelector('body');

closeModalWindowButton.addEventListener('click', closeModalWindow);

function closeModalWindow(){
    modalWindow.style.display = "none";
    body.classList.remove("scroll-disabled");
}    
