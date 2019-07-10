import React from "react";
import PropTypes from "prop-types";

import Snippets from "../components/Snippets";
import Definition from "../components/Definition";
import ReferenceSections from "../components/ReferenceSections";

function ExcerciseContainer({ textContent }) {
  const { snippet, title, definition, referenceLinks } = textContent;
  return (
    <div className="excerciseContainer">
      <Definition title={title} textContent={definition} />

      {snippet &&
        snippet.map(snippetPiece => <Snippets textContent={snippetPiece} />)}

      {referenceLinks && <ReferenceSections referenceLinks={referenceLinks} />}
    </div>
  );
}

ExcerciseContainer.propTypes = {
  children: PropTypes.node
};

export default ExcerciseContainer;
