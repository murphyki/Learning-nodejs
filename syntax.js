console.info("Hello from syntax.js");

// TYPES - Javascript has 5 basic/primitive types:
//    undefined, null, boolean, number and string
// There is also object and function
console.info("typeof true = " + (typeof true));
console.info("typeof 'hello' = " + (typeof "hello"));
console.info("typeof 1.5 = " + (typeof 1.5));
console.info("typeof undefined = " + (typeof undefined));
console.info("typeof null = " + (typeof null)); // this will be 'object' as null is an empty object reference

// VARIABLES
var val; // value set to 'undefined' by default
console.info("The variable val=" + val);
console.info("The variable val is undefined: " + (val == undefined));
console.info("The variable val's type is: " + (typeof val));

val = "Val is set!"
console.info("The variable val=" + val);
console.info("The variable val is undefined: " + (val == undefined));
console.info("The variable val's type is: " + (typeof val));

// NOTE: Variables declared with the 'var' keyword are local to the scope
// in which it was declared. Leaving off the 'var' keyword will create
// global variables, which may/maynot be the intention.
// e.g.
if (true) {
    g_global = "I am a global, available everywhere!!";
} 
console.info("The variable g_global=" + g_global);
console.info("The variable g_global is undefined: " + (g_global == undefined));
console.info("The variable g_global's type is: " + (typeof g_global));

// CONDITIONALS
// The if/if...else/if..else if...else statements same syntax as in Java
if (true) {
    console.info("Executing inside 'if' block...");
}

if (false) {
    console.info("This block should NOT be executing!!");
} else {
    console.info("Executing inside 'else' block...");
}

if (false) {
    console.info("This block should NOT be executing!!");
} else if (true) {
    console.info("Executing inside 'else if' block...");
} else {
    console.info("This block should NOT be executing!!");
}

// SWITCH
// Use a switch to select one of many conditions instead of a huge if/else if block
var number = Math.floor((Math.random() * 6) + 1); // generate a random number between 1 & 6
switch(number) {
    case 1:
        console.info("Executing switch - gotta 1");
        break;
    case 2:
        console.info("Executing switch - gotta 2");
        break;
    case 3:
        console.info("Executing switch - gotta 3");
        break;
    case 4:
        console.info("Executing switch - gotta 4");
        break;
    case 5:
        console.info("Executing switch - gotta 5");
        break;
    case 6:
        console.info("Executing switch - gotta 6");
        break;
    default:
        console.info("Executing switch - got some other number!");
        break;
}

// LOOPING
var i = 0
var nums = new Array(1,2,3);
for (num in nums) {
    console.info(nums[num]);
}

var letters = new Array('a', 'b', 'c');
for (var i = 0; i < letters.length; i++) {
    console.info(letters[i]);
}
