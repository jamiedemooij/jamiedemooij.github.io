const bodyVar = document.querySelector('.bodyclass');
const buttonVar = document.querySelector('.theme-button');
const buttonAll = document.querySelectorAll('.buttontheme');
const calculatorButton = document.querySelector('.calculation-button');
if(buttonAll){
    for(let i=0; i<buttonAll.length; i++){
        const buttonShow = buttonAll[i];
        console.log(buttonShow);
    }
}
if(calculatorButton){
    calculatorButton.addEventListener('click', showInput);
}

function showInput(){
    const inputFieldOne = document.querySelector('.input-field');
    const inputFieldTwo = document.querySelector('.input-field-two');
    const inputValueOne = inputFieldOne.value;
    const inputValueTwo = inputFieldTwo.value;
    const heightDecimal = (inputValueOne/100);
    const bmiAnswer = (inputValueTwo / (heightDecimal*heightDecimal));
    const showInformationParagraph = document.querySelector('.answer');
    const paragraphHealth = document.querySelector('.healthy');
    //showInformationParagraph.textContent = inputValue;
    showInformationParagraph.innerHTML = Math.round(bmiAnswer * 100)/ 100;
    if(bmiAnswer<18.5){
        paragraphHealth.textContent = "A BMI of below 18.5 indicates that you are underweight";
    } else if (bmiAnswer>25){
        paragraphHealth.textContent = "A BMI of above 25 indicates that you are overweight";
    } else {
        paragraphHealth.textContent = "A BMI of between 18.5 and 25 indicates that you are at a healthy weight";
    }
}
