const entireBody = document.body;
const colorButton = document.querySelector('.color-btn');
if(entireBody){
    colorButton.addEventListener('click', function(){
        entireBody.classList.toggle('newColor');
    })
}