var display = document.getElementById('display'), 
operator = document.querySelectorAll('operator'),
keys = document.querySelectorAll('.keys span'),
equal = document.getElementById('equal');

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        var inputVal = display.innerHTML;
        let keyVal = this.innerHTML;

        if(keyVal == 'C') {
            display.innerHTML = '';
        }
        else if (keyVal == '=') {
            var equation = inputVal;

            if (equation) {
                display.innerHTML = eval(equation);
            }
        }
        else {
            if (display.innerHTML.slice(-1) == '.') {
                display.innerHTML.slice(-1).replace(keyVal);
            }
            display.innerHTML += keyVal;
        }
    }
}

console.log();