function init() {
    let name = 'Mozilla';

    function displayName() {
        alert(name);
    }
    displayName();
}

function makeFunc() {
    let name = 'Mozilla';

    function displayName() {
        alert(name);
    }
    return displayName;
}
init();

let myFunc = makeFunc();

myFunc();

function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); //7
console.log(add10(2)); //12


function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;