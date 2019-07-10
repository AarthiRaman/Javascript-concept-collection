import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const SnippetContainer = styled.div`
  padding: 20px 10px;
  width: 90%;
  text-align: left;
`;

function Snippets({ textContent }) {
  return (
    <SnippetContainer>
      <SyntaxHighlighter language={"javascript"}>
        {textContent}
      </SyntaxHighlighter>
    </SnippetContainer>
  );
}

Snippets.proptypes = {
  textContent: PropTypes.string
};

export default Snippets;
