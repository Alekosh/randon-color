const btn: HTMLElement | null = document.querySelector('.btn');
const result = document.querySelector('#result-color');
let color: unknown;

const randomColor = () => {
  color = '#';
  let hex = '0123456789ABCDEF';

  for (let index = 0; index < 6; index++) {
    color = color + hex[Math.floor(Math.random() * 16)]
  }

  return color;
}

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
  result.innerHTML = color;
})
