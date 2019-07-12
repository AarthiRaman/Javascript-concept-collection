export default [
  {
    type: "heading",
    order: 3,
    text: "Lifecycle Methods in ReactJS"
  },
  {
    type: "definition",
    text:
      "special methods on the component class to run some code when a component mounts and unmounts and during various other lifecycle stages"
  },
  {
    type: "text",
    text: [
      "List of lifecycle methods - on mounting before render",
      "constructor",
      "getDerivedStateFromProps",
      "render"
    ]
  },
  {
    type: "text",
    text: [
      "List of lifecycle methods - on mounting before render",
      "constructor",
      "getDerivedStateFromProps",
      "render"
    ]
  },
  {
    type: "snippet",
    text: `
    function init() { 
      var name = 'Mozilla'; // name is a local variable created by init function 
      displayName() { // displayName() is the inner function, a closure 
         alert(name); // use variable declared in the parent function 
      } 
      displayName(); 
    } 
    init();`
  },
  {
    type: "snippet",
    text: `
    var counter = (function() { 
      var privateCounter = 0; 
      function changeBy(val) { 
        privateCounter += val; } 
        return { 
           increment: function() { 
             changeBy(1); 
            }, 
            decrement: function() { 
             changeBy(-1); 
            }, 
            value: function() { 
             return privateCounter;
            } 
           };
         })(); 
        console.log(counter.value()); // logs 0
        counter.increment();
        counter.increment();
        console.log(counter.value()); // logs 2 
        counter.decrement();
        console.log(counter.value()); // logs 1
    `
  },
  {
    type: "referenceLinks",
    text: [
      {
        href:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        text: "Closures - JavaScript | MDN "
      },
      {
        text: "Master the JavaScript Interview: What is a Closure",
        href:
          "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36"
      }
    ]
  }
];
