const output = document.querySelector('.output ul');
let browserType = "mozilla";
let result = browserType.length + browserType[0] + browserType[browserType.length - 1];
if (browserType.indexOf('lla') !== -1) {
    result += browserType.slice(0, browserType.indexOf('lla'));
}

result += browserType.slice(3).toUpperCase();
result.replace('moz', 'test');

alert('Alert testing msg: ' + result);
let greetings = ['Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'
];

let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

for (let item in greetings) {
    if (greetings[item].indexOf('Christmas') !== -1) {
        let greeting = document.createElement('li');
        greeting.textContent = greetings[item];
        output.appendChild(greeting);
    }
}

for (let item of cities) {
    let city = document.createElement('li');
    city.textContent = item.toUpperCase();
    output.appendChild(city);
}

stations.forEach(element => {
    let preMsg = element.slice(0, 3);
    if (element.indexOf(';') !== -1) {
        let msgElement = document.createElement('li');
        msgElement.textContent = preMsg + ' : ' + element.slice(element.indexOf(';') + 1);
        output.appendChild(msgElement);
    }
});