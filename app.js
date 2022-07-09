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

function mergeObjects(...args) {
	const objNew = { ...args };
	console.log(objNew);
}
