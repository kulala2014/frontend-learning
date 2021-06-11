const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = 30;
const dayLi = [1, -2, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];


const monthList = document.querySelector('#month');
const currentMonth = document.querySelector('#current');
let dayList = document.querySelector('.showDays');
const output = document.querySelector('.output');

month.forEach(Element => {
    let op = document.createElement('option');
    op.value = Element;
    op.textContent = Element;
    monthList.appendChild(op);
});

let selectIndex = monthList.selectedIndex;

currentMonth.textContent = month[selectIndex];

let monthDay = day + dayLi[selectIndex];

for (let i = 0; i < monthDay; i++) {
    let dayOpetion = document.createElement('li');
    dayOpetion.textContent = i + 1;
    dayList.appendChild(dayOpetion);
}

function updateValue() {
    let selectIndex = monthList.selectedIndex;

    currentMonth.textContent = month[selectIndex];

    let monthDay = day + dayLi[selectIndex];
    output.removeChild(dayList);
    dayList = document.createElement('ul');
    for (let i = 0; i < monthDay; i++) {
        let dayOpetion = document.createElement('li');
        dayOpetion.textContent = i + 1;
        dayList.appendChild(dayOpetion);
    }
    output.appendChild(dayList);
}

monthList.addEventListener('change', updateValue);