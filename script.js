// =========================================
// Romantic Birthday Website
// script.js - Part 1
// =========================================

const startButton = document.getElementById("startButton");
const bgMusic = document.getElementById("bgMusic");
const welcomeScreen = document.getElementById("welcomeScreen");
const storySection = document.getElementById("storySection");

startButton.addEventListener("click", () => {
    if (bgMusic) {
        bgMusic.play().catch(() => {});
    }

    welcomeScreen.style.display = "none";
    storySection.style.display = "flex";
});

const scenes = document.querySelectorAll(".envelopeScene");
const letters = document.querySelectorAll(".letter");

const heartSeals = document.querySelectorAll(".heartSeal");
const nextButtons = document.querySelectorAll(".nextButton");

// Messages

const birthdayMessage =
`Happy Birthday, My Love ❤️

Today is the most beautiful day because it celebrates the person who makes my life brighter every single day.

Your smile is my happiness, your voice is my favorite melody, and your love is my greatest blessing.

I hope today brings you endless happiness, laughter, and unforgettable memories.

Happy Birthday, My Love. ❤️`;

const loveLetter =
`Every day I fall in love with you a little more.

Thank you for always standing beside me.

You are my peace, my happiness, my home, and my forever.

I love you more than words can ever describe. ❤️`;

const promiseLetter =
`I promise to always support you.

I promise to protect your smile.

I promise to celebrate every success with you.

I promise to love you forever and never stop choosing you.

You are my future. ❤️`;

const finalMessage =
`Happy Birthday My Beautiful Soul ❤️

May every dream you have come true.

May your smile always shine brighter than the stars.

Thank you for coming into my life.

You are my greatest gift.

I love you forever and always ❤️.

Happist Birthday 
and Love You more ❤️`;

// Start Website



// Typewriter Effect

function typeWriter(element, text, speed = 40){

    element.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

// =========================================
// Envelope Opening
// =========================================

heartSeals.forEach((seal, index) => {

    seal.addEventListener("click", () => {

        const envelope = seal.parentElement;

        envelope.classList.add("open");

        setTimeout(() => {

            scenes[index].classList.add("hidden");

            letters[index].classList.remove("hidden");

            switch(index){

                case 0:
                    typeWriter(document.getElementById("message1"), birthdayMessage);
                    break;

                case 1:
                    typeWriter(document.getElementById("message2"), loveLetter);
                    break;

                case 2:
                    typeWriter(document.getElementById("message3"), promiseLetter);
                    break;

                case 3:
                    typeWriter(document.getElementById("message4"), finalMessage);
                    launchFireworks();
                    break;

            }

            createBalloons();
            createHearts();
            createSparkles();
            createPetals();

        },1200);

    });

});

// =========================================
// Next Button
// =========================================

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const currentLetter=button.parentElement;

        currentLetter.classList.add("hidden");

        const next=button.dataset.next;

        if(next){

            document
            .getElementById("scene"+next)
            .classList.remove("hidden");

        }

    });

});

// =========================================
// Balloons
// =========================================

function createBalloons(){

    const container=document.getElementById("balloons");

    const colors=[
        "#ff4d6d",
        "#ff8fab",
        "#ffd166",
        "#4cc9f0",
        "#c77dff",
        "#ffffff"
    ];

    for(let i=0;i<20;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=Math.random()*100+"%";

        balloon.style.background=colors[Math.floor(Math.random()*colors.length)];

        balloon.style.animationDuration=(8+Math.random()*6)+"s";

        balloon.style.animationDelay=(Math.random()*2)+"s";

        container.appendChild(balloon);

        setTimeout(()=>{
            balloon.remove();
        },15000);

    }

}

// =========================================
// Floating Hearts
// =========================================

function createHearts(){

    const container=document.getElementById("floatingHearts");

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.className="floatingHeart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"%";

        heart.style.fontSize=(18+Math.random()*25)+"px";

        heart.style.animationDuration=(5+Math.random()*6)+"s";

        heart.style.animationDelay=(Math.random()*2)+"s";

        container.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },12000);

    }

}

// =========================================
// Sparkles
// =========================================

function createSparkles(){

    const container=document.getElementById("sparkleContainer");

    for(let i=0;i<80;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left=Math.random()*100+"%";

        sparkle.style.top=Math.random()*100+"%";

        sparkle.style.animationDelay=(Math.random()*2)+"s";

        container.appendChild(sparkle);

        setTimeout(()=>{
            sparkle.remove();
        },5000);

    }

}


// =========================================
// Rose Petals
// =========================================

function createPetals(){

    const container = document.getElementById("rosePetals");

    for(let i=0;i<40;i++){

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌹";

        petal.style.left=Math.random()*100+"%";

        petal.style.animationDuration=(6+Math.random()*6)+"s";

        petal.style.animationDelay=(Math.random()*2)+"s";

        petal.style.opacity=Math.random();

        container.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },12000);

    }

}

// =========================================
// Fireworks
// =========================================

function launchFireworks(){

    const container=document.getElementById("fireworks");

    for(let i=0;i<60;i++){

        const firework=document.createElement("div");

        firework.className="firework";

        firework.style.left=Math.random()*100+"%";

        firework.style.top=Math.random()*70+"%";

        firework.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        firework.style.animationDelay=(Math.random()*0.5)+"s";

        container.appendChild(firework);

        setTimeout(()=>{

            firework.remove();

        },2000);

    }

}

// =========================================
// Confetti
// =========================================

function createConfetti(){

    const container=document.getElementById("confetti");

    const colors=[
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff99c8"
    ];

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"%";

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.animationDuration=
        (4+Math.random()*4)+"s";

        confetti.style.animationDelay=
        (Math.random()*2)+"s";

        container.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },10000);

    }

}