function fizzbuzz() {
    var str = [];

    for (var num = 0; num < 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            str += ("FizzBuzz" + " ");

        } else if (num % 3 === 0) {
            str += ("Fizz" + " ");

        } else if (num % 5 === 0) {
            str += ("Buzz" + " ");
        } else {
            str += (num + " ");
        }

    }
 return str;
}
console.log(fizzbuzz());
