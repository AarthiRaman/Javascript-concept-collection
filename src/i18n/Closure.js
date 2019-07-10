export default {
  title: "Closures in Javascript",
  definition:
    "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
  placesUsed: ["Data Privacy to emulate private methods", ""],
  snippet: [
    "function init() { \n var name = 'Mozilla'; // name is a local variable created by init function \n displayName() { // displayName() is the inner function, a closure \n alert(name); // use variable declared in the parent function \n } \n displayName(); \n} \ninit();",
    "var counter = (function() { \n var privateCounter = 0; \n function changeBy(val) { \n  privateCounter += val; } \n  return { \n   increment: function() { \n    changeBy(1); \n   }, \n   decrement: function() { \n    changeBy(-1); \n   }, \n   value: function() { \n    return privateCounter; \n   } \n  }; \n })(); \n console.log(counter.value()); // logs 0 \n counter.increment(); \n counter.increment(); \n console.log(counter.value()); // logs 2 \n counter.decrement(); \n console.log(counter.value()); // logs 1"
  ],
  referenceLinks: [
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
      text: "Closures - JavaScript | MDN "
    },
    {
      text: "Master the JavaScript Interview: What is a Closure",
      href:
        "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36"
    }
  ]
};
