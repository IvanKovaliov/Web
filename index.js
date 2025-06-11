/*******************
BURGER MENU
*******************/
const navBurger = document.querySelector('#nav-burger');
const navMenu = document.querySelector('#nav-menu');

navBurger.addEventListener('click', function() {
  this.classList.toggle('open');
  navMenu.classList.toggle('open');
})

let navItems = document.querySelectorAll('.nav-link');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    navBurger.classList.remove('open');
    navMenu.classList.remove('open');
  })
}

/*******************
Portfolio change images
*******************/
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelectorAll('.btn-portfolio');
const portfolioImages = document.querySelectorAll('.portfolio-img');

function changeImage(event) {
  if(event.target.classList.contains('btn-portfolio')) {
    let season = event.target.dataset.season;
    portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
  }
}

function changeClassActive(event) {
  portfolioBtn.forEach((elem) => {
    elem.classList.remove('btn_active');
  });
  event.target.classList.add('btn_active');
}

portfolioBtns.addEventListener('click', changeImage);
portfolioBtns.addEventListener('click', changeClassActive);

/*******************
Portfolio cache images
*******************/
const seasons = ['winter', 'spring', 'summer', 'autumn'];
  
function preloadImages() {
  seasons.forEach((season) => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `assets/img/${season}/${i}.jpg`;
    }
  })
}

preloadImages();

/*******************
Translate internationalization
*******************/
import i18Obj from './translate.js';

const langs = document.querySelectorAll('.lang');
const langElements = document.querySelectorAll('[data-i18]');

langs.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    getTranslate(e.target.dataset.lang);
  });
  elem.addEventListener('click', changeLangClassActive);
})

function getTranslate(ln) {
  langElements.forEach((elem) => {
    let k = elem.dataset.i18;
    elem.textContent = i18Obj[ln][k];
    if (elem.placeholder) {
      elem.placeholder = i18Obj[ln][elem.dataset.i18];
      elem.textContent = '';
    }
  });
}

function changeLangClassActive(event) {
  langs.forEach((elem) => {
    elem.classList.remove('lang-active');
  });
  event.target.classList.add('lang-active');
}

/*******************
Theme
*******************/
const theme = document.querySelector('.theme');
const page = document.querySelector('.page');

theme.addEventListener('click', function() {
  theme.classList.toggle('light-theme');
  page.classList.toggle('light-theme');
})

/*******************
Local Storage - Theme
*******************/
theme.addEventListener('click', function() {
  let themePortfolio = "dark";
  if (theme.classList.contains("light-theme")) {
    themePortfolio = "light";
  }
  localStorage.setItem("themePortfolio", themePortfolio);
});

const currentTheme = localStorage.getItem('themePortfolio');
if (currentTheme == 'light') {
  theme.classList.toggle('light-theme');
  page.classList.toggle('light-theme');
}

/*******************
Local Storage - Language
*******************/
langs.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    let langPortfolio = 'en';
    langPortfolio = e.target.dataset.lang;
    localStorage.setItem("langPortfolio", langPortfolio);
  })
})

const currentLang = localStorage.getItem('langPortfolio');
if (currentLang == 'ru') {
  langElements.forEach((elem) => {
    let k = elem.dataset.i18;
    elem.textContent = i18Obj[currentLang][k];
  });
  langs[0].classList.remove('lang-active');
  langs[1].classList.add('lang-active');
}

/*******************
Button Effects
*******************/
const btn = document.querySelectorAll('.btn');
  
btn.forEach((x,i)=>{x.addEventListener('click', function (e) {
const x = e.clientX
const y = e.clientY

const buttonTop = e.target.getBoundingClientRect().y
const buttonLeft = e.target.getBoundingClientRect().x

const xInside = (x - buttonLeft)
const yInside = (y - buttonTop)

const circle = document.createElement('span')
circle.classList.add('circle')
circle.style.top = yInside + 'px'
circle.style.left = xInside + 'px'

this.appendChild(circle)

setTimeout(() => circle.remove(), 700)
})})

/*******************
Real Video
*******************/
const play = document.querySelector(".play");
const picture = document.querySelector(".video-player");
const video = document.querySelector(".real-video");

play.addEventListener("click", () => {
  picture.classList.add("hide");
  video.classList.remove("hide");
  video.classList.add("active"); /* Added active class to scale video */
  video.play();
});

video.addEventListener("click", () => {
  if (video.classList.contains("active")) {
    video.classList.remove("active"); /* Remove active class on click to revert scaling */
    video.pause(); /* Pause video when clicked again */
    picture.classList.remove("hide");
    video.classList.add("hide");
  }
});

console.log('Total points 85\nСмена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал +10');