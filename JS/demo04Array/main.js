let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];
shopping[10] = 'apple';
let loopCount = 0;
let result = '';

function testLoop() {
    for (let i = 0; i < shopping.length; i++) {
        loopCount++;
    }
    result += loopCount;
    loopCount = 0;

    //item is index, start with 0
    for (let item in shopping) {
        loopCount++;
    }
    result += ' ' + loopCount;
    loopCount = 0;
    for (let item of shopping) {
        loopCount++;
    }
    result += ' ' + loopCount;
    loopCount = 0;

    shopping.forEach(Element => { loopCount++; });
    result += ' ' + loopCount;

    let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    let dataArr = myData.split(',');

    dataArr.push('HK');

    //push在数组结尾追加一个值，pop从数组结尾处删除一个值。
    let removedItem = dataArr.pop();

    //unshift()在数组得开头追加一个值， 和 shift()从数组得开头移除一个值
    dataArr.shift();
    dataArr.unshift('Xian');
    alert(dataArr.join('-'));

}
testLoop();

const shoppingList = document.querySelector('.shopping ul');
const totalPrice = document.querySelector('.shopping p');

let shoppingInfo = 'Underpants:6.99;Socks:5.99;T-shirt:14.99;Trousers:31.99;Shoes:23.99';
let total = 0;

let shoppingArr = shoppingInfo.split(';');
for (let item in shoppingArr) {
    let liItem = document.createElement('li');
    liItem.textContent = shoppingArr[item];
    total += parseFloat(shoppingArr[item].slice(shoppingArr[item].indexOf(':') + 1));
    shoppingList.appendChild(liItem);
}

totalPrice.textContent = "$" + total.toPrecision(4);