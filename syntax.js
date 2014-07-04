console.info("Hello from syntax.js");

var i = 0

var nums = new Array(1,2,3);
for (num in nums) {
	console.info(nums[num]);
}

var letters = new Array('a', 'b', 'c');
for (var i = 0; i < letters.length; i++) {
	console.info(letters[i]);
}
