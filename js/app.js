$(document).ready(function () {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        operators = ['/', '*', '-', '+', '.'],
        brackets = [')','('],
        result,
        input = [];
    function update() {
        result = input.join("");
        $('#display').val(result);
    }
    function getValue(value) {
        if (numbers.includes(Number(value)) || brackets.includes(value)) {
            input.push(value);
        } else if (input.length != 0 && operators.includes(input[input.length - 1]) === true) {
            input.splice(input.length - 1, 1, value);
        } else if (input.length === 0){
            console.log('First Value cant be an operator');
        } else {
            input.push(value);
        }
        update();
    }
    function calculate() {
        result = input.join("");
        $('#display').val(eval(result));
    }
    $('.main-calc input').click(function (e) {
        if (this.id === "clearAll") {
            input = [];
            update();
        } else if (this.id === 'clearLast') {
            input.pop();
            update();
        } else if (this.id === 'equal') {
            calculate();
            input = [];
        } else {
            getValue(this.value);
        }
        e.preventDefault();
    });
});

