console.log("JS loaded in");
//All variables
const chatterOne = document.querySelector('.chatArea1');
const chatterTwo = document.querySelector('.chatArea2');
const chatterThree = document.querySelector('.chatArea3');
const chatterFour = document.querySelector('.chatArea4');
const chatFieldOne = document.querySelector('.chatter1');
const chatFieldTwo = document.querySelector('.chatter2');
const chatFieldThree = document.querySelector('.chatter3');
const chatFieldFour = document.querySelector('.chatter4');
const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
const buttonFour = document.querySelector('.buttonFour');
const messageShowing = document.querySelector('.messages');
const studentName = document.querySelector('.name');
const studentSchool = document.querySelector('.school');
const studentTotal = document.querySelector('.students');
const loginButton = document.querySelector('.button');
const yourChatter = document.querySelector('.yourChatter');
const showingSchool = document.querySelector('.userSchool');

if (studentName) {
    loginButton.addEventListener('click', function () {
        const nameOfTheStudent = studentName.value;
        sessionStorage.setItem('nameOfTheStudent', nameOfTheStudent);
        const schoolOfTheStudent = studentSchool.value;
        sessionStorage.setItem('schoolOfTheStudent', schoolOfTheStudent);
        const amountOfChatters = studentTotal.value;
        sessionStorage.setItem('amountOfChatters', amountOfChatters);
        if(amountOfChatters > 3){
            alert("Specified amount of chatters not possible, you will be put in a room of 3 others");
            alert("Start loading the chatroom...");
        } else if(amountOfChatters < 1){
            alert("Specified amount of chatters not possible, you will be put in a room of 1 other");
            alert("Start loading the chatroom...");
            sessionStorage.setItem('amountOfChatters', 1);
        } else {
            alert("Start loading the chatroom...")
        }
    }
    )
}


if (chatterOne) {
    showingSchool.textContent = sessionStorage.getItem('schoolOfTheStudent');
    const amountOfChatters = sessionStorage.getItem('amountOfChatters');
    if (amountOfChatters == 1) {
        chatterOne.innerHTML = "No user";
        chatterTwo.innerHTML = "No user";
        yourChatter.textContent = sessionStorage.getItem('nameOfTheStudent');
        checkFieldThree();
        checkFieldFour();
    } else if (amountOfChatters == 2) {
        chatterOne.innerHTML = "No user";
        yourChatter.textContent = sessionStorage.getItem('nameOfTheStudent');
        checkFieldTwo();
        checkFieldThree();
        checkFieldFour();
    } else {
        yourChatter.textContent = sessionStorage.getItem('nameOfTheStudent');
        checkFieldOne();
        checkFieldTwo();
        checkFieldThree();
        checkFieldFour();
    }

    function checkFieldOne() {
        buttonOne.addEventListener('click', function () {
            if (chatFieldOne.value === "") {
                alert("Please enter a message!");
            } else {
                const chatMessage = document.createElement("div");
                chatMessage.innerHTML = chatFieldOne.value;
                chatFieldOne.value = "";
                messageShowing.appendChild(chatMessage);
                chatMessage.classList.add("chatMessageOne");
            }
        }
        )

    }

    function checkFieldTwo() {
        buttonTwo.addEventListener('click', function () {
            if (chatFieldTwo.value === "") {
                alert("Please enter a message!");
            } else {
                const chatMessage = document.createElement("div");
                chatMessage.innerHTML = chatFieldTwo.value;
                chatFieldTwo.value = "";
                messageShowing.appendChild(chatMessage);
                chatMessage.classList.add("chatMessageTwo");
            }
        }
        )
    }

    function checkFieldThree() {
        buttonThree.addEventListener('click', function () {
            if (chatFieldThree.value === "") {
                alert("Please enter a message!");
            } else {
                const chatMessage = document.createElement("div");
                chatMessage.innerHTML = chatFieldThree.value;
                chatFieldThree.value = "";
                messageShowing.appendChild(chatMessage);
                chatMessage.classList.add("chatMessageThree");
            }
        }
        )

    }

    function checkFieldFour() {
        buttonFour.addEventListener('click', function () {
            if (chatFieldFour.value === "") {
                alert("Please enter a message!");
            } else {
                const chatMessage = document.createElement("div");
                chatMessage.innerHTML = chatFieldFour.value;
                chatFieldFour.value = "";
                messageShowing.appendChild(chatMessage);
                chatMessage.classList.add("chatMessageFour");
            }
        }
        )

    }
}
