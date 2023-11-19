var btn = document.querySelector('.btn');
var result = document.querySelector('#result-color');
var copy = document.querySelector('.clipboard');
var color;
const tooltip = document.querySelector('.tooltiptext');

var randomColor = function () {
    color = '#';
    var hex = '0123456789ABCDEF';
    for (var index = 0; index < 6; index++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
btn.addEventListener('click', function () {
    document.body.style.backgroundColor = randomColor();
    result.innerHTML = color;
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(result.innerText);
    if (tooltip.classList.contains('none')) {
        tooltip.classList.remove('none')
    }
    setTimeout(() => {
        tooltip.classList.add('none');
    }, 1000);
})

