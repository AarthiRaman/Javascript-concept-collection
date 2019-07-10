export default [
  {
    type: "heading",
    text: "Event Loop"
  },
  {
    type: "text",
    text: [
      "JavaScript has a concurrency model based on an event loop",
      "JS is single threaded",
      "Each tab in a browser runs its own loop anmd web workers run in their own loops",
      "The call stack is a LIFO queue (Last In, First Out).",
      "The event loop continuously checks the call stack to see if there’s any function that needs to run.",
      "The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.",
      "The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue."
    ]
  },
  {
    type: "referenceLinks",
    text: [
      {
        text: "The JavaScript Event Loop",
        href: "https://flaviocopes.com/javascript-event-loop/"
      },
      {
        text: "Event Loop: Explained",
        href:
          "https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/"
      },
      {
        text:
          "Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more",
        href:
          "https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec"
      }
    ]
  }
];
