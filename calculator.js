const display = document.getElementById('display');

function getValue(value) {
    if(value=='Del'){
        return display.value = display.value.slice(0, -1);
    }else if(value=='C'){
        return display.value = '';
    }else if(value=='='){
        // validation
        if(display.value.length < 1) {
            display.value = 'Input Number';
        }else{
            return display.value = eval(display.value);}
    }else{
    display.value += value;
    }
}
