console.info("Hello from properties.js");

var obj = {
    name: "Blah"
};

console.info("hasOwnProperty: ", obj.hasOwnProperty("name"));
console.info("propertyIsEnumerable: ", obj.propertyIsEnumerable("name"));
console.info("Object.isExtensible: ", Object.isExtensible(obj));
console.info("Object.isSealed: ", Object.isSealed(obj));

var descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.info("descriptor.enumerable: ", descriptor.enumerable);
console.info("descriptor.configurable: ", descriptor.configurable);
console.info("descriptor.writable: ", descriptor.writable);
console.info("descriptor.value: ", descriptor.value);

