const page = document.querySelector(".root");
const posts = document.querySelector(".posts");
const title = document.querySelector(".about__span");
const image = document.querySelector(".about__image");
const cardWorks = document.querySelectorAll(".card_place_works");
const footer = document.querySelector(".footer");
const themeIcon = document.querySelector(".theme-icon");
const arrayForDarkTheme = [page, posts, footer, ...cardWorks];

// Фунция смены темы на сайте
themeIcon.addEventListener("click", function () {
  arrayForDarkTheme.forEach(function (element) {
    element.classList.toggle("dark-mode");
  });
});

// Массив с данными
const titleTextArray = [
  "Начинающий веб-разработчик",
  "Студент ВУЗа",
  "Homo-aspiring",
  "тот, кто просто хочет быть счастливым",
];

let i = 0;
function changeText() {
  title.textContent = titleTextArray[i++];
  if (i === titleTextArray.length) {
    i = 0;
  }
}

setInterval(changeText, 5000);
