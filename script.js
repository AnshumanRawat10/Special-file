const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Next Page Function
function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");
    }
}

// -------------------------
// Floating Hearts
// -------------------------

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["💖","💕","💗","❤️","💞"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,350);

// -------------------------
// Envelope Animation
// -------------------------

function openEnvelope() {

    const envelope = document.getElementById("envelope");

    // Prevent double-clicks
    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    // ❤️ Hearts burst
    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["💖","💕","💗","❤️"][Math.floor(Math.random()*4)];

        heart.className = "burstHeart";

        heart.style.left = (45 + Math.random()*10) + "%";
        heart.style.top = "55%";

        heart.style.setProperty("--x",(Math.random()*300-150)+"px");
        heart.style.setProperty("--y",(-120-Math.random()*180)+"px");

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },1800);
    }

    // 🌸 Petals
    for(let i=0;i<12;i++){

        const petal=document.createElement("div");

        petal.innerHTML="🌸";

        petal.className="petal";

        petal.style.left=(48+Math.random()*6)+"%";
        petal.style.top="55%";

        petal.style.setProperty("--px",(Math.random()*260-130)+"px");
        petal.style.setProperty("--py",(-180-Math.random()*140)+"px");

        document.body.appendChild(petal);

        setTimeout(()=>{
            petal.remove();
        },2500);

    }

    // Go to next page
    setTimeout(()=>{
        nextPage();
    },2600);

}

// -------------------------
// Forgiveness Meter
// -------------------------

const forgiveBtn=document.getElementById("forgive");

const fill=document.getElementById("fill");

const percent=document.getElementById("percent");

let value=0;

if(forgiveBtn){

forgiveBtn.onclick=()=>{

if(value<100){

value += 10;

percent.style.transform = "scale(1.25)";

setTimeout(()=>{

percent.style.transform="scale(1)";

},180);

fill.style.width=value+"%";

percent.innerHTML=value+"%";

confetti({

particleCount:60,

spread:80,

origin:{y:.7}

});

}

if(value>=100){

fill.style.boxShadow="0 0 25px hotpink";

confetti({

particleCount:250,

spread:140,

origin:{y:.6}

});

setTimeout(()=>{

nextPage();

},2200);

}

}

}



setInterval(createHeart, 400);

function openEnvelope(){

    const envelope = document.getElementById("envelope");

    envelope.classList.add("open");

    setTimeout(() => {
        nextPage();
    }, 1800);

}

const bgMusic=document.getElementById("bgMusic");

let playing=false;

function toggleMusic(){

if(!playing){

bgMusic.play();

playing=true;

musicBtn.innerHTML="🎵";

}else{

bgMusic.pause();

playing=false;

musicBtn.innerHTML="🔇";

}

}

function celebrate(){

    confetti({

        particleCount:350,

        spread:180,

        origin:{y:.6}

    });

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=["💖","💕","💗","❤️","✨"][Math.floor(Math.random()*5)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=(3+Math.random()*2)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}