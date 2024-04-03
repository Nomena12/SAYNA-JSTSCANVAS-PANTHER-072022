const popUp = document.querySelector('div #popup-box');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click',()=>{
    popUp.style.visibility = "visible";
    popUp.style.opacity = "1";
});

