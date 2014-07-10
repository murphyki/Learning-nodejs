console.info("Hello from object.js");

// Defining Properties
// 'Own' properties as distinct from prototype properties
// 'Own' property = instance property
// 'Own' properties we add, prototype properties are inherited
// from parent classes
// [[Put]] method creates the own property
var myObj1 = {
    name: "Tod"
};

var myObj2 = new Object();
myObj2.name = "Ted"; // Calls the [[Set]] method on the object to assign a new value to name

myObj1.age = "35";// Calls [[Put]] to create a new properrty, age, on myObj1
myObj2.age = "45";// Calls [[Put]] to create a new properrty, age, on myObj2

console.info("myObj1: ", myObj1.name, myObj1.age);
console.info("myObj2: ", myObj2.name, myObj2.age);
console.info("myObj1.hasOwnProperty('name'): ", myObj1.hasOwnProperty("name"));// true
console.info("myObj1.hasOwnProperty('name'): ", myObj1.hasOwnProperty("name"));// true
console.info("myObj1.hasOwnProperty('toString'): ", myObj1.hasOwnProperty("toString"));// false
console.info("myObj1.hasOwnProperty('toString'): ", myObj1.hasOwnProperty("toString"));//false

// Detecting Properties
// DONT DO THIS - its unreliable
if (myObj1.age) {
    // Do something...
}

// Do this instead:
if ("age" in myObj1) {
    console.info("myObj1 has an age property...");
}

// Removing Properties
// Setting a property to 'null' does not remove it completely from the object
// Calling [[Delete]] on the property will remove it
var myObj3 = {
    name: "This is a property we will delete"
}
console.info("myObj3.name in myObj3=", ("name" in myObj3)); // true
delete myObj3.name;                                         // true - not output
console.info("myObj3.name in myObj3=", ("name" in myObj3));// false

// Enumeration
// Enumerable properties have their [[Enumerable]] property set to true
// by default. All own properties are enumerable by default.
console.info("Property enumeration using for/in");
for (var property in myObj1) {
    console.info("Property Name=" + property);
    console.info("Property Value=" + myObj1[property]);// Note how the property is accessed like an array element
}

console.info("Property enumeration using Object.keys");
var properties = Object.keys(myObj2);
for (var i = 0; i < properties.length; i++) {
    console.info("Property Name=" + properties[i]);
    console.info("Property Value=" + myObj1[properties[i]]);
}

console.info("Properties are enumerable by default");
for (var property in myObj1) {
    console.info("Property Name=%s, isEnumerable=%s", property, myObj1.propertyIsEnumerable(property));
}

// There is a diference between using for/in and Object.keys.
// for/in will enumerate all own properties as well as prototype properties
// Object.keys will only enumerate uwn properties

// Types of Properties
// Two different tyoes of properties:
//   Data properties     - contain a value, e.g. name, age
//   Accessor properties - dont contain a value but define a function when
//                         a property is read (getter) and a property is 
//                         written to (setter)
// 
// The default behaviour of the [[Put]] method is to create a data property
// Every example up to this point has used data properties
// Accessor property syntax:
var myObj4 = {
    _name: "myObj4", // accessor property
    
    set name(value) { // setter method
        console.info("Setting _name to %s", value);
        this._name = value;
    },
    
    get name() { // getter method
        console.info("Reading _name");
        return this._name;
    }
};
console.info("myObj4.name=", myObj4.name);
myObj4.name = "John";
console.info("myObj4.name=", myObj4.name);

// NOTE on accessor property syntax:
// You can define both a getter and a setter or one or the other.
// If a setter only defined then the property is write only. Any
// attempt to read it will result in an error.
// If a getter only defined then the property is read only. Any
// attempt to write to it will result in an error.
// The failures will be silent unless strict mode is on ("use strict";);

// Property Attributes
// Common attributes: [[Enumerable]] and [[Configurable]]
//   [[Enumerable]] - boolean, determines whether the property can be iterated over
//   [[Configurable]] - boolean, determines whether the property can be changed
// By default all properties you declare on an object are both enumerable
// and configurable.
// Possible to change property attributes using Object.defineProperty()
var myObj5 = {
    name: "myObj5"
};

// Add a new property
Object.defineProperty(myObj5, "age", {
    enumerable: false
});
console.info("myObj5.hasOwnProperty('name'): ", myObj5.hasOwnProperty("name")); // true
console.info("myObj5.hasOwnProperty('age'): ", myObj5.hasOwnProperty("age"));   // true
console.info("myObj5.propertyIsEnumerable('name'): ", myObj5.propertyIsEnumerable("name")); // true
console.info("myObj5.propertyIsEnumerable('age'): ", myObj5.propertyIsEnumerable("age"));   // false

var properties = Object.keys(myObj5);
console.info("Object.keys(myObj5) length=" + properties.length); // outputs 1

// modify an exiting property
Object.defineProperty(myObj5, "name", {
    configurable: false    
});

// Try and delete the name property now...
console.info("before delete: myObj5.name exists=", ("name" in myObj5));
delete myObj5.name; // fails silently if strict mode not on
console.info("after delete: myObj5.name exists=", ("name" in myObj5));

// Try and set the configurable attribute back to true...
// Error! can't make a non-configurable proerty configurable!
//Object.defineProperty(myObj5, "name", {
//    configurable: true    
//});

// Data Property Attributes
// Data properties possess two additional attributes:
//   [[Value]]    - holds the property value 
//   [[Writable]] - boolean, indicates whether the property can be written to
// By default, all properties are writable.
var myObj6 = {};
Object.defineProperty(myObj6, "name", {
    value: "myObj6",
    enumerable: true,
    configurable: true,
    writable: true    
});

// NOTE on Object.defineProperty():
// Be sure to specify all attributes as boolean attributes automatically
// default to false.

// Accessor Property Attributes
// Accessor properties also possess two additional attributes:
//   [[Get]] - Contains getter function
//   [[Set]] - Contains setter function
// you only need define one of these attributes to define the property
// NOTE: if you try to create a property with both data and accessor attributes
// you will get an error
// Two ways to define accessor properties
// Object literal syntax: 
var myObj7 = {
    _name: "myObj7", // accessor property
    
    set name(value) { // setter method
        console.info("Setting _name to %s", value);
        this._name = value;
    },
    
    get name() { // getter method
        console.info("Reading _name");
        return this._name;
    }
}; 

// or using Object.defineProperty():
var myObj8 = {
    _name: "myObj8"
}
Object.defineProperty(myObj8, "name", {
    set: function(value) { // setter method
        console.info("Setting _name to %s", value);
        this._name = value;
    },
    
    get: function() { // getter method
        console.info("Reading _name");
        return this._name;
    },
    
    enumerable: true,
    configurable: true
});

// Note the differences in syntax above...

// Can use Object.defineProperties() to define multiple properties:
var myObj9 = {};
Object.defineProperties(myObj9, {
    // data property to store data
    _name: {
        value: "myObj9",
        enumerable: true,   // always explicitly define as default boolean value is false
        configurable: true, // always explicitly define as default boolean value is false
        writable: true      // always explicitly define as default boolean value is false
    },
    
    // accessor property
    name :{
        get: function() {
            console.info("Reading name");
            return this._name;
        },
        set: function(value) {
            console.info("Setting name to %s", value);
            this._name = value;
        },
        enumerable: true,
        configurable: true   
    }
});

// Retrieving property attributes:
console.info("Retreiving property attributes for myObj9.name");
var descriptor = Object.getOwnPropertyDescriptor(myObj9, "name");
console.info("descriptor.enumerable: ", descriptor.enumerable);     // true
console.info("descriptor.configurable: ", descriptor.configurable); // true
console.info("descriptor.writable: ", descriptor.writable);         // true
console.info("descriptor.value: ", descriptor.value);               // "myObj9"

// Preventing Object Modification
// Preventing Extensions
var myObj10 = {
    name: "myObj10"
};
console.info("Object.isExtensible(myObj10): ", Object.isExtensible(myObj10)); // true
Object.preventExtensions(myObj10);
console.info("Object.isExtensible(myObj10): ", Object.isExtensible(myObj10)); // false
myObj10.saySomething = function() {
    console.info("hello");
};
console.info("Is saySomething in myObj10? ", ("saySomething" in myObj10));// false

//console.info("Object.isSealed(obj1): ", Object.isSealed(obj1));




