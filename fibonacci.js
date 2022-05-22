// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

// function fibonacci(value) {
//     var sum = 1;
//     var x = 0;
//     var y = 1;
//     while (value > 1) {
//         sum = x = y;
//         x = y;
//         y = sum;
//         value--;
//     }
//     console.log(sum);
//     return sum;
// }

// fibonacci(7)

function fibonacci(index){
    if(!(index >= 0)){
        console.log("invalid input")
        return index;
    }
    if(index < 2){
        return index;
    }
    var fib0 = 0;
    var fib1 = 1;
    for(var i = 1; i < index; i++){
        var newFib = fib0 + fib1;
        fib0 = fib1;
        fib1 = newFib;
    }
    return fib1;
}
console.log(fibonacci(-1))
console.log(fibonacci(3))