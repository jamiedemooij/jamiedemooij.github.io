const entireBody = document.body;
const colorButton = document.querySelector(`.color-btn`);
if (colorButton){
    colorButton.addEventListener(`click`, function(){
        entireBody.classList.toggle(`newColor`);
    }
    )
}