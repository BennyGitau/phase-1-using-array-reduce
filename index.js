const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//Adds the total batteries.
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(totalBatteries);