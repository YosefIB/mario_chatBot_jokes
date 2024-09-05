"use strict";

// function setupButton(): void {
var button = document.getElementById('myButton');
button.addEventListener('click', function () {
  alert('לחצת על הכפתור!');
  button.disabled = true;
  setTimeout(function () {
    button.disabled = false;
  }, 1000);
  button.textContent = 'Abu ibrahim Was here before';
  console.log('Button clicked');
  button.style.backgroundColor = 'yellow';
  button.style.color = 'black';
  button.style.fontSize = '20px';
  button.style.borderRadius = '10px';
  button.style.boxShadow = '0 0 5px #888';
  button.style.transition = 'background-color 1s, color 1s, font-size 1s, border-radius 1s, box-shadow 1s';
  button.style.transform = 'scale(5.2)';
}); // window.addEventListener('DOMContentLoaded', () => {
//     setupButton();
// });