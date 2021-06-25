const numb = document.querySelector(".numb");
            let counter = 0;
            setInterval(()=>{
              if(counter == 100){
                clearInterval();
                window.location.href = "chatting.html";
                alert("Chatroom loaded");
              }else{
                counter+=1;
                numb.textContent = counter + "%";
              }
            }, 40);
            