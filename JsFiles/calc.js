$(document).ready(function() {

    function add(a, b) {
    var sum = a + b;
    return parseInt(sum);
};

function subtract(a, b) {
    var difference = a - b;
    return parseInt(difference);
};

function multiply(a, b) {
    var product = a * b;
    return parseInt(product);
};

function divide(a, b) {
    var quotient = a / b;
    return parseInt(quotient);
};

var num1 = [],
    num2 = [],
    calc = "",
    result = 0,
    number = $('.number'),
    op = $('.op'),
    equals = $('#equals'),
    input = $('.input'),
    clear = $('.clear');

console.log(calc);

number.on('click', function() {
    var tmp = $(this).html();
    if (calc === "") {
        num1.push(parseInt(tmp));
        console.log(num1 + " is num1");
        input.html(num1.join(''));
    } else {
        num2.push(parseInt(tmp))
        console.log(num2 + " is num2");
        input.html(num2.join(''));
    }
});

op.on('click', function() {
    var tmp = $(this).html().toString();
    var a = tmp.replace(/(?:\r\n|\n|\r)/g, '').replace(/^\s+|\s+$|\s+(?=\s)/g, '');
    calc = a;
    input.append(calc + " ");
});

equals.on('click', function() {
    var n1 = num1.join("");
    var n2 = num2.join("");
    if (calc == "+") {
        var result = parseInt(n1) + parseInt(n2);
        input.html(result);
        console.log(result);
    } else if (calc == "-") {
        var result = parseInt(n1) - parseInt(n2);
        input.html(result);
        console.log(result);
    } else if (calc == "x") {
        var result = parseInt(n1) * parseInt(n2);
        input.html(result);
        console.log(result);
    } else if (calc == "/") {
        var result = parseInt(n1) / parseInt(n2);
        input.html(result);
        console.log(result);
    }
});

clear.on('click', function() {
    num1 = [];
    num2 = [];
    result = 0;
    input.html(0);
    calc = "";
});
//closing tag
});
