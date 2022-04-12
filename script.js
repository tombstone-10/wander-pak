 //Javacript for responsive navigation menu
 const menuBtn = document.querySelector(".menu-btn");
 const navigation = document.querySelector(".navigation");

 function ham() {
   menuBtn.classList.toggle("active");
   navigation.classList.toggle("active");
 };

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


const scrollopt = document.querySelector('.body');
 

function scrollControl(){
  scrollopt.classList.toggle("control");
}

function show(e){
  container.classList.toggle('hide');
  home.classList.toggle('blureffect');
  main.classList.toggle('blureffect');
  scrollControl();
  ham();

  // scrollopt.addEventListener('onclick', function(){
  //   closeMe();
  // })
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

