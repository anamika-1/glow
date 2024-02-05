var bulb = document.getElementById('bulb');
var button = document.getElementById('button');

function clickSwitch(){
    if(bulb.src.includes("img/off.png")){
        bulb.src = "img/on.png";
        button.innerHTML = "OFF";
    }
    else{
        bulb.src = "img/off.png";
        button.innerHTML = "ON";
    }

}
