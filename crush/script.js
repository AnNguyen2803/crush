        const wrapper = document.querySelector(".wrapper");
        const question = document.querySelector(".question");
        const gif = document.querySelector(".gif");
        const yesBtn = document.querySelector(".yes-btn");
        const noBtn = document.querySelector(".no-btn");
        const questionPrompt = document.querySelector(".question-prompt");

        yesBtn.addEventListener("click", () => {
        question.innerHTML = "Huhu cô hết iu toi r 🥺<br>dỗiiii x10000000";
        gif.src ="https://media.giphy.com/media/vvc1dJPLEU2QOw9cXy/giphy.gif";

        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        questionPrompt.style.display = "none";
        });

        noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        });
