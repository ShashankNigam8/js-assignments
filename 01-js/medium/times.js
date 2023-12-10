/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    return sum;
}

function measureTimeToCalculateSum(n) {
    // Record the start time
    const startTime = new Date().getTime();
  
    // Calculate the sum
    const result = calculateTime(n);
  
    // Record the end time
    const endTime = new Date().getTime();
  
    // Calculate the elapsed time in seconds
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
  
    console.log(`Sum from 1 to ${n}: ${result}`);
    console.log(`Time taken: ${elapsedTimeInSeconds} seconds`);
  }

measureTimeToCalculateSum(100);
measureTimeToCalculateSum(100000);
measureTimeToCalculateSum(1000000000);