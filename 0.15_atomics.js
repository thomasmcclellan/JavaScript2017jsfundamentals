// Atomics provide atomic operations as static methods.  
// They are used with SharedArrayBuffer objects

// They are installed on an Atomic module
// Unlike other global objects, Atomics is not a constructor
// You cannot use it with a NEW OPERATOR or invoke the Atomics object as a function
// All properties and methods of Atomics are static => i.e. Math objects

Atomics.add(typedArray, index, value);