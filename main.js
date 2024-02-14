window.onload = function () {
    addColor();
};

for (let i = 1; i <= 9; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
        console.log(box.innerHTML);
        navigator.clipboard.writeText(box.innerHTML);
        console.log("copied");
        toastr.success('Now you can use it!', 'Copied to clipboard', {timeOut: 3000});
    });
}

const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

function RandomHexColorCode () {
    let chars = '0123456789abcdef';
    let colorLength = 6;
    let color = '';

    for (let i = 0; i < colorLength; i++) {
        let randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
}

function addColor () {
    randomColorBlock.forEach(e => {
        let newColor = RandomHexColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    });
}
