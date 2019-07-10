import React from "react";
import PropTypes from "prop-types";

import Snippets from "../components/Snippets";
import Definition from "../components/Definition";

function ExcerciseContainer({ textContent }) {
  return (
    <div className="excerciseContainer">
      <Definition
        title={textContent.title}
        textContent={textContent.definition}
      />

      {textContent.snippet &&
        textContent.snippet.map(snippet => <Snippets textContent={snippet} />)}
    </div>
  );
}

ExcerciseContainer.proptypes = {
  children: PropTypes.node
};

export default ExcerciseContainer;
