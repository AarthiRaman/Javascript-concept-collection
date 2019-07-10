export default [
  {
    type: "heading",
    order: 3,
    text: "Pure Components in ReactJS"
  },
  {
    type: "definition",
    text: `React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.`
  },
  {
    type: "definition",
    text: `If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.`
  },
  {
    type: "referenceLinks",
    text: [
      {
        href:
          "https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action",
        text: "Optimizing Performance – React"
      },
      {
        href:
          "[React Top-Level API – React](https://reactjs.org/docs/react-api.html#reactpurecomponent)",
        text: "Pure Components"
      }
    ]
  },
  {
    type: "text",
    text: `1) ShouldComponentUpdate - Basically is not used always wherever applicable Pure Component can be used as a helper.`
  }
];
