const onbutton = document.getElementById('on');
const offbutton = document.getElementById('off');
const lamp = document.getElementById('lamp');
const bulb = document.getElementById('bulb');

function onHandler(){
onbutton.style.display = 'none';
offbutton.style.display = 'block';
bulb.src='./src/onbulb.jpg'
lamp.style.color  ='yellow';
}

function offHandler(){
    onbutton.style.display = 'block';
    offbutton.style.display = 'none';
    bulb.src='./src/offbulb.jpg'
    lamp.style.color  ='white';
    }