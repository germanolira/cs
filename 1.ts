/**
 * @param {number[]} nums - An array of numbers to search through.
 * @param {number} target - The target sum we are looking to achieve by adding two numbers from the array.
 * @return {number[]} - Returns an array of two indices whose corresponding numbers add up to the target.
 */
var twoSum = function twoSum(nums, target) {
  // Create an empty object to store numbers and their corresponding indices.
  let numMap = {};

  // Loop through each number in the nums array.
  for (let i = 0; i < nums.length; i++) {
    // Get the current number from the array.
    let num = nums[i];
    // Calculate the complement by subtracting the current number from the target.
    let complement = target - num;

    // Check if the complement exists in the numMap object.
    if (numMap[complement] !== undefined) {
      // If the complement exists, return an array with the index of the complement and the current index.
      return [numMap[complement], i];
    }

    // If the complement doesn't exist, store the current number and its index in the numMap object.
    numMap[num] = i;
  }

  // If no solution is found, return an empty array.
  return [];
};

// Me: hey
// Bot: Hello! How can I help you today?
// Me: you can see my code?
// Bot: Yes, I can see your code. What would you like me to do with it?
// Me: its a hash map or a hash table?
// Bot: Thinking, thinking... Yes, your code is using a hash map to store numbers and their corresponding indices.
// Me: what the line 15th does
// Bot: Line 15 calculates the complement by subtracting the current number from the target sum.
