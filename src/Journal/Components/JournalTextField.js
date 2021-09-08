import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  input {
    border: 1px solid black;
    font-size: 12px;
    padding: 0 10px;
  }
`;

const JournalTextField = ({ autoFocus }) => {
  return (
    <TextBox>
      <input autoFocus type="text" />
    </TextBox>
  );
};

export default JournalTextField;
