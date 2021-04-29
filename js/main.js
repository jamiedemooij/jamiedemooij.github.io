const bodyVar = document.querySelector('.bodyclass');
const buttonVar = document.querySelector('.theme-button');

if(bodyVar){
    buttonVar.addEventListener('click', function(){
        bodyVar.classList.toggle('blue');
    });
}

