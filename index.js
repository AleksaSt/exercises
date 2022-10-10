// 1. Create a function that for 3 given number arguments returns their average

// function returnAverageValue(one,two,three){
//   const averageNumber = (one + two + three) / 3
//   return averageNumber
// }

// console.log(returnAverageValue(10,15,5))

// 2. Create a function that returns average for given array.

// function returnAverageForArray(array){
//   let averageValue = 0
//   for(let i = 0; i < array.length; i++){
//     averageValue += array[i]
//   }
//   return averageValue
// }

// console.log(returnAverageForArray([1,2,3,4]))

// 3. Create a function that returns squared value of a given number if number is odd.
// Otherwise (if its even) returns square root of a given number(Use built in Math.sqrt() function).

// function returnValue(number){
//   if(number / 2 === 0){
//     return Math.sqrt(number)
//   }
//   return number * number
// }

// console.log(returnValue(6))

// 4. Create a function that for given string returns new string with
// all letters sorted alphabetically.
// We can use built in methods:
// string.split('') -  splits string to array with letters as elements
// array.sort() - sorts the array
// array.join('') - joins all array elements into a string
// Example input: 'javascript'
// Example output: 'aacijprstv'

// function returnSortedString(string){
//   const sortedString = string.split('').sort().join('')
//   return sortedString
// }

// console.log(returnSortedString("javascript"))

// 5. Create a function that takes an array as
// a parameter and returns last element of given array.

// function returnSortedString(array){
//   for(let i = 0; i < array.length; i++){
//     if(i === array.length - 1){
//       return array[i]
//     }
//   }
// }

// console.log(returnSortedString([1,2,7,4,8]))

// 6. Create a function that sums all element of an array

// function returnArraySum(array){
//   let arraySum = 0
//   for(let i = 0; i < array.length; i++){
//      arraySum += array[i]
//   }
//   return arraySum
// }

// console.log(returnArraySum([1,2,7,4,8]))

// 7. Create an object square that has property a which is length of its sides.
// Add methods to this object that return area and perimeter of this object.
// (area = a * a; perimeter = 4 * a)

// const square = {
//   a: 7,
//   area: function returnArea(a){ return a * a; },
//   perimeter: function returnPerimeter(a){ return 4 * a; }
// }

// console.log(square.area(square.a))
// console.log(square.perimeter(square.a))

// 8. Create an object shape that has properties: sides (3) and color (green).
// This object should also contain method that will return this objects info - getInfo()
// and console log e.g. "green shape with 3 sides.
// Call this method then change number of sides to 7 and  color to red and getInfo()
// again

// const shape = {
//   side: 7,
//   color: "red",
//   info: function getInfo(side,color){ console.log(color + " shape with " + side + " sides");}
// }

// shape.info(shape.side, shape.color);

// 9. Write a function that accepts string and a callback function.
// If string has less than 4 characters return the string,
// if it's longer return all upper case letter string using callback function.

// function checkStringLength(string,callback){
//   if(string.length < 4){
//     return string
//   }
//   return callback(string)
// }

// function returnUpperCaseString(string){
//   const newString = string.toUpperCase()
//   return newString
// }

// console.log(checkStringLength("hello", returnUpperCaseString))

// 10. Write a function that accepts array and a callback function.
// Return sum of all elements in given array using the callback function.

// function returnSumOfElementsInArray(array,callback){
//   return callback(array)
// }

// function calculateSum(array){
//   let sum = 0
//   for(let i = 0; i < array.length; i++){
//     sum += array[i]
//   }
//   return sum
// }

// console.log(returnSumOfElementsInArray([1,2,4,5,6], calculateSum))

// 11. Write a function that reverses the number.
// Example x = 32243
// Output: 34223

// function reverseNumber(number){
//  const  newNumber = number + ""
//  newNumber.split('').reverse().join('')
//  return newNumber - ''
// }

// console.log(reverseNumber(32243))

// 12. Write a function that checks whether a passed string is palindrome or not.
// A palindrome is word, phrase or sequence that reads the same backward and forward eg.
// “madam” or “nurses run”

// function checkIfStringIsPalindrome(string){
//   return string === string.split('').reverse().join('')
// }

// console.log(checkIfStringIsPalindrome("madam"))

// 13. Write a function that accepts a string as a parameter and find the
// longest word within the string.

// function findLongestWordWithinString(string){
//  const str = string.split(" ");
//  let longestWord = 0;
//  let word = null;
//  for(let i = 0; i < str.length; i++){
//   if (longestWord < str[i].length) {
//    longestWord = str[i].length;
//    word = str[i];
//   }
//  }
//   return word;
// }

// console.log(findLongestWordWithinString('the longest word needs to be found in this string'))

// 14. Write a function that returns array elements larger than a number

// function returnArrayOfElements(array, number){

//    const newArray = array.filter(function(element){ return element > number; });
//    console.log(newArray)
// }

// returnArrayOfElements([1,2,3,7,9],5)

// 15. Write a function that generates a string id (specified length) of random characters.

// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() *
//  charactersLength));
//    }
//    return result;
// }

// console.log(makeid(5));

// ------------------------------------------------(4,7)

// 1. Write a function that takes out every second letter from a string. The returned value should be the
//  string without those letters

// function removeEverySecondLetterFromString(string){
//   let newString = ""
//   for(let i = 0; i < string.length; i++){
//     if(i % 2 === 0){
//       newString += string[i]
//     }
//   }
//   return newString
// }

// console.log(removeEverySecondLetterFromString("hello"))

// 2. Write a function that returns first 20 characters of a string.

// function returnFirstTwentyCharactersOfString(string){
//   let newString = ""
//   for(let i = 0; i < 20; i++){
//       newString += string[i]
//   }
//   return newString
// }

// console.log(returnFirstTwentyCharactersOfString("hellohellohellohellohello"))

// 3.  Write a function that writes on what position in a string is the letter b located

// function returnIndexWhereBIsLocated(string){
//   let newString = ''
//   for(let i = 0; i < string.length; i++){
//     if(string[i] === "b" || string[i] === 'B'){
//      newString += i
//     }
//   }
//   return newString
// }

// console.log(returnIndexWhereBIsLocated("Here is a letter b and here is another letter B"))

// 5. Write a function that replaces the first and last element in a string

// function swapPlacesOfElements(string){

//  const words = string.split(' ');

//  let a = words[0];
//  words[0] = words[words.length - 1];
//  words[words.length - 1] = a;

//  return words.join(' ')
// }

// console.log(swapPlacesOfElements('one two three'))

// 6. Write a function that takes first three elements from an array and turns it into a string,
//  where every word starts with an upper case letter

// function returnNewArrayWithUppercaseLetters(array){
//   let newArray = []

//   for(let i = 0; i < 3; i++){
//     newArray += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
//   }
//   return newArray
// }

// console.log(returnNewArrayWithUppercaseLetters(['hello', 'greetings', 'welcome', 'salutations']))

// 8. Write a function that returns squared value of every element in array

// function returnSquareValueOfArrayElements(array) {
//   return array.map(function(element, index) {
//    return element *= element
//  });
// }

// console.log(returnSquareValueOfArrayElements([5, 6, 2]))

// 9. Write a function that turns a string into an array,
//  where all elements are going to be the length of each word,

// function returnArrayWithElementsLegths(string) {
//   const array = string.split(" ")
//   let newArray = []
//    array.map(function(element, index) {
//       newArray = newArray.push(element.length)
//  });
//   return newArray
// }

// console.log(returnArrayWithElementsLegths("Hello this is a string"))

// 11. Write a function that finds an element with the longest length and replaces it with a string 'This is the longest word'

// function findElementWithLongestLengthAndReplace(array) {
//   let element = ''
//   let string = 'This is the longest word'
//   for(let i = 0; i < array.length; i++){
//     if(array[i].length > element.length){
//       element = array[i]
//     }
//   }
//   let index = array.indexOf(element);
//   array.splice(index, 1, string);
//   return array
// }

// console.log(findElementWithLongestKeyAndReplace(['hi', 'hello','good day', 'greetings'])

// 12. Write a function that inserts a new element in the array, second from the end

// function returnArrayWithNewElement(array, element){
//   array.splice(array.length - 2, 0, element);
//   return array
// }
// console.log(returnArrayWithNewElement(['hi', 'hello','good day', 'greetings'],'howdy'))

// 13 Write a function that combines two arrays and finds the length of the longest element.

// function returnLongestElementOfCombinedArrays(array,arrayTwo){
//   const newArray = array.concat(arrayTwo);

//   let lengthValue = 0;
//   let longestValue = ''

//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i].length > lengthValue) {
//       let lengthValue = newArray[i].length;
//       longestValue = newArray[i];
//     }
//   }
//   return longestValue
// }

// console.log(returnLongestElementOfCombinedArrays(['hi', 'hello'],['good day', 'greetings']))

// 14. Write a function that returns a new array with only even numbers

// function returnArrayWithEvenNumbers(array){
//   let newArray = []

//   array.forEach(function(element, index){
//     if(element % 2 === 0){
//       newArray += element
//     }
//   })
//   return newArray
// }

// console.log(returnArrayWithEvenNumbers([5, 34, 20, 1, 4]))

// 15 .Write a function that returnes a new array with elements where the key length is even

// function returnArrayWithEvenIndexNumbers(array){
//   let newArray = []
//   for(let i = 0; i < array.length; i++){
//     if(i % 2 === 0){
//       newArray += array[i]
//     }
//   }
//   return newArray
// }

// console.log(returnArrayWithEvenIndexNumbers([34,66,3,0,32,9]))

// -------------------------------------------------------------(8)

// 1. Write a function that writes numbers between 1 and 30 that are divisible by 3.

// function writeNumbers(){
//   for(let i = 2; i < 30; i++){
//     if(i % 3 === 0){
//       console.log(i);
//     }
//   }
// }

// writeNumbers()

// 2. Write a function that places the numbers between 1 and 30 into a new array and
//  writes it on the screen

// function returnNumbersInArray(){
//   let array = []
//   for(let i = 1; i < 30; i++){
//     array.push(i)
//   }
//   return array
// }

// console.log(returnNumbersInArray())

// 3. Write a function that calculates the sum of the digits of some number.
// For example, if the given number is 14, the result is 5.
// And if the given number is 123, the result is 6.

// function countSumOfNumber(num){
//   let number = num + ""
//   let sum = 0
//   let stringToNum = 0
//   for(let i = 0; i < number.length; i++){
//     stringToNum = parseInt(number[i], 10);
//     sum += stringToNum
//   }
//   return sum
// }

// console.log(countSumOfNumber(22))

// 4. Write a function that calculates the number of even numbers between 1 and 30.

// function calculateSumOfNumbers(){
//   let sum = 0
//   let stringToNum = 0
//   for(let i = 2; i < 30; i++){
//     if(i % 2 === 0){
//       sum += i
//     }
//   }
//   return sum
// }

// console.log(calculateSumOfNumbers())

// 5. Write a function that goes through all numbers from 1 to 30, and if
// a number is divisible by 3 prints 'foo'.
// If the number is divisible by 5, it prints 'bar' and if it is a number
// divisible by both 3 and 5 prints 'foobar'.

// function calculateSumOfNumbers(){
//   for(let i = 1; i <= 30; i++){
//     if (i % 5 === 0 && i % 3 === 0){
//       console.log(i, "foobar")
//     } else if (i % 5 === 0){
//       console.log(i, "bar")
//     } else if(i % 3 === 0){
//       console.log( i, "foo")
//     }
//   }
// }

// console.log(calculateSumOfNumbers())

// 6. Write a function that checks whether
// there is a number 5 in the given array and if there is, write on which
// position. If it doesn't exist, it writes "Number 5 does not exist".

// function checkIfNumFiveExistsInArray(array){
//   array.forEach(function(number, index){
//     if(number === 5){
//       console.log(array.indexOf(number));
//     }
//   })
//   console.log("Number 5 does not exist")
// }

// checkIfNumFiveExistsInArray([1,2,3,4,5])

// 7. Write a function that finds the second largest number in an array

// function returnSecondBiggestNumber(array) {
//   let maxNumber = 0
//   let secondMaxNumber = 0

//   for(let i = 0; i < array.length; i++){
//     if(array[i] > maxNumber){
//       secondMaxNumber = maxNumber
//        maxNumber = array[i];
//     } else if (array[i] > secondMaxNumber){
//       secondMaxNumber = array[i];
//     }

//   }
//   return secondMaxNumber
// }

// console.log(returnSecondBiggestNumber([1,2,67,8,2]))

// IDK kako ovo resiti

// 8. Write a function that finds all pairs in an array whose sum is equal to a given number.
// For example, if the given number is 10, and we have a sequence = [2, 7, 8, 4, 3],
// the result should be 2 and 8, and 7 and 3.

// function returnArrayOfTwoNumbers(array, number) {
//  let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === number) {
//        newArray = array.push(array[i], array[j]);
//      }
//    }
//  }
//  return newArray;
// }

// console.log(returnArrayOfTwoNumbers([1,2,67,8,2]), 10)

// // 9. Zadati niz brojeva, razvrstavaj u nove nizove, tako sto ce jedan niz sadrzati parne,
// //   a drugi
// // neparne brojeve. ispisi na ekran oba niza. -->

// 9. For a given array of numbers, sort them into new arrays, so that on array will contain even numbers
// and the other one odd numbers. Write both arrays to the screen.

// function sortNumbersIntoArrays(array) {
//  let evenArray = [];
//  let oddArray = []

//   for (let i = 0; i < array.length; i++) {
//    if(array[i] % 2 === 0){
//      evenArray.push(array[i])
//    } else {
//      oddArray.push(array[i])
//    }
//  }
//  console.log(evenArray)
//  console.log(oddArray)
// }

// sortNumbersIntoArrays([1,2,67,8,3,7,2])

// 10. In the given array of numbers, find the smallest number that is divisible by 3.
// Write the number and it's position.

// function findSmallestNumberDivisibleByThree(array) {
//  let number = 0
//  let position = null
//  let string = ''

//  for (let i = 0; i < array.length; i++) {
//   if (array[i] > number) {
//     number = array[i];
//   }
//  }

//  for (i = 0; i < array.length; i++) {
//    if (array[i] % 3 === 0) {
//     if (array[i] < number) {
//      number = array[i];
//      position = i;
//    }
//   }
//  }

//  return string += "The smallest number divisible with three is " + number +
//    " and its located on position " + position;
// }

// console.log(findSmallestNumberDivisibleByThree([1,2,67,6,3,9,7,2]))

// 11. In the given array of numbers, write how many neighbors have the same value,
// and write what those values ​​are.
// for example. for the given array 1, 5, 5, 4, 6, 7, 7, 4, 4 should be written:
// There are 3 groups of neighbors that have the same values. Those values ​​are: 5, 7, 4.

// function returnNeighborsWithSameValue(array){

//  let number = 0
//  let newArray = []
//  let string = ''

//  for (i = 0; i < array.length - 1; i++) {
//    if (array[i] === array[i + 1]) {
//     number++;
//     newArray.push(array[i])
//   }
//  }
//  console.log("There's " + number + " groups of neighbors that have same values")

//  for (i = 0; i < newArray.length; i++) {
//         string +=  newArray[i];
//  }
//  console.log("Values: " + string)

// }

// returnNeighborsWithSameValue([1, 5, 5, 4, 6, 7, 7, 4, 4]);

// 12. Write a function that write the given array in reverse order.

// function reverseArray(array) {

// let newArray = []

//  for(let i = array.length - 1; i >= 0; i--){
//   newArray.push(array[i])
//  };

//  return newArray
// }

// console.log(reverseArray([1,2,67,6,3,9,7,2]))

// ---------------------------------------(1,5)

// 2. Write a function that receives an array of numbers and writes how many negative numbers,
// how many zeroes, and positive numbers are there. Pass only oce through the array

// function showPositiveNegativeNumbersAndZeros(array){
//   let positiveNumbers = 0
//   let negativeNumbers = 0
//   let zeroes = 0

//  for(let i = 0; i < array.length; i++){
//    if(array[i] > 0){
//      positiveNumbers++
//    } else if(array[i] < 0){
//      negativeNumbers++
//    } else if(array[i] === 0){
//      zeroes++
//    }
//  }
//   console.log("There are " + positiveNumbers + " positive numbers, " + negativeNumbers +
//     " negative numbers and " + zeroes + " zeroes")
// }

// showPositiveNegativeNumbersAndZeros([0,3,67,32,-2])

// 3. Write a function ourIndexOf, that receives an array and an element from that array
// and returns the index at which that element in the array is located, or
// -1 if the element does not exist in the array. For example. if an array is passed
// [3, 6, 1, 7, 9] and the number is 7, the function should return 3

// function ourIndexOf(array, number){

//  for(let i = 0; i < array.length; i++){
//    if(array[number] === array[i]){
//      console.log(array.indexOf(array[i]));
//    } else {
//      return -1
//    }
//  }
// }

// console.log(ourIndexOf([0,3,67,32,-2], 3))

// 4. Write a function that receives an array and returns 2 of its largest elements in a new array.

// function returnTwoBiggestElements(array){
//   let biggestEl = 0
//   let secondBiggestEl = 0

//  for(let i = 0; i < array.length; i++){
//    if(array[i] > biggestEl){
//      secondBiggestEl = biggestEl
//      biggestEl = array[i]
//    } else if( array[i] > secondBiggestEl){
//      secondBiggestEl = array[i]
//    }
//  }
//   return "The biggest number in this array is " + biggestEl +
//   " and the second bigger is " + secondBiggestEl;
// }

// console.log(returnTwoBiggestElements([1,3,67,32,-2]))

// 7. Write a function that receives a string and returns the number of vowels in it.

// function returnVowels(string){

//   let numberOfVowels = []

//  for(let i = 0; i < string.length;  i++) {
//   if(string[i] === "a"){
//     numberOfVowels++
//   } else if (string[i] === "e"){
//     numberOfVowels++
//   }  else if (string[i] === "i") {
//     numberOfVowels++
//   } else if (string[i] === "o") {
//     numberOfVowels++
//   } else if (string[i] === "u") {
//     numberOfVowels++
//   }
//  }
//  return numberOfVowels++
// }

// console.log(returnVowels("akdamiufei"))

// 8. Write a function that receives two strings, the second of which is only one letter.
// The function should determine whether that letter is contained in the string
// and return true or false accordingly

// function checkString(stringOne, stringTwo){

//   let numberOfVowels = []

//  for(let i = 0; i < stringOne.length;  i++) {
//   if(stringOne[i] === stringTwo){
//     return true
//   }
//    return false
//  }
// }

// console.log(checkString("akdamiufei", "a"))

// 11. Write a function that receives an array of numbers and returns a new array with a cumulative
// sums of elements,(sums of all elements up to that point).
// Example: if passed
// [1, 2, 3, 4, 5], the function should return:
// [1, 3, 6, 10, 15] (each element is the sum of elements up to
//  that place in the original array)

// function calculateSumOfElements(array) {
//   let sum = 0;
//   let newArray = [];

//   for(let i = 0; i < array.length; i++){
//     sum += array[i];
//     newArray.push(sum);
//   }
//   return newArray
// }

// console.log(calculateSumOfElements([1,2,3,4,5]));

// 12. Write a function that receives an array and two indexes, and swaps the
// places od elements on those indexes (for example, if passed [1, 2, 3, 4, 5, 6, 7]
// and numbers 1 and 3, the places of those elements on those indexes swap
// and returns [1, 4, 3, 2, 5, 6, 7]

// function swapElementsInArray(array, indexOne, indexTwo) {

//   let b = array[indexOne];
//   array[indexOne] = array[indexTwo];
//   array[indexTwo] = b;
//   return array
// }

// console.log(swapElementsInArray([1,2,3,4,5], 1, 4));

// ------------------------------------------------------

// 3. Write a function that, for a given array of elements that
// contains numbers, creates and returns another array of the same length
// which contains elements of type string, which define whether the corresponding element
// from the original array is even or odd.

// function returnOddAndEvenArray(array) {
//  let newArray = []

//  array.forEach(function(element, index){
//    if(element % 2 === 0){
//      newArray.push('even')
//    } else {
//      newArray.push('odd')
//    }
//  })
//   return newArray
// }

// console.log(returnOddAndEvenArray([ 1, 2, 5, 9, 4 ] ));

// -------------------------------------------------------------------

// 1. a and b have values of 6 and 8. In case their sum is greater than 10, write their sum, in other case write their difference

// function returnSumOrDifference(){

//  const a = 6
//  const b = 8

//  if(a + b > 10){
//   return a + b
//  }
//  return a - b
// }

// console.log(returnSumOrDifference())

// 2. Write a function that returns what quarter od the year it is,
// based on the month.

// function checkQuarter(){

//   const d = new Date();
//   const month = d.getMonth();

//   if(month >= 0 && month < 3){

//     return "This is the first quarter of the year"

//   } else if(month >= 3 && month < 6){

//     return "This is the second quarter of the year"

//   } else if(month >= 6 && month < 9) {

//     return "This is the third quarter of the year"

//   } else if(month >= 9 && month <= 11) {

//     return "This is the fourth quarter of the year"
//   }
// }

// console.log(checkQuarter())

// 3. Create variable a with value 5 and variable b with value 7.
// If both variables are of number type, write "Variables are
// of number type", otherwise print "Variables are not of number type".

// function checkTypeOfValue(){

//  const a = 5
//  const b = 7

//  if(typeof a == 'number' && typeof b == 'number'){

//   return "Values are type number"
//  }

//  return "Values are not type number"
// }

// console.log(checkTypeOfValue())

// 4. Create a variable a with value 5 and variable b
// with the value 9. Add the string "4" to variable b.
// If both variables are of type number, write
// "Variables are of number type" and write their sum,
// otherwise write "Variables are not number type".

// function checkTypeOfValue(){

//  const a = 5;
//  let b = 9;
//  const string = "4";
//  b = string + b
//  const newValue = a + b;

//  if(typeof a == 'number' && b == 'number'){

//   return "Values are type number, the result is " + newValue;
//  }
//   return "Values are not type number";
// }

// console.log(checkTypeOfValue());

// 5. Write a function for variables a and b that contain numbers and write the result of the operation contained in the variable
// operation (can be 'add', 'subtract', 'multiply', 'divide')

// function switchOperation(a, b){

//   const operation = 'divide';

//   switch (operation) {
//     case 'add':
//       console.log(a + b);
//       break;
//     case 'subtract':
//       console.log(a - b);
//       break
//     case 'multiply':
//       console.log(a * b)
//       break
//     case 'divide':
//       console.log(a / b)
//       break;
//     default:
//       console.log("Error")
//   }
// }

// switchOperation(10, 2)

// 6. Write a function that writes the final grade based on the value of the variable NumberOfPoints.
// Set the number of points to be an arbitrary number from 0 to 100. The grade is determined as follows:

// a: Less than 55 points, mark 5
// 	b: 55-64 mark 6
// 	c: 65-74 mark 7
// 	d: 75-84 mark 8
// 	e: 85-94 mark 9
// 	f: 95+ mark 10

// function markPoints(){

//   let points = 55;
//   switch (points){
// //       case(points >= 55):
// //         console.log("The mark is 5");
// //         break;
//       case(points >= 55 && points < 65):
//         console.log("The mark is 6");
//         break;
//       case(points >= 65 && points < 75):
//         console.log("The mark is 7");
//         break;
//       case(points >= 75 && points < 85):
//         console.log("The mark is 8");
//         break;
//       case(points >= 85 && points < 95):
//         console.log("The mark is 9");
//         break;
//       case(points >= 95 && points <= 100):
//         console.log("The mark is 10");
//         break;
// //       default:
// //       console.log("There is an error");
//   }
// }

// markPoints()

// 7. Write a function that based on
// the value of the variable n, which contains a number, writes "n is an odd number" if the number is odd, otherwise “n is
// an even number”.

// function checkIfNumberIsOddOrEven(n){

//   if(n % 2 == 0){
//     console.log(n + " is an even number")
//   } else {
//     console.log(n + " is an odd number")
//   }
// }

// checkIfNumberIsOddOrRound(7)

// 8. Write a function that checks if the given year is a leap year

// function checkIfYearsIsLeapYear(n){

//   if(n % 4 == 0){
//     console.log(n + " is a leap year")
//   } else {
//     console.log(n + " isn't a leap year")
//   }
// }

// checkIfYearsIsLeapYear(2023)

// 9. Write a function that for a given number writes a message whether the number is one-digit, two-digit, or three-digit.

// function checkIfNumberIsSingleDoubleOrTripleDigit(n){

//   if(n < 10){
//     console.log(n + " is a single digit number")
//   } else if (n >= 10 && n <= 99){
//     console.log(n + " is a double digit number")
//   } else if(n >= 100 && n <= 999){
//     console.log(n + " is a triple digit number")
//   }
// }

// checkIfNumberIsSingleDoubleOrTripleDigit(999)

// 10. Write a function that writes the numbers from 20 to 30 using a while loop

// function writeNumbersUntilThirty(n){

//  while(n <= 30){
//    console.log(n)
//    n++
//  }

// }

// writeNumbersUntilThirty(20)

// 11. Write a script that writes the first 10 odd natural numbers using a while loop

// let number = 0;
// let nextNumber = 1

// while (number < 10){

//  console.log(nextNumber)
//  nextNumber += 2;
//  number++
// }

// 12 Write a script that writes numbers from 0 to 5 using a for loop.

// for (i = 0; i <= 5; i++) {

//  console.log(i)

// 13. Write a script that writes even numbers from 0 to 10 using a for loop.

// for (i = 0; i <= 10; i++) {
//  if (i % 2 == 0) {
//   console.log(i)
//  }
// }

// 14. Write a script that sums the first 100 natural numbers. Write the result.

// sum = 0;

// for (i = 0; i <= 100; i++) {
//   sum += i

// }

// console.log(sum);

// 15. Write a script that adds the first 20 odd natural numbers.
// Write the result

// let number = 0;
// let nextNumber = 1;
// let sum = 0;

// while (number  < 20) {

// 	sum += nextNumber;

// 	nextNumber += 2;

//     number++;
// }

// console.log(sum)

// 16. Write a function that for the given three variables a, b, c,
// that contain different numbers, writes which variable contains the largest number and which variable the smallest.

// function checkNumbers(a,b,c){
//   if(a >= b && a >= c){
//     console.log(a + " is the biggest number")
//   } else if(b >= a  && b >= c){
//     console.log(b + " is the biggest number")
//   } else {
//     console.log(c + " is the biggest number")
//   }

//   if(a <= b && a <= c){
//     console.log(a + " is the smallest number")
//   } else if(b <= a  && b <= c){
//     console.log(b + " is the smallest number")
//   } else {
//     console.log(c + " is the smallest number")
//   }
// }

// checkNumbers(10,5,6)

// 17. Write a function that for the given three variables a, b and c
// which contain numbers in order write the numbers from smallest to largest using if/else.

// function checkNumbers(a,b,c){
//   if(a <= b && a <= c){
//     console.log(a)
//     if(b <= c){
//       console.log(b)
//       console.log(c)
//     } else {
//       console.log(c)
//       console.log(b)
//     }
//   } else if(b <= c){
//     console.log(b)
//       if(a <= c){
//       console.log(a)
//       console.log(c)
//     } else {
//       console.log(c)
//       console.log(a)
//     }
//   } else {
//     console.log(c)
//       if(a <= b){
//       console.log(a)
//       console.log(b)
//     } else {
//       console.log(b)
//       console.log(a)
//     }
//   }
// }

// checkNumbers(7,8,5)

// 6. For given array with values [5, 4, 3, 2, 1], write all elements of the array

// const array = [5,4,3,2,1]

// function writeAllElementsOfArray(n){

//   array.forEach(function(num, index){
//     console.log(num)
//   })
// }

// writeAllElementsOfArray()

// 14. Create an object person1 with properties name, age, gender.
// Create a second object , person1Copy, and copy all properties
// from person1 to person1Copy.

// const person1 = {
//  name: 'Alex',
//  age: 25,
//  gender: 'M'
// }

// const person1Copy = {}
// person1Copy.name = person1.name,
// person1Copy.age = person1.age,
// person1Copy.gender = person1.gender

// console.log(person1Copy);

// // 15. Create an object user1 that has properties username and password
// // and method changePassword, that accepts a new password in the existing object
// // and sets a new value for property password.

// const user1 = {
//   uesrname: 'aleksa',
//   password: 'oldPasword',
//   changePassword: function(newPassword){
//     this.password = newPassword
//   }
// };

// user1.changePassword("newPassword")
// console.log(user1.password)
