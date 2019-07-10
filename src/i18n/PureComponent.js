export default {
  title: "Pure Components in ReactJS",
  definition:
    "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
  snippet:
    "function init() { \n var name = 'Mozilla'; // name is a local variable created by init function \n displayName() { // displayName() is the inner function, a closure \n alert(name); // use variable declared in the parent function \n } \n displayName(); \n} \ninit();"
};
