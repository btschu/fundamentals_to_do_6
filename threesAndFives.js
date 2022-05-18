// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
function ThreesAndFives(){
    var sum = 0;
    for(var i = 100; i <= 4000000; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return console.log(sum);
}

ThreesAndFives();

//Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).
function betterThreesAndFives(num1, num2){
    var sum = 0;
    for(var i = num1; i <= num2; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return console.log(sum);
}

betterThreesAndFives(100, 4000000);