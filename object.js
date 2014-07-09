console.info("Hello from properties.js");

// Defining Properties

// Detecting Properties

// Removing Properties

// Enumeration

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
