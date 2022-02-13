// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body")
const buttonEl = document.querySelector(".change-color")
const textColor = document.querySelector(".color")
const newColor = getRandomHexColor()
buttonEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = newColor;
  textColor.textContent = bodyEl.style.backgroundColor;
})
console.log(bodyEl, buttonEl, textColor)
console.log(newColor)
