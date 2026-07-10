let datetxt = "26 July 2005";
    let datatxtletter = "You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
    let titleLetter = "To you";
    let charArrDate = datetxt.split('');
    let charArrDateLetter = datatxtletter.split('');
    let charArrTitle = titleLetter.split('');
    let currentIndex = 0;
    let currentIndexLetter = 0;
    let currentIndexTitle = 0;
    let date__of__birth = document.querySelector(".date__of__birth span");
    let text__letter = document.querySelector(".text__letter p");
    setTimeout(function () {
        timeDatetxt = setInterval(function () {
            if (currentIndex < charArrDate.length) {
                date__of__birth.textContent += charArrDate[currentIndex];
                currentIndex++;
            }
            else {
                let i = document.createElement("i");
                i.className = "fa-solid fa-star"
                document.querySelector(".date__of__birth").prepend(i)
                document.querySelector(".date__of__birth").appendChild(i.cloneNode(true))
                clearInterval(timeDatetxt)
            }
        }, 100)
    }, 12000)

    var intervalContent;
    var intervalTitle;
    $("#btn__letter").on("click", function () {
        $(".box__letter").slideDown()
        setTimeout(function () {
            $(".letter__border").slideDown();
        }, 1000)
        setTimeout(function () {
            intervalTitle = setInterval(function () {
                if (currentIndexTitle < charArrTitle.length) {
                    document.querySelector(".title__letter").textContent += charArrTitle[currentIndexTitle];
                    let i = document.createElement("i");
                    i.className = "fa-solid fa-heart"
                    document.querySelector(".title__letter").appendChild(i)
                    currentIndexTitle++;
                }
                else {
                    clearInterval(intervalTitle)
                }
            }, 100)
        }, 2000)
        setTimeout(function () {
            document.querySelector("#heart__letter").classList.add("animationOp");
            document.querySelector(".love__img").classList.add("animationOp");
            document.querySelector("#mewmew").classList.add("animationOp");
        }, 2800)
        setTimeout(function () {
            document.querySelectorAll(".heart").forEach((item) => {
                item.classList.add("animation")
            })
        }, 3500)
        setTimeout(function () {
            intervalContent = setInterval(function () {
                if (currentIndexLetter < charArrDateLetter.length) {
                    text__letter.textContent += charArrDateLetter[currentIndexLetter];
                    currentIndexLetter++;
                }
                else {
                    clearInterval(intervalContent)
                }
            }, 50)
        }, 6000)
    })
    $(".close").on("click", function () {
        clearInterval(intervalContent)
        document.querySelector(".title__letter").textContent = "";
        text__letter.textContent = "";
        currentIndexLetter = 0
        currentIndexTitle = 0
        document.querySelector("#heart__letter").classList.remove("animationOp");
        document.querySelector(".love__img").classList.remove("animationOp");
        document.querySelector("#mewmew").classList.remove("animationOp");
        document.querySelectorAll(".heart").forEach((item) => {
            item.classList.remove("animation")
        })
        $(".box__letter").slideUp();
        $(".letter__border").slideUp();
    })



    let mailBox = document.querySelector('.mail')
    let boxmail = document.querySelector('.boxMail')
    var close = document.querySelector('.fa-xmark')
    mailBox.onclick = function () {
        mailBox.classList.toggle('active')
        boxmail.classList.add('active')
    }

    close.addEventListener('click', function () {
        boxmail.classList.remove('active')
    })

    // ❤️🌸 Background Falling Animation

    function createFloating() {


        let item =
            document.createElement("div");


        item.className = "floating";


        let symbols = [
        "🩷","🧡","💛","💚","💙","🩵","💜","🤎","🩶","🤍",

        ];


        item.innerHTML =
            symbols[
            Math.floor(Math.random() * symbols.length)
            ];



        item.style.left =
            Math.random() * 100 + "vw";


        item.style.fontSize =
            Math.random() * 20 + 15 + "px";


        document.body.appendChild(item);



        setTimeout(() => {

            item.remove();

        }, 6000);


    }



    setInterval(createFloating, 400);

    //birthday song play button
const btn = document.getElementById("startBtn");
const song = document.getElementById("birthdaySong");

btn.onclick = () => {
    song.play();
    btn.style.display = "none";
};



    /*----------------------------------------*/

    // 💖 Button niche Memory Popup

    let memories = [
        "Happy Birthday Ranita 🎂💖",
        "May all your dreams come true ✨🌸",
        "Keep smiling and shining always 🦋",
        "Wishing you endless happiness 💕",
        "You deserve all the love today 🎀",
        "Another year of your beautiful journey 🌈",
        "Stay blessed, stay amazing Ranita ❤️",
        "Cheers to your special day 🥳🎉",
        "A day as beautiful as your smile 🌷",
        "Forever grateful for our friendship 💫"
    ];

    let memoryIndex = 0;

    function showMemory() {

        let box =
            document.getElementById("memoryBox");

        box.innerHTML =
            `<div class="memoryText">
        ${memories[memoryIndex]}
    </div>`;


        memoryIndex++;

        if (memoryIndex >= memories.length) {
            memoryIndex = 0;
        }

    }


    setInterval(showMemory, 5000);

    showMemory();