const btnOpenPopup = document.getElementById('btn-contact');
const overlay = document.getElementById('overlay');
const formPoup = document.getElementById('form-popup');
const btnClosePopup = document.getElementById('btn-close-popup');


btnOpenPopup.addEventListener('click', function(){
    overlay.classList.add('active'); 
    formPoup.classList.add('active');
});

btnClosePopup.addEventListener('click', function(){
    overlay.classList.remove('active'); 
    formPoup.classList.remove('active');
});