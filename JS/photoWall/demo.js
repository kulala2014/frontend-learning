const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for (let i = 1; i < 6; i++) {
    let imgPath = './images/pic' + i + '.jpg';
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgPath);
    newImage.onclick = function() {
        displayedImage.setAttribute('src', imgPath);
    }
    thumbBar.appendChild(newImage);
}

btn.onclick = function() {
    let btnStyle = this.getAttribute('class');
    if (btnStyle === 'dark') {
        this.setAttribute('class', 'light');
        btn.textContent = '变亮';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        this.setAttribute('class', 'dark');
        btn.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

}