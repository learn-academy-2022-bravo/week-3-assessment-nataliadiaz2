// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("returnedFibonacci", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    // Example input: 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(returnedFibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(returnedFibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//  ● returnedFibonacci › that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
// ReferenceError: returnedFibonacci is not defined


// b) Create the function that makes the test pass.

//Create a function - returnedFibonacci
//Parameter - number
//Utilize a for loop to run the argument the value of the number inputted
//Use a method to add the previous number to the next number
//Push the outcome into the array
//Use the slice method to skip over the 0 that usually starts the sequence
//Return an array of numbers using the Fibonacci sequence

 function returnedFibonacci(number) {
  let fib = [0, 1]
  for (let i = 1; i < number; i++){
    fib.push(fib[i] + fib[i-1])
  }
  return fib.slice(1)
}

console.log(returnedFibonacci(6))
console.log(returnedFibonacci(10))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

describe("oddsSorted", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    // Expected output: [-9, 7, 9, 199]
    // Expected output: [-823, 7, 23]
    expect(oddsSorted(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddsSorted(fullArr2)).toEqual([-823, 7, 23])
  })
})

// ● oddsSorted › takes in an array and returns a new array of only odd numbers sorted from least to greatest
//
//   ReferenceError: oddsSorted is not defined

// b) Create the function that makes the test pass.

// Create a function - oddsSorted
// Parameter - array and dataType
// Use the filter method to identify the odd numbers and the logical && to identify the number dataTypes
// Sort odd numbers from least to greatest
//Return the odd number array

const oddsSorted = (array, dataType) => {
  let oddNum = array.filter(value => {
      return value % 2 !== 0 && typeof value === "number"
  })
  return oddNum.sort(function(a, b){return a-b})
}

console.log(oddsSorted(fullArr1))
console.log(oddsSorted(fullArr2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
const numbersToAdd2 = [0, 7, -8, 12]
const numbersToAdd3 = []
describe("accumSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    // Excpected output: [2, 6, 51, 60]
    // Expected output: [0, 7, -1, 11]
    // Expected output: []
    expect(accumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumSum(numbersToAdd3)).toEqual([])
  })
})

// ● accumSum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array
//
//   ReferenceError: accumSum is not defined

// b) Create the function that makes the test pass.

//Create a function - accumSum
//Parameter - array
//Create a variable to hold the new array
//Create a starting off variable
//Utilize a for loop to run through the given array
//Make the starting off variable equally itself plus the index of the array
//Use the push() method to the added variable
//Return an array with the accumulating sum


function accumSum(array) {
      let added = [];
      let starting = 0
      for (let i = 0; i < array.length; i++) {
        starting = starting + array[i]
        added.push(starting);
      }
      return added
    }

console.log(accumSum(numbersToAdd1))
console.log(accumSum(numbersToAdd2))
console.log(accumSum(numbersToAdd3))


//Notes:
//  -Had trouble about where to put the given variables in the scope, I tried to add it and the test wasn't passing, moved the given variables outside the description and the test passed
//I'm lost on the difference of the layout between number 2 and number 3 for my functions. I see the differences, but don't full understand the reason they are different.
//
