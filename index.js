// Code your solution in this file!
// index.js
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
  }
  
  module.exports = { distanceFromHqInBlocks, /* other functions */ };
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264; // Assuming each block is 264 feet
  }
  function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
  }
  
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264; // Each block is 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Calculate feet based on block difference
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) return 0;
    if (distance > 400 && distance <= 2000) return (distance - 400) * 0.02; // 2 cents per foot
    if (distance > 2000) return 25; // Maximum fare
    return 'cannot travel that far'; // For distances beyond 2500 feet
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Maximum fare for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // For distances beyond 2500 feet
    }
  }