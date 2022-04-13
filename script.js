 //Javacript for responsive navigation menu
 const menuBtn = document.querySelector(".menu-btn");
 const navigation = document.querySelector(".navigation");
 const scrollopt = document.querySelector('.body');

 function ham() {
   menuBtn.classList.toggle("active");
   navigation.classList.toggle("active");
 };

 const modebtn = document.getElementById('mode-btn');

function modeSwitch(e){
  scrollopt.classList.toggle('light-mode');
  scrollopt.classList.toggle('dark-mode');
  modebtn.classList.toggle("fa-moon");
  modebtn.classList.toggle("fa-lightbulb");
}

 

 //Javacript for video slider navigation
 const btns = document.querySelectorAll(".nav-btn");
 const slides = document.querySelectorAll(".video-slide");
 const contents = document.querySelectorAll(".content");

 var sliderNav = function(manual){
   btns.forEach((btn) => {
     btn.classList.remove("active");
   });

   slides.forEach((slide) => {
     slide.classList.remove("active");
   });

   contents.forEach((content) => {
     content.classList.remove("active");
   });

   btns[manual].classList.add("active");
   slides[manual].classList.add("active");
   contents[manual].classList.add("active");
 }

 btns.forEach((btn, i) => {
   btn.addEventListener("click", () => {
     sliderNav(i);
   });
 });


const userSign = document.getElementById('userSign');
const home = document.getElementById('home');
const main = document.querySelector('.container');



 

function scrollControl(){
  scrollopt.classList.toggle("control");
}

function show(e){
  menuBtn.classList.remove("active");
  navigation.classList.remove("active");
  container.classList.toggle('hide');
  home.classList.toggle('blureffect');
  main.classList.toggle('blureffect');
  scrollControl();
}


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('signpop');

signUpButton.addEventListener('click', function(e){
container.classList.add('right-panel-active')}
);

signInButton.addEventListener('click', function(e){
container.classList.remove('right-panel-active')}
);

function closeMe(){
  container.classList.add('hide');
  scrollControl();
  home.classList.remove('blureffect');
  main.classList.remove('blureffect');
}

 AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200 // values from 0 to 3000, with step 50ms
});

