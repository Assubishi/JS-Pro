let texts = document.querySelector('.text');

let btn1 = document.querySelector('.first');
let btn2 = document.querySelector('.second');
btn1.addEventListener('click', () => {
    texts.textContent=texts.textContent.replace(/'/g, '"');
})

btn2.addEventListener('click', () => {
    texts.textContent=texts.textContent.replace(/\s'|'\s/g, '"');
})
