console.info("Hello from syntax.js");

// This is a comment...

/*
 * This is also a comment...
*/

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

// ARRAYS
var arr1 = new Array();
arr1.push(1);
arr1.push(2);
arr1.push(3);
console.info("typeof arr1=" + (typeof arr1));// outputs 'object'!
console.info("arr1 is an array=" + Array.isArray(arr1)); // outputs 'true'
console.info("Length of arr1=" + arr1.length);
console.info("arr1 contents=" + arr1.toString());

var arr2 = new Array([1,2,3, 4]);
console.info("Length of arr2=" + arr2.length); // is 1...i.e. element 1 ia an array
console.info("arr2 contents=" + arr2.toString());

var arr3 = new Array(1,2,3, 4);
console.info("Length of arr2=" + arr3.length);
console.info("arr3 contents=" + arr3.toString());

var arr4 = [1,2,3, 4, 5];
console.info("Length of arr4=" + arr4.length);
console.info("arr4 contents=" + arr4.toString());

// FUNCTIONS
function sayHello(msg) {
    console.info("sayHello says: " + msg);
}
sayHello("hi");

var myFunc1 = sayHello;
myFunc1("This is myFunc1!!");

var myFunc2 = function(arg1) {
    console.info("This is an anonymous function");
    // All functions have an arguments property
    // It stores the arguments passed in in a pseudo array
    console.info("arguments.length=" + arguments.length);
    console.info("arguments=" + arguments.toString());
    
    // Functions are objects
    // They also have properties and methods
    // Functions have a length property
    // Functions have methods: call, apply, bind (see examples later)
    console.info("function.length=" + myFunc2.length);
    
    // The length property of a function defines the functions 'airity'
    // i.e. how many parameters the function expects.
    // In Javascript, a function can specify a parameter list or not
    // and when a function is called, zero or more parameters can be passed
    // to the function without a problem.
    // The function length property will define how may we expect but the
    // arguments property will store the actual parameters passed in...
};
myFunc2();
myFunc2("hello");

// OBJECTS
var obj = new Object();
obj.message = "Hello from obj";
console.info("The variable obj.message=" + obj.message);

var objLiteral = {
    message: "Hello from objLiteral"
};
console.info("The variable objLiteral.message=" + objLiteral.message);

// FUNCTION CONTEXT
function contextPrinter(label) {
    console.info(label + ":" + this.name);
}

var context1 = {
    name: "context1"
};

var context2 = {
    name: "context2"
};

this.name = "script";
contextPrinter.call(this, "global-call");
contextPrinter.call(context1, "context1-call");
contextPrinter.call(context2, "context2-call");

// apply works exactly like call except it takes an array of parameters
// to the function
contextPrinter.apply(this, ["global-apply"]);
contextPrinter.apply(context1, ["context1-apply"]);
contextPrinter.apply(context2, ["context2-apply"]);

var contextPrinterForContext1 = contextPrinter.bind(context1);
contextPrinterForContext1("context1-bind");

var contextPrinterForContext2 = contextPrinter.bind(context2, "context2-bind");
contextPrinterForContext2();

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
// NOTE: in Javascript, the switch works with any data type...
var number = Math.floor((Math.random() * 6) + 1); // generate a random number between 1 & 6
switch (number) {
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

var astring = "Hello World"
switch (astring) {
    case "Hello" + " " + "World":
        console.info("A switch with strings and stuff...");
        break;
    case "Hello":
        console.info("Gotta 'Hello'");
        break;
    case "World":
        console.info("Gotta 'World'");
        break;
    default:
        console.info("Gotta " + astring);
        break;
}

// LOOPING
// Different types of loops:
// for, for/in, while, do/while
console.info("for loop: traditional");
for (var i = 0; i < 3; i++) {
    console.info(i);
}

console.info("Looping over an array");
var letters = new Array('a', 'b', 'c');
for (var i = 0; i < letters.length; i++) {
    // do something...
}

console.info("for loop: for/in");
var props = {
    prop1: "prop1",
    prop2: "prop2",
    prop3: "prop3",
    prop4: "prop4"    
};
for (prop in props) {
    console.info(props[prop]);
}

console.info("while loop");
var i = 0;
while (i < 3) {
    console.info(i);
    i++; // dont forget to increment!!! or else infinite loop
}

console.info("do/while loop");
var i = false;
do {
    // do/while runs at least once
    console.info(i);
} while (i); // continue if true otherwise end

