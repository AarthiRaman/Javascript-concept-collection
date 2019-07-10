export default [
  {
    type: "heading",
    text: "Constructors in Javascript"
  },
  {
    type: "definition",
    text:
      "Constructor functions technically are regular functions. There are two conventions though.They are named with capital letter first and should be executed only with new operator."
  },
  {
    type: "text",
    text: [
      "When a function is executed as new User(...), it does the following steps:",
      "A new empty object is created and assigned to this.",
      "The function body executes. Usually it modifies this, adds new properties to it.",
      "The value of this is returned."
    ]
  },
  {
    type: "snippet",
    text: `
     function User(name, userId, marks) {
       this.name = name;
       this.userId = userId;
       this.marks = marks;
     }

     const student = new User('Harry Potter', 4, 100);
     console.log(student); //  User {name: "Harry Potter", userId: 4, marks: 100}
    `
  },
  {
    type: "referenceLinks",
    text: [
      {
        text: "Constructors in JavaScript - A Drip of JavaScript",
        href:
          "http://adripofjavascript.com/blog/drips/constructors-in-javascript.html"
      },
      {
        text: "Understanding JavaScript Constructors | CSS-Tricks",
        href: "https://css-tricks.com/understanding-javascript-constructors/"
      }
    ]
  }
];
