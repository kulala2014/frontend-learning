const player = document.querySelector('.player');
player.addEventListener('click', undatePlayer);

function undatePlayer() {
    let name = prompt('请输入玩家名字：');
    player.textContent = '玩家1：' + name;
}

let arr = [];
const userInput = document.querySelector('#inputNo');
const confirmBt = document.querySelector('#confirm');
const lastGuess = document.querySelector("#lastGuess");
const msg = document.querySelector("#msg");
const tips = document.querySelector("#tipMsg");
const restBt = document.querySelector('#reset');

function getRandomNo(max) {
    return Math.floor(Math.random() * max) + 1;
}
const num = getRandomNo(100);

function checkNum(no) {
    if (no === '') {
        no = 0;
    }
    arr.push(no);
    if (no > num) {
        return 0;
    } else if (no < num) {
        return 1;
    } else {
        return 2;
    }
}

function showResult() {

    if (arr.length === 10) {
        lastGuess.innerText = "你上次猜得是：" + arr.join(' ');
        msg.innerText = "GAME OVER !!!!";
        confirmBt.disabled = true;
        restBt.style.display = "block";
        return;
    }
    let checkNo = checkNum(Number(userInput.value));
    lastGuess.innerText = "你上次猜得是：" + arr.join(' ');
    if (checkNo !== 2) {
        msg.innerText = "你猜错了";
        msg.style.backgroundColor = "red";
    } else {
        msg.innerText = "恭喜你，猜对了";
        msg.style.backgroundColor = "green";
        tips.innerText = " ";
        confirmBt.disabled = true;
    }
    if (checkNo === 0) {
        tips.innerText = "你猜大了~~";
    } else if (checkNo === 1) {
        tips.innerText = "你猜小了~~";
    }
    userInput.focus();
}

function resetBt() {
    userInput.innerText = ' ';
    arr = [];
    lastGuess.innerText = ' ';
    msg.innerText = ' ';
    tips.innerText = ' ';
    confirmBt.disabled = false;
    this.style.display = 'none';
}

confirmBt.addEventListener('click', showResult);
restBt.addEventListener('click', resetBt);