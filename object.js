console.info("Hello from properties.js");

// Defining Properties
// 'Own' properties as distinct from prototype properties
// own property = instance property
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

// Property Attributes

// Preventing Object Modification

var obj1 = {
    name: "obj1"
};
console.info("obj1.name: ", obj1.name);
console.info("obj1.hasOwnProperty('name'): ", obj1.hasOwnProperty("name"));
console.info("obj1.hasOwnProperty('toString'): ", obj1.hasOwnProperty("toString"));
console.info("obj1.propertyIsEnumerable('name'): ", obj1.propertyIsEnumerable("name"));
console.info("Object.isExtensible(obj1): ", Object.isExtensible(obj1));
console.info("Object.isSealed(obj1): ", Object.isSealed(obj1));

var descriptor = Object.getOwnPropertyDescriptor(obj1, "name");
console.info("descriptor.enumerable: ", descriptor.enumerable);
console.info("descriptor.configurable: ", descriptor.configurable);
console.info("descriptor.writable: ", descriptor.writable);
console.info("descriptor.value: ", descriptor.value);

var obj2 = {
    _name: "obj2",
    
    set name(value) {
        console.info("Setting _name to %s", value);
        this._name = value;
    },
    
    get name() {
        console.info("Reading _name");
        return this._name;
    }
};
obj2.name;
obj2.name = "John";
