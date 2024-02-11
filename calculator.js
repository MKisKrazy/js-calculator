
const display = document.getElementById("display");

 display.value= localStorage.getItem('calculation')||'';

function updateDisplay(input){
    display.value += input;
    localStorage.setItem('calculation',display.value);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }   

    localStorage.setItem('calculation',display.value);
}

function clearDisplay(){
    display.value ="";
    localStorage.setItem('calculation',display.value);
}