// Array

// array is always object in js.

const myArr = [0,1,2,3,4,5,6,7,8]

// some operation in array

myArr.push(9) // similar like push_back() in c++.
myArr.pop()   // similar like pop_back() in c++.
myArr.unshift(9) // it will insert 9 at starting of array and shift all element to right.
myArr.shift() // it will remove 0th index element of array and shift all element to left.
console.log(myArr.includes(15)); // it will check 15 is present in array or not and return boolean value.
console.log(myArr.indexOf(9)) // it will check 9 is present in array or not and return if present then index of element if not then -1.

let myArr2 = myArr.join() // it will convert array in string.
let myArr3 = myArr.join(" and ") // it will convert array in string and put and between every element.
console.log(myArr3);

// VVVI interview question.

let myArr4 = myArr.slice(1,5) // it will copy element from index 1 to 4 and exclude 5th index.
let myArr5 = myArr.splice(1,5) // it will take element from index 1 to 5 and change the original array.