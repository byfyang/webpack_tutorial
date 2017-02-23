//main.js

const sayHello = require('./say-hello');

require('./styles/main.scss');
 
sayHello('Poop', document.querySelector('h2'));

var imgElement = document.createElement('img');

imgElement.src = require('./images/my-image.png');

document.body.appendChild(imgElement);

