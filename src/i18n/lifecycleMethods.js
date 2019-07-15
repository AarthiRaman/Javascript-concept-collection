// Incomplete
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
    type: "heading",
    order: 2,
    text: "On Mounting"
  },
  {
    type: "text",
    text: [
      "Constructor",
      "Used only once during the components life",
      "Used oto initialize the props and state"
    ]
  },
  {
    type: "gist",
    id: "7d3f59ee5a070b2125cefa8da4e18f4d"
  },
  {
    type: "text",
    text: [
      "static getDerivedStateFromProps",
      "Used when the state is dependent on props",
      "Replaces componentWillReceiveProps (which has now become UNSAFE_componentWillReceiveProps",
      "Returns the changed state when the previous and next states are compared and then componentDidUpdate is called to update the newState"
    ]
  },
  {
    type: "gist",
    id: "e6690782006044584356c5c1eabb75a6"
  },
  {
    type: "text",
    text: ["render", "It returns the JSX of your actual component. "]
  },
  {
    type: "gist",
    id: "b3cfab897e8f22d0d1f4e84c3f40fef3"
  },
  {
    type: "text",
    text: [
      "componentDidMount",
      "we’ve rendered our component for the first time, this method is called.",
      "Method to do all the setup you couldn’t do without a DOM, and start getting all the data you need."
    ]
  },
  {
    type: "gist",
    id: "5506913d2f1c37414ae1918a633de609"
  },
  {
    type: "heading",
    order: 2,
    text: "On Update"
  },
  {
    type: "text",
    text: ["getDerivedStateFromProps"]
  },
  {
    type: "text",
    text: [
      "shouldComponentUpdate",
      "Triggers before the re rendering starts",
      "Takes the next state and next props as the arguments and returns a boolean to state if the component should be rendered."
    ]
  },
  {
    type: "gist",
    id: "f9499c4bca1a09e581f8b23368bc84d1"
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
