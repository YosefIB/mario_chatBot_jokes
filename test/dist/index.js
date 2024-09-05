// function setupButton(): void {
var button = document.getElementById('myButton');
// button.addEventListener('click', () => {
//     button.disabled = true;
//     setTimeout(() => {button.disabled = false;}, 3000);
//     button.textContent = 'Abu ibrahim Was here before';
//     console.log('Button clicked');
//     button.style.color ='black';
//     button.style.fontSize ='20px';
//     button.style.borderRadius ='10px';
//     button.style.boxShadow ='0 0 5px #888';
// });
button.addEventListener('mouseenter', function () {
    button.style.backgroundColor = 'pink';
    button.style.transition = 'background-color 0.5s ease';
    button.style.border = '4px solid #000';
    button.style.borderRadius = '5px';
    button.style.boxShadow = '0 0 10px #888';
    button.style.transform = 'translate(-50%, -50%)';
});
var text = document.getElementById;
// window.addEventListener('DOMContentLoaded', () => {
//     setupButton();
// });
