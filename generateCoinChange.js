//Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

function generateCoinChange(cents){
    var coins = [100,50,25,10,5,1];
    var change = [0,0,0,0,0,0];
    console.log(`$${(cents/100).toFixed(2)} can be represented by:`);
    for(var i = 0; i < coins.length; i++){
        if(cents >= coins[i]){ // if total (in cents) is greater or equal to the value of the coin
            change[i] = Math.floor(cents/coins[i]); // determine # of coins by total (in cents) divided by value of coin (in cents)
            cents %= coins[i]; // this determines the remainder to go through the loop again for the next coin
        }
    }
    console.log(`Dollar Bills: ${change[0]}`);
    console.log(`Half-Dollars: ${change[1]}`);
    console.log(`Quarters: ${change[2]}`);
    console.log(`Dimes: ${change[3]}`);
    console.log(`Nickels: ${change[4]}`);
    console.log(`Pennies: ${change[5]}`);
}
console.log("-----------Test Case #1-----------");
generateCoinChange(94)
console.log("-----------Test Case #2-----------");
generateCoinChange(2294)
console.log("-----------Test Case #3-----------");
generateCoinChange(5)