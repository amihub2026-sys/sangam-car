const nav = document.getElementById('nav'); document.getElementById('menuBtn').onclick = () => nav.classList.toggle('nav-open');
let heroIndex = 0; const slides = [...document.querySelectorAll('.slide')]; const dots = document.getElementById('dots'); slides.forEach((_, i) => { let b = document.createElement('button'); b.onclick = () => showHero(i); dots.appendChild(b) }); function showHero(i) { slides[heroIndex].classList.remove('active'); heroIndex = (i + slides.length) % slides.length; slides[heroIndex].classList.add('active');[...dots.children].forEach((d, j) => d.classList.toggle('active', j === heroIndex)) } function moveHero(n) { showHero(heroIndex + n) } showHero(0); setInterval(() => moveHero(1), 4500);
const counters = document.querySelectorAll('[data-count]'); let counterDone = false; function runCounters() { if (counterDone) return; const top = document.querySelector('.counter').getBoundingClientRect().top; if (top < innerHeight - 80) { counterDone = true; counters.forEach(el => { let target = +el.dataset.count, cur = 0, step = Math.max(1, Math.ceil(target / 70)); let int = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(int) } el.textContent = cur }, 25) }) } } addEventListener('scroll', runCounters); runCounters();
function slideCategory(direction){

    const slider=document.getElementById("categorySlider");

    const card=slider.querySelector("article");

    if(!card) return;

    const gap=20;

    slider.scrollBy({

        left:(card.offsetWidth+gap)*direction,

        behavior:"smooth"

    });

}



function slideProduct(direction){

    const slider=document.getElementById("productSlider");

    const card=slider.querySelector(".product");

    if(!card) return;

    const gap=20;

    slider.scrollBy({

        left:(card.offsetWidth+gap)*direction,

        behavior:"smooth"

    });

}

const gallery = document.getElementById("galleryCarousel");

let angle = 0;
let autoRotate;



function updateGallery(){

    gallery.style.transform =
    `rotateY(${angle}deg)`;

}




function rotateGallery(direction){

    clearInterval(autoRotate);


    if(direction === 1){
        angle -= 36;
    }
    else{
        angle += 36;
    }


    updateGallery();

    startAutoRotate();

}





function startAutoRotate(){

    clearInterval(autoRotate);


    autoRotate = setInterval(()=>{

        angle -= 36;

        updateGallery();

    },3000);

}



startAutoRotate();





// ==============================
// PAUSE SLIDER ON HOVER / TOUCH
// ==============================


gallery.addEventListener("mouseenter",()=>{

    clearInterval(autoRotate);

});



gallery.addEventListener("mouseleave",()=>{

    startAutoRotate();

});




// MOBILE TOUCH SUPPORT


gallery.addEventListener("touchstart",()=>{

    clearInterval(autoRotate);

});



gallery.addEventListener("touchend",()=>{

    startAutoRotate();

});




// VIDEO PLAY


const galleryVideos =
document.querySelectorAll(".gallery-carousel video");


galleryVideos.forEach(video=>{


    video.addEventListener("mouseenter",()=>{

        clearInterval(autoRotate);

        video.play();

    });



    video.addEventListener("mouseleave",()=>{

        video.pause();

        video.currentTime = 0;

        startAutoRotate();

    });



    // Mobile tap

    video.addEventListener("click",()=>{

        clearInterval(autoRotate);

        video.play();

    });



});
