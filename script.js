// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('header nav');
menuToggle.addEventListener('click', ()=>{
  nav.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Hero Slideshow
let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Single Moving Ball
const ball = document.getElementById('moving-ball');
let posX = Math.random() * (window.innerWidth - 60);
let posY = Math.random() * (window.innerHeight - 60);
ball.style.left = posX + 'px';
ball.style.top = posY + 'px';
let vx = (Math.random() - 0.5) * 2;
let vy = (Math.random() - 0.5) * 2;

function animateBall() {
  posX += vx; posY += vy;
  if(posX<=0 || posX>=window.innerWidth-60) vx*=-1;
  if(posY<=0 || posY>=window.innerHeight-60) vy*=-1;
  let bounceY = 10 * Math.sin(Date.now()/300);
  ball.style.left = posX + 'px';
  ball.style.top = (posY + bounceY) + 'px';
  requestAnimationFrame(animateBall);
}
animateBall();
