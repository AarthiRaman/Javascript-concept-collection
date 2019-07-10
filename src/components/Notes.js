import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NotesContent = styled.p`
  margin: 15px 0 15px;
  text-align: left;
`;

const NotesList = styled.p`
  text-align: left;
`;

function Notes({ textContent, notes }) {
  return (
    <div>
      {typeof textContent === "string" && (
        <NotesContent>{textContent}</NotesContent>
      )}
      {Array.isArray(textContent) && (
        <div>
          <NotesContent>{textContent[0]}</NotesContent>
          {textContent.length > 1 && (
            <NotesList>
              {textContent.map((note, index) => index > 0 && <li>{note}</li>)}
            </NotesList>
          )}
        </div>
      )}
    </div>
  );
}

Notes.proptypes = {
  textContent: PropTypes.string
};

export default Notes;
