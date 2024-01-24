/*

function counter(n) {
  let count = n;
  function increment() {
    count++;
    return count;
  }
  return increment;
}
let myCounter = counter(5);
console.log(myCounter());

*/

/*
function expect(val) {
  const obj = {
    toBe: function (value) {
      if (val === value) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (value) {
      if (val !== value) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };

  

  return obj;
}


function createCounter(init) {
  let count = init;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = init;
      return count;
    },
  };
}
let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset()); 



function transformArray(arr, fn) {
  let transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArray[i] = fn(arr[i], i);
  }
  return transformedArray;
}
let arr = [1, 2, 3, 4, 5];
let transformedArray = transformArray(arr, function (element, index) {
  return element * index;
});

console.log(transformedArray); 


function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}

const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction());

*/
function filteredArr(arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
const arr = [1, 2, 3, 4, 5];
const fn = (value, index) => value % 2 === 0 && index % 2 === 0;
console.log(filteredArr(arr, fn));



// (Yettinchi masalaga tushunolmadim tarjimasi ham tushunarsiz chiqyabdi ...)