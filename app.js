// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

// const findMin = (...nums) => nums.filter(v => )
const findMin = (...nums) => nums.reduce((prevItem, currItem) => (prevItem < currItem ? prevItem : currItem), nums[0]);
// const findMin = (...args) => Math.min(...args)

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (...args) => {
	const objNew = {};
	args.forEach((element) => {
		for (const key in element) {
			if (Object.hasOwnProperty.call(element, key)) {
				const obj = element[key];
				objNew[key] = obj;
			}
		}
	});
	return objNew;
};

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([ 1, 2, 3 ], 4, 4); // [1,2,3,8,8]
// doubleAndReturnArgs([ 2 ], 10, 4); // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => {
	const newArr = arr;
	args.forEach((val) => {
		newArr.push(val * 2);
	});
	return newArr;
};

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
	const newArr = [];
	const intNum = Math.round(Math.random() * items.length);
	// console.log(intNum);
	items.forEach((element) => (items[intNum] !== element ? newArr.push(element) : console.log(element)));
	return newArr;
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
	let newArr = [ ...array1, ...array2 ];
	return newArr;
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
	const newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	const newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
	const newObj = { ...obj1, ...obj2 };
	return newObj;
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
	const newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};
